# Directus Fresh Example

This is a [Fresh](https://www.fresh.deno.dev) project.

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/directus/examples/tree/main/fresh)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/directus/examples/tree/main/fresh)

## 📌 Prerequisites

This project is based on [Fresh](https://fresh.deno.dev/) and requires Deno to run. To install Deno via homebrew on macOS:

```sh
# macOS
brew bundle --no-lock
```

Or the installer which also works on Linux:

```sh
# macOS or Linux
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Or using PowerShell on Windows:

```shell
irm https://deno.land/install.ps1 | iex
```

Add Deno to your path:

```sh
export DENO_INSTALL="$HOME/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
```

You will need to have the provided [Directus project](../directus) running first before proceeding with this example.

## 🚀 Getting Started

1. Clone this repo.

2. Install dependencies for this example.

   ```shell
   cd fresh
   ```

3. Create a `.env` file by copying the provided `.env.example` file.

4. Start the development server.

   ```shell
   deno task start
   ```

   Your Directus Fresh example is now running at <http://localhost:8000>.

## 🔗 Links

### Directus

- [Official Site](https://directus.io)
- [Documentation](https://docs.directus.io)

### Fresh

- [Official Site](https://fresh.deno.dev/)
- [Documentation](https://fresh.deno.dev/docs/introduction)
