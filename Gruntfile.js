'use strict'

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-bower-task');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		dir: {
			src: ['src'],
			dest: ['dist']
		},

		bower: {
			install: {
				options: {
					targetDir: '<%= dir.src %>/vendor',
					layout: 'byComponent',
					intall: true,
					verbose: false,
					cleanTargetDir: true,
					cleanBowerDir: false
				}
			}
		}
	});

	grunt.registerTask('default', ['bower:install']);
}
