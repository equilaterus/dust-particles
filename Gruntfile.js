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
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dist/particles.min.js': ['dist/particles.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['babel', 'uglify']);
}
