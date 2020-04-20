#!/bin/bash
set -e

node ./optimize.js
node ./webp-converter.js
node ./validate-amp.js

if [ x${CONTEXT} == "xproduction" ]; then
    curl https://www.google.com/ping?sitemap=https://berty.tech/sitemap.xml
fi
