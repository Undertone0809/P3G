import argparse
import subprocess
import sys
from importlib.metadata import version


def main():
    parser = argparse.ArgumentParser(description="P3G CLI tool")
    subparsers = parser.add_subparsers(dest="command")

    generate_parser = subparsers.add_parser("generate", help="Generate a new project")
    generate_parser.set_defaults(func=generate_proj)

    upgrade_parser = subparsers.add_parser(
        "upgrade", help="Upgrade P3G to the latest version"
    )
    upgrade_parser.set_defaults(func=upgrade_pkg)

    parser.add_argument(
        "--version", action="version", version=f'%(prog)s {version("p3g")}'
    )

    args = parser.parse_args()

    if hasattr(args, "func"):
        args.func()
    else:
        if args.command is not None:
            print(f"Unknown command: {args.command}")
        parser.print_help()
        sys.exit(1)


def generate_proj():
    subprocess.run(
        ["cookiecutter", "gh:Undertone0809/P3G", "--checkout", "v" + version("p3g")]
    )


def upgrade_pkg():
    print("Upgrading P3G to the latest version...")
    subprocess.run([sys.executable, "-m", "pip", "install", "-U", "p3g"], check=True)
    print(f"Successfully upgraded P3G to version {version('p3g')}")


if __name__ == "__main__":
    main()
