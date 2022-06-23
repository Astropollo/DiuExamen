/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Jose Martinez",
                Photo: "JoseMartinez.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Han coincidido las vacaciones de todos y se piensan ir de viaje",
                touch1: "movil (whatsapp)",
                feel1: "5",
                con1: "Hay que evitar que ninguno de los compañeros se raje ",
                ima1: "cartoon-shaking.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Deciden irse a Paris, ya que es una de las ciudades mas emblematicas de Europa",
                touch2: "Restaurante(quedada)",
                feel2: "4",
                con2: "A alguno le parece un poco muermo Paris, pero al final siempre terminan pasandoselo de lujo",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Tienen que encontrar el billete, el hotel y planificar minimamente lo que van a hacer",
                touch3: "portatil (videollamada)",
                feel3: "3",
                con3: "Es muy aburrido y complicado ponerse a mirar y cuadrar tantas cosas",
                ima3: "cartoon-PChard.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Ya con el billete y hotel comprado, se pone a buscar por internet planes para hacer por paris y ve que hay una pagina que tiene guias gratis por todo paris, pero tienen que planificarse aun mas para coincidir con el guia",
                touch4: "portatil (videollamada)",
                feel4: "2",
                con4: "No les bastaba con cuadrar los vuelos y los planes, que ahora tienen que ver un guia decente para que les enseñe la ciudad",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Cuando llega el dia, se ven con el guia y hacen la ruta por el centro",
                touch5: "en persona",
                feel5: "2",
                con5: "El guia no se le da del todo bien el español y encima pierde mucho el tiempo en cosas que no le interesan",
                ima5: "cartoon-speaking.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Termina la guia y se ve que hay que pagarle algo, ¿¡ No se supone que era gratis?!",
                touch6: "en persona",
                feel6: "1",
                con6: "Se ve que por algun lado de la pagina ponia que habia que pagarle \"algo\" y no nos dimos cuenta",
                ima6: "cartoon-why.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Jose Martinez",
                Photo: "JoseMartinez.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Han coincidido las vacaciones de todos y se piensan ir de viaje",
                touch1: "movil (whatsapp)",
                feel1: "5",
                con1: "Hay que evitar que ninguno de los compañeros se raje ",
                ima1: "cartoon-shaking.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Deciden irse a Paris, ya que es una de las ciudades mas emblematicas de Europa",
                touch2: "Restaurante(quedada)",
                feel2: "4",
                con2: "A alguno le parece un poco muermo Paris, pero al final siempre terminan pasandoselo de lujo",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Tienen que encontrar el billete, el hotel y planificar minimamente lo que van a hacer",
                touch3: "portatil (videollamada)",
                feel3: "3",
                con3: "Es muy aburrido y complicado ponerse a mirar y cuadrar tantas cosas",
                ima3: "cartoon-PChard.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Uno de los colegas que va dice que conoce una aplicacion que tiene guias de toda Paris para que uno las vaya viendo con libertad",
                touch4: "movil (whatsapp)",
                feel4: "4",
                con4: "Al parecer hay que pagar 5 euros para tener acceso a todo Paris y no unicamente a un barrio",
                ima4: "cartoon-deciding.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "El primer dia se fueron todos al barrio gratuito y probaron la aplicacion",
                touch5: "Móvil (app)",
                feel5: "5",
                con5: "Aunque esta super guay y puedes escuchar y ver lo que quieras, las historias no varian de una vez a otra (pregrabadas)",
                ima5: "cartoon-phone.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Se terminan comprando dos compañeros mas la aplicacion para asi tener una aplicacion para cada dos y disfrutar todos de la ciudad",
                touch6: "Móvil (app)",
                feel6: "5",
                con6: "Estaria bien algun tipo de pack para grupos o una cuenta grupal",
                ima6: "cartoon-happy.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



