import chalk from 'chalk';
import {Command} from 'commander';
import {FontStyle, print} from 'persian-figlet';

import packageJson from '../package.json';

import fs from 'fs';

const program = new Command();

program
	.name(packageJson?.name)
	.description(packageJson?.description)
	.version(packageJson?.version, '-v, --version', 'display version number');

program
	.argument('[text]', 'Persian text to convert to ASCII art')
	.option('-f, --font <font>', 'font style to use', 'standard')
	.option(
		'-c, --color <color>',
		'output color (red, green, blue, yellow, magenta, cyan, white)',
		'',
	)
	.option('-o, --output <file>', 'output to file instead of console')
	.option('--list-fonts', 'list available fonts')
	.option('--info', 'show detailed information about the library')
	.action((text, options) => {
		try {
			// Handle special options
			if (options.listFonts) {
				console.log(chalk.cyan('Available fonts:'));
				console.log('  • standard - Traditional Persian block characters');
				return;
			}

			if (options.info) {
				showInfo();
				return;
			}

			// Check if text is provided
			if (!text) {
				console.error(
					chalk.red('Error: Please provide text to convert to ASCII art'),
				);
				console.log(chalk.gray('Usage: persian-figlet "متن شما"'));
				console.log(
					chalk.gray('Or use: persian-figlet --help for more options'),
				);
				process.exit(1);
			}

			// Validate font
			if (!Object.values(FontStyle).includes(options.font)) {
				console.error(
					chalk.red(
						`Error: Invalid font "${options.font}". Use --list-fonts to see available fonts.`,
					),
				);
				process.exit(1);
			}

			// Generate ASCII art
			const result = print(text, {
				font: options.font,
				silent: true,
			});

			// Apply color if specified
			let output = result;
			if (options.color) {
				const colorMap: {[key: string]: (text: string) => string} = {
					red: chalk.red,
					green: chalk.green,
					blue: chalk.blue,
					yellow: chalk.yellow,
					magenta: chalk.magenta,
					cyan: chalk.cyan,
					white: chalk.white,
				};

				const colorFunc = colorMap[options.color.toLowerCase()];
				if (colorFunc) {
					output = colorFunc(result);
				} else {
					console.error(
						chalk.red(
							`Error: Invalid color "${options.color}". Available colors: red, green, blue, yellow, magenta, cyan, white`,
						),
					);
					process.exit(1);
				}
			}

			// Output to file or console
			if (options.output) {
				try {
					fs.writeFileSync(options.output, result, 'utf8');
					console.log(chalk.green(`✓ ASCII art saved to ${options.output}`));
				} catch (error) {
					console.error(chalk.red(`Error writing to file: ${error}`));
					process.exit(1);
				}
			} else {
				console.log(output);
			}
		} catch (error) {
			console.error(chalk.red(`Error: ${error}`));
			process.exit(1);
		}
	});

function showInfo() {
	console.log(chalk.cyan.bold('\nPersian Figlet\n'));
	console.log(chalk.gray(`${packageJson?.description}\n`));

	console.log(chalk.yellow('Features:'));
	console.log('  • Advanced kerning system with character overlap support');
	console.log('  • Complete Persian character support with contextual forms');
	console.log('  • Right-to-left (RTL) text processing');
	console.log('  • Zero dependencies core library\n');

	console.log(chalk.yellow('Links:'));
	console.log(
		`  • Web Tool: ${chalk.blue('https://persian-figlet.vercel.app')}`,
	);
	console.log(
		`  • GitHub: ${chalk.blue('https://github.com/moh3n9595/persian-figlet')}`,
	);
	console.log(
		`  • NPM: ${chalk.blue('https://www.npmjs.com/package/persian-figlet')}\n`,
	);

	console.log(chalk.yellow('Version:'), packageJson?.version);
	console.log(chalk.yellow('License:'), packageJson?.license, '\n');
}

// Handle pipe input
if (!process.stdin.isTTY) {
	let input = '';
	process.stdin.setEncoding('utf8');

	process.stdin.on('data', (chunk) => {
		input += chunk;
	});

	process.stdin.on('end', () => {
		const text = input.trim();
		if (text) {
			const result = print(text, {font: FontStyle.STANDARD, silent: true});
			console.log(result);
		}
	});
} else {
	program.parse();
}
