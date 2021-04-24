sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'my/daimler/showpersion/test/integration/pages/MainListReport' ,
        'my/daimler/showpersion/test/integration/pages/MainObjectPage',
        'my/daimler/showpersion/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('my/daimler/showpersion') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);