#* Variables
SHELL := /usr/bin/env bash
PYTHON := python
OS := $(shell python -c "import sys; print(sys.platform)")

ifeq ($(OS),win32)
	PYTHONPATH := $(shell python -c "import os; print(os.getcwd())")
    TEST_COMMAND := set PYTHONPATH=$(PYTHONPATH) && poetry run pytest -c pyproject.toml --cov-report=html --cov=hooks tests/
else
	PYTHONPATH := `pwd`
    TEST_COMMAND := PYTHONPATH=$(PYTHONPATH) poetry run pytest -c pyproject.toml --cov-report=html --cov=hooks tests/
endif

#* Installation
.PHONY: install
install:
	poetry lock -n && poetry export --without-hashes > requirements.txt
	poetry install -n

#* Install pre-commit
.PHONY: pre-commit-install
pre-commit-install:
	poetry run pre-commit install

#* Uninstall pre-commit
.PHONY: pre-commit-uninstall
pre-commit-uninstall:
	poetry run pre-commit uninstall

#* Formatters
.PHONY: polish-codestyle
polish-codestyle:
	poetry run ruff format --config pyproject.toml hooks tests
	poetry run ruff check --fix --config pyproject.toml hooks tests

.PHONY: formatting
formatting: polish-codestyle

#* Linting
.PHONY: test
test:
	$(TEST_COMMAND)
	poetry run coverage-badge -o assets/images/coverage.svg -f

.PHONY: check-codestyle
check-codestyle:
	poetry run ruff format --check --config pyproject.toml hooks tests
	poetry run ruff check --config pyproject.toml hooks tests
	poetry run darglint --verbosity 2 hooks tests

.PHONY: check-safety
check-safety:
	poetry check
	poetry run safety check --full-report
	poetry run bandit -ll --recursive hooks

.PHONY: lint
lint: test check-codestyle check-safety

.PHONY: lint-fix
lint-fix: polish-codestyle

.PHONY: update-dev-deps
update-dev-deps:
	poetry add -D bandit@latest darglint@latest "isort[colors]@latest" pre-commit@latest pylint@latest pytest@latest safety@latest
	poetry add -D --allow-prereleases black@latest

#* Cleaning
.PHONY: pycache-remove
pycache-remove:
	find . | grep -E "(__pycache__|\.pyc|\.pyo$$)" | xargs rm -rf

.PHONY: dsstore-remove
dsstore-remove:
	find . | grep -E ".DS_Store" | xargs rm -rf

.PHONY: mypycache-remove
mypycache-remove:
	find . | grep -E ".mypy_cache" | xargs rm -rf

.PHONY: ipynbcheckpoints-remove
ipynbcheckpoints-remove:
	find . | grep -E ".ipynb_checkpoints" | xargs rm -rf

.PHONY: pytestcache-remove
pytestcache-remove:
	find . | grep -E ".pytest_cache" | xargs rm -rf

.PHONY: build-remove
build-remove:
	rm -rf build/

.PHONY: cleanup
cleanup: pycache-remove dsstore-remove mypycache-remove ipynbcheckpoints-remove pytestcache-remove
