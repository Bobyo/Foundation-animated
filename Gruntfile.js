module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-bowercopy');

	grunt.initConfig({
		bowercopy: {
			options: {
				srcPrefix: 'bower_components'
			},
			scripts: {
				options: {
				    destPrefix: 'scss'
				},
				files: {
				    'animate': 'animate.scss/source'
				}
			}
		}
	});
}