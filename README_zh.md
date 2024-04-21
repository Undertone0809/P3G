# Python 包项目生成器

[英文](README.md) [中文](README_zh.md)

<div align="center">

[![构建状态](https://github.com/Undertone0809/python-package-template/workflows/build/badge.svg?branch=main&event=push)](https://github.com/Undertone0809/python-package-template/actions?query=workflow%3Abuild)
[![依赖状态](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)](https://github.com/Undertone0809/python-package-template/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Aapp%2Fdependabot)
[![🚀 你的下一个 Python 包需要一个前沿的项目结构。](https://img.shields.io/badge/python--package--template-%F0%9F%9A%80-brightgreen)](https://github.com/Undertone0809/python-package-template)

[![代码风格: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![预提交](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/Undertone0809/python-package-template/blob/main/.pre-commit-config.yaml)
[![语义版本](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--versions-e10079.svg)](https://github.com/Undertone0809/python-package-template/releases)
[![许可](https://img.shields.io/github/license/Undertone0809/python-package-template)](https://github.com/Undertone0809/python-package-template/blob/main/LICENSE)
![覆盖率报告](assets/images/coverage.svg)

你的下一个 Python 包需要一个前沿的项目结构。
</div>

> 这个版本是从 [https://github.com/TezRomacH/python-package-template](https://github.com/TezRomacH/python-package-template) 派生的。与原项目相比，当前项目提供了更好的 Windows 兼容性和更快的 lint 构建。

## 🚀 特性

在这个 [cookiecutter 🍪](https://github.com/cookiecutter/cookiecutter) 模板中，我们结合了最先进的库和 Python 最佳开发实践。

### 开发特性

- 支持 `Python 3.7` 及更高版本。
- 使用 [`Poetry`](https://python-poetry.org/) 作为依赖管理器。参见 [`pyproject.toml`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/pyproject.toml) 和 [`setup.cfg`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/setup.cfg) 中的配置。
- 更快的格式化工具，使用 [`ruff`](https://github.com/astral-sh/ruff) 自动代码风格，替代 [`black`](https://github.com/psf/black)、[`isort`](https://github.com/timothycrosley/isort) 和 [`pyupgrade`](https://github.com/asottile/pyupgrade)。
- 已准备好使用的 [`pre-commit`](https://pre-commit.com/) 钩子，用于代码格式化。
- 类型检查使用 [`ruff`](https://github.com/astral-sh/ruff)；docstring 检查使用 [`darglint`](https://github.com/terrencepreilly/darglint)；安全检查使用 [`safety`](https://github.com/pyupio/safety) 和 [`bandit`](https://github.com/PyCQA/bandit)。
- 使用 [`pytest`](https://docs.pytest.org/en/latest/) 进行测试。
- 已准备好使用的 [`.editorconfig`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.editorconfig)、[`.dockerignore`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.dockerignore) 和 [`.gitignore`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.gitignore) 文件。你不必担心这些事情。
- 构建 docker 的能力。

### 部署特性

- `GitHub` 集成：问题和 pr 模板。
- 使用预定义的 [构建工作流](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.github/workflows/build.yml) 作为默认的 CI/CD 的 `Github Actions`。
- 已经为安全检查、代码风格检查、代码格式化、测试、linting、docker 构建等设置好了一切，使用 [`Makefile`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/Makefile#L89)。更多细节在 [makefile-usage](#makefile-usage) 中。
- 用于你的包的 [Dockerfile](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/docker/Dockerfile)。
- 使用 [`@dependabot`](https://dependabot.com/) 保持依赖项始终更新。你只需要[启用它](https://docs.github.com/en/github/administering-a-repository/enabling-and-disabling-version-updates#enabling-github-dependabot-version-updates)。
- 使用 [`Release Drafter`](https://github.com/marketplace/actions/release-drafter) 自动发布说明。你可以在 [`release-drafter.yml`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.github/release-drafter.yml) 中看到标签列表。与 [Semantic Versions](https://semver.org/) 规范完美配合。

### 开源社区特性

- 已准备好使用的 [Pull Requests 模板](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.github/PULL_REQUEST_TEMPLATE.md) 和几个 [Issue 模板](https://github.com/Undertone0809/python-package-template/tree/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.github/ISSUE_TEMPLATE)。
- 自动生成的文件，如：`LICENSE`、`CONTRIBUTING.md`、`CODE_OF_CONDUCT.md` 和 `SECURITY.md`。
- [`Stale bot`](https://github.com/apps/stale)，在一段不活跃后关闭遗弃的问题。（你只需[设置免费计划](https://github.com/marketplace/stale)）。配置在[这里](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.github/.stale.yml)。
- 使用 [`Release Drafter`](https://github.com/marketplace/actions/release-drafter) 的 [Semantic Versions](https://semver.org/) 规范。

## 🤯 如何使用它

### 安装

开始使用模板，请更新 `cookiecutter`

```bash
pip install -U cookiecutter
```

然后转到你想创建项目的目录并运行：

```bash
cookiecutter gh:Undertone0809/3PG --checkout v1.2.1
```

### 输入变量

模板生成器将要求你填写一些变量。

输入变量及其默认值：

|     **参数**     |      **默认值**      | **描述**                                                                                                                                                                                     |
|:---------------------:|:---------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `project_name`           |      `python-project`       | 在创建项目之前[检查可能的名称的可用性](http://ivantomic.com/projects/ospnc/)。                                                                                        |
| `project_description`    | 基于 `project_name` | 你的项目的简短描述。                                                                                                                                                                  |
| `organization`           | 基于 `project_name` | 组织名称。我们需要生成许可证并在 `pyproject.toml` 中指定所有权。                                                                                                 |
| `license`                |            `MIT`            | `MIT`、`BSD-3`、`GNU GPL v3.0` 和 `Apache Software License 2.0` 中的一个。                                                                                                                            |
| `minimal_python_version` |            `3.7`            | 最小 Python 版本。`3.7`、`3.8` 和 `3.9` 中的一个。它用于构建、GitHub 工作流以及格式化器（`black`、`isort` 和 `pyupgrade`）。                                                    |
| `github_name`            | 基于 `organization` | 托管的 GitHub 用户名。也用于设置 `README.md`、`pyproject.toml` 和 GitHub 的模板文件。                                                                                       |
| `email`                  | 基于 `organization` | 用于 `CODE_OF_CONDUCT.md`、`SECURITY.md` 文件和在 `pyproject.toml` 中指定项目所有权的电子邮件。                                                                                |
| `version`                |           `0.1.0`           | 包的初始版本。确保它遵循 [Semantic Versions](https://semver.org/) 规范。                                                                                    |
| `line_length`            |             88              | 每行的最大长度（用于 `black` 和 `isort` 的代码风格）。注意：此值必须在 50 到 300 之间。                                                                                 |
| `using_tsinghua_image_source`            |            false            | 清华 poetry 镜像源                                                                                                                                                                    |
| `create_example_template` |            `cli`            | 如果选择 `cli`，生成器将创建一个简单的 CLI 应用程序，使用 [`Typer`](https://github.com/tiangolo/typer) 和 [`Rich`](https://github.com/willmcgugan/rich) 库。`cli` 和 `none` 中的一个 |

所有输入值将保存在 `cookiecutter-config-file.yml` 文件中，这样你就不会丢失它们。😉

#### 演示

[![github.com/Undertone0809/python-package-template 的演示](https://asciinema.org/a/422052.svg)](https://asciinema.org/a/422052)

### 更多细节

你的项目将包含 `README.md` 文件，其中包含开发、部署等指南。你可以在此之前阅读[项目 README.md 模板](https://github.com/Undertone0809/python-package-template/tree/main/%7B%7B%20cookiecutter.project_name%20%7D%7D)。

### 初始设置

#### 初始化 `poetry`

通过运行 `pip install poetry & make install`

创建项目后，它将出现在你的目录中，并显示[如何初始化项目的消息](https://github.com/Undertone0809/python-package-template/tree/main/%7B%7B%20cookiecutter.project_name%20%7D%7D#very-first-steps)。

#### 初始化 `pre-commit`

如果你在运行 `make install` 之前初始化 git 仓库，`pre-commit` 已经安装。如果没有初始化而失败，请再次运行 `make install` 以将 pre-commit 安装到 `.git`。

### 包示例

想了解更多关于 Poetry？查看[它的文档](https://python-poetry.org/docs/)。

<details>
<summary>关于 Poetry 的细节</summary>
<p>

Poetry 的[命令](https://python-poetry.org/docs/cli/#commands)非常直观易学，比如：

- `poetry add numpy@latest`
- `poetry run pytest`
- `poetry publish --build`

等等
</p>
</details>

#### CLI 示例

如果你将 `create_example_template` 设置为 `cli`，模板将附带一个小巧的 CLI 应用程序示例。它利用 [`Typer`](https://github.com/tiangolo/typer) 和 [`Rich`](https://github.com/willmcgugan/rich) 进行 CLI 输入验证和在终端中的美观格式化。

通过 `make install`（首选）或 `poetry install` 安装后，你可以尝试使用示例：

```bash
poetry run <project_name> --help
```

```bash
poetry run <project_name> --name Roman
```

### 构建和发布你的包

构建应用程序的新版本包括以下步骤：

- 提升你包的版本 `poetry version <version>`。你可以明确传递新版本，或者使用规则如 `major`、`minor` 或 `patch`。更多细节，请参考 [Semantic Versions](https://semver.org/) 标准。
- 对 `GitHub` 进行提交。
- 创建 `GitHub release`。
- 然后... 发布 🙂 `poetry publish --build`

### Makefile 使用

[`Makefile`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/Makefile) 包含许多用于加速开发的功能。

<details>
<summary>1. 安装所有依赖和预提交钩子</summary>
<p>

安装要求：

```bash
make install
```

预提交钩子可以在 `git init` 之后通过以下方式安装：

```bash
make pre-commit-install
```

</p>
</details>

<details>
<summary>2. 代码风格和类型检查</summary>
<p>

自动格式化使用 `ruff`。

```bash
make polish-codestyle

# 或使用同义词
make formatting
```

仅检查代码风格，不重写文件：

```bash
make check-codestyle
```

> 注意：`check-codestyle` 使用 `ruff` 和 `darglint` 库

</p>
</details>

<details>
<summary>3. 代码安全</summary>
<p>

```bash
make check-safety
```

该命令启动 `Poetry` 完整性检查以及使用 `Safety` 和 `Bandit` 识别安全问题。

```bash
make check-safety
```

</p>
</details>

<details>
<summary>4. 带覆盖率徽章的测试</summary>
<p>

运行 `pytest`

```bash
make test
```

</p>
</details>

<details>
<summary>5. 所有的 linters</summary>
<p>

当然，有一个命令可以一次运行所有的 linters：

```bash
make lint
```

与以下命令相同：

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

等同于：

```bash
make docker-build VERSION=latest
```

移除 docker 镜像：

```bash
make docker-remove
```

更多信息[关于 docker](https://github.com/Undertone0809/python-package-template/tree/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/docker)。

</p>
</details>

<details>
<summary>7. 清理</summary>
<p>
删除 pycache 文件：

```bash
make pycache-remove
```

移除包构建：

```bash
make build-remove
```

删除 .DS_STORE 文件：

```bash
make dsstore-remove
```

移除 .mypycache：

```bash
make mypycache-remove
```

或者运行以下命令以移除以上所有内容：

```bash
make cleanup
```

</p>
</details>

## 🎯 下一步是什么

好吧，这取决于你 💪🏻。我只能推荐帮助我的包和文章。

- [`Typer`](https://github.com/tiangolo/typer) 非常适合创建 CLI 应用程序。
- [`Rich`](https://github.com/willmcgugan/rich) 可以轻松地在终端中添加美观的格式。
- [`Pydantic`](https://
