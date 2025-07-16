import {print} from '../print';
import {FontStyle} from '../types';

const text = 'تست';
const longText = 'این یک متن فارسی برای تست عملکرد است';

afterEach(() => {
	vi.restoreAllMocks();
});

describe('Persian Figlet', () => {
	it('should return a string output', () => {
		const result = print(text);
		expect(typeof result).toBe('string');
		expect(result.length).toBeGreaterThan(0);
	});

	it('should suppress console output in silent mode', () => {
		const consoleSpy = vi.spyOn(console, 'log');
		print(text, {silent: true});
		expect(consoleSpy).not.toHaveBeenCalled();
	});

	it('should handle character heights', () => {
		const result = print(text);
		expect(result).toBeDefined();
		expect(result.split('\n')).toHaveLength(13);
	});
});

describe('Performance', () => {
	it('should produce consistent output for same input', () => {
		const result1 = print(text, {silent: true});
		const result2 = print(text, {silent: true});
		expect(result1).toBe(result2);
	});

	it('should use standard font by default', () => {
		const result1 = print(text);
		const result2 = print(text, {font: FontStyle.STANDARD});
		expect(result1).toBe(result2);
	});

	it('should handle reasonable text sizes efficiently', () => {
		const start = Date.now();
		print(longText, {silent: true});
		const end = Date.now();

		// Should complete within reasonable time (0.1 second)
		expect(end - start).toBeLessThan(100);
	});
});
