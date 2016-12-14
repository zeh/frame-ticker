require("core-js/shim");
require("babel-core/register")();
require("jsdom-global")();

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// https://gist.github.com/paulirish/1579671
// For testing only; adapted for our current use to simulate 60 fps

// MIT license

(function() {
	var desiredFPS = 60;
	var vendors = ["ms", "moz", "webkit", "o"];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
		window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"]
			|| window[vendors[x] + "CancelRequestAnimationFrame"];
	}

	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 1000 / desiredFPS);
			var id = window.setTimeout(function() {
				callback(currTime + timeToCall);
			}, timeToCall);
			return id;
		};
	}

	if (!window.cancelAnimationFrame) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}
}());
