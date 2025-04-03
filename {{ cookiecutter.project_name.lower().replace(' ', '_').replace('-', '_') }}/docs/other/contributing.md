# Contributing to {{ cookiecutter.project_name }}

We welcome contributions to {{ cookiecutter.project_name }}! This document provides guidelines for contributing to the project.

## Getting Started

1. Click [here](https://github.com/{{ cookiecutter.github_name }}/{{ cookiecutter.project_name }}/fork) to fork the repository on GitHub.
2. Clone your fork locally:

   ```bash
   git clone https://github.com/{{ cookiecutter.github_name }}/{{ cookiecutter.project_name }}.git
   cd {{ cookiecutter.project_name }}
   ```

3. Create a virtual environment and install dependencies:

   ```bash
   conda create -n {{ cookiecutter.project_name }} python==3.10
   conda activate {{ cookiecutter.project_name }}

   pip install poetry
   poetry install
   ```

## Development Workflow

Here are the steps to contribute to the project and make a pull request on GitHub:

1. Create a new branch for your feature or bugfix:

   ```bash
   git checkout -b feature-or-fix-name
   ```

2. Make your changes and commit them after testing:

   ```bash
   make test
   git commit -m "Your detailed commit message"
   ```

3. Push your changes to your fork:

   ```bash
   git push origin feature-or-fix-name
   ```

4. Submit a pull request through the GitHub website.

## Coding Standards

- We use `ruff` for code formatting, run `make format` and `make lint before committing.
- Use pytest for testing, run `make test` before committing.
- Write clear, commented code.
- Include unit tests and related documentation for new features.

## Run Tests

Run the test suite using:

```bash
make test
```
{% if cookiecutter.create_docs == 'yes' %}

## Run Documentation

Run the documentation server locally, you can edit them in `./docs`

```bash
make install-docs
make start-docs
```
{% endif %}