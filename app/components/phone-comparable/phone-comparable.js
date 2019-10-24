'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneComparable').
  component('phoneComparable', {
    templateUrl: 'components/phone-comparable/phone-comparable.template.html',
    controller: ['Phone',
    function PhoneComparableController(Phone) {        

      console.trace('PhoneComparableController');

      var self = this;

      self.phones = Phone.query();
      self.phone1 = {};
      self.phone2 = {};
      self.orderProp = 'age';

     

      this.selecionar = function(phone){
        console.trace('seleccionado movil');
        self.phone2 = self.phone1;
        self.phone1 = phone;
      }
      // selecionar

    }
  ]
});