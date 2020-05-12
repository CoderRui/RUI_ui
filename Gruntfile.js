module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            css: {
                options: {
                    compress: true,
                    stricMath: true
                },
                files: {
                    "dist/r-ui.min.css": ['components/**/*.less', 'components/*.less']
                }
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')(),
                ]
            },
            dist: {
                src: 'dist/r-ui.min.css',
                dest: 'dist/r-ui.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', ['less', 'postcss']);
};

