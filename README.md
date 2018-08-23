# gwt-leaflet-d3
A GWT JsInterop wrapper for [Asymmetrik/leaflet-d3](https://github.com/Asymmetrik/leaflet-d3). 

It brings to GWT a collection of plugins for using [d3.js](http://d3js.org/) with [Leaflet](http://leafletjs.com/) (at the moment HexbinLayer functionality only).
<br />Leaflet D3 Provides a collection of D3.js based visualization plugins for Leaflet (supports D3 v5).

The wrapper is for GWT the same what typings are for TypeScript - like the one provided [here](https://github.com/Asymmetrik/leaflet-d3/blob/master/index.d.ts).  

It is desined to work with [gwty-leaflet](https://github.com/gwidgets/gwty-leaflet) a GWT wrapper for the [Leaflet](http://leafletjs.com/).

The plugin requires modern GWT >= 2.8 (aka Nextgen GWT) which supports [JsInterop](http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html).
<br />
The gwt-leaflet-d3 is ready to be used with the upcoming J2CL and GWT 3. It has no dependencies to `gwt-user`. 

## Usage

### Add dependency

Add the JitPack repository to your build file 

```xml
	<repositories>
		<repository>
		    <id>jitpack.io</id>
		    <url>https://jitpack.io</url>
		</repository>
	</repositories>
```

Add the dependency

```xml
	<dependency>
	    <groupId>com.github.baldram</groupId>
	    <artifactId>gwt-leaflet-d3</artifactId>
	    <version>0.2.0</version>
	</dependency>
```

Also, do not forget to include gwt-leaflet-d3 in your .gwt.xml module definition file:

```xml
<inherits name='pl.itrack.leafletd3.GwtLeafletD3' />
```

### Initialize

Assume your project already includes `leaflet.js` and `leaflet.css` or the base of Leaflet is already initialized with `LeafletResources.whenReady()` as described [here](https://github.com/gwidgets/gwty-leaflet#leaflet-javascript-files).
Then to use D3 plugin it's enough to initialize it as below.

```java
public class YourGWTApp implements EntryPoint {

    @Override
    public void onModuleLoad() {
        LeafletD3.init(() -> {
            // do your stuff
        });
    }
}
```
Alternatively it's also enough to include JavaScript files: `d3.v{version}.js`, `d3-hexbin.v{version}.js`, `leaflet-d3.js`.

### That's it! Finally use it. A basic example

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
![selection_055](https://user-images.githubusercontent.com/16861531/44160203-ff743580-a0b9-11e8-862c-c02d5c67c4f2.png)

...and after zoom in...

![selection_056](https://user-images.githubusercontent.com/16861531/44160202-fdaa7200-a0b9-11e8-8cb7-c22cedef3342.png)
