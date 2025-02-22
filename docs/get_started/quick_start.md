# Quick Start
Through this section of the tutorial, you can quickly get a comprehensive understanding of Promptulate, learn the basic usage of some commonly used modules.

After reading this section, you can continue to read [Use Cases](../use_cases/intro) to learn some best practices for promptulate, to see how each module is used in case of a problem, Also welcome you in [issue](https://github.com/Undertone0809/P3G/issues) for promptulate provide better advice.


## Installation
To begin using the template consider updating p3g
```shell
pip install -U p3g
```
then go to a directory where you want to create your project and run:
```shell
p3g generate
```
## Input variables
Template generator will ask you to fill some variables.

The input variables, with their default values:
| Parameter                  | Default value               | Description                                                                 |
|----------------------------|-----------------------------|-----------------------------------------------------------------------------|
| project_name               | python-project              | Check the availability of possible name before creating the project.       |
| project_description        | based on the project_name   | Brief description of your project.                                          |
| organization               | based on the project_name   | Name of the organization. We need to generate LICENCE and to specify ownership in pyproject.toml. |
| license                    | MIT                         | One of MIT, BSD-3, GNU GPL v3.0 and Apache Software License 2.0.            |
| minimal_python_version     | 3.7                         | Minimal Python version. One of 3.7, 3.8 and 3.9. It is used for builds, GitHub workflow and formatters (black, isort and pyupgrade). |
| github_name                | based on the organization   | GitHub username for hosting. Also used to set up README.md, pyproject.toml and template files for GitHub. |
| email                      | based on the organization   | Email for CODE_OF_CONDUCT.md, SECURITY.md files and to specify the ownership of the project in pyproject.toml. |
| version                    | 0.1.0                       | Initial version of the package. Make sure it follows the Semantic Versions specification. |
| line_length                | 88                          | The max length per line (used for codestyle with black and isort). NOTE: This value must be between 50 and 300. |
| using_tsinghua_mirror_source | false                     | The tsinghua poetry mirror source                                           |
| create_example_template    | cli                         | If cli is chosen generator will create simple CLI application with Typer and Rich libraries. One of cli, none |

All input values will be saved in the cookiecutter-config-file.yml file so that you won't lose them. 😉

## Demo
[![Create a cool Python project structure with p3g](https://zeeland-bucket.oss-cn-beijing.aliyuncs.com/images/20240519054442.png)](https://www.youtube.com/watch?v=dpKlGRgVp6g "Create a cool Python project structure with p3g")

## More details

Your project will contain `README.md` file with instructions for development, deployment, etc. You can read [the project README.md template](https://github.com/Undertone0809/python-package-template/tree/main/%7B%7B%20cookiecutter.project_name%20%7D%7D) before.

## Initial set up

### Initialize `poetry`

By running `pip install poetry & make install`

After you create a project, it will appear in your directory, and will display [a message about how to initialize the project](https://github.com/Undertone0809/python-package-template/tree/main/%7B%7B%20cookiecutter.project_name%20%7D%7D#very-first-steps).

### Initialize `pre-commit`

`pre-commit` is already installed if you initialize git repo before running `make install`. If it fails without initialization, run `make install` again to install pre-commit to `.git`.

## Package example

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

### CLI example

If you set `create_example_template` to be `cli` the template comes with a cute little CLI application example. It utilises [`Typer`](https://github.com/tiangolo/typer) and [`Rich`](https://github.com/willmcgugan/rich) for CLI input validation and beautiful formatting in the terminal.

After installation via `make install` (preferred) or `poetry install` you can try to play with the example:

```bash
poetry run <project_name> --help
```

```bash
poetry run <project_name> --name Roman
```

## Building and releasing your package

Building a new version of the application contains steps:

- Bump the version of your package `poetry version <version>`. You can pass the new version explicitly, or a rule such as `major`, `minor`, or `patch`. For more details, refer to the [Semantic Versions](https://semver.org/) standard.
- Make a commit to `GitHub`.
- Create a `GitHub release`.
- And... publish 🙂 `poetry publish --build`

## Makefile usage

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

