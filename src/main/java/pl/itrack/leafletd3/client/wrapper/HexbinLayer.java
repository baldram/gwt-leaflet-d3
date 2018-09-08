package pl.itrack.leafletd3.client.wrapper;

import com.gwidgets.api.leaflet.*;
import jsinterop.annotations.*;

import static jsinterop.annotations.JsPackage.GLOBAL;

// TODO: to wrap events handling and Pings layer

/**
 * The GWT JsInterop wrapper for @Asymmetrik/leaflet-d3 JavaScript library.
 * Provides Hexbin functionality as the one here:
 * https://github.com/Asymmetrik/leaflet-d3/blob/master/src/js/hexbin/HexbinLayer.js
 *
 * <p>
 * Note: The "L" is defined by the Leaflet library (see git://github.com/Leaflet/Leaflet.git for documentation).
 * and wrapped by https://github.com/gwidgets/gwty-leaflet .
 * The L is being extended to add d3-hexbin related functions.
 *
 * <p>
 * MIT License
 * <p>
 * Copyright (c) 2018 <a href="https://github.com/baldram">Marcin Szalomski</a>
 * <p>
 *
 * @param <T> a data item type (eg. simply <double[] for Latitude and Longitude pair)
 */
@JsType(isNative = true, namespace = "L", name = "hexbinLayer")
public class HexbinLayer<T> {

    @JsConstructor
    public HexbinLayer() {
    }

    @JsConstructor
    public HexbinLayer(Config config) {
    }

    @JsMethod
    public native void initialize(Config config);

    @JsMethod(name = "radiusRange")
    public native HexbinLayer<T> withRadiusRange(double[] radiusRange);

    @JsMethod(name = "colorRange")
    public native HexbinLayer<T> withColorRange(String[] colorRange);

    @JsMethod(name = "radiusValue")
    public native HexbinLayer<T> withRadiusValue(CallbackFn<CallbackContainer<T>[]> function);

    @JsMethod(name = "colorValue")
    public native HexbinLayer<T> withColorValue(CallbackFn<CallbackContainer<T>[]> function);

    @JsMethod(name = "lng")
    public native HexbinLayer<T> withLng(CallbackFn<T> function);

    @JsMethod(name = "lat")
    public native HexbinLayer<T> withLat(CallbackFn<T> function);

    @JsMethod(name = "data")
    public native HexbinLayer<T> withData(T[] data);

    @JsOverlay
    public final void setData(T[] data) {
        withData(data);
    }

    @JsMethod
    public native HexbinLayer<T> addTo(Map map);

    @JsFunction
    public interface CallbackFn<T> {
        double calculate(T value);
    }

    /**
     * For some leaflet-d3 methods the expected data is nested in function callback object.
     * It is wrapped for easier access.
     * To get interesting data it can be accessed in most cases like this:
     * callback.getData().getMyAttribute();
     *
     * @param <T> a data item type
     */
    @JsType(isNative = true, namespace = GLOBAL, name = "Object")
    public static class CallbackContainer<T> {

        @JsProperty(name = "o")
        private T data;

        @JsProperty
        private int[] point;

        @JsOverlay
        public final int[] getPoint() {
            return point;
        }

        @JsOverlay
        public final T getData() {
            return data;
        }
    }

    @JsType(isNative = true, namespace = GLOBAL, name = "Object")
    public static class Config {

        @JsProperty
        double opacity;

        @JsProperty
        double radius;

        @JsProperty
        double duration;

        @JsProperty
        double[] colorDomain;

        @JsProperty
        double[] radiusDomain;

        Config() {
        }

        @JsOverlay
        public static Builder create() {
            return new Builder();
        }

        public static class Builder extends Config {

            private Builder() {
            }

            /**
             * @param radius default 12
             * @return the builder
             */
            public Config.Builder withRadius(double radius) {
                this.radius = radius;
                return this;
            }

            /**
             * @param opacity a stroke opacity; default 0.6
             * @return the builder
             */
            public Config.Builder withOpacity(double opacity) {
                this.opacity = opacity;
                return this;
            }

            /**
             * @param duration default 200
             * @return the builder
             */
            public Config.Builder withDuration(double duration) {
                this.duration = duration;
                return this;
            }

            /**
             * @param colorDomain default null
             * @return the builder
             */
            public Config.Builder withColorDomain(double[] colorDomain) {
                this.colorDomain = colorDomain;
                return this;
            }

            /**
             * @param radiusDomain default null
             * @return the builder
             */
            public Config.Builder withRadiusDomain(double[] radiusDomain) {
                this.radiusDomain = radiusDomain;
                return this;
            }


            public Config build() {
                return this;
            }
        }
    }
}
