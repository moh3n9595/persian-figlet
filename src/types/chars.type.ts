export enum LetterForm {
	ISOLATED = 'isolated',
	INITIAL = 'initial',
	MEDIAL = 'medial',
	FINAL = 'final',
}

/**
 * Available font styles for Persian Figlet
 */
export enum FontStyle {
	/** Standard Persian font with traditional block characters */
	STANDARD = 'standard',
}

/**
 * Configuration options for printing Persian text
 */
export interface PrintOptions {
	/** Font style to use for rendering */
	font?: FontStyle;
	/** Whether to log output to console */
	silent?: boolean;
}

/**
 * Character pattern definition for a specific letter form
 */
export type CharacterPattern = [
	string,
	string,
	string,
	string,
	string,
	string,
	string,
	string,
	string,
	string,
	string,
	string,
	string,
];

/**
 * Complete character definition with all four forms
 */
export type CharacterDefinition = {
	[key in LetterForm]: CharacterPattern;
};

/**
 * Font definition containing all character patterns
 */
export type FontDefinition = {
	[character: string]: CharacterDefinition;
};

/**
 * Processed character with its determined form
 */
export interface ProcessedCharacter {
	/** The character itself */
	char: string;
	/** The form this character should take */
	form: LetterForm;
}
