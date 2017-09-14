module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// Copy web assets from bower_components to more convenient directories.
        copy: {
            main: {
                files: [
                    // Vendor scripts.
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap-sass/assets/javascripts/',
                        src: ['**/*.js'],
                        dest: 'js/vendors/bootstrap-sass/'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/jquery/dist/',
                        src: ['**/*.js', '**/*.map'],
                        dest: 'js/vendors/jquery/'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/jquery-ui/',
                        src: ['**/*.js', '**/*.map'],
                        dest: 'js/vendors/jquery-ui/'
                    },

                    // Fonts.
                    {
                        expand: true,
                        filter: 'isFile',
                        flatten: true,
                        cwd: 'bower_components/',
                        src: ['bootstrap-sass/assets/fonts/**'],
                        dest: 'fonts/bootstrap'
                    },

                    // Stylesheets
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap-sass/assets/stylesheets/',
                        src: ['**/*.scss'],
                        dest: 'scss/'
                    }
                ]
            },
        },

        // concatenate javascript files
		concat: {
			options: {
				separator: '\n;' // was ; places new line between different files to avoid conflicts
			},
			dist: {
				src: [
					"js/vendors/jquery-ui/jquery-ui.js",
					"js/jquery.mobile.custom.js",
					"js/vendors/bootstrap-sass/bootstrap.min.js",
					"js/main.js",
					"js/featured-boxes.js",
					"js/affix-nav.js"
				],
				dest: 'js/app.min.js'
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
			options: {livereload: true},
			scripts: {
				files: ['<%= concat.dist.src %>'],
				tasks: ['concat']
			},
			sass: {
				files: ['scss/*.scss'],
				tasks: ['compass:dev']
			}
		}
	});
	grunt.registerTask('default', 'watch');
}