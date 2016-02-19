var app = angular.module("angularRedditApp", []);


app.controller("masterController", function($scope) {

  $scope.showForm = false;
  $scope.posts = [];

  $scope.togglePostForm = function() {
    $scope.showForm = !$scope.showForm;
  }

  $scope.makePost = function() {
    var post = {};
    post.title = $scope.title;
    post.author = $scope.author;
    post.imageURL = $scope.imageURL;
    post.description = $scope.description;

    $scope.posts.push(post);
    $scope.title = null;
    $scope.author = null;
    $scope.imageURL = null;
    $scope.description = null;
    console.log(post);
  }

});

app.controller("postController", function($scope){
    $scope.upVotes = 0;
    $scope.downVotes = 0;


  $scope.upVote = function() {

    $scope.upVotes++
  }
  $scope.downVote = function() {
    $scope.downVotes--
  }

})
