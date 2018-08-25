package pl.itrack.leafletd3demo.client;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

import java.util.stream.IntStream;

/**
 * A simple data generator using D3 JavaScript library.
 * The JsInterop was used to map required suff to be accessible from Java.
 * (JsInterop technique description:
 * http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html
 * https://docs.google.com/document/d/10fmlEYIHcyead_4R1S5wKGs1t2I7Fnp_PaNaa7XTEk0/edit#)
 * <p>
 * The mapping implementation way inspired from:
 * https://github.com/gwtd3/gwt-d3/blob/master/gwt-d3-api/src/main/java/com/github/gwtd3/api/core/Random.java
 * and https://npm.runkit.com/d3-random
 * <p>
 * Alternatively I could simply use the `gwt-d3` library, but just a very small piece was needed.
 */
@JsType
class DataGenerator {

    private static final int NUMBER_OF_ITEMS = 1000;
    private static final int DEFAULT_DEVIATION = 1;

    static double[][] generateCoordinates(double centerLatitude, double centerLongitude) {
        return IntStream.range(0, NUMBER_OF_ITEMS)
                .mapToObj(i -> new double[]{
                        D3.randomNormal(centerLongitude, DEFAULT_DEVIATION).generate(),
                        D3.randomNormal(centerLatitude, DEFAULT_DEVIATION).generate()})
                .toArray(double[][]::new);
    }

    /*
      Below is the mapping to enable possibility of calling the native JavaScript stuff like below:

           var d3 = require("d3-random");
           var latFn = d3.randomNormal(52.233333, 1);
           latFn();

      PS: It's kind of a stub for D3 wrapper library, but the one already exists: https://github.com/gwtd3/gwt-d3.
      The `gwt-d3` is a bit old-fashioned and doesn't use JsInterop. It is at least GWT 2.8 compatible,
      what is good and beneficial, so still an option to be considered.
     */

    /**
     * The mapping to access d3.randomNormal() JavaScript function
     */
    @JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "d3")
    public static class D3 {

        @JsFunction
        @FunctionalInterface
        public interface Random {
            double generate();
        }

        /**
         * Returns a function for generating random number with a
         * <a href="http://en.wikipedia.org/wiki/Normal_distribution">normal (Gaussian) distribution</a>,
         * with the given mean, and the given deviation.
         *
         * @param expectation the mean of the distribution
         * @param deviation   the standard deviation
         * @return the generator
         */
        public static native Random randomNormal(double expectation, double deviation);
    }
}
