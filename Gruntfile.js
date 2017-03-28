module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small_1x',
            width: '320',
            suffix: '_1x',
            quality: 20
          },{
            name: 'small_2x',
            width: '720',
            suffix: '_2x',
            quality: 40
          },{
            name: 'large_1x',
            width: '550',
            suffix: 'large_1x',
            quality: 20
          },{
            name: 'large_2x',
            width: '1100',
            suffix: 'large_2x',
            quality: 40
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'img2/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
