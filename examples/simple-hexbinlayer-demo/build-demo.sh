#!/bin/bash

echo "-> Build demo"
mvn clean package

echo "-> Copy built demo"
rm -rf ../../docs/demos/*
cp -r target/gwt-leaflet-d3-*/DemoApp ../../docs/demos/simple-hexbinlayer-demo
git add ../../docs/demos/

echo "Success!"
