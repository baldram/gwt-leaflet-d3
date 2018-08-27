package pl.itrack.leafletd3.client;

import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * The library initialization.
 * Call for required JS dependencies.
 *
 * The gwt-leaflet-d3 is a plugin for Leaflet.
 * It requires also https://github.com/gwidgets/gwty-leaflet as a main Leaflet map base.
 *
 * <p>
 * MIT License
 * <p>
 * Copyright (c) 2018 <a href="https://github.com/baldram">Marcin Szalomski</a>
 * <p>
 */
public class LeafletD3 {

    public static void init(LeafletD3LibInjector.CallbackFn callbackFn) {
        // TODO: provide the resources bundled together with the gwt-leaflet-d3 lib
        LeafletD3LibInjector.injectScripts(
                Stream.of(
                        "https://d3js.org/d3.v4.min.js",
                        "https://d3js.org/d3-hexbin.v0.2.min.js",
                        "https://rawgit.com/Asymmetrik/leaflet-d3/master/dist/leaflet-d3.js")
                        .collect(Collectors.toList()),
                callbackFn);
    }
}
