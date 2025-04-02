"""This module is called after project is created."""

import textwrap
from pathlib import Path
from shutil import move, rmtree
from typing import List

# Project root directory
PROJECT_DIRECTORY = Path.cwd().absolute()
PROJECT_NAME = "{{ cookiecutter.project_name }}"
PROJECT_MODULE = "{{ cookiecutter.project_name.lower().replace(' ', '_') }}"
CREATE_EXAMPLE_TEMPLATE = "{{ cookiecutter.create_example_template }}"
CREATE_DOCS = "{{ cookiecutter.create_docs }}"

# Values to generate correct license
LICENSE = "{{ cookiecutter.license }}"
ORGANIZATION = "{{ cookiecutter.organization }}"

# Values to generate github repository
GITHUB_USER = "{{ cookiecutter.github_name }}"

licences_dict = {
    "MIT": "mit",
    "BSD-3": "bsd3",
    "GNU GPL v3.0": "gpl3",
    "Apache Software License 2.0": "apache",
}


def generate_license(directory: Path, licence: str) -> None:
    """Generate license file for the project.

    Args:
        directory: path to the project directory
        licence: chosen licence
    """
    move(str(directory / "_licences" / f"{licence}.txt"), str(directory / "LICENSE"))
    rmtree(str(directory / "_licences"))


def remove_unused_files(
    directory: Path,
    module_name: str,
    need_to_remove_cli: bool,
    need_to_remove_docs: bool,
) -> None:
    """Remove unused files.

    Args:
        directory: path to the project directory
        module_name: project module name
        need_to_remove_cli: flag for removing CLI related files
        need_to_remove_docs: flag for removing documentation related files
    """
    files_to_delete: List[Path] = []

    def _cli_specific_files() -> List[Path]:
        return [directory / module_name / "__main__.py"]

    def _docs_specific_files() -> List[Path]:
        return [directory / "docs"]

    if need_to_remove_cli:
        files_to_delete.extend(_cli_specific_files())

    if need_to_remove_docs:
        files_to_delete.extend(_docs_specific_files())
        files_to_delete.append(directory / ".github" / "workflows" / "deploy-pages.yml")

    for path in files_to_delete:
        if path.is_file():
            path.unlink()
        elif path.is_dir():
            rmtree(str(path))


def print_further_instructions(project_name: str, github: str) -> None:
    """Show user what to do next after project creation.

    Args:
        project_name: current project name
        github: GitHub username
    """
    docs_instructions = (
        """
    6) If you want to develop the documentation (if you chose to include it):

        $ cd docs
        $ npm install
        $ npm run docs:dev

       The documentation will be available at http://localhost:5173
    """
        if CREATE_DOCS
        else ""
    )

    message = f"""
    👋 Hi, here. I'm Zeeland, If you think this project will be helpful to you, please point a star for the project 🌟🌟

    If you encounter any problems in the development, please contact me, email: zeeland4work@gmail.com 📝

    Github: https://github.com/Undertone0809/P3G


    Your project {project_name} is created.

    1) Now you can start working on it:

        $ cd {project_name} && git init

    2) If you don't have Poetry installed run:

        $ pip install poetry

    3) Initialize poetry and install pre-commit hooks:

        $ make install

    4) Run codestyle:

        $ make format

    5) Upload initial code to GitHub:

        $ git add .
        $ git commit -m ":tada: Initial commit"
        $ git branch -M main
        $ git remote add origin https://github.com/{github}/{project_name}.git
        $ git push -u origin main
    {docs_instructions}
    """  # noqa
    print(textwrap.dedent(message))


def main() -> None:
    generate_license(directory=PROJECT_DIRECTORY, licence=licences_dict[LICENSE])
    remove_unused_files(
        directory=PROJECT_DIRECTORY,
        module_name=PROJECT_MODULE,
        need_to_remove_cli=CREATE_EXAMPLE_TEMPLATE != "cli",
        need_to_remove_docs=CREATE_DOCS is False,
    )
    print_further_instructions(project_name=PROJECT_NAME, github=GITHUB_USER)


if __name__ == "__main__":
    main()
