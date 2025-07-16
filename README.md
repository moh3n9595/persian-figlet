<p align="center">
  <img src="./images/logo.png" alt="Banner" width="20%">
<p>
<h1 align="center">Persian Figlet</h1>
<p align="center">A Figlet-style ASCII art renderer for Persian (Farsi) text with full contextual character shaping and RTL support.</p>
<div align="center">

![CI/CD](https://github.com/moh3n9595/persian-figlet/actions/workflows/build.yml/badge.svg)
[![Codecov](https://codecov.io/gh/moh3n9595/persian-figlet/branch/main/graph/badge.svg?token=4L1NNC592T)](https://codecov.io/gh/moh3n9595/persian-figlet) [![CodeFactor](https://www.codefactor.io/repository/github/moh3n9595/persian-figlet/badge)](https://www.codefactor.io/repository/github/moh3n9595/persian-figlet)
[![NPM](https://img.shields.io/npm/v/persian-figlet.svg)](https://www.npmjs.com/package/persian-figlet)
[![Size](https://badgen.net/bundlephobia/minzip/persian-figlet)](https://bundlephobia.com/result?p=persian-figlet@latest)
[![GitHub contributors](https://img.shields.io/github/contributors/moh3n9595/persian-figlet.svg)](https://GitHub.com/moh3n9595/persian-figlet/contributors/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/moh3n9595/persian-figlet/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](https://github.com/moh3n9595/persian-figlet/compare)
[![Prettier](https://img.shields.io/badge/prettier-1A2C34?logo=prettier&logoColor=F7BA3E)](https://github.com/prettier/prettier)
[![EsLint](https://badges.aleen42.com/src/eslint.svg)](https://eslint.org/)
[![TS](https://badges.aleen42.com/src/typescript.svg)](https://www.typescriptlang.org/)

</div>

## ✨ Features

- ✨ Convert Persian/Farsi text to ASCII art
- 🔤 Support for all Persian alphabet characters
- 📝 Proper handling of Persian text direction (RTL)
- 🔗 Contextual letter forms (isolated, initial, medial, final)
- 🎨 High-quality character patterns with 13-row height
- 📦 TypeScript support with full type definitions
- 🚀 Zero dependencies

## ⚙️ Installation

```bash
npm install persian-figlet
```

```bash
yarn add persian-figlet
```

## 📖 Usage

### Basic Usage

```typescript
import { print } from 'persian-figlet';

// Print Persian text as ASCII art
const result = print('سلام');
console.log(result);

// The function returns the ASCII art string and also logs it
```

### Example Output

```
print('تست');
```

Will output beautiful ASCII art representation of the Persian text "تست".

```
                        
  █ █               █ █ 
                        
█     █   █   █   █    █
████████████████████████
                        
```

## 🙋 Contributing

For help on setting up the repo locally, building, testing, and contributing
please see [CONTRIBUTING.md](https://github.com/moh3n9595/persian-figlet/blob/master/CONTRIBUTING.md).

## 🧑‍💻 Code of Conduct

All developers who wish to contribute through code or issues, take a look at the
[CODE_OF_CONDUCT.md](https://github.com/moh3n9595/persian-figlet/blob/master/CODE_OF_CONDUCT.md).

## 📃 License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/moh3n9595/persian-figlet/blob/master/LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the classic Figlet tool
- Built with love for the Persian language community
