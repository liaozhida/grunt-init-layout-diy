module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: {
      tests: ['tmp']
    },
    nodeunit: {
      files: ['test/**/*_test.js'],
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      tasks: {
        src: ['tasks/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },
    layout: {
      default_options: {
        options: {
          dist: './tmp',
          format: ['a', 'b']
        },
        tree: ['/{0}/page/index.ejs', '/{0}/tpl/{1}', '/{0}/static/image/']
      }
    },
  });

  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['clean', 'layout', 'nodeunit', 'clean']);

  // Default task.
  grunt.registerTask('default', ['jshint', 'test']);

};