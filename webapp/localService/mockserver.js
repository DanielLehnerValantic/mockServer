sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/base/util/UriParameters"
], function (MockServer, UriParameters) {
	"use strict";

	return {
		init: function () {
			// create
			var oMockServer = new MockServer({
				rootUri: "/sap/opu/odata/sap/Z_EWM_PTWY_LOGIMAT_SRV/"
			});

			var oUriParameters = new UriParameters(window.location.href);

			// configure mock server with a delay
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: oUriParameters.get("serverDelay") || 500
			});

			// simulate
			var sPath = sap.ui.require.toUrl("com/valantic/mockserver/localService");
			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

			// start
			oMockServer.start();

            
            // this.oMockServer = new MockServer({
			// 	rootUri: "/sap/opu/odata/sap/Z_EWM_PTWY_LOGIMAT_SRV/"
			// });
			// var sMetadataRelativePath = "../localService/metadata.xml";
			// var oMockSettings = {
			// 	sMockdataBaseUrl: "../localService/data",
			// 	bGenerateMissingMockData: true
			// };
			// var oMockServer = this.oMockServer;

			// oMockServer.simulate(sMetadataRelativePath, oMockSettings);
			// oMockServer.start();
		}
	};

});