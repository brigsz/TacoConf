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

		watch: {
            options: {
                livereload: true
            },
			files: ['**']
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	// Default task
	grunt.registerTask( 'default', [ 'connect', 'watch' ] );

};
