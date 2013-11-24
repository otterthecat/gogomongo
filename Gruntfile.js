module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {

      files: ['app.js', 'models/*.js', 'controllers/*.js', 'lib/*.js', 'public/javascripts/*.js']
    },

    browserify: {

      basic: {

        src: ['client/main.js'],
        dest: 'public/javascripts/main.js',
        options: {

          debug: true
        }
      }
    },

    mochacli: {

        options: {

            reporter: 'nyan',
            bail: true
        },
        files: ['test/specs/*.js']
    },

    complexity: {

        generic: {
            src: [
                  'app.js',
                  'controllers/*.js',
                  'models/*.js',
                  'public/javascripts/*.js',
                  'lib/*.js'
                ],
            options: {

                /*
                  @errorsOnly - show only maintainabilty errors
                  @cycolmatic - typical acceptance is a value of 4 (lower is better)
                  @halstead - typcial acceptance is 10, (lower is better)
                  @maintainability - typical acceptance is ~70. Higher is better, 171 max
                */
                errorsOnly: false,
                cyclomatic: 3,
                halstead: 10,
                maintainability: 100
            }
        },
    },

    less: {

      dev: {

        src: './less/main.less',
        dest: './public/stylesheets/main.css'
      }
    },

    csslint: {

      options: {

        'box-sizing': false,
        'box-model': false,
        'adjoining-classes': false
      },

      src: ['./public/stylesheets/*.css']
    },

    watch: {

      css: {

        files: 'less/*',
        tasks: ['css']
      }
    },

    plato: {
      dev: {
        options : {
          jshint : false
        },
        files: {
          'reports': ['app.js',
                      'models/*.js',
                      'controllers/*.js',
                      'lib/*.js',
                      'public/javascripts/*.js',
                      'client/*.js'
                      ]
        },
      },
    }
  });

  // Load Grunt Tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-complexity');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-plato');

  // Defined task(s).
  grunt.registerTask('default', ['jshint', 'mochacli', 'complexity', 'csslint']);
  grunt.registerTask('js', ['jshint', 'mochacli', 'complexity', 'browserify']);
  grunt.registerTask('css', ['less:dev', 'csslint']);
  grunt.registerTask('report', ['plato:dev']);
};