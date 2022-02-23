angular.module('pushpaApp.services', []).
  factory('openlibraryAPIService', function($http) {
	 var serviceResponse = {};


        serviceResponse.getBookList = function(filter) {
		console.log('API : Start');
                console.log(filter);

		return $http({
           		method: 'GET',
           		url : "https://openlibrary.org/search.json?q="+filter,
           		headers: {
             			'Content-Type': 'application/json',
             			'Accept': 'application/json',
                               //'Authorisation':'Api key';
           		}
   		});
          }


	serviceResponse.getBookDetail = function(bookid) {

                return $http({
                        method: 'GET',
                        url : "https://openlibrary.org/books/" + bookid + ".json",
                        headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                        }
                });
          }



	return serviceResponse;
	 
  });

  
