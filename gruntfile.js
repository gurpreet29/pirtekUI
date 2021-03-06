module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-grunticon');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // concatenate javascript files
        concat: {
            options: {
                separator: '\n;' // was ; places new line between different files to avoid conflicts
            },
            dist: {
                src: [
                    "js/vendors/vue.js",
                    "js/vendors/jquery/jquery.min.js",
                    "js/vendors/jquery/jquery.mobile.custom.js",
                    "js/vendors/bootstrap/*.js",
                    // "js/vendors/bootstrap/bootstrap/*.js",
                    "js/vendors/picturefill.js",
                    "js/components/filter/*.js",
                    "js/global.js",
                    // "js/vendors/google-map.js",
                    "js/components/*.js"


                ],
                dest: 'js/app.js'
            }
        },

        // minify or "uglify" javascript files
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'js/app.min.js': ['<%= concat.dist.dest %>'] // dist/<%= pkg.name %>.min.js
                }
            }
        },

        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                }
            }
        },

        watch: {
            options: { livereload: true },
            scripts: {
                files: ['<%= concat.dist.src %>'],
                tasks: ['concat', 'uglify']
            },
            sass: {
                files: ['scss/*.scss'],
                tasks: ['compass:dev']
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')
                ]
            },
            dist: {
                src: 'css/*.css'
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['app.css'],
                // src: ['app.css', '!*.min.css'],
                dest: 'css/',
                ext: '.min.css'
            }
        },
        svgmin: {
            dist: {
                options: {
                    plugins: [{
                        removeXMLProcInst: false
                    }]
                },

                files: [{
                    expand: true,
                    cwd: 'img/svg/src',
                    src: ['*.svg'],
                    dest: 'img/svg/'
                }]
            }
        },

        grunticon: {
            myIcons: {
                files: [{
                    expand: true,
                    cwd: 'img/svg/',
                    src: ['*.svg', '*.png'],
                    dest: 'img/'
                }],
                options: [{}],
            }
        },

        clean: {
            html: ['img/preview.html', 'img/*.css', 'img/grunticon.loader.js']
        },

        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['*.css'],
                    dest: 'css/icons/',
                    filter: 'isFile'
                }, ],
            },
        }
    });
    grunt.registerTask('default', ['postcss:dist', 'cssmin', 'watch']);
    grunt.registerTask('svgbuild', ['svgmin', 'grunticon', 'copy', 'clean']); // Build and compress svgs

}