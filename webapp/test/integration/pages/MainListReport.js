sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var AdditionalCustomListReportDefinition = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'my.daimler.showpersion',
            componentId: 'PersonList',
            entitySet: 'Person'
        },
        AdditionalCustomListReportDefinition
    );
});