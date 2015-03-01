var boothApp = angular.module('TrolliBooth', []);

function mainController($scope, $http) {
    $scope.formData = {};

    $scope.boothname = 'TrolliBooth';

    // When submitting the form, connect to BoothAPI
    $scope.getFeed = function() {
        $http.post('/api/trollibooth', $scope.formData)
            .success(function(data) {
                console.log(data);
                $scope.feed = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
                $scopte.error_feed = data;
            });
    };

}