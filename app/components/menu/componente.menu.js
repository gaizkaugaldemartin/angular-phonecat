angular.
  module('phonecatApp').  
  component('componenteMenu', {   
    templateUrl: './components/menu/template.menu.html',
    controller: function MenuController($scope) {

      console.trace('MenuController');  
     
      $scope.rutas = [
        {
          "nombre": "Inicio",
          "url": "#!/",
          "active": false,
          "icono": "fas fa-home"
        },
         {
          "nombre": "Comparador",
          "url": "#!/comparador",
          "active": false,
          "icono": "fas fa-exchange-alt"
        },
        {
          "nombre": "Nuevo",
          "url": "#!/nuevo",
          "active": false,
          "icono": "fas fa-exchange-alt"
        },
        {
          "nombre": "Carrito Compra",
          "url": "#!/carritocompra",
          "active": false,
          "icono": "fas fa-exchange-alt"
        }
      
        
      ];
      
    
      $scope.cambiarActivo = function( ruta ){
        console.trace('click cambiarActivo %o', ruta);

        //desactivar activo a todas las rutas
        $scope.rutas.forEach(element => {
          element.active = false;
        });
        //activar solo sobre la hemos hecho click
        ruta.active = true;

      }//cambiarActivo



    }// controlador

  });