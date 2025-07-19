# Contributing to Persian Figlet

Thanks for contributing, you rock!

When it comes to open source, there are many different kinds of contributions that can be made, all of which are valuable. Here are a few guidelines that should help you as you prepare your contribution.

## Code of Conduct

Persian Figlet has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the full text](https://github.com/moh3n9595/persian-figlet/blob/master/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Reporting Issues and Asking Questions

Before opening an issue, please search the [issue tracker](https://github.com/moh3n9595/persian-figlet/issues) to make sure your issue hasn't already been reported.

### Bug Reports

When reporting bugs, please include:

- The Persian text you're trying to convert
- Expected ASCII art output
- Actual output received
- Your environment (Node.js version, OS, etc.)

### Feature Requests

Please open an issue with a proposal for a new feature or refactoring before starting on the work. We don't want you to waste your efforts on a pull request that we won't want to accept.

Consider including:

- Use case for the feature
- Examples of how it would work
- Any Persian typography considerations

## Development

Visit the [Issue tracker](https://github.com/moh3n9595/persian-figlet/issues) to find a list of open issues that need attention.

Fork, then clone the repo:

\`\`\`bash
git clone https://github.com/moh3n9595/persian-figlet.git
cd persian-figlet
\`\`\`

This repository uses Yarn to manage packages. Install dependencies with:

\`\`\`bash
yarn install
\`\`\`

### Branch Conventions

After forking the repo, create a branch from `main` with the below structure:

1. Use grouping tokens as prefixes separated with a slash:
   - **feature/\*** feature or feature set
   - **bugfix/\*** resolves an issue
   - **refactor/\*** refactor a piece of code
   - **hotfix/\*** resolves an important issue
   - **release/\*** prepare release

2. Add a short descriptor of the task:

   > Use kebab-case style with imperative tense.
   - feature/**add-new-character**
   - bugfix/**fix-char-spacing**
   - feature/**improve-pattern-quality**

> Read [here](https://www.conventionalcommits.org/en/v1.0.0/) for more information about conventions.

### Building

Running the `build` task will create both a CommonJS module-per-module build and a UMD build.

\`\`\`bash
yarn build
\`\`\`

### Testing and Linting

To run the tests:

\`\`\`bash
yarn test
\`\`\`

To continuously watch and run tests, run the following:

\`\`\`bash
yarn test:watch
\`\`\`

To perform linting with `eslint`, run the following:

\`\`\`bash
yarn lint
\`\`\`

### Adding New Characters

When adding support for new Persian characters:

1. Add the character pattern to `src/utils/chars.util.ts` in the `persianPatterns` object
2. Include all four forms: `isolated`, `initial`, `medial`, `final`
3. Ensure the pattern is exactly 13 rows high
4. Use `██` blocks for filled areas and spaces for empty areas
5. Test the character in different contexts (beginning, middle, end of words)
6. Add the character to the supported characters list in README.md

### Character Pattern Guidelines

- Each character should be 13 rows high (matching `CHAR_HEIGHT`)
- Use `██` (double block) for filled areas
- Use spaces for empty areas
- Maintain consistent visual weight across characters
- Consider how the character connects to adjacent chars
- Test patterns with various combinations

### Testing Character Patterns

Create test cases for new characters:

\`\`\`typescript
describe('New Character', () => {
it('should render correctly in isolation', () => {
expect(print('نیا')).toContain('expected pattern');
});

it('should connect properly in words', () => {
expect(print('کلمه')).toBeDefined();
});
});
\`\`\`

### Playground / Testing

You can test your changes by:

1. Running `yarn dev` to build the library
2. Creating test files to verify character rendering
3. Testing with various Persian text samples

### Commits Conventions

The commit message should be structured as follows:

\`\`\`
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
\`\`\`

Real world examples can look like this:

\`\`\`
chore: run tests on travis ci
\`\`\`

\`\`\`
fix(chars): improve ک character spacing
\`\`\`

\`\`\`
feat(patterns): add support for ژ character
\`\`\`

### Create a PR

- Write a pull request title with commit conventions
- Send your PR to `main` branch
- Include screenshots of ASCII art output if adding/modifying characters
- Describe any Persian typography considerations
- Test your changes with various Persian text samples

## Persian Typography Considerations

When contributing to Persian Figlet, keep in mind:

- Persian text is written right-to-left (RTL)
- Chars have different forms based on their position in words
- Some chars don't connect to following chars
- Proper spacing between disconnected chars is important
- Visual balance and readability in ASCII art form

## Questions?

If you have questions about contributing, feel free to open an issue with the "question" label.
