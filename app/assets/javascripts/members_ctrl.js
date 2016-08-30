(function () {
 "use strict";
 angular.module("app", "ui.bootstrap.tpls" ["template/pagination/pagination.html"]).controller("membersCtrl", function($scope, $http, $log) {
   $scope.totalItems = 64;
  $scope.currentPage = 4;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;

   $scope.setup = function() {
      $http.get('api/v1/members.json').then(function(response) {
        console.log(response.data)
        $scope.members = response.data
      });
    };

    $scope.setupMemberShow = function(memberId) {
       $http.get('/api/v1/members/' + memberId + '.json').then(function(response) {
         console.log(response.data)
         $scope.member = response.data;
         $scope.memberId = memberId;
       });
     };

    $scope.memberships = ["6-month", "12-month", "24-month"];

    $scope.submitForm = function() {
      $scope.submitted = true;
      if ($scope.memberForm.$invalid) {
        return;
      }
      $scope.memberForm.$setPristine();
      $scope.submitted = false;
      return;
    };

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
        });
      };

   window.$scope = $scope;
 });
})();