/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	var host = grunt.option('host') || 'localhost';
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					port: port,
					base: '.',
                    livereload: true,
                    open: true,
                    hostname: host
				}
			}
		},
		'gh-pages': {
	      src: ['**']
		},

		watch: {
            options: {
                livereload: true
            },
            src: {
				files: ['index.html', '!node_modules/**']
			}
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );
	grunt.loadNpmTasks( 'grunt-gh-pages' );

	// Default task
	grunt.registerTask( 'default', [ 'connect', 'watch' ] );
	grunt.registerTask( 'publish', [ 'gh-pages' ] );

};
