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

Add the JitPack repository to your `pom.xml` build file: 

```xml
	<repositories>
		<repository>
		    <id>jitpack.io</id>
		    <url>https://jitpack.io</url>
		</repository>
	</repositories>
```

Add the dependency:

```xml
	<dependency>
	    <groupId>pl.itrack</groupId>
	    <artifactId>gwt-leaflet-d3</artifactId>
	    <version>0.3.0</version>
	</dependency>
```

Inherit `gwt-leaflet-d3` in your `.gwt.xml` module definition file:

```xml
<inherits name='pl.itrack.leafletd3.GwtLeafletD3' />
```

### Initialize

In order to use the `gwt-leaflet-d3`, a Leaflet map needs to be loaded first.
Assume your project already includes `leaflet.js` and `leaflet.css`.

Then to use `gwt-leaflet-d3` plugin it's enough to initialize it as below.

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

**Alternatively** you can also include it directly in HTML file like this: 

```html
<script src="https://d3js.org/d3.v5.min.js" charset="utf-8"></script>
<script src="https://d3js.org/d3-hexbin.v0.2.min.js" charset="utf-8"></script>
<script src="https://rawgit.com/Asymmetrik/leaflet-d3/master/dist/leaflet-d3.js" charset="utf-8">
```

### That's it! Using with Leaflet. A basic example

Assume you have your Leaflet map already defined with `gwty-leaflet`, e.g.:
```java
final Map map = L.map("map", mapOptions);
```
Then it's time to use the `gwt-leaflet-d3`. To add a Hexbin layer, it can be defined this way:

```java
HexbinLayer<Coordinate> hexbinLayer = new HexbinLayer<>(
        HexbinLayer.Config.create().withDuration(500d).withOpacity(0.5).withRadius(12d).build());
        
hexbinLayer.withData(getCoordinates());

hexbinLayer.addTo(map);
                
```

Please see a complete code with an additional features and options [here](https://github.com/baldram/gwt-leaflet-d3/blob/master/examples/simple-hexbinlayer-demo/src/main/java/pl/itrack/leafletd3demo/client/DemoApp.java).

## Example output

Please see a live demo here: https://bit.ly/2woO7Ki.

![selection_055](https://user-images.githubusercontent.com/16861531/44160203-ff743580-a0b9-11e8-862c-c02d5c67c4f2.png)

...and after zoom in...

![selection_056](https://user-images.githubusercontent.com/16861531/44160202-fdaa7200-a0b9-11e8-8cb7-c22cedef3342.png)
