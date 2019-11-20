(function () {
	"use strict";

	angular
		.module("app")
		.service("newAngularProjectService", newAngularProjectService);

        newAngularProjectService.$inject = [
	];

	/* @ngInject */
	function newAngularProjectService () {
		var service = {
			getDataForGrid: getDataForGrid
        };
        
        function getDataForGrid (){
            return [{"female":"Kiara Adwani","male":"Shahid Kapoor", "movie_name":"Kabir Singh", "rating":"4","genre":"Drama"},
            {"female":"kirti Sanon","male":"Akshay Kumar", "movie_name":"Housefull 4", "rating":"3","genre":"Drama/Fantasy"},
            {"female":"Mrunal Thakur","male":"Hritik Roshan", "movie_name":"Super 30", "rating":"3","genre":"Drama"},
            {"female":"Parineeti Chopra","male":"Akshay Kumar", "movie_name":"Kesari", "rating":"4","genre":"Drama"},
            {"female":"yami Gautam","male":"Vicky kaushal", "movie_name":"Uri: The Surgical Strike", "rating":"4","genre":"Drama"},
            {"female":"vanni kapoor","male":"Hritik Roshan", "movie_name":"War", "rating":"4","genre":"Drama"},
            {"female":"Shushant Shingh Rajpoot","male":"Shraddha Kapoot", "movie_name":"Chhichhore", "rating":"4","genre":"Drama"},
            {"female":"Priyanka Chopra","male":"Farhan Akhtar", "movie_name":"The sky Is Pink", "rating":"4","genre":"Drama"},
            {"female":"Sonam Kapoor ","male":"Dulquer Salmaan", "movie_name":"The Zoya Factor", "rating":"4","genre":"Drama"},
            {"female":"Nushrat Bharucha","male":"Ayushmann Khurrana", "movie_name":"Dream Girl ", "rating":"4","genre":"Drama"},
            {"female":"Isha Talwar","male":"Ayushmann Khurrana", "movie_name":"Article15", "rating":"4","genre":"Drama"},
            {"female":"Taapsee Pannu","male":"Amitabh Bachchan", "movie_name":"Badla", "rating":"4","genre":"Drama"},
            {"female":"Hema Malini","male":"Amitabh Bachchan", "movie_name":"Sholay", "rating":"4","genre":"Drama"}]
        }
		

		return service;
	}
})();
