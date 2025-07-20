<p align="center">
  <img src="./images/logo.png" alt="Banner" width="20%">
<p>
<h1 align="center">Persian Figlet</h1>
<p align="center">A Figlet-style ASCII art renderer for Persian (Farsi) text with full contextual character shaping and RTL support.</p>
<div align="center">

![CI/CD](https://github.com/moh3n9595/persian-figlet/actions/workflows/build.yml/badge.svg) ![Vercel Deploy](https://deploy-badge.vercel.app/vercel/persian-figlet?name=website)
[![CodeCov](https://codecov.io/gh/moh3n9595/persian-figlet/graph/badge.svg?token=WN2WK8QQMJ)](https://codecov.io/gh/moh3n9595/persian-figlet) [![CodeFactor](https://www.codefactor.io/repository/github/moh3n9595/persian-figlet/badge)](https://www.codefactor.io/repository/github/moh3n9595/persian-figlet)
[![NPM](https://img.shields.io/npm/v/persian-figlet.svg)](https://www.npmjs.com/package/persian-figlet)
[![Size](https://badgen.net/bundlephobia/min/persian-figlet)](https://bundlephobia.com/result?p=persian-figlet@latest)
[![GitHub contributors](https://img.shields.io/github/contributors/moh3n9595/persian-figlet.svg)](https://GitHub.com/moh3n9595/persian-figlet/contributors/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/moh3n9595/persian-figlet/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](https://github.com/moh3n9595/persian-figlet/compare)
[![Prettier](https://img.shields.io/badge/prettier-1A2C34?logo=prettier&logoColor=F7BA3E)](https://github.com/prettier/prettier)
[![EsLint](https://badges.aleen42.com/src/eslint.svg)](https://eslint.org/)
[![TS](https://badges.aleen42.com/src/typescript.svg)](https://www.typescriptlang.org/)

</div>

## 🌐 Try it Online

**[🚀 Live Demo - Persian Figlet Web Tool](https://persian-figlet.vercel.app)**

Experience Persian Figlet directly in your browser with our interactive web tool.

## ✨ Features

- 🎨 **Multiple Font Styles**: Standard and Slim fonts with distinct visual characteristics
- 🔤 **Complete Persian Support**: All Persian chars with proper contextual forms
- ↔️ **Kerning System**: Intelligent character spacing with overlap support for authentic Persian typography
- 🔗 **Smart Char Connection**: Automatic handling of char joining rules
- 📝 **TypeScript Support**: Full type definitions and IntelliSense support
- 🎯 **Easy to Use**: Simple API with sensible defaults
- 🧪 **Well Tested**: Comprehensive test coverage
- 📦 **Zero Dependencies**: Lightweight and self-contained

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
import { print, FontStyle } from 'persian-figlet';

// Basic usage with default font
print('سلام دنیا');

// Using different fonts
print('سلام دنیا', { font: FontStyle.STANDARD });

// Silent mode (no console output)
const result = print('سلام دنیا', { silent: true });
console.log(result);
```

### Example Output

```
print('تست');
```

Will output beautiful ASCII art representation of the Persian text "تست".

```                     
    █ █                 █ █ 
                        
█         █   █   █   █    █
████████████████████████████
```

## 🚀 Roadmap & Future Work

1. **Add & Create More Fonts**  
   - Design “Slim”, “Rounded” or “Shadow” variations  
   - Allow community‑contributed font packs via a simple JSON schema

2. **Ligature & Diacritic Support**  
   - Render optional diacritics above/below base chars
  
3. **Interactive Playground & Live Preview**  
   - Web demo to type in Persian and see instant Figlet output  
   - Let users tweak spacing, font, and colors in real time  

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
