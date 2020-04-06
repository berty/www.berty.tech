#!/bin/bash
set -e

node ./optimize.js
node ./webp-converter.js

if [ $CONTEXT == "production" ]; then
    curl https://www.google.com/ping?sitemap=https://berty.tech/sitemap.xml
fi
