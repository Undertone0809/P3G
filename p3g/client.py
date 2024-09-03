import argparse
import subprocess
import sys
from importlib.metadata import version


def main():
    parser = argparse.ArgumentParser(description="P3G CLI tool")
    subparsers = parser.add_subparsers(dest="command")
    generate_parser = subparsers.add_parser("generate", help="Generate a new project")
    generate_parser.set_defaults(func=generate_proj)
    parser.add_argument(
        "--version", action="version", version=f'%(prog)s {version("p3g")}'
    )
    args = parser.parse_args()

    if hasattr(args, "func"):
        args.func()
    else:
        print(f"Unknown command: {args.command}")
        parser.print_help()
        sys.exit(1)


def generate_proj():
    subprocess.run(
        ["cookiecutter", "gh:Undertone0809/P3G", "--checkout", version("p3g")]
    )


if __name__ == "__main__":
    main()
