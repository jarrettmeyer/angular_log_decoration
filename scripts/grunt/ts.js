module.exports = function () {

    return {

        default: {
            src: ['src/app/**/*.ts'],
            outDir: 'src/js/app',
            options: {
                comments: false,
                sourceMap: true,
                target: 'es5'
            }
        }

    };

};
