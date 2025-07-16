import {CHAR_HEIGHT, getPattern, processText} from './utils';

export function print(text: string) {
	const chars = processText(text)
		.reverse()
		.map(({char, form}) => getPattern(char, form));

	const lines = Array.from({length: CHAR_HEIGHT}, () => '');

	for (let row = 0; row < CHAR_HEIGHT; row++) {
		for (const pattern of chars) {
			lines[row] += pattern[row];
		}
	}

	// Print final result
	const sentence = lines.join('\n');
	console.log(sentence);
	return sentence;
}
