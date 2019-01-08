#!/bin/bash

echo "-> Build dependencies"
npm install

echo "-> Copy built dependencies"
rm -rf ./dist
mkdir ./dist
cp ./node_modules/@asymmetrik/leaflet-d3/dist/*.js ./dist
rm -rf ./node_modules
rm package-lock.json 
#git add ./dist

echo "Success!"
