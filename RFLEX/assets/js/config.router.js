'use strict';

/**
 * Config for the router
 */
app.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$ocLazyLoadProvider', 'JS_REQUIRES',
function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider, jsRequires) {

    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;

    // LAZY MODULES

    $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: jsRequires.modules
    });

    // APPLICATION ROUTES
    // -----------------------------------
    // For any unmatched url, redirect to /app/dashboard
    // $urlRouterProvider.otherwise("/app/dashboard");
    $urlRouterProvider.otherwise("/guia/home");
    //
    // Set up the states




    // Personalizadas


    $stateProvider.state('guia', {
        url: "/guia",
        templateUrl: "assets/views/misPaginas/app.html",
        resolve: loadSequence('modernizr', 'moment', 'angularMoment', 'uiSwitch', 'perfect-scrollbar-plugin', 'toaster', 'ngAside', 'vAccordion', 'sweet-alert', 'chartjs', 'tc.chartjs', 'oitozero.ngSweetAlert', 'chatCtrl', 'truncate', 'htmlToPlaintext', 'angular-notification-icons'),
        abstract: true
    })
    .state('guia.home', {
        url: '/home',
        templateUrl: "assets/views/misPaginas/home.html"
    })




    //Barra superior
    .state('guia.barraSuperior', {
        url: '/barraSuperior',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'Barra superior'
    })

    .state('guia.barraSuperior.permisos', {
        url: '/permisos/permisos',
        templateUrl: "assets/views/misPaginas/barraSuperior/permisos.html"
    })

    .state('guia.barraSuperior.orientacion', {
        url: '/orientacion/orientacion',
        templateUrl: "assets/views/misPaginas/barraSuperior/orientacion.html"
    })

    .state('guia.barraSuperior.rotativaModificar', {
        url: '/rotativa/modificar',
        templateUrl: "assets/views/misPaginas/barraSuperior/modificarRotativa.html"
    })
    .state('guia.barraSuperior.rotativaCrear', {
        url: '/rotativa/crear',
        templateUrl: "assets/views/misPaginas/barraSuperior/crearRotativa.html"
    })

    .state('guia.barraSuperior.cambioTurnoTrabajadores', {
        url: '/cambioTurno/trabajadores',
        templateUrl: "assets/views/misPaginas/barraSuperior/cambioTurnoTrabajadores.html"
    })
    .state('guia.barraSuperior.cambioTurnoServicio', {
        url: '/cambioTurno/servicio',
        templateUrl: "assets/views/misPaginas/barraSuperior/cambioTurnoServicio.html"
    })

    .state('guia.barraSuperior.opcionSalir', {
        url: '/opciones/salir',
        templateUrl: "assets/views/misPaginas/barraSuperior/salir.html"
    })





    //Barra lateral
    .state('guia.barraLateral', {
        url: '/barraLateral',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'Barra lateral'
    })

    .state('guia.barraLateral.vistaPanoramicaUso', {
        url: '/vistaPanoramica/uso',
        templateUrl: "assets/views/misPaginas/barraLateral/vistaPanoramicaUso.html"
    })

    .state('guia.barraLateral.consultaRapidaTrabajador', {
        url: '/consultaRapida/trabajador',
        templateUrl: "assets/views/misPaginas/barraLateral/consultaPorTrabajador.html"
    })
    .state('guia.barraLateral.consultaRapidaTurno', {
        url: '/consultaRapida/turno',
        templateUrl: "assets/views/misPaginas/barraLateral/consultaPorTurno.html"
    })

    .state('guia.barraLateral.dotacionAutorizada', {
        url: '/dotacion/autorizada',
        templateUrl: "assets/views/misPaginas/barraLateral/dotacionAutorizada.html"
    })
    .state('guia.barraLateral.dotacionEfectiva', {
        url: '/dotacion/efectiva',
        templateUrl: "assets/views/misPaginas/barraLateral/dotacionEfectiva.html"
    })

    .state('guia.barraLateral.turnoPartTime', {
        url: '/turno/pt',
        templateUrl: "assets/views/misPaginas/barraLateral/crearTurnoPartTime.html"
    })
    .state('guia.barraLateral.turnoOtraUnidad', {
        url: '/turno/ou',
        templateUrl: "assets/views/misPaginas/barraLateral/crearTurnoOU.html"
    })
    .state('guia.barraLateral.turnoOtroEstamento', {
        url: '/turno/oe',
        templateUrl: "assets/views/misPaginas/barraLateral/crearTurnoOE.html"
    })

    .state('guia.barraLateral.reportePorFecha', {
        url: '/reporte/porFecha',
        templateUrl: "assets/views/misPaginas/barraLateral/reportePorFecha.html"
    })
    .state('guia.barraLateral.reportePorTrabajador', {
        url: '/reporte/porTrabajador',
        templateUrl: "assets/views/misPaginas/barraLateral/reportePorTrabajador.html"
    })
    .state('guia.barraLateral.reporteTurnosExtra', {
        url: '/reporte/turnosExtra',
        templateUrl: "assets/views/misPaginas/barraLateral/reporteTurnosExtra.html"
    })

    .state('guia.barraLateral.notasIntro', {
        url: '/notas/intro',
        templateUrl: "assets/views/misPaginas/barraLateral/notasIntroduccion.html"
    })








    //rFlex Colaboradores
    .state('guia.rFlexColaboradores', {
        url: '/rFlexColaboradores',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'rFlex Colaboradores'
    })

    .state('guia.rFlexColaboradores.inicioRequerimientosMinimos', {
        url: '/inicio/requerimientosMinimos',
        templateUrl: "assets/views/misPaginas/rFlexColaboradores/requerimientosMinimos.html"
    })
    .state('guia.rFlexColaboradores.inicioUsuarioPassword', {
        url: '/inicio/usuarioyPassword',
        templateUrl: "assets/views/misPaginas/rFlexColaboradores/usuarioPassword.html"
    })
    .state('guia.rFlexColaboradores.inicioMenuOpciones', {
        url: '/inicio/menuOpciones',
        templateUrl: "assets/views/misPaginas/rFlexColaboradores/menuOpciones.html"
    })
    .state('guia.rFlexColaboradores.inicioSeguridad', {
        url: '/inicio/seguridad',
        templateUrl: "assets/views/misPaginas/rFlexColaboradores/seguridad.html"
    })

    .state('guia.rFlexColaboradores.funcionalidadesTurnosPantalla', {
        url: '/funcionalidades/turnosPantalla',
        templateUrl: "assets/views/misPaginas/rFlexColaboradores/turnosPantalla.html"
    })
    .state('guia.rFlexColaboradores.funcionalidadesDisponibilidad', {
        url: '/funcionalidades/disponibilidad',
        templateUrl: "assets/views/misPaginas/rFlexColaboradores/disponibilidad.html"
    })
    .state('guia.rFlexColaboradores.funcionalidadesIntencionCambio', {
        url: '/funcionalidades/intencionCambio',
        templateUrl: "assets/views/misPaginas/rFlexColaboradores/intencionCambio.html"
    })
    .state('guia.rFlexColaboradores.funcionalidadesPlanillas', {
        url: '/funcionalidades/planillas',
        templateUrl: "assets/views/misPaginas/rFlexColaboradores/planillas.html"
    })
    .state('guia.rFlexColaboradores.funcionalidadesCambioTurno', {
        url: '/funcionalidades/cambioTurno',
        templateUrl: "assets/views/misPaginas/rFlexColaboradores/cambioTurno.html"
    })

    .state('guia.rFlexColaboradores.planillaTurnosCodigosColores', {
        url: '/planillaTurnos/codigosColores',
        templateUrl: "assets/views/misPaginas/rFlexColaboradores/codigoColores.html"
    })

    .state('guia.rFlexColaboradores.cambioTurnoTrabajadores', {
        url: '/cambioTurno/trabajadores',
        templateUrl: "assets/views/misPaginas/rFlexColaboradores/cambioTurnoTrabajadores.html"
    })
    .state('guia.rFlexColaboradores.cambioTurnoServicio', {
        url: '/cambioTurno/servicio',
        templateUrl: "assets/views/misPaginas/rFlexColaboradores/cambioTurnoServicio.html"
    })







    //General
    .state('guia.general', {
        url: '/general',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'General'
    })

    .state('guia.general.fao1', {
        url: '/fao/como-agrego-a-una-persona-a-la-planilla',
        templateUrl: "assets/views/misPaginas/general/item_1.html"
    })
    .state('guia.general.fao2', {
        url: '/fao/como-cambio-la-posicion-de-una-persona-en-la-planilla',
        templateUrl: "assets/views/misPaginas/general/item_2.html"
    })
    .state('guia.general.fao3', {
        url: '/fao/cual-es-la-diferencia-entre-CTDT-y-CTSDTS',
        templateUrl: "assets/views/misPaginas/general/item_3.html"
    })
    .state('guia.general.fao4', {
        url: '/fao/como-cambio-a-una-persona-de-rotativa',
        templateUrl: "assets/views/misPaginas/general/item_4.html"
    })
    .state('guia.general.fao5', {
        url: '/fao/que-ocurre-con-las-devoluciones-cambios-y-turnos-extra-al-ingresar-un-permiso-que-los-comprende',
        templateUrl: "assets/views/misPaginas/general/item_5.html"
    })
    .state('guia.general.fao6', {
        url: '/fao/glosario',
        templateUrl: "assets/views/misPaginas/general/item_6.html"
    })
    .state('guia.general.fao7', {
        url: '/fao/codigos-de-colores',
        templateUrl: "assets/views/misPaginas/general/item_7.html"
    })
    .state('guia.general.fao8', {
        url: '/fao/como-cambio-de-una-planilla-a-otra',
        templateUrl: "assets/views/misPaginas/general/item_8.html"
    });





    // Generates a resolve object previously configured in constant.JS_REQUIRES (config.constant.js)
    function loadSequence() {
        var _args = arguments;
        return {
            deps: ['$ocLazyLoad', '$q',
			function ($ocLL, $q) {
			    var promise = $q.when(1);
			    for (var i = 0, len = _args.length; i < len; i++) {
			        promise = promiseThen(_args[i]);
			    }
			    return promise;

			    function promiseThen(_arg) {
			        if (typeof _arg == 'function')
			            return promise.then(_arg);
			        else
			            return promise.then(function () {
			                var nowLoad = requiredData(_arg);
			                if (!nowLoad)
			                    return $.error('Route resolve: Bad resource name [' + _arg + ']');
			                return $ocLL.load(nowLoad);
			            });
			    }

			    function requiredData(name) {
			        if (jsRequires.modules)
			            for (var m in jsRequires.modules)
			                if (jsRequires.modules[m].name && jsRequires.modules[m].name === name)
			                    return jsRequires.modules[m];
			        return jsRequires.scripts && jsRequires.scripts[name];
			    }
			}]
        };
    }
}]);