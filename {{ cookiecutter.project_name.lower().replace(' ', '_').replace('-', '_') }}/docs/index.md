---

# <https://vitepress.dev/reference/default-theme-home-page>

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
      link: /guide/introduction
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
