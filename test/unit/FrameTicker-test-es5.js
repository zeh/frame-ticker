var expect = require("chai").expect;
var FrameTicker = require("./../../dist/FrameTicker.js").default;

describe("FrameTicker (ES5)", function() {
	it("is a class", function() {
		expect(FrameTicker).to.not.a.function;
	});

	it("can be instantiated", function() {
		expect(new FrameTicker()).to.be.defined;
		expect(new FrameTicker()).to.be.an.instanceof(FrameTicker);
	});
});
