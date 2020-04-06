.DEFAULT_GOAL := dev
SERVER_OPTS ?= --baseURL=/ --appendPort=false
DEPS := node_modules
HUGO_OPTS ?=

.PHONY: dev
dev: $(DEPS)
	hugo server -D -F --disableFastRender --bind=0.0.0.0 $(SERVER_OPTS)

deps:
	brew reinstall node
	brew install hugo

node_modules:
	npm install

.PHONY: clean
clean:
	rm -rf node_modules

.PHONY: build
build: $(DEPS)
	hugo --gc --minify

.PHONY: prod-build
prod-build:
	hugo --gc $(HUGO_OPTS)
	./post-build.sh

.PHONY: publish
publish:
	@echo "done by netlify"

.PHONY: image-optim
image-optim:
	set -e; for source in `find . -iname "*.jpg" -or -iname "*.jpeg" | grep -v min.`; do \
	  echo $$source; \
	  convert -resize '2000x2000>' -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace RGB $$source `dirname $$source`/min.`basename $$source`; \
	done
	@# FIXME: do it for png too

.PHONY: netlify-dev
netlify-dev:
	netlify dev -c 'make dev'
