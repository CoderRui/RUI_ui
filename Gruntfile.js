module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            css: {
                options: {
                    compress: true,
                    stricMath: true
                },
                files: {
                    "umd/mor-ui.min.css": ['components/**/*.less', 'components/*.less']
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
                src: 'umd/mor-ui.min.css',
                dest: 'umd/mor-ui.min.css'
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
                src: 'umd/mor-ui.min.css',
                dest: 'dist/index.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', ['less', 'postcss']);
};

