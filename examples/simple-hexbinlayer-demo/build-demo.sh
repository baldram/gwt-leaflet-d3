#!/bin/bash

echo "-> Build demo"
mvn clean package

echo "-> Copy built demo"
rm -rf dist/*
cp -r target/gwt-leaflet-d3-*/DemoApp dist/
git add dist

echo "Success!"
