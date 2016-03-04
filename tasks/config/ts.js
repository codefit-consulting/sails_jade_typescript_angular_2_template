/**
 * `less`
 *
 * ---------------------------------------------------------------
 *
 * Compile your typescript files into js.
 *
 * By default, only the `assets/styles/importer.less` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-less
 *
 */
module.exports = function(grunt) {

  grunt.config.set('ts', {
    dev: {
      tsconfig: true,
      options: {
        failOnTypeErrors: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-ts');
};
