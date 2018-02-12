;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./md5"), require("./hmac"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./md5", "./hmac"], factory);
	}
	else {
		// Global (browser)
		factory(root.KQReactRedux);
	}
}(this, function (KQReactRedux) {

	return KQReactRedux.HmacMD5;

}));
