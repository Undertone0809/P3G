# Quick Start

This section provides a comprehensive introduction to P3G, helping you quickly understand and learn the basic usage of its commonly used modules. We also welcome your feedback and suggestions in our [GitHub issues](https://github.com/Undertone0809/P3G/issues) to help us improve P3G.

## 1. Installation

To begin using P3G, first ensure you have the latest version:

```shell
pip install -U p3g
```

Then navigate to the directory where you want to create your project and run:

```shell
p3g generate
```

## 2. Input Variables

The template generator will prompt you to provide several configuration variables. Below are the input variables with their default values:

| Parameter                  | Default value               | Description                                                                 |
|----------------------------|-----------------------------|-----------------------------------------------------------------------------|
| project_name               | python-project              | The name of your project. Check availability before creating.               |
| project_description        | based on the project_name   | A brief description of your project.                                        |
| organization               | based on the project_name   | Organization name for LICENSE and pyproject.toml ownership details.         |
| license                    | MIT                         | Choose from: MIT, BSD-3, GNU GPL v3.0, or Apache Software License 2.0.      |
| minimal_python_version     | 3.7                         | Minimum Python version (3.7, 3.8, or 3.9) for builds, GitHub workflows, and formatters. |
| github_name                | based on the organization   | GitHub username for hosting, README.md, pyproject.toml, and GitHub templates. |
| email                      | based on the organization   | Email for CODE_OF_CONDUCT.md, SECURITY.md, and project ownership in pyproject.toml. |
| version                    | 0.1.0                       | Initial package version (follows Semantic Versioning).                      |
| line_length                | 88                          | Maximum line length for code style (black and isort). Must be between 50-300. |
| using_tsinghua_mirror_source | false                     | Whether to use Tsinghua Poetry mirror source.                               |
| create_example_template    | cli                         | Template type: "cli" creates a simple CLI app with Typer and Rich; "none" for no template. |

All input values will be saved in the cookiecutter-config-file.yml file for future reference. 😉

## 3. Demo

[![Create a cool Python project structure with p3g](https://zeeland-bucket.oss-cn-beijing.aliyuncs.com/images/20240519054442.png)](https://www.youtube.com/watch?v=dpKlGRgVp6g "Create a cool Python project structure with p3g")

## 4. More Details

Your generated project will include a comprehensive `README.md` file with detailed instructions for development, deployment, and more. You can preview [the project README.md template](https://github.com/Undertone0809/python-package-template/tree/main/%7B%7B%20cookiecutter.project_name%20%7D%7D) before creating your project.

## 5. Initial Setup

### 5.1. Initialize `poetry`

Install Poetry and set up your project dependencies by running:

```bash
pip install poetry & make install
```

After project creation, you'll see [instructions on how to initialize the project](https://github.com/Undertone0809/python-package-template/tree/main/%7B%7B%20cookiecutter.project_name%20%7D%7D#very-first-steps) in your terminal.

### 5.2. Initialize `pre-commit`

If you initialize a git repository before running `make install`, `pre-commit` will be automatically installed. If the installation fails, simply run `make install` again to properly install pre-commit hooks to your `.git` directory.

## 6. Package Management

Want to learn more about Poetry? Check [its official documentation](https://python-poetry.org/docs/).

<details>
<summary>6.1. Details about Poetry</summary>
<p>

Poetry's [commands](https://python-poetry.org/docs/cli/#commands) are intuitive and easy to learn, such as:

- `poetry add numpy@latest` - Add a package dependency
- `poetry run pytest` - Run tests
- `poetry publish --build` - Build and publish your package

</p>
</details>

### 6.2. CLI Example

If you selected `cli` for the `create_example_template` option, your project will include a simple CLI application example. This example uses [`Typer`](https://github.com/tiangolo/typer) and [`Rich`](https://github.com/willmcgugan/rich) for input validation and beautiful terminal formatting.

After installation via `make install` (recommended) or `poetry install`, try the example:

```bash
poetry run <project_name> --help
```

```bash
poetry run <project_name> --name Roman
```

## 7. Building and Releasing Your Package

Building a new version of your application involves these steps:

1. Bump the package version with `poetry version <version>`. You can specify the new version explicitly or use rules like `major`, `minor`, or `patch`. For more details, see the [Semantic Versioning](https://semver.org/) standard.
2. Commit your changes to `GitHub`.
3. Create a `GitHub release`.
4. Publish your package with `poetry publish --build`.

## 8. Makefile Usage

The [`Makefile`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/Makefile) includes numerous functions to accelerate your development workflow.

<details>
<summary>8.1. Install Dependencies and Pre-commit Hooks</summary>
<p>

Install all requirements:

```bash
make install
```

Install pre-commit hooks after `git init`:

```bash
make pre-commit-install
```

</p>
</details>

<details>
<summary>8.2. Code Style and Type Checks</summary>
<p>

Format your code automatically using `ruff`:

```bash
make format
```

Check code style without modifying files:

```bash
make check-codestyle
```

> Note: `check-codestyle` uses `ruff` and `darglint` libraries

</p>
</details>

<details>
<summary>8.3. Code Security</summary>
<p>

Run security checks:

```bash
make check-safety
```

This command runs `Poetry` integrity checks and identifies security issues using `Safety` and `Bandit`.

</p>
</details>

<details>
<summary>8.4. Tests with Coverage Badges</summary>
<p>

Run tests with pytest:

```bash
make test
```

</p>
</details>

<details>
<summary>8.5. All Linters</summary>
<p>

Run all linters with a single command:

```bash
make lint
```

This is equivalent to:

```bash
make check-codestyle && make test && make check-safety
```

</p>
</details>

<details>
<summary>8.6. Docker</summary>
<p>

Build a Docker image:

```bash
make docker-build
```

This is equivalent to:

```bash
make docker-build VERSION=latest
```

Remove the Docker image:

```bash
make docker-remove
```

For more information, see the [Docker documentation](https://github.com/Undertone0809/python-package-template/tree/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/docker).

</p>
</details>

<details>
<summary>8.7. Cleanup</summary>
<p>

Delete Python cache files:

```bash
make pycache-remove
```

Remove package build artifacts:

```bash
make build-remove
```

Delete .DS_STORE files:

```bash
make dsstore-remove
```

Remove .mypycache:

```bash
make mypycache-remove
```

Or run all cleanup tasks at once:

```bash
make cleanup
```

</p>
</details>
