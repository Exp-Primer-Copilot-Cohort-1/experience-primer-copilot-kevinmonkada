function skillsMember() {
    return {
        name: 'skillsMember',
        restrict: 'E',
        templateUrl: 'app/components/member/skillsMember.html',
        controller: skillsMemberController,
        controllerAs: 'vm',
        bindToController: true
    };
}