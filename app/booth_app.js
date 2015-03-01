var boothApp = angular.module('boothApp', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // When getting the page, display the instagram form
    $http.get('/')
        .success(function(data) {
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // When submitting the form, connect to BoothAPI
    $scope.getFeed = function() {
        $http.post('/api/trollibooth', $scope.formData)
            .success(function(data) {
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}