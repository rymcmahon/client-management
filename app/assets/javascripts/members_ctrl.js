(function () {
 "use strict";
 angular.module("app").controller("membersCtrl", function($scope, $http) {

   $scope.setup = function() {
      $http.get('api/v1/members.json').then(function(response) {
        console.log(response.data)
        $scope.members = response.data
      });
    };

    $scope.memberships = ["6-month", "12-month", "24-month"];

    $scope.addNewMember = function(inputFirstName, inputLastName, inputStreetAddress, inputCity, inputState, inputZip, inputEmail, inputPhone, inputMembership) {
        var newMember = {
          first_name: inputFirstName,
          last_name: inputLastName,
          street_address: inputStreetAddress,
          city: inputCity,
          state: inputState,
          zip: inputZip,
          email: inputEmail,
          phone: inputPhone,
          membership: inputMembership
        };
        $http.post('/api/v1/members.json', newMember).then(function(response) {
          console.log(response);
          $scope.members.push(newMember);
          $scope.newMemberFirstName = null;
          $scope.newMemberLastName = null;
          $scope.newMemberStreetAddress = null;
          $scope.newMemberCity = null;
          $scope.newMemberState = null;
          $scope.newMemberZip = null;
          $scope.newMemberEmail = null;
          $scope.newMemberPhone = null;
          $scope.newMemberMembership = null;
        }, function(errorResponse) {
          console.log(errorResponse);
          $scope.errors = errorResponse.data.errors;
        });
        $scope.errors = null;
      };

   window.$scope = $scope;
 });
})();