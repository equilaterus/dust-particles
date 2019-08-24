module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env']
      },
      dist: {
        files: {
          'dist/particles.js': 'src/particles.js'
        }
      }
    }
  });

  grunt.registerTask('default', ['babel']);
}
