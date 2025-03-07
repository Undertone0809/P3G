# Installation Guide

This guide provides detailed instructions for installing {{ cookiecutter.project_name }} in different environments.

## System Requirements

- Python {{ cookiecutter.minimal_python_version }} or higher
- pip or Poetry package manager

## Standard Installation

The simplest way to install {{ cookiecutter.project_name }} is using pip:

```bash
pip install {{ cookiecutter.project_name.lower().replace(' ', '-') }}
```

This will install the latest stable version from PyPI.

## Installation with Poetry

If you're using Poetry for dependency management (recommended), you can add {{ cookiecutter.project_name }} to your project:

```bash
poetry add {{ cookiecutter.project_name.lower().replace(' ', '-') }}
```

## Development Installation

If you want to contribute to {{ cookiecutter.project_name }} or install the latest development version, you can install directly from GitHub:

```bash
pip install git+https://github.com/{{ cookiecutter.github_name }}/{{ cookiecutter.project_name }}.git
```

Or with Poetry:

```bash
poetry add git+https://github.com/{{ cookiecutter.github_name }}/{{ cookiecutter.project_name }}.git
```

## Installing from Source

You can also install {{ cookiecutter.project_name }} from source:

```bash
git clone https://github.com/{{ cookiecutter.github_name }}/{{ cookiecutter.project_name }}.git
cd {{ cookiecutter.project_name }}
pip install .
```

Or with Poetry:

```bash
git clone https://github.com/{{ cookiecutter.github_name }}/{{ cookiecutter.project_name }}.git
cd {{ cookiecutter.project_name }}
poetry install
```

## Verifying Installation

To verify that {{ cookiecutter.project_name }} is installed correctly, you can run:

```python
import {{ cookiecutter.project_name.lower().replace(' ', '_').replace('-', '_') }}
print({{ cookiecutter.project_name.lower().replace(' ', '_').replace('-', '_') }}.version)
```

{% if cookiecutter.create_example_template == 'cli' %}
Or check the CLI version:

```bash
{{ cookiecutter.project_name.lower().replace(' ', '-') }} --version
```

{% endif %}

## Troubleshooting

If you encounter any issues during installation, try the following:

1. Make sure you have the latest version of pip:

   ```bash
   pip install --upgrade pip
   ```

2. If you're behind a proxy, configure pip to use it:

   ```bash
   pip install --proxy http://user:password@proxyserver:port {{ cookiecutter.project_name.lower().replace(' ', '-') }}
   ```

3. If you're having dependency conflicts, consider using a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install {{ cookiecutter.project_name.lower().replace(' ', '-') }}
   ```

If you still have issues, please [open an issue](<https://github.com/{{> cookiecutter.github_name }}/{{ cookiecutter.project_name }}/issues) on our GitHub repository.
