# gwt-leaflet-d3
A GWT JsInterop wrapper for collection of plugins for using [d3.js](http://d3js.org/) with [Leaflet](http://leafletjs.com/) (at the moment HexbinLayer functionality only).
<br />Leaflet D3 Provides a collection of D3.js based visualization plugins for Leaflet (supports D3 v5).

The wrapper is for GWT the same what typings are for TypeScript - like the one provided [here](https://github.com/Asymmetrik/leaflet-d3).  

It is desined to work with [gwty-leaflet](https://github.com/gwidgets/gwty-leaflet) a GWT wrapper for the [Leaflet](http://leafletjs.com/).

The plugin requires modern GWT >= 2.8 (aka Nextgen GWT) which supports [JsInterop](http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html).
<br />No GWT User dependency is needed to make the plugin compatible with the upcoming GWT3.

## Usage

A basic example:

```java

// use gwty-leaflet to define your map
// ...
final Map map = L.map("map", mapOptions);
// ...

// now add Hexbin layer
// the gwt-leaflet-d3 related part starts here...
HexbinLayer<Coordinate> hexbinLayer = new HexbinLayer<>(
        HexbinLayer.Config.create().withDuration(500d).withOpacity(0.5).withRadius(12d).build());
        
hexbinLayer.withData(getCoordinates());

hexbinLayer.addTo(map);
                
```

## Example output

