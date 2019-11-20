(function () {
    "use strict";

    angular
        .module("app")
        .controller("newAngularProjectController", newAngularProjectController);

    newAngularProjectController.$inject = [
        "newAngularProjectService",
        "$state"
    ];

    /* @ngInject */
    function newAngularProjectController(newAngularProjectService, $state) {
        var vm = this;
        var kgrid, dgrid;
        vm.gridOptions = {
            dataSource: new kendo.data.DataSource({
                data: newAngularProjectService.getDataForGrid(),
                pageSize: 5
            }),
            height: 600,
            scrollable: true,
            sortable: true,
            selectable: true,
            filterable: true,
            pageable: true,
            detailInit: childGridOptions,
            dataBound: function () {
                this.expandRow(this.tbody.find("tr.k-master-row").first());
                kgrid = this;
            },
            columns: [{
                field: "male",
                title: "Star Cast Male",
                width: "120px"
            }, {
                field: "female",
                title: "Star Cast Female",
                width: "120px"
            }, {
                field: "movie_name",
                title: "Movie Name",
                width: "120px"
            }, {
                field: "rating",
                title: "Rating",
                width: "120px"
            }, {
                field: "genre",
                title: "Genre",
                width: "120px"
            }]
        };

        function childGridOptions() {
            vm.childGridOptions = {
                dataSource: new kendo.data.DataSource({
                    data: newAngularProjectService.getDataForGrid(),
                    pageSize: 5
                }),
                height: 550,
                scrollable: true,
                sortable: true,
                selectable: true,
                filterable: true,
                pageable: true,
                dataBound: function () {
                    dgrid = this;
                },
                columns: [{
                    field: "male",
                    title: "Star Cast Male",
                    width: "120px"
                }, {
                    field: "female",
                    title: "Star Cast Female",
                    width: "120px"
                }, {
                    field: "movie_name",
                    title: "Movie Name",
                    width: "120px"
                }, {
                    field: "rating",
                    title: "Rating",
                    width: "120px"
                }, {
                    field: "genre",
                    title: "Genre",
                    width: "120px"
                }]
            }
        };

        $("#my-kendo-grid").on("dblclick", 'tbody tr[data-uid]', function (e) {
        	let data = kgrid.dataSource.data()
        	var selectedItem = data.filter(x=>{ return x.uid === this.dataset.uid})[0]
        	if(!selectedItem){
        		data = dgrid.dataSource.data();
        		selectedItem = data.filter(x=>{ return x.uid === this.dataset.uid})[0]
            } 
            $state.go("details", {
                data: selectedItem
            })
        	// console.log(selectedItem.movie_image, selectedItem.movie_name,selectedItem.rating);
        });

        // function ondoubleClick(ev) {
        //     // var gview = $("#my-kendo-grid").data("kendoGrid");
        //     // var selectedItem = gview.dataItem(gview.select());
        //     let data = kgrid.dataSource.data()
        //     var selectedItem = data.filter(x => {
        //         return x.uid === this.dataset.uid
        //     })[0]
        //     if (!selectedItem) {
        //         data = dgrid.dataSource.data();
        //         selectedItem = data.filter(x => {
        //             return x.uid === this.dataset.uid
        //         })[0]
        //     }
        //     $state.go("details", {
        //         data: selectedItem
        //     })
        // }
    }
})();