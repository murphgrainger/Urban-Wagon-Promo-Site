(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);


    function AppController($anchorScroll, $location, $http) {
        const vm = this;
        const SERVER_URL = 'http://localhost:3001';
        const HEROKU_URL = 'https://modern-pioneer.herokuapp.com'


        vm.$onInit = function() {
            }

            vm.formSubmit = function(user) {
              return $http.post(getURL() + `/user`, user).then(function(response) {
                vm.success = "Success!"
                  return vm.success;
                });
              };

            function getURL() {
               if (window.location.host.indexOf('localhost') != -1) {
                   return SERVER_URL;
               } else {
                   return HEROKU_URL;
               }
              }
        }

})();
