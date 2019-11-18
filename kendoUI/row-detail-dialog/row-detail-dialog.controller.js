(function () {
    "use strict";

    angular
        .module("app")
        .controller("RowDetailDialogController", RowDetailDialogController);

    RowDetailDialogController.$inject = [
        "$stateParams",
        "$state"
    ];

    /* @ngInject */
    function RowDetailDialogController($stateParams, $state) {
        var vm = this;
        vm.gotoHomePage = gotoHomePage;
        vm.selectedItem = $stateParams.data;

        function gotoHomePage(){
            $state.go("home")
        }
    }
})();