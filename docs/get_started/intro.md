---
title: Introduction
description: Introduction to P3G(Python Packages Project Generator)
head:
  - - meta
    - property: og:title
      content: Introduction to P3G(Python Packages Project Generator)
    - property: og:description
      content: Introduction to P3G(Python Packages Project Generator)
---

<p align="center">
   <img src="/banner.png" alt="P3G Banner" style="border-radius: 15px;">
</p>

## Overview

**P3G** is a tool designed to generate modern Python package project structures, leveraging Poetry for dependency management and integrating various development tools and best practices to help developers quickly create up-to-date Python projects with support for Python 3.7 and higher, automatic code formatting, type checking, security checks, pre-configured GitHub Actions, Docker support, and automated documentation generation.🚀

## 🤔 Why You Need P3G

Setting up a new Python project with best practices can be time-consuming and complex. P3G solves this problem by:

- **Saving Time**: Eliminate hours spent configuring development environments and tooling.
- **Ensuring Consistency**: Maintain the same high-quality structure across all your Python projects.
- **Following Best Practices**: Automatically implement industry-standard practices for code quality, testing, and deployment.
- **Reducing Technical Debt**: Start with a clean, well-structured project that's easier to maintain long-term.
- **Simplifying Collaboration**: Pre-configured GitHub templates and workflows make team collaboration seamless.
- **Accelerating Development**: Focus on writing your actual code instead of project setup and infrastructure.
- **Staying Current**: Benefit from modern tools like Poetry, Ruff, and automated dependency updates without the learning curve.

Whether you're a seasoned Python developer or just starting out, P3G helps you build professional-grade Python packages without the setup headaches.

## 💡 Features

### Development features

- 🐍 Supports `Python 3.7` and higher.
- 📦 [`Poetry`](https://python-poetry.org/) as a dependencies manager.
- ⏱️ Faster formatter tool, automatic codestyle with [`ruff`](https://github.com/astral-sh/ruff) to replace [`black`](https://github.com/psf/black), [`isort`](https://github.com/timothycrosley/isort) and [`pyupgrade`](https://github.com/asottile/pyupgrade).
- 🔄 Ready-to-use [`pre-commit`](https://pre-commit.com/) hooks with code-formatting.
- 🔍 Type checks with [`ruff`](https://github.com/astral-sh/ruff); docstring checks with [`darglint`](https://github.com/terrencepreilly/darglint); security checks with [`safety`](https://github.com/pyupio/safety) and [`bandit`](https://github.com/PyCQA/bandit)
- 🧪 Testing with [`pytest`](https://docs.pytest.org/en/latest/).
- 📝 Ready-to-use `.editorconfig`, `.dockerignore`, and `.gitignore`. You don't have to worry about those things.
- 🐳 The ability of building docker.
- 📚 Comprehensive documentation support with [`VitePress`](https://vitepress.dev/), a modern static site generator powered by Vue, providing a beautiful and responsive documentation site for your project.
  
### Deployment features

- 🔗 `GitHub` integration: issue and PR templates.
- 🔄 `Github Actions` with predefined build workflow as the default CI/CD.
- 🧰 Everything is already set up for security checks, codestyle checks, code formatting, testing, linting, docker builds, etc with `Makefile`.
- 🐳 Dockerfile for your package.
- 🔄 Always up-to-date dependencies with [`@dependabot`](https://dependabot.com/).
- 📝 Automatic release notes with [`Release Drafter`](https://github.com/marketplace/actions/release-drafter).

### Open source community features

- 📋 Ready-to-use Pull Requests templates and several Issue templates.
- 🤖 Files such as: `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, and `SECURITY.md` are generated automatically.
- 🔄 [`Stale bot`](https://github.com/apps/stale) that closes abandoned issues after a period of inactivity.
- 🏷️ [Semantic Versions](https://semver.org/) specification with [`Release Drafter`](https://github.com/marketplace/actions/release-drafter).

## 📗 Related Documentation

- [Getting Started/Official Documentation](./quick_start)
- [Contributing/Developer's Manual](../other/contribution)

## 💌 Contact

For more information, please contact: [zeeland4work@gmail.com](mailto:zeeland4work@gmail.com)

## ⭐ Contribution

We appreciate your interest in contributing to our open-source initiative. We have provided a [Developer's Guide](../other/contribution) outlining the steps to contribute to P3G. Please refer to this guide to ensure smooth collaboration and successful contributions.🤝🚀
