'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone', 'compraMovil', '$scope',
      function PhoneComparadorController(Phone, compraMovil, $scope) {        

        console.trace('PhoneComparadorController');

        var self = this;

        self.phones = Phone.query();
        self.phone1 = {};
        self.phone2 = {};
        self.orderProp = 'age';

        $scope.memMin = 0;
        $scope.memMax = 35000;
        
        $scope.ui = {
          min: 0,
          max: 512,
          sort: 'name'
        }; 

        this.selecionar = function(phone){
          console.trace('seleccionado movil');
          self.phone2 = self.phone1;
          self.phone1 = phone;
        }
        // selecionar


        $scope.$on("eventoCompra", function(event, data){

            alert('eventoCompra en padre ' + data.telefono.id);

        });

      }
    ]
  });

  /**
   * Detalle del Comparador
   */
  angular.
  module('phoneComparador').
  component('phoneComparadorDetalle', {
    templateUrl: 'phone-comparador/phone-comparador-detalle.template.html',
    bindings:{
      mostrar : '=',
      comparar : '='
    },
    controller: ['compraMovil','$scope',
      function PhoneComparadorDetalleController(compraMovil,$scope) {        

        console.trace('PhoneComparadorDetalleController');
        var self = this;

        self.comprar = function(){
          console.trace('click boton compra %o', self.mostrar  );
          //compraMovil.setProducto(self.mostrar);
          $scope.$emit("eventoCompra", { telefono: self.mostrar });

        }

        /*
        this.$onChanges = function (changes) {
          console.debug('cambia valor %o', changes);
          self.p1 = changes.phone1.currentValue;
        };
        */



      }
    ]
  });
   /**
   * Filtro para filtrar por rango (de ram, etc)
   */
  angular.
  module('phoneComparador')
  .filter('rangeFilter', function () {
    return function (items, attr, min, max) {
        var range = [],
            min=parseFloat(min),
            max=parseFloat(max);
        for (var i=0, l=items.length; i<l; ++i){
            var item = items[i];
            if(item[attr]<=max && item[attr]>=min){
                range.push(item);
            }
        }
        return range;
    };
});
