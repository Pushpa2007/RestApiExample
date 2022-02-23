angular.module('pushpaApp.controllers',[]).
controller('bookListController',function ($scope, $rootScope, openlibraryAPIService) {
    $scope.bookList = {};
    $scope.bookid = "";
    $scope.filter = "";

    $scope.callbookList = function () {
        console.log('bookList function: start');
        console.log($scope.filter);     
  	openlibraryAPIService.getBookList($scope.filter).then(function successCallback(response) {
	  console.log('post API call : success');
          console.log(response);
          $scope.bookList = response.data.docs;
       },function errorCallback(response) {
         console.log('post API call : Error');
         console.log(response);
         return;
       });
    }

    $scope.callbookDetail = function () {
        console.log('bookDetail function: start');
        openlibraryAPIService.getBookDetail($scope.bookid).then(function successCallback(response) {
          console.log('post API call : success');
          console.log(response);
          $scope.bookList = response.data.docs;
       },function errorCallback(response) {
         console.log('post API call : Error');
         console.log(response);
         return;
       });
    }


function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

});

