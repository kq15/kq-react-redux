;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./x64-core"), require("./sha3"), require("./hmac"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./x64-core", "./sha3", "./hmac"], factory);
	}
	else {
		// Global (browser)
		factory(root.KQReactRedux);
	}
}(this, function (KQReactRedux) {

	return KQReactRedux.HmacSHA3;

}));
