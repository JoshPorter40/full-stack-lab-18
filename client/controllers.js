angular.module('chirpApp.controllers', [])  //this creates the module
.controller('WelcomeController', ['$scope', function($scope) { //creating the controller
    $scope.greeting = 'Welcome to Chirper!' 
}])
.controller('ChirpListController', ['$scope', 'Chirp', function($scope, Chirp) {
    $scope.chirps = Chirp.query();

    $scope.createChirp  = function() {
        var c = new Chirp({
            message: $scope.newMessage,
            userId: $scope.selectUserId,
            date: $scope.newDate
        });
        c.$save(function(success) {
            alert('Chirp Sent!');
            $scope.chirps = Chirp.query();
            $scope.newMessage = '';
            $scope.newUser = '';
            $scope.newDate = '';
        }, function(err) {
            console.log(err);
        });
    }
}])
.controller('SingleChirpController', ['$scope', 'Chirp', '$routeParams', function($scope, Chirp, $routeParams) {
    $scope.chirp = Chirp.get({ id:$routeParams.id });

    $scope.deleteChirp = function() {
        if(confirm('Are you sure you want to delete this chirp?')) {
            $scope.chirp.$delete(function() {
                window.history.back();
            }, function(err) {
                console.log(err);
            });
        }
    }
    $scope.updateChirp  = function() {
        $scope.chirp.userId = $scope.selectUserId;
        $scope.chirp.message = $scope.newMessage;
        $scope.chirp.date = $scope.newDate;
        $scope.chirp.$update(function(success) {
            window.history.back();
        }, function(err) {
            console.log(err);
        });
}
}])