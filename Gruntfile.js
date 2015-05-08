var path = require('path');

module.exports = function (grunt) {

    // https://github.com/sindresorhus/time-grunt
    require('time-grunt')(grunt);

    // https://github.com/shootaroo/jit-grunt
    require('jit-grunt')(grunt, {
        htmlbuild: 'grunt-html-build'
    });

    // https://github.com/firstandthird/load-grunt-config
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'scripts/grunt'),
        data: {
        }
    });

};
