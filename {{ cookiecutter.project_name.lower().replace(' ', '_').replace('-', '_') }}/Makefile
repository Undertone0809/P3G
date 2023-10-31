#* Variables
SHELL := /usr/bin/env bash
PYTHON := python
PYTHONPATH := `pwd`

#* Docker variables
IMAGE := {{ cookiecutter.project_name.lower().replace(' ', '_').replace('-', '_') }}
VERSION := latest

#* Installation
.PHONY: install
install:
	poetry lock -n && poetry export --without-hashes > requirements.txt
	poetry install -n
{%- if cookiecutter.install_pre_commit %}
	poetry run pre-commit install
{%- endif %}

#* Formatters
.PHONY: polish-codestyle
polish-codestyle:
	poetry run isort --settings-path pyproject.toml --skip .venv ./
	poetry run black --config pyproject.toml --exclude .venv ./

.PHONY: formatting
formatting: polish-codestyle

#* Linting
.PHONY: test
test:
	PYTHONPATH=$(PYTHONPATH) poetry run pytest -c pyproject.toml --cov-report=html --cov={{ cookiecutter.project_name.lower().replace(' ', '_').replace('-', '_') }} tests/
	poetry run coverage-badge -o assets/images/coverage.svg -f

.PHONY: check-codestyle
check-codestyle:
{%- if cookiecutter.install_isort %}
	poetry run isort --diff --check-only --settings-path pyproject.toml --skip venv ./
{%- endif %}
{%- if cookiecutter.install_black %}
	poetry run black --diff --check --config pyproject.toml --skip venv ./
{%- endif %}
{%- if cookiecutter.install_darglint %}
	poetry run darglint --verbosity 2 {{ cookiecutter.project_name.lower().replace(' ', '_').replace('-', '_') }} tests
{%- endif %}

{% if cookiecutter.install_mypy -%}
.PHONY: mypy
mypy:
	poetry run mypy --config-file pyproject.toml ./
{%- endif %}

{%- if cookiecutter.install_safety -%}
.PHONY: check-safety
check-safety:
	poetry check
	poetry run safety check --full-report
	poetry run bandit -ll --recursive {{ cookiecutter.project_name.lower().replace(' ', '_').replace('-', '_') }} tests
{%- endif -%}

.PHONY: lint
lint: test check-codestyle {% if cookiecutter.install_mypy %}mypy{% endif %} {% if cookiecutter.install_safety %}check-safety{% endif %}


#* Docker
# Example: make docker-build VERSION=latest
# Example: make docker-build IMAGE=some_name VERSION={{ cookiecutter.version }}
.PHONY: docker-build
docker-build:
	@echo Building docker $(IMAGE):$(VERSION) ...
	docker build \
		-t $(IMAGE):$(VERSION) . \
		-f ./docker/Dockerfile --no-cache

# Example: make docker-remove VERSION=latest
# Example: make docker-remove IMAGE=some_name VERSION={{ cookiecutter.version }}
.PHONY: docker-remove
docker-remove:
	@echo Removing docker $(IMAGE):$(VERSION) ...
	docker rmi -f $(IMAGE):$(VERSION)

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
