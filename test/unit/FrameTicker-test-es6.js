import { expect } from "chai";
import FrameTicker from "./../../dist/FrameTicker";

describe("FrameTicker (ES6)", () => {
	it("is a class", function() {
		expect(FrameTicker).to.not.a.function;
	});

	it("can be instantiated", () => {
		expect(new FrameTicker()).to.be.defined;
		expect(new FrameTicker()).to.be.an.instanceof(FrameTicker);
	});
});
