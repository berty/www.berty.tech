#!/bin/bash
set -e

./minify.sh

if [ $CONTEXT == "production" ]; then
    curl https://www.google.com/ping?sitemap=https://berty.tech/art/sitemap.xml
fi
