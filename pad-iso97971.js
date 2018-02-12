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
	 * ISO/IEC 9797-1 Padding Method 2.
	 */
	KQReactRedux.pad.Iso97971 = {
	    pad: function (data, blockSize) {
	        // Add 0x80 byte
	        data.concat(KQReactRedux.lib.WordArray.create([0x80000000], 1));

	        // Zero pad the rest
	        KQReactRedux.pad.ZeroPadding.pad(data, blockSize);
	    },

	    unpad: function (data) {
	        // Remove zero padding
	        KQReactRedux.pad.ZeroPadding.unpad(data);

	        // Remove one more byte -- the 0x80 byte
	        data.sigBytes--;
	    }
	};


	return KQReactRedux.pad.Iso97971;

}));
