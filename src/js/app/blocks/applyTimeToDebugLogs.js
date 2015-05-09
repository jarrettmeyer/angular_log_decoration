(function () {
    angular.module('app.blocks').config(config);
    config.$inject = ['$provide'];
    function config($provide) {
        return $provide.decorator('$log', ['$delegate', applyTimeToDebugLogs]);
    }
    function applyTimeToDebugLogs($delegate) {
        var debugFn = $delegate.debug;
        $delegate.debug = function () {
            var args = Array.prototype.slice.call(arguments);
            var now = new Date().toLocaleTimeString() + ' -';
            args = [].concat(now).concat(args);
            return debugFn.apply(null, args);
        };
        return $delegate;
    }
})();
//# sourceMappingURL=applyTimeToDebugLogs.js.map