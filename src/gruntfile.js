module.exports = function(grunt) {
    const tasks = [
        // 'csslint', 
        // 'scsslint',
        'sass', 
        'cssmin', 
      ];
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      esversion: 8,
      csslint: {
        strict: {
          options: {
            import: 1
          },
          src: [
            'assets/css/**/*.css',
            // '<%= pkg.name %>.css', // DO NOT CHECK THIS BECAUSE OF BOOTSTRAP
            // '<%= pkg.name %>.min.css', // DO NOT CHECK THIS BECAUSE OF BOOTSTRAP
          ]
         }
      },
      scsslint: {
        allFiles: [
          'scss/**/*.scss',
        ],
        options: {
          // bundleExec: true,
          // configFile: '.scss-lint.yml',
          failOnWarning: false,
          // reporterOutput: 'scss-lint-report.xml',
          colorizeOutput: true
        },
      },
      sass: { 
        dist: { 
          options: {
            style: 'expanded',
            cacheLocation: '/tmp/.sass-cache',
            preserveComments: false
          },
          files: { 
            'css/<%= pkg.name %>.css': 'scss/app.scss' // 'destination': 'source'
          }
        }
      }, 
      cssmin: {
        options: {
          keepSpecialComments: 0,
          specialComments: 0,
          sourceMap: true
        },
        target: {
          files: {
            'css/<%= pkg.name %>.min.css': 'css/<%= pkg.name %>.css' 
          }
        }
      },
      watch: {
        files: ['gruntfile.js','scss/**/*.scss'],
        tasks: tasks
      }
    }); 
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass'); 
    grunt.loadNpmTasks('grunt-contrib-cssmin');
  
    grunt.registerTask('default', tasks);
  };