# P3G - Python Packages Project Generator

[English](README.md) [中文](README_zh.md)

<div align="center">

[![Build status](https://github.com/Undertone0809/python-package-template/workflows/build/badge.svg?branch=main&event=push)](https://github.com/Undertone0809/python-package-template/actions?query=workflow%3Abuild)
[![Dependencies Status](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)](https://github.com/Undertone0809/python-package-template/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Aapp%2Fdependabot)
[![🚀 Your next Python package needs a bleeding-edge project structure.](https://img.shields.io/badge/python--package--template-%F0%9F%9A%80-brightgreen)](https://github.com/Undertone0809/python-package-template)

[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![Pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/Undertone0809/python-package-template/blob/main/.pre-commit-config.yaml)
[![Semantic Versions](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--versions-e10079.svg)](https://github.com/Undertone0809/python-package-template/releases)
[![License](https://img.shields.io/github/license/Undertone0809/python-package-template)](https://github.com/Undertone0809/python-package-template/blob/main/LICENSE)
![Coverage Report](assets/images/coverage.svg)

Your next Python package needs a bleeding-edge project structure.
</div>

> This version is fork from [https://github.com/TezRomacH/python-package-template](https://github.com/TezRomacH/python-package-template). As a comparison, the current project provides better compatibility with Windows and faster lint construction. And a more lightweight way to create.

## TL;DR

If you don't want to read the whole README, just click the `Use this template` button and start coding your Python package right now! 🚀

```bash
pip install p3g -U
p3g generate
```

## 📚 Documentation

For complete documentation, visit: [https://p3g.zeeland.top](https://p3g.zeeland.top)

## 🚀 Features

In this [cookiecutter 🍪](https://github.com/cookiecutter/cookiecutter) template we combine state-of-the-art libraries and best development practices for Python.

### Development features

- Supports `Python 3.7` and higher.
- [`Poetry`](https://python-poetry.org/) as a dependencies manager. See configuration in [`pyproject.toml`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/pyproject.toml) and [`setup.cfg`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/setup.cfg).
- Faster formatter tool, automatic codestyle with [`ruff`](https://github.com/astral-sh/ruff) to replace [`black`](https://github.com/psf/black), [`isort`](https://github.com/timothycrosley/isort) and [`pyupgrade`](https://github.com/asottile/pyupgrade).
- Ready-to-use [`pre-commit`](https://pre-commit.com/) hooks with code-formatting.
- Type checks with  [`ruff`](https://github.com/astral-sh/ruff); docstring checks with [`darglint`](https://github.com/terrencepreilly/darglint); security checks with [`safety`](https://github.com/pyupio/safety) and [`bandit`](https://github.com/PyCQA/bandit)
- Testing with [`pytest`](https://docs.pytest.org/en/latest/).
- Ready-to-use [`.editorconfig`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.editorconfig), [`.dockerignore`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.dockerignore), and [`.gitignore`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.gitignore). You don't have to worry about those things.
- The ability of building docker.

### Deployment features

- `GitHub` integration: issue and pr templates.
- `Github Actions` with predefined [build workflow](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.github/workflows/build.yml) as the default CI/CD.
- Everything is already set up for security checks, codestyle checks, code formatting, testing, linting, docker builds, etc with [`Makefile`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/Makefile#L89). More details in [makefile-usage](#makefile-usage).
- [Dockerfile](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/docker/Dockerfile) for your package.
- Always up-to-date dependencies with [`@dependabot`](https://dependabot.com/). You only need to [enable it](https://docs.github.com/en/github/administering-a-repository/enabling-and-disabling-version-updates#enabling-github-dependabot-version-updates).
- Automatic release notes with [`Release Drafter`](https://github.com/marketplace/actions/release-drafter). You may see the list of labels in [`release-drafter.yml`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.github/release-drafter.yml). Works perfectly with [Semantic Versions](https://semver.org/) specification.

### Open source community features

- Ready-to-use [Pull Requests templates](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.github/PULL_REQUEST_TEMPLATE.md) and several [Issue templates](https://github.com/Undertone0809/python-package-template/tree/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.github/ISSUE_TEMPLATE).
- Files such as: `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, and `SECURITY.md` are generated automatically.
- [`Stale bot`](https://github.com/apps/stale) that closes abandoned issues after a period of inactivity. (You will only [need to setup free plan](https://github.com/marketplace/stale)). Configuration is [here](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.github/.stale.yml).
- [Semantic Versions](https://semver.org/) specification with [`Release Drafter`](https://github.com/marketplace/actions/release-drafter).

## 🤯 How to use it

### Installation

To begin using the template consider updating `p3g`

```bash
pip install -U p3g
```

then go to a directory where you want to create your project and run:

```bash
p3g generate
```

### Input variables

Template generator will ask you to fill some variables.

The input variables, with their default values:

|     **Parameter**     |      **Default value**      | **Description**                                                                                                                                                                                     |
|:---------------------:|:---------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `project_name`           |      `python-project`       | [Check the availability of possible name](http://ivantomic.com/projects/ospnc/) before creating the project.                                                                                        |
| `project_description`    | based on the `project_name` | Brief description of your project.                                                                                                                                                                  |
| `organization`           | based on the `project_name` | Name of the organization. We need to generate LICENCE and to specify ownership in `pyproject.toml`.                                                                                                 |
| `license`                |            `MIT`            | One of `MIT`, `BSD-3`, `GNU GPL v3.0` and `Apache Software License 2.0`.                                                                                                                            |
| `minimal_python_version` |            `3.7`            | Minimal Python version. One of `3.7`, `3.8` and `3.9`. It is used for builds, GitHub workflow and formatters (`black`, `isort` and `pyupgrade`).                                                    |
| `github_name`            | based on the `organization` | GitHub username for hosting. Also used to set up `README.md`, `pyproject.toml` and template files for GitHub.                                                                                       |
| `email`                  | based on the `organization` | Email for `CODE_OF_CONDUCT.md`, `SECURITY.md` files and to specify the ownership of the project in `pyproject.toml`.                                                                                |
| `version`                |           `0.1.0`           | Initial version of the package. Make sure it follows the [Semantic Versions](https://semver.org/) specification.                                                                                    |
| `line_length`            |             88              | The max length per line (used for codestyle with `black` and `isort`). NOTE: This value must be between 50 and 300.                                                                                 |
| `using_tsinghua_mirror_source`            |            false            | The tsinghua poetry mirror source                                                                                                                                                                    |
| `create_example_template` |            `cli`            | If `cli` is chosen generator will create simple CLI application with [`Typer`](https://github.com/tiangolo/typer) and [`Rich`](https://github.com/willmcgugan/rich) libraries. One of `cli`, `none` |

All input values will be saved in the `cookiecutter-config-file.yml` file so that you won't lose them. 😉

#### Demo

[![Create a cool Python project structure with p3g](https://zeeland-bucket.oss-cn-beijing.aliyuncs.com/images/20240519054442.png)](https://www.youtube.com/watch?v=dpKlGRgVp6g "Create a cool Python project structure with p3g")

### More details

Your project will contain `README.md` file with instructions for development, deployment, etc. You can read [the project README.md template](https://github.com/Undertone0809/python-package-template/tree/main/%7B%7B%20cookiecutter.project_name%20%7D%7D) before.

### Initial set up

#### Initialize `poetry`

By running `pip install poetry & make install`

After you create a project, it will appear in your directory, and will display [a message about how to initialize the project](https://github.com/Undertone0809/python-package-template/tree/main/%7B%7B%20cookiecutter.project_name%20%7D%7D#very-first-steps).

#### Initialize `pre-commit`

`pre-commit` is already installed if you initialize git repo before running `make install`. If it fails without initialization, run `make install` again to install pre-commit to `.git`.

### Package example

Want to know more about Poetry? Check [its documentation](https://python-poetry.org/docs/).

<details>
<summary>Details about Poetry</summary>
<p>

Poetry's [commands](https://python-poetry.org/docs/cli/#commands) are very intuitive and easy to learn, like:

- `poetry add numpy@latest`
- `poetry run pytest`
- `poetry publish --build`

etc
</p>
</details>

#### CLI example

If you set `create_example_template` to be `cli` the template comes with a cute little CLI application example. It utilises [`Typer`](https://github.com/tiangolo/typer) and [`Rich`](https://github.com/willmcgugan/rich) for CLI input validation and beautiful formatting in the terminal.

After installation via `make install` (preferred) or `poetry install` you can try to play with the example:

```bash
poetry run <project_name> --help
```

```bash
poetry run <project_name> --name Roman
```

### Building and releasing your package

Building a new version of the application contains steps:

- Bump the version of your package `poetry version <version>`. You can pass the new version explicitly, or a rule such as `major`, `minor`, or `patch`. For more details, refer to the [Semantic Versions](https://semver.org/) standard.
- Make a commit to `GitHub`.
- Create a `GitHub release`.
- And... publish 🙂 `poetry publish --build`

### Makefile usage

[`Makefile`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/Makefile) contains a lot of functions for faster development.

<details>
<summary>1. Install all dependencies and pre-commit hooks</summary>
<p>

Install requirements:

```bash
make install
```

Pre-commit hooks coulb be installed after `git init` via

```bash
make pre-commit-install
```

</p>
</details>

<details>
<summary>2. Codestyle and type checks</summary>
<p>

Automatic formatting uses `ruff`.

```bash
make format
```

Codestyle checks only, without rewriting files:

```bash
make check-codestyle
```

> Note: `check-codestyle` uses `ruff` and `darglint` library

</p>
</details>

<details>
<summary>3. Code security</summary>
<p>

```bash
make check-safety
```

This command launches `Poetry` integrity checks as well as identifies security issues with `Safety` and `Bandit`.

```bash
make check-safety
```

</p>
</details>

<details>
<summary>4. Tests with coverage badges</summary>
<p>

Run `pytest`

```bash
make test
```

</p>
</details>

<details>
<summary>5. All linters</summary>
<p>

Of course there is a command to run all linters in one:

```bash
make lint
```

the same as:

```bash
make check-codestyle && make test && make check-safety
```

</p>
</details>

<details>
<summary>6. Docker</summary>
<p>

```bash
make docker-build
```

which is equivalent to:

```bash
make docker-build VERSION=latest
```

Remove docker image with

```bash
make docker-remove
```

More information [about docker](https://github.com/Undertone0809/python-package-template/tree/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/docker).

</p>
</details>

<details>
<summary>7. Cleanup</summary>
<p>
Delete pycache files

```bash
make pycache-remove
```

Remove package build

```bash
make build-remove
```

Delete .DS_STORE files

```bash
make dsstore-remove
```

Remove .mypycache

```bash
make mypycache-remove
```

Or to remove all above run:

```bash
make cleanup
```

</p>
</details>

## 🎯 What's next

Well, that's up to you 💪🏻. I can only recommend the packages and articles that helped me.

- [`Typer`](https://github.com/tiangolo/typer) is great for creating CLI applications.
- [`Rich`](https://github.com/willmcgugan/rich) makes it easy to add beautiful formatting in the terminal.
- [`Pydantic`](https://github.com/samuelcolvin/pydantic/) – data validation and settings management using Python type hinting.
- [`Loguru`](https://github.com/Delgan/loguru) makes logging (stupidly) simple.
- [`tqdm`](https://github.com/tqdm/tqdm) – fast, extensible progress bar for Python and CLI.
- [`IceCream`](https://github.com/gruns/icecream) is a little library for sweet and creamy debugging.
- [`orjson`](https://github.com/ijl/orjson) – ultra fast JSON parsing library.
- [`Returns`](https://github.com/dry-python/returns) makes you function's output meaningful, typed, and safe!
- [`Hydra`](https://github.com/facebookresearch/hydra) is a framework for elegantly configuring complex applications.
- [`FastAPI`](https://github.com/tiangolo/fastapi) is a type-driven asynchronous web framework.

Articles:

- [Open Source Guides](https://opensource.guide/).
- [A handy guide to financial support for open source](https://github.com/nayafia/lemonade-stand)
- [GitHub Actions Documentation](https://help.github.com/en/actions).
- Maybe you would like to add [gitmoji](https://gitmoji.carloscuesta.me/) to commit names. This is really funny. 😄

## 📈 Releases

You can see the list of available releases on the [GitHub Releases](https://github.com/Undertone0809/python-package-template/releases) page.

We follow [Semantic Versions](https://semver.org/) specification.

We use [`Release Drafter`](https://github.com/marketplace/actions/release-drafter). As pull requests are merged, a draft release is kept up-to-date listing the changes, ready to publish when you're ready. With the categories option, you can categorize pull requests in release notes using labels.

### List of labels and corresponding titles

|               **Label**               |  **Title in Releases**  |
|:-------------------------------------:|:----------------------:|
| `enhancement`, `feature`              | 🚀 Features             |
| `bug`, `refactoring`, `bugfix`, `fix` | 🔧 Fixes & Refactoring  |
| `build`, `ci`, `testing`              | 📦 Build System & CI/CD |
| `breaking`                            | 💥 Breaking Changes     |
| `documentation`                       | 📝 Documentation        |
| `dependencies`                        | ⬆️ Dependencies updates |

## 🧪 TODOs

This template will continue to develop and follow the bleeding edge new tools and best practices to improve the Python development experience.

Here is a list of things that have yet to be implemented:

- Tests coverage reporting ([`Codecov`](https://github.com/marketplace/codecov) ?).
- Auto uploading your package to [`PyPI`](https://pypi.org/) when new GitHub release is created.
- Automatic creation and deployment of documentation to GitHub pages. I look at [`MkDocs`](https://www.mkdocs.org/) with [Material Design theme](https://github.com/squidfunk/mkdocs-material) and [`mkdocstrings`](https://github.com/pawamoy/mkdocstrings).
- Code metrics with [`Radon`](https://github.com/rubik/radon).
- Docstring coverage with [`interrogate`](https://github.com/econchick/interrogate)
- `Dockerfile` linting with [`dockerfilelint`](https://github.com/replicatedhq/dockerfilelint).
- [Hall of fame](https://github.com/sourcerer-io/hall-of-fame) from `Sourcerer`.
- Some advanced Python linting (?).
- End-to-end testing and validation of the cookiecutter template.
- Add [`Earthly`](https://earthly.dev/)

## 🛡 License

[![License](https://img.shields.io/github/license/Undertone0809/python-package-template)](https://github.com/Undertone0809/python-package-template/blob/main/LICENSE)

This project is licensed under the terms of the `MIT` license. See [LICENSE](https://github.com/Undertone0809/python-package-template/blob/main/LICENSE) for more details.

## 🏅 Acknowledgements

This template was inspired by several great articles:

- [Hypermodern Python](https://cjolowicz.github.io/posts/hypermodern-python-01-setup/)
- [Ultimate Setup for Your Next Python Project](https://martinheinz.dev/blog/14)
- [Nine simple steps for better-looking python code](https://towardsdatascience.com/nine-simple-steps-for-better-looking-python-code-87e5d9d3b1cf)
- [Modern Python developer's toolkit](https://pycon.switowski.com/)

and repositories:

- [`Cookiecutter`](https://github.com/cookiecutter/cookiecutter)
- [`wemake-python-package`](https://github.com/wemake-services/wemake-python-package)
- [Audreyr's `cookiecutter-pypackage`](https://github.com/audreyr/cookiecutter-pypackage)
- [Full Stack FastAPI and PostgreSQL - Base Project Generator](https://github.com/tiangolo/full-stack-fastapi-postgresql)
- [Cookiecutter Data Science Template: `cdst`](https://github.com/crplab/cdst)

Give them your ⭐️, these resources are amazing! 😉

## 📃 Citation

```bibtex
@misc{python-package-template,
  author = {Zeeland},
  title = {Python Packages Project Generator},
  year = {2023},
  publisher = {GitHub},
  journal = {GitHub repository},
  howpublished = {\url{https://github.com/Undertone0809/python-package-template}}
}
```

Markdown source for the badge [![🚀 Your next Python package needs a bleeding-edge project structure.](https://img.shields.io/badge/python--package--template-%F0%9F%9A%80-brightgreen)](https://github.com/Undertone0809/python-package-template)

```markdown
[![🚀 Your next Python package needs a bleeding-edge project structure.](https://img.shields.io/badge/python--package--template-%F0%9F%9A%80-brightgreen)](https://github.com/Undertone0809/python-package-template)
```
