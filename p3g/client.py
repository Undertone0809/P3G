import subprocess
import sys


def main():
    if len(sys.argv) < 2:
        print("Usage: p3g <command>")
        print("Available commands: generate")
        sys.exit(1)

    command = sys.argv[1]

    if command == "generate":
        generate_proj()
    else:
        print(f"Unknown command: {command}")


def generate_proj():
    subprocess.run(["cookiecutter", "gh:Undertone0809/P3G", "--checkout", "v1.3.1"])


if __name__ == "__main__":
    main()
