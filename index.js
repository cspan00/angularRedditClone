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
    post.votes = 0;

    $scope.posts.push(post);


    $scope.title = null;
    $scope.author = null;
    $scope.imageURL = null;
    $scope.description = null;
    console.log(post);
  }

  $scope.upVote = function(){
    this.$parent.post.votes ++;
    console.log(this.$parent.post.votes);

  }
  $scope.downVote = function(){
    this.$parent.post.votes --;

  }

});

app.controller("postController", function($scope){
    $scope.comments = [];

    $scope.date = new Date();



  $scope.toggleCommentForm = function() {
    $scope.showCommentForm = !$scope.showCommentForm
  }
  $scope.toggleComments = function() {
    $scope.showComments = !$scope.showComments
  }

  $scope.makeComment = function(){
    var comment = {};
    comment.author = $scope.author;
    comment.comment = $scope.comment;
    $scope.comments.push(comment)
    $scope.author = null;
    $scope.comment = null;

  }



})
