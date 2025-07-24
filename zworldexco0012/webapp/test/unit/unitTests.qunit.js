/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/worldex/co/zworldexco0012/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
