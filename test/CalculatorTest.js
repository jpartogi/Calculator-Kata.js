var Calculator = require('../app/Calculator');
var chai = require('chai');
var expect = chai.expect;

describe('Calculator', function(){
	it("should returns empty string", function(){
		var calc = new Calculator();
		var result = calc.add("");
		expect(result).to.equal(0);
	});
});