angular.
module('phoneCarrito').
component('phoneCarrito', {
  templateUrl: 'phone-carrito/phone-carrito.template.html',
  controller: ['Phone', 'compraMovil', '$scope',
    function PhoneComparadorController(Phone, compraMovil, $scope) {

      var self = this;

      self.movilesCarrito = function(){
        return compraMovil.getProductos();
      }

      self.borrarMovil = function(movil){
        compraMovil.removeProducto(movil);
      }

      self.contMoviles = function(){
        return compraMovil.getProductos().length;
      }
  
    }
  ]
});
