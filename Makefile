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

.PHONY: lock install pre-commit-install pre-commit-uninstall polish-codestyle formatting format test check-codestyle check-safety lint help

install:
	poetry lock -n && poetry export --without-hashes > requirements.txt
	poetry install -n

pre-commit-install:
	poetry run pre-commit install

pre-commit-uninstall:
	poetry run pre-commit uninstall

polish-codestyle:
	poetry run ruff format --config pyproject.toml hooks tests
	poetry run ruff check --fix --config pyproject.toml hooks tests

formatting: polish-codestyle
format: polish-codestyle

test:
	$(TEST_COMMAND)
	poetry run coverage-badge -o assets/images/coverage.svg -f

check-codestyle:
	poetry run ruff format --check --config pyproject.toml hooks tests
	poetry run ruff check --config pyproject.toml hooks tests
	poetry run darglint --verbosity 2 hooks tests

check-safety:
	poetry check
	poetry run safety check --full-report
	poetry run bandit -ll --recursive hooks

lint: test check-codestyle check-safety

help:
	@echo "install: Install the project dependencies."
	@echo "pre-commit-install: Install the pre-commit hooks."
	@echo "pre-commit-uninstall: Uninstall the pre-commit hooks."
	@echo "polish-codestyle: Format the codebase using ruff."
	@echo "formatting: Format the codebase using ruff."
	@echo "format: Format the codebase using ruff."
	@echo "test: Run the test suite."
	@echo "check-codestyle: Check the codebase using ruff."
	@echo "check-safety: Check the codebase using safety and bandit."
	@echo "lint: Run the test suite, check the codebase using ruff, safety, and bandit."
	@echo "help: Show this help message."
