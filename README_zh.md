# Python 包项目生成器

[English](README.md) [Chinese](README_zh.md)

<div align="center">

[![Build status](https://github.com/Undertone0809/python-package-template/workflows/build/badge.svg?branch=main&event=push)](https://github.com/Undertone0809/python-package-template/actions?query=workflow%3Abuild)
[![Dependencies Status](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)](https://github.com/Undertone0809/python-package-template/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Aapp%2Fdependabot)
[![🚀 Your next Python package needs a bleeding-edge project structure.](https://img.shields.io/badge/python--package--template-%F0%9F%9A%80-brightgreen)](https://github.com/Undertone0809/python-package-template)

[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![Pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/Undertone0809/python-package-template/blob/main/.pre-commit-config.yaml)
[![Semantic Versions](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--versions-e10079.svg)](https://github.com/Undertone0809/python-package-template/releases)
[![License](https://img.shields.io/github/license/Undertone0809/python-package-template)](https://github.com/Undertone0809/python-package-template/blob/main/LICENSE)
![Coverage Report](assets/images/coverage.svg)

新一代 Python 项目开发模板
</div>

## TL;DR

```bash
cookiecutter gh:Undertone0809/python-package-template --checkout v1.0.3
```

> 你只需要安装最新版本的 cookiecutter 😉

## 🚀 功能

在这个 [cookiecutter 🍪](https://github.com/cookiecutter/cookiecutter) 模板中，我们结合了最先进的库和 Python 最佳开发实践。

### 开发功能

- 支持 `Python 3.7` 及更高版本。
- 使用 [`Poetry`](https://python-poetry.org/) 作为依赖管理器。请查看 [`pyproject.toml`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/pyproject.toml) 和 [`setup.cfg`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/setup.cfg) 中的配置。
- 使用 [`black`](https://github.com/psf/black)、[`isort`](https://github.com/timothycrosley/isort) 和 [`pyupgrade`](https://github.com/asottile/pyupgrade) 进行自动代码格式化。
- 预配置的 [`pre-commit`](https://pre-commit.com/) 钩子，用于代码格式化。
- 使用 [`mypy`](https://mypy.readthedocs.io) 进行类型检查，使用 [`darglint`](https://github.com/terrencepreilly/darglint) 进行文档字符串检查，使用 [`safety`](https://github.com/pyupio/safety) 和 [`bandit`](https://github.com/PyCQA/bandit) 进行安全检查。
- 使用 [`pytest`](https://docs.pytest.org/en/latest/) 进行测试。
- 预配置的 [`.editorconfig`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.editorconfig)、[`.dockerignore`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.dockerignore) 和 [`.gitignore`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.gitignore) 文件。你不需要担心这些事情。

### 部署功能

- `GitHub` 集成：问题和 PR 模板。
- 使用预定义的 [构建工作流程](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.github/workflows/build.yml) 作为默认的 CI/CD。
- 已经设置好安全检查、代码格式检查、代码格式化、测试、linting、Docker 构建等的所有内容，使用 [`Makefile`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/Makefile#L89)。更多细节请参阅 [makefile-usage](#makefile-usage)。
- 为你的包提供 [Dockerfile](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/docker/Dockerfile)。
- 使用 [`@dependabot`](https://dependabot.com/) 始终保持依赖项最新。你只需要[启用它](https://docs.github.com/en/github/administering-a-repository/enabling-and-disabling-version-updates#enabling-github-dependabot-version-updates)。
- 使用 [`Release Drafter`](https://github.com/marketplace/actions/release-drafter) 自动生成发布说明。你可以在 [`release-drafter.yml`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.github/release-drafter.yml) 中查看标签列表。与 [Semantic Versions](https://semver.org/) 规范完美配合。

### 开源社区功能

- 预配置的 [Pull Requests 模板](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.github/PULL_REQUEST_TEMPLATE.md) 和几个 [Issue 模板](https://github.com/Undertone0809/python-package-template/tree/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.github/ISSUE_TEMPLATE)。
- 自动生成文件，如：`LICENSE`、`CONTRIBUTING.md`、`CODE_OF_CONDUCT.md` 和 `SECURITY.md`。
- 使用 [`Stale bot`](https://github.com/apps/stale) 在一段时间内自动关闭未处理的问题（你只需要[设置免费计划](https://github.com/marketplace/stale)）。配置在 [这里](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/.github/.stale.yml)。
- 使用 [`Release Drafter`](https://github.com/marketplace/actions/release-drafter) 自动生成发布说明。
- 使用 [`Semantic Versions`](https://semver.org/) 规范和 [`Release Drafter`](https://github.com/marketplace/actions/release-drafter)。

## 🤯 如何使用

### 安装

开始使用模板之前，请确保更新 `cookiecutter`：

```bash
pip install -U cookiecutter
```

然后进入你想要创建项目的目录，并运行：

```bash
cookiecutter gh:Undertone0809/python-package-template --checkout v1.0.3:
```

### 输入变量

模板生成器会要求你填写一些变量。

输入变量及其默认值如下：

|     **参数**     |      **默认值**      | **描述**                                                                                                                                                                                     |
|:---------------------:|:---------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `project_name`           |      `python-project`       | [在创建项目之前，请检查可能的名称的可用性](http://ivantomic.com/projects/ospnc/)。                                                                                        |
| `project_description`    | 基于 `project_name` | 你的项目的简要描述。                                                                                                                                                                  |
| `organization`           | 基于 `project_name` | 组织的名称。我们需要生成许可证，并在 `pyproject.toml` 中指定所有权。                                                                                                 |
| `license`                |            `MIT`            | `MIT`、`BSD-3`、`GNU GPL v3.0` 和 `Apache Software License 2.0` 中的一个。                                                                                                                            |
| `minimal_python_version` |            `3.7`            | 最低 Python 版本。可以是 `3.7`、`3.8` 或 `3.9` 中的一个。用于构建、GitHub 工作流和格式化工具 (`black`、`isort` 和 `pyupgrade`)。                                                    |
| `github_name`            | 基于 `organization` | 用于托管的 GitHub 用户名。还用于设置 `README.md`、`pyproject.toml` 和 GitHub 的模板文件。                                                                                       |
| `email`                  | 基于 `organization` | 用于 `CODE_OF_CONDUCT.md`、`SECURITY.md` 文件以及在 `pyproject.toml` 中指定项目所有权。                                                                                |
| `version`                |           `0.1.0`           | 包的初始版本。请确保符合 [Semantic Versions](https://semver.org/) 规范。                                                                                    |
| `line_length`            |             88              | 每行的最大长度（用于 `black` 和 `isort` 的代码样式）。注意：此值必须介于 50 和 300 之间。                                                                                 |
| `using_tsinghua_image_source`            |            false            | 清华镜像源的 poetry 镜像源                                                                                                                                                                    |
| `create_example_template` |            `cli`            | 如果选择 `cli`，生成器将创建一个简单的 CLI 应用程序，使用 [`Typer`](https://github.com/tiangolo/typer) 和 [`Rich`](https://github.com/willmcgugan/rich) 库。其中一个选项是 `cli`、`none` |

所有输入值将保存在 `cookiecutter-config-file.yml` 文件中，以便你不会丢失它们。😉

#### 演示

[![Demo of github.com/Undertone0809/python-package-template](https://asciinema.org/a/422052.svg)](https://asciinema.org/a/422052)

### 更多细节

你的项目将包含一个 `README.md` 文件，其中包含有关开发、部署等的说明。你可以在[项目 README.md 模板](https://github.com/Undertone0809/python-package-template/tree/main/%7B%7B%20cookiecutter.project_name%20%7D%7D)中阅读更多信息。

### 初始设置

#### 初始化 `poetry`

通过运行 `pip install poetry & make install` 来初始化 `poetry`。

在创建项目后，它将出现在你的目录中，并显示关于如何初始化项目的消息。

#### 初始化 `pre-commit`

如果在运行 `make install` 之前初始化 git 仓库，`pre-commit` 已经安装好了。如果没有初始化，可以再次运行 `make install` 来将 pre-commit 安装到 `.git`。

### 包示例

想了解更多关于 Poetry 的信息吗？请查看 [它的文档](https://python-poetry.org/docs/)。

<details>
<summary>关于 Poetry 的详细信息</summary>
<p>

Poetry 的 [命令](https://python-poetry.org/docs/cli/#commands) 非常直观和易于学习，例如：

- `poetry add numpy@latest`
- `poetry run pytest`
- `poetry publish --build`

等等
</p>
</details>

#### CLI 示例

如果将 `create_example_template` 设置为 `cli`，模板将提供一个简单的 CLI 应用程序示例。它使用 [`Typer`](https://github.com/tiangolo/typer) 和 [`Rich`](https://github.com/willmcgugan/rich) 来进行 CLI 输入验证和在终端中进行美观的格式化。

通过 `make install`（首选）或 `poetry install` 安装后，你可以尝试使用示例：

```bash
poetry run <project_name> --help
```

```bash
poetry run <project_name> --name Roman
```

### 构建和发布你的包

构建新版本的应用程序包含以下步骤：

- 提升包的版本 `poetry version <version>`。你可以显式地传递新版本，也可以使用 `major`、`minor` 或 `patch` 等规则。有关更多详细信息，请参阅 [Semantic Versions](https://semver.org/) 规范。
- 提交到 `GitHub`。
- 创建 `GitHub release`。
- 然后... 发布 🙂 `poetry publish --build`

### Makefile 使用方法

[`Makefile`](https://github.com/Undertone0809/python-package-template/blob/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/Makefile) 包含许多函数，用于加快开发速度。

<details>
<summary>1. 下载和删除 Poetry</summary>
<p>

下载并安装 Poetry：

```bash
make poetry-download
```

卸载 Poetry：

```bash
make poetry-remove
```

</p>
</details>

<details>
<summary>2. 安装所有依赖项和 pre-commit 钩子</summary>
<p>

安装依赖项：

```bash
make install
```

在 `git init` 之后安装 pre-commit 钩子：

```bash
make pre-commit-install
```

</p>
</details>

<details>
<summary>3. 代码样式</summary>
<p>

自动格式化使用 `pyupgrade`、`isort` 和 `black`。

```bash
make codestyle

# 或使用同义词
make formatting
```

仅进行代码样式检查，而不重写文件：

```bash
make check-codestyle
```

> 注意：`check-codestyle` 使用 `isort`、`black` 和 `darglint` 库

使用一条命令将所有开发库更新到最新版本：

```bash
make update-dev-deps
```

</p>
</details>

<details>
<summary>4. 代码安全性</summary>
<p>

```bash
make check-safety
```

此命令会运行 `Poetry` 的完整性检查，并使用 `Safety` 和 `Bandit` 检测安全问题。

```bash
make check-safety
```

</p>
</details>

<details>
<summary>5. 类型检查</summary>
<p>

运行 `mypy` 静态类型检查器：

```bash
make mypy
```

</p>
</details>

<details>
<summary>6. 测试和覆盖率</summary>
<p>

运行 `pytest`：

```bash
make test
```

</p>
</details>

<details>
<summary>7. 所有 linters</summary>
<p>

当然，有一个命令可以一次运行所有 linters：

```bash
make lint
```

与以下命令相同：

```bash
make test && make check-codestyle && make mypy && make check-safety
```

</p>
</details>

<details>
<summary>8. Docker</summary>
<p>

```bash
make docker-build
```

等同于：

```bash
make docker-build VERSION=latest
```

删除 Docker 镜像：

```bash
make docker-remove
```

有关 Docker 的更多信息，请参阅[这里](https://github.com/Undertone0809/python-package-template/tree/main/%7B%7B%20cookiecutter.project_name%20%7D%7D/docker)。

</p>
</details>

<details>
<summary>9. 清理</summary>
<p>
删除 pycache 文件：

```bash
make pycache-remove
```

删除构建的包：

```bash
make build-remove
```

删除 .DS_STORE 文件：

```bash
make dsstore-remove
```

删除 .mypycache：

```bash
make mypycache-remove
```

或者，删除所有上述文件：

```bash
make cleanup
```

</p>
</details>

## 🎯 接下来做什么

好吧，这取决于你 💪🏻。我只能推荐一些帮助我的包和文章。

- [`Typer`](https://github.com/tiangolo/typer) 适用于创建 CLI 应用程序。
- [`Rich`](https://github.com/willmcgugan/rich) 可以在终端中添加漂亮的格式化。
- [`Pydantic`](https://github.com/samuelcolvin/pydantic/) - 使用 Python 类型提示进行数据验证和设置管理。
- [`Loguru`](https://github.com/Delgan/loguru) 使日志记录变得简单。
- [`tqdm`](https://github.com/tqdm/tqdm) - 快速、可扩展的 Python 和 CLI 进度条。
- [`IceCream`](https://github.com/gruns/icecream) 是一个用于调试的小型库。
- [`orjson`](https://github.com/ijl/orjson) - 超快的 JSON 解析库。
- [`Returns`](https://github.com/dry-python/returns) 使你的函数输出有意义、类型化和安全！
- [`Hydra`](https://github.com/facebookresearch/hydra) 是一个用于优雅配置复杂应用程序的框架。
- [`FastAPI`](https://github.com/tiangolo/fastapi) 是一个基于类型的异步 Web 框架。

文章：

- [开源指南](https://opensource.guide/)。
- [关于开源的资金支持指南](https://github.com/nayafia/lemonade-stand)
- [GitHub Actions 文档](https://help.github.com/en/actions)。
- 也许你想在提交名称中添加 [gitmoji](https://gitmoji.carloscuesta.me/)。这真的很有趣。😄

## 📈 发布

你可以在 [GitHub Releases](https://github.com/Undertone0809/python-package-template/releases) 页面上查看可用的发布列表。

我们遵循 [Semantic Versions](https://semver.org/) 规范。

我们使用 [`Release Drafter`](https://github.com/marketplace/actions/release-drafter)。当合并 pull request 时，草稿式发布将保持更新，列出更改内容，准备发布。使用标签可以将 pull request 分类到发布说明中。

### 标签列表及其对应的标题

|               **标签**               |  **发布中的标题**  |
|:-------------------------------------:|:----------------------:|
| `enhancement`, `feature`              | 🚀 功能             |
| `bug`, `refactoring`, `bugfix`, `fix` | 🔧 修复和重构  |
| `build`, `ci`, `testing`              | 📦 构建系统和 CI/CD |
| `breaking`                            | 💥 重大变更     |
| `documentation`                       | 📝 文档        |
| `dependencies`                        | ⬆️ 依赖项更新 |

## 🧪 待办事项

该模板将继续开发，并遵循最新的工具和最佳实践，以改进 Python 开发体验。

以下是尚未实现的一些事项：

- 测试覆盖率报告（[`Codecov`](https://github.com/marketplace/codecov)？）。
- 当创建新的 GitHub 发布时，自动将你的包上传到 [`PyPI`](https://pypi.org/)。
- 自动创建和部署文档到 GitHub 页面。我正在研究 [`MkDocs`](https://www.mkdocs.org/) 和 [Material Design 主题](https://github.com/squidfunk/mkdocs-material)，以及 [`mkdocstrings`](https://github.com/pawamoy/mkdocstrings)。
- 使用 [`Radon`](https://github.com/rubik/radon) 进行代码度量。
- 使用 [`interrogate`](https://github.com/econchick/interrogate) 进行文档字符串覆盖率。
- 使用 [`dockerfilelint`](https://github.com/replicatedhq/dockerfilelint) 对 `Dockerfile` 进行 linting。
- [`Sourcerer`](https://github.com/sourcerer-io/hall-of-fame) 的名人堂。
- 使用 [`Release Drafter`](https://github.com/marketplace/actions/release-drafter) 自动生成发布说明。
- 一些高级的 Python linting（？）。
- 对 cookiecutter 模板进行端到端测试和验证。
- 添加 [`Invoke`](http://www.pyinvoke.org/)。
- 添加 [`Earthly`](https://earthly.dev/)。

## 🛡 许可证

[![License](https://img.shields.io/github/license/Undertone0809/python-package-template)](https://github.com/Undertone0809/python-package-template/blob/main/LICENSE)

本项目根据 `MIT` 许可证条款授权。有关更多详细信息，请参阅 [LICENSE](https://github.com/Undertone0809/python-package-template/blob/main/LICENSE)。

## 🏅 致谢

该模板受到了一些很棒的文章的启发：

- [Hypermodern Python](https://cjolowicz.github.io/posts/hypermodern-python-01-setup/)
- [Ultimate Setup for Your Next Python Project](https://martinheinz.dev/blog/14)
- [Nine simple steps for better-looking python code](https://towardsdatascience.com/nine-simple-steps-for-better-looking-python-code-87e5d9d3b1cf)
- [Modern Python developer's toolkit](https://pycon.switowski.com/)

以及以下仓库：

- [`Cookiecutter`](https://github.com/cookiecutter/cookiecutter)
- [`wemake-python-package`](https://github.com/wemake-services/wemake-python-package)
- [Audreyr 的 `cookiecutter-pypackage`](https://github.com/audreyr/cookiecutter-pypackage)
- [Full Stack FastAPI and PostgreSQL - Base Project Generator](https://github.com/tiangolo/full-stack-fastapi-postgresql)
- [Cookiecutter Data Science Template: `cdst`](https://github.com/crplab/cdst)

给它们一个 ⭐️，这些资源非常棒！😉

## 📃 引用

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

徽章的 Markdown 源码 [![🚀 Your next Python package needs a bleeding-edge project structure.](https://img.shields.io/badge/python--package--template-%F0%9F%9A%80-brightgreen)](https://github.com/Undertone0809/python-package-template)

```markdown
[![🚀 Your next Python package needs a bleeding-edge project structure.](https://img.shields.io/badge/python--package--template-%F0%9F%9A%80-brightgreen)](https://github.com/Undertone0809/python-package-template)
```
