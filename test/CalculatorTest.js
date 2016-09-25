var Calculator = require('../app/Calculator');
var chai = require('chai');
var expect = chai.expect;

describe('Calculator', function(){
	it("should return empty string", function(){
		var calc = new Calculator();
		var result = calc.add("");
		expect(result).to.equal(0);
	});

	it("should return number", function(){
		var calc = new Calculator();
		var result = calc.add("1");
		expect(result).to.equal(1);
	});
});