(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);


    function AppController($anchorScroll, $location) {
        const vm = this;
        vm.$onInit = function() {

            vm.goToProjects = function() {
                $location.hash('projects');
                $anchorScroll();

            }
        }

    }

})();
