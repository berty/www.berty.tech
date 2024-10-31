.DEFAULT_GOAL := dev
SERVER_OPTS ?= --baseURL=/ --appendPort=false
DEPS := node_modules
HUGO_OPTS ?=

.PHONY: dev
dev: $(DEPS)
	hugo server -D -F --disableFastRender --bind=0.0.0.0 --renderToDisk $(SERVER_OPTS)

fastdev:
	HUGO_DISABLELANGUAGES="ar cn eo es fr hi id-id pl pt pt-br ru sl uk ka te" hugo server -D -F

deps:
	git lfs install
	git lfs pull
	asdf install

node_modules: package.json
	npm install

.PHONY: clean
clean:
	rm -rf node_modules

.PHONY: build
build: $(DEPS)
	hugo --gc --minify

.PHONY: prod-build
prod-build:
	./pre-build.sh
	hugo --gc $(HUGO_OPTS)
	./go-get.sh
	./post-build.sh

.PHONY: prod-build-ipfs
prod-build-ipfs:
	./pre-build.sh
	BERTY_IPFS=true hugo --gc $(HUGO_OPTS)
	./go-get.sh
	./post-build.sh

.PHONY: publish
publish:
	@echo "done by netlify"

.PHONY: publish.github
publish.github: build
	cd public && git init
	cd public && git checkout -b gh-pages
	cd public && git remote add origin git@github.com:berty/www.berty.tech
	cd public && git add .
	cd public && git commit -m "'make publish'"
	cd public && git push -f origin gh-pages

.PHONY: amp-validator
amp-validator: node_modules build
	./post-build.sh

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

.PHONY: sync-docs
sync-docs:
	@if [ ! -d $(GOPATH)/src/berty.tech ]; then echo "you need to clone github.com/berty/berty in GOPATH/src/berty.tech before running this command."; exit 1; fi
	@echo ""
	@echo "    Getting doc from GOPATH/src/berty.tech. don't remember to update your repo to the latest version."
	@echo ""
	cat \
	  content/docs/protocol/.index.md-prefix \
	  $(GOPATH)/src/berty.tech/docs/protocol/README.md \
	  content/docs/protocol/.index.md-middle \
	  $(GOPATH)/src/berty.tech/api/bertyprotocol.proto \
	  content/docs/protocol/.index.md-suffix \
	  > content/docs/protocol/index.md

.PHONY: install-hugo
install-hugo:
	go install -v --tags extended github.com/gohugoio/hugo
