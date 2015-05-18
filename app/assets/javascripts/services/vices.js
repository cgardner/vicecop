window.app.factory('vices', [
  '$http',
  function ($http) {
    var o = {
      getAllForUser: function () {
        $http.get('/user_vices.json').success(function (data) {
          angular.copy(data, o.vices)
        });
      },

      get: function (id) {
        return $http.get('/user_vices/' + id + '.json').then(function (res) {
          return res.data;
        });
      },

      addCheckin: function (id, checkin) {
        return $http.post('/user_vices/' + id + '/checkins.json', checkin);
      },

      vices: []
    }

    return o;
  }
]);