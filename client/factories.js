angular.module('chirpApp.factories', [])
.factory('Chirp', ['$resource', function($resource) {
    return $resource('/api/chirps/:id', { id:'@id'},{
        update: {
            method: 'PUT'
        }
    });
}])
.factory('User', ['$resource', function($resource) {
    return $resource('/api/users/:id');
}])