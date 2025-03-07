# Getting Started

Welcome to the {{ cookiecutter.project_name }} documentation! This guide will help you get started with {{ cookiecutter.project_name }} and show you how to use its features effectively.

## Overview

{{ cookiecutter.project_description }}

This package provides a set of tools to help you build robust Python applications with ease. Whether you're building a CLI tool, a web service, or a data processing pipeline, {{ cookiecutter.project_name }} has you covered.

## Prerequisites

Before you begin, make sure you have:

- Python {{ cookiecutter.minimal_python_version }} or higher installed
- pip or Poetry for package management
- Basic knowledge of Python programming

## Installation

You can install {{ cookiecutter.project_name }} using pip:

```bash
pip install {{ cookiecutter.project_name.lower().replace(' ', '-') }}
```

Or if you prefer using Poetry:

```bash
poetry add {{ cookiecutter.project_name.lower().replace(' ', '-') }}
```

## Basic Usage

Here's a simple example to get you started:

```python
from {{ cookiecutter.project_name.lower().replace(' ', '_').replace('-', '_') }} import example

# Simple greeting
result = example.hello("World")
print(result)  # Output: Hello World!
```

{% if cookiecutter.create_example_template == 'cli' %}

## CLI Usage

{{ cookiecutter.project_name }} also provides a command-line interface:

```bash
{{ cookiecutter.project_name.lower().replace(' ', '-') }} --help
```

This will display all available commands and options.

Example usage:

```bash
{{ cookiecutter.project_name.lower().replace(' ', '-') }} --name "Your Name"
```

{% endif %}

## Next Steps

Now that you have {{ cookiecutter.project_name }} installed, you can:

1. Check out the [Installation](./installation.md) guide for more detailed setup instructions
2. Explore the [API Reference](/api/) for detailed information about all available functions and classes
3. Look at the [Examples](/api/examples) to see {{ cookiecutter.project_name }} in action

If you encounter any issues or have questions, please [open an issue](https://github.com/{{ cookiecutter.github_name }}/{{ cookiecutter.project_name }}/issues) on our GitHub repository.
