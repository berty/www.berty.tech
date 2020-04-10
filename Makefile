all: help

help: generate.authors
	@echo "This repository contains websites in subfolder. You should use Makefiles from those folders."

.PHONY: generate.authors
generate.authors: AUTHORS
AUTHORS: .git/
	@echo "# This file lists all individuals having contributed content to the repository." > AUTHORS
	@echo "# For how it is generated, see 'https://github.com/moul/rules.mk'" >> AUTHORS
	@echo >> AUTHORS
	@git log --format='%aN <%aE>' | LC_ALL=C.UTF-8 sort -uf >> AUTHORS
