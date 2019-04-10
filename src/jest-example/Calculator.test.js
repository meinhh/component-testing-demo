import Calculator from './Calculator';

describe('simple jest example', () => {
	let calculator;

	beforeEach(() => {
		calculator = new Calculator();
	});

	describe('sum', () => {
		it('should return 2 on 1 + 1', () => {
			expect(calculator.sum(1, 1)).toEqual(2);
		});
	});
});