module.exports = function(grunt) {

  grunt.config.set('jade', {
    dev: {
      options: {
        pretty: true,
        doctype: 'html'
      },
      files: [{
        expand: true,
        extDot: 'last',
        cwd: 'assets/templates/',
        src: ['**/*.jade'],
        dest: '.tmp/public/templates/',
        ext: '.html'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
};
