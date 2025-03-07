---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "{{ cookiecutter.project_name }}"
  text: "{{ cookiecutter.project_description }}"
  tagline: A modern Python package template with best practices, comprehensive tooling, and seamless development workflow
  image:
    src: /logo.png
    alt: {{ cookiecutter.project_name }}
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: View on GitHub
      link: https://github.com/{{ cookiecutter.github_name }}/{{ cookiecutter.project_name }}

features:
  - title: 🎯 Modern Python Development
    details: Built with Python {{ cookiecutter.minimal_python_version }}+ and Poetry for robust dependency management and seamless package publishing.
  - title: 🔧 Comprehensive Tooling
    details: Integrated with ruff, pre-commit, pytest, and other essential tools for quality code and efficient development.
  - title: 🚀 CI/CD Ready
    details: Pre-configured GitHub Actions workflows for automated testing, linting, and deployment processes.
  - title: 📦 Zero Configuration
    details: Get started immediately with sensible defaults and automated project setup - no complex configuration needed.
  - title: 🛡️ Best Practices Built-in
    details: Follows Python packaging standards, security best practices, and modern development workflows out of the box.
  - title: 🤝 Community-Friendly
    details: Includes templates for issues, pull requests, and comprehensive documentation to encourage collaboration.
---

# Welcome to {{ cookiecutter.project_name }}

{{ cookiecutter.project_description }}

## Quick Installation

```bash
pip install {{ cookiecutter.project_name.lower().replace(' ', '-') }}
```

## Basic Usage

```python
from {{ cookiecutter.project_name.lower().replace(' ', '_').replace('-', '_') }} import example

# Simple example
result = example.hello("World")
print(result)  # Output: Hello World!
```

## Why Choose {{ cookiecutter.project_name }}?

- **Modern Codebase**: Built with the latest Python features and best practices
- **Comprehensive Documentation**: Detailed guides and API references
- **Active Development**: Regular updates and improvements
- **Community Support**: Growing community of users and contributors

Check out the [Getting Started](/guide/) guide to learn more about {{ cookiecutter.project_name }} and how to use it in your projects.
