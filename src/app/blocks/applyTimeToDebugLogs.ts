/// <reference path="../app.d.ts"/>

((): void => {

    angular
        .module('app.blocks')
        .config(config);

    config.$inject = ['$provide'];
    function config($provide: ng.auto.IProvideService): void {
        return $provide.decorator('$log', ['$delegate', applyTimeToDebugLogs]);
    }

    function applyTimeToDebugLogs($delegate: ng.ILogService): ng.ILogService {

        // Hold a pointer to the original debug function.
        var debugFn: Function = $delegate.debug;

        // Rewrite the debug function, prepending the current time to
        // the function.
        $delegate.debug = function () {
            var args: any[] = Array.prototype.slice.call(arguments);
            var now: string = new Date().toLocaleTimeString() + ' -';
            args = [].concat(now).concat(args);
            debugFn.apply(null, args);
        };

        // Return the log service.
        return $delegate;
    }

})();
