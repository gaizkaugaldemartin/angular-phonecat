'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/comparador', {
          template: '<phone-comparador></phone-comparador>'
        }).
        when('/nuevo', {
          template: '<phone-list></phone-list>'
        }).
        when('/carritocompra', {
          template: '<phone-list></phone-list>'
        }).
        when('/404', {
          templateUrl: 'error.html'
        }).
        otherwise('/phones');
    }
  ]);
