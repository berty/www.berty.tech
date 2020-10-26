#!/bin/bash

git diff --quiet HEAD^ HEAD -- . && \
git diff --quiet HEAD^ HEAD -- ../crowdin.yml