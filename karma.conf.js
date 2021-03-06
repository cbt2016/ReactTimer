var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files:  ['app/tests/**/*.test.jsx'],
    preprocessors : {
      'app/tests/**/*.test.jsx' : ['webpack','sourcemap']
    },
    reporters : ['mocha'],
    client: {
      mocha :{
        timeout: '5000' //if test lasts more than 5 sec then say it failed
      }
    },
    webpack: webpackConfig,
    webpackServer : {
      noInfo : true
    }
  });
}
