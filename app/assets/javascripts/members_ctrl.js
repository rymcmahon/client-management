(function () {
 "use strict";
 angular.module("app").controller("membersCtrl", function($scope, $http) {

   $scope.setup = function() {
      $http.get('api/v1/members.json').then(function(response) {
        console.log(response.data)
        $scope.members = response.data
      });
    };

  //   $scope.addNewMember = function(inputFirstName, inputLastName, inputStreetAddress, inputCity, inputState
  //     inputZip, inputMembership, inputEmail, inputPhone) {
  //       var newTask = {
  //         firstName: inputFirstName,
  //         lastName: inputLastName,
  //         streetAddress: inputStreetAddress,
  //         city: inputCity,
  //         state: inputState,
  //         zip: inputZip,
  //         membership: inputMembership,
  //         email: inputEmail,
  //         phone: inputPhone
  //       };
  //       $http.post('/api/v1/members.json', newMember).then(function(response) {
  //         console.log(response);
  //         $scope.mambers.push(newMember);
  //         $scope.newMemberFirstName = null;
  //         $scope.newMemberLastName = null;
  //         $scope.newMemberStreetAddress = null;
  //         $scope.newMemberCity = null;
  //         $scope.newMemberState = null;
  //         $scope.newMemberZip = null;
  //         $scope.newMemberEmail = null;
  //         $scope.newMemberPhone = null;
  //         $scope.newMemberMembership = null;
  //         $scope.formError = null;
  //       }, function(errorResponse) {
  //         console.log(errorResponse);
  //         $scope.errors = errorResponse.data.errors;
  //       });
  //       $scope.errors = null;
  //     };
   //
   //
  //  window.$scope = $scope;
 });
})();