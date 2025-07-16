import {print} from '../print';

describe('Persian Figlet', () => {
	it('print function correctly returns output', () => {
		expect(typeof print('تست')).toBe('string');
	});
});
