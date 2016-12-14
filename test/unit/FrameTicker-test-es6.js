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

	it("starts paused", function(done) {
		this.timeout(4 * 1000);

		const t = new FrameTicker(NaN, NaN, true);
		let c = 0;
		t.onTick.add((s, d, f) => {
			c++;
		});
		setTimeout(function() {
			t.dispose();
			expect(c).to.equal(0);
			done();
		}, 1000);
	});

	it("dispatches at about 60fps by default", function(done) {
		this.timeout(4 * 1000);

		const t = new FrameTicker();
		let c = 0;
		t.onTick.add((s, d, f) => {
			c++;
		});
		setTimeout(function() {
			t.dispose();
			expect(c).to.be.within(57, 61);
			done();
		}, 1000);
	});

	it("dispatches at about 30fps", function(done) {
		this.timeout(4 * 1000);

		const t = new FrameTicker(30);
		let c = 0;
		t.onTick.add((s, d, f) => {
			c++;
		});
		setTimeout(function() {
			t.dispose();
			expect(c).to.be.within(27, 31);
			done();
		}, 1000);
	});

	it("dispatches at about 120fps", function(done) {
		this.timeout(4 * 1000);

		const t = new FrameTicker(NaN, 120);
		let c = 0;
		t.onTick.add((s, d, f) => {
			c++;
		});
		setTimeout(function() {
			t.dispose();
			expect(c).to.be.within(115, 121);
			done();
		}, 1000);
	});

	// TODO: timeScale; onPause; onResume; onTickOncePerFrame; animateOnce;
});
