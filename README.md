# Quark CLI

A simple cli tool to generate react components based on atomic folder structure

The CLI is _**interactive**_

![App Screenshot](https://github.com/subhamayd2/quark-cli/blob/master/ss.png?raw=true)

## Installation

Install globally (_preferred_) with npm

```bash
  npm install -g quark-cli
```

## Usage

```bash
  # Create an atom level React component
  quark generate atom
```

### Overview

```bash
# quark g --help

Usage: quark g|generate ["atom" | "molecule" | "organism" | "page" | "template" | "util" | "intl"]

generate a new Component - e.g. React Component, utils, intl, etc.

Options:
  -d, --defaults  Use default values
  -h, --help      display help for command
```

### Default values

```json
{
  "template": {
    "hasProps": true,
    "useReactNamespace": false
  },
  "useTypescript": false,
  "jsExtension": ".js",
  "intlFilename": "messages"
}
```

## License

[ISC](https://choosealicense.com/licenses/isc/)
