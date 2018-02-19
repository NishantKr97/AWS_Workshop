var app = angular.module('app', ['ngRoute']);

app.controller('PostsCtrl', function ($scope, PostsSvc) {

	PostsSvc.fetch().success(function (posts) {
	  $scope.posts = posts;
	});


  $scope.addPost = function () {
    if ($scope.postBody) {
      post = {
        username: $scope.heading,
        body: $scope.postBody
      };
      PostsSvc.post(post).success(function (post) {
        $scope.posts.unshift(post)
        $scope.postBody = null;
        $scope.heading = null;
      })
  	}
  }
});

app.service('PostsSvc', function($http){
	this.fetch = function(){
		return $http.get('/api/posts');
	};

	this.post = function(post){
		return $http.post('/api/posts', post);
	}

});