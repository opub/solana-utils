# Solana Utils

**Solana Utils** is a utility library for Solana-based projects, written in TypeScript. It provides simple and reusable functions to make working with Solana easier.

## Features
- Written in TypeScript for strong type safety
- Supports both CommonJS and ESModule formats
- Preconfigured with modern tooling: `Rollup`, `ESLint`, `Prettier`, and `Jest`

---

## Getting Started

### Prerequisites
Before setting up the project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [pnpm](https://pnpm.io/) (Package manager)

### Installation
Clone the repository and install dependencies:
```
git clone https://github.com/your-username/solana-utils.git
cd solana-utils
pnpm install
```

---

## Scripts

### Build
To compile the project and generate CommonJS and ESModule outputs:
```
pnpm build
```
The output files will be located in the `dist/` directory.

### Run Tests
To run all unit tests:
```
pnpm test
```

To watch for file changes and re-run tests:
```
pnpm test:watch
```

### Linting
To check the codebase for linting errors:
```
pnpm lint
```

### Formatting
To format the codebase using Prettier:
```
pnpm format
```

### Test Coverage
To generate a test coverage report:
```
pnpm coverage
```
The coverage report will be generated in the `coverage/` directory.

---

## Publishing to npm

Follow these steps to publish the package to [npm](https://www.npmjs.com/):

### 1. Build the Project
Make sure the project is built before publishing:
```
pnpm build
```

### 2. Log in to npm
Log in to your npm account:
```
npm login
```

### 3. Update the Version
Update the version number in `package.json` following [Semantic Versioning](https://semver.org/):
```
npm version <major|minor|patch>
```

### 4. Publish the Package
Publish the package to npm:
```
pnpm publish --access public
```

> **Note:** Make sure the `package.json` file has the correct `"main"`, `"module"`, and `"types"` fields pointing to the `dist/` directory.

---

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve the library.

---

## License
This project is licensed under the [MIT License](LICENSE).
