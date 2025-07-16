import {FontStyle, type PrintOptions} from './types';
import {CHAR_HEIGHT, getPattern, processText} from './utils';

/**
 * Convert Persian text to ASCII art using figlet-style fonts
 *
 * @param text - The Persian text to convert to ASCII art
 * @param options - Configuration options for printing
 * @param options.font - Font style to use (default: STANDARD)
 * @param options.silent - Whether to suppress console output (default: false)
 * @returns The generated ASCII art as a string
 *
 * @example
 * \`\`\`typescript
 * // Basic usage with default font
 * const result = print('سلام');
 *
 * // Using standard font
 * const result = print('سلام', { font: FontStyle.STANDARD });
 *
 * // Silent mode (no console output)
 * const result = print('سلام', { silent: true });
 * \`\`\`
 */
export function print(text: string, options: PrintOptions = {}): string {
	const {font = FontStyle.STANDARD, silent = false} = options;

	// Process text and get character patterns
	const chars = processText(text)
		.reverse()
		.map(({char, form}) => getPattern(char, form, font));

	// Initialize lines array for building the output
	const lines = Array.from({length: CHAR_HEIGHT}, () => '');

	// Build each row of the ASCII art
	for (let row = 0; row < CHAR_HEIGHT; row++) {
		for (const pattern of chars) {
			lines[row] += pattern[row];
		}
	}

	// Join lines to create final output
	const sentence = lines.join('\n');

	// Output to console unless silent mode is enabled
	if (!silent) {
		console.log(sentence);
	}

	return sentence;
}
