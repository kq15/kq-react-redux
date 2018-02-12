;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.KQReactRedux);
	}
}(this, function (KQReactRedux) {

	/**
	 * A noop padding strategy.
	 */
	KQReactRedux.pad.NoPadding = {
	    pad: function () {
	    },

	    unpad: function () {
	    }
	};


	return KQReactRedux.pad.NoPadding;

}));
