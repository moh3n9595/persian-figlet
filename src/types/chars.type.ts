export enum CharForm {
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
 * Character pattern definition for a specific char form
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
 * Kerning definition for character spacing adjustments
 */
export interface KerningDefinition {
	/** Left kerning distance (negative values pull character left) */
	left: number;
	/** Right kerning distance (negative values pull next character closer) */
	right: number;
}

/**
 * Character with pattern and kerning information
 */
export interface RenderedCharacter {
	/** The character pattern */
	pattern: CharacterPattern;
	/** The kerning information */
	kerning: KerningDefinition;
}

/**
 * Complete character definition with all four forms and kerning
 */
export type CharacterDefinition = {
	[key in CharForm]: RenderedCharacter;
};

/**
 * Font definition containing all character patterns and kerning
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
	form: CharForm;
}
