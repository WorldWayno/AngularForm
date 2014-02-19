

(function() {
    'use strict';

    angular.module("app", ['builder', 'builder.components', 'validator.rules'])
    .controller("formBuilderController", function ($scope,$builder, $validator) {
        var checkbox, textbox;

        //textbox = $builder.addFormObject('default', {
        //    component: 'textInput',
        //    label: 'Title',
        //    description: 'Title',
        //    placeholder: 'input section Title here',
        //    required: true,
        //    editable: false
        //});

        //checkbox = $builder.addFormObject('default', {
        //    component: 'checkbox',
        //    label: 'Pets',
        //    description: 'Do you have any pets?',
        //    options: ['Dog', 'Cat']
        //});

        $scope.isShowScope = true;
        $scope.form = $builder.forms['default'];
        $scope.input = [];
        $scope.defaultValue = {};
       // $scope.defaultValue[textbox.id] = 'default value';
        // $scope.defaultValue[checkbox.id] = [true, true];
        return $scope.submit = function () {
            return $validator.validate($scope, 'default').success(function () {
                return console.log('success');
            }).error(function () {
                return console.log('error');
            });
        };
    });

}());
