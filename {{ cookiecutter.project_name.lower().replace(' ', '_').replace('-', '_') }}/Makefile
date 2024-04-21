#* Variables
SHELL := /usr/bin/env bash
PYTHON := python
OS := $(shell python -c "import sys; print(sys.platform)")

ifeq ($(OS),win32)
	PYTHONPATH := $(shell python -c "import os; print(os.getcwd())")
    TEST_COMMAND := set PYTHONPATH=$(PYTHONPATH) && poetry run pytest -c pyproject.toml --cov-report=html --cov={{ cookiecutter.project_name.lower().replace(' ', '_').replace('-', '_') }} tests/
else
	PYTHONPATH := `pwd`
    TEST_COMMAND := PYTHONPATH=$(PYTHONPATH) poetry run pytest -c pyproject.toml --cov-report=html --cov={{ cookiecutter.project_name.lower().replace(' ', '_').replace('-', '_') }} tests/
endif

#* Docker variables
IMAGE := {{ cookiecutter.project_name.lower().replace(' ', '_').replace('-', '_') }}
VERSION := latest

.PHONY: lock install {% if cookiecutter.install_pre_commit %}pre-commit-install{% endif %} polish-codestyle formatting test check-codestyle lint docker-build docker-remove cleanup help

lock:
	poetry lock -n && poetry export --without-hashes > requirements.txt

install:
	poetry lock -n && poetry export --without-hashes > requirements.txt
	poetry install -n

{%- if cookiecutter.install_pre_commit %}
pre-commit-install:
	poetry run pre-commit install
{%- endif %}

polish-codestyle:
	poetry run ruff format --config pyproject.toml .
	poetry run ruff check --fix --config pyproject.toml .

formatting: polish-codestyle
format: polish-codestyle

test:
	$(TEST_COMMAND)
	poetry run coverage-badge -o assets/images/coverage.svg -f

check-codestyle:
	poetry run ruff format --check --config pyproject.toml .
	poetry run ruff check --config pyproject.toml .
{%- if cookiecutter.install_darglint %}
	poetry run darglint --verbosity 2 {{ cookiecutter.project_name.lower().replace(' ', '_').replace('-', '_') }} tests
{%- endif %}
{%- if cookiecutter.install_safety -%}
check-safety:
	poetry check
	poetry run safety check --full-report
	poetry run bandit -ll --recursive {{ cookiecutter.project_name.lower().replace(' ', '_').replace('-', '_') }} tests
{%- endif -%}

lint: test check-codestyle {% if cookiecutter.install_safety %}check-safety{% endif %}

# Example: make docker-build VERSION=latest
# Example: make docker-build IMAGE=some_name VERSION={{ cookiecutter.version }}
docker-build:
	@echo Building docker $(IMAGE):$(VERSION) ...
	docker build \
		-t $(IMAGE):$(VERSION) . \
		-f ./docker/Dockerfile --no-cache

# Example: make docker-remove VERSION=latest
# Example: make docker-remove IMAGE=some_name VERSION={{ cookiecutter.version }}
docker-remove:
	@echo Removing docker $(IMAGE):$(VERSION) ...
	docker rmi -f $(IMAGE):$(VERSION)

cleanup:
	find . | grep -E "(__pycache__|\.pyc|\.pyo$$)" | xargs rm -rf
	find . | grep -E ".DS_Store" | xargs rm -rf
	find . | grep -E ".mypy_cache" | xargs rm -rf
	find . | grep -E ".ipynb_checkpoints" | xargs rm -rf
	find . | grep -E ".pytest_cache" | xargs rm -rf
	rm -rf build/

help:
	@echo "lock                                      Lock the dependencies."
	@echo "install                                   Install the project dependencies."
{%- if cookiecutter.install_pre_commit %}
	@echo "pre-commit-install                        Install the pre-commit hooks."
{%- endif %}
	@echo "polish-codestyle                          Format the codebase."
	@echo "formatting                                Format the codebase."
	@echo "test                                      Run the tests."
	@echo "check-codestyle                           Check the codebase for style issues."
	@echo "lint                                      Run the tests and check the codebase for style issues."
	@echo "docker-build                              Build the docker image."
	@echo "docker-remove                             Remove the docker image."
	@echo "cleanup                                   Clean the project directory."
	@echo "help                                      Display this help message."
