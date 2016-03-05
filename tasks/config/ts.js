module.exports = function(grunt) {

  grunt.config.set('ts', {
    assets: {
      src: ["assets/**/*.ts"],
      outDir: ".tmp/public/js",
      options: {
        verbose: true,
        rootDir: "assets/js"
      },
      tsconfig: {
        tsconfig: "./assets_tsconfig.json"
      }
    },
    api: {
      src: ["api/**/*.ts"],
      options: {
        verbose: true,
      },
      tsconfig: {
        tsconfig: "./api_tsconfig.json"
      }
    }
  });  

  grunt.loadNpmTasks('grunt-ts');
};
