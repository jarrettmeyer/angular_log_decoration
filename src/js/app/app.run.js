(function () {
    angular.module('app').run(go);
    go.$inject = [
        '$log'
    ];
    function go($log) {
        $log.debug('Starting application.');
    }
})();
//# sourceMappingURL=app.run.js.map