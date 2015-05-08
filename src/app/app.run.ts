/// <reference path="./app.d.ts"/>

((): void => {

    angular
        .module('app')
        .run(go);

    go.$inject = [
        '$log'
    ];

    // This is the bare minimum to test the log decorator. Fire up the
    // application and check out the console in your browser.
    function go($log) {
        $log.debug('Starting application.');
    }

})();
