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
    $stateProvider.state('app', {
        url: "/app",
        templateUrl: "assets/views/app.html",
        resolve: loadSequence('modernizr', 'moment', 'angularMoment', 'uiSwitch', 'perfect-scrollbar-plugin', 'toaster', 'ngAside', 'vAccordion', 'sweet-alert', 'chartjs', 'tc.chartjs', 'oitozero.ngSweetAlert', 'chatCtrl', 'truncate', 'htmlToPlaintext', 'angular-notification-icons'),
        abstract: true
    }).state('app.dashboard', {
        url: "/dashboard",
        templateUrl: "assets/views/dashboard.html",
        resolve: loadSequence('jquery-sparkline', 'dashboardCtrl'),
        title: 'Dashboard',
        ncyBreadcrumb: {
            label: 'Dashboard'
        }
    }).state('app.ui', {
        url: '/ui',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'UI Elements',
        ncyBreadcrumb: {
            label: 'UI Elements'
        }
    }).state('app.ui.elements', {
        url: '/elements',
        templateUrl: "assets/views/ui_elements.html",
        title: 'Elements',
        icon: 'ti-layout-media-left-alt',
        ncyBreadcrumb: {
            label: 'Elements'
        }
    }).state('app.ui.buttons', {
        url: '/buttons',
        templateUrl: "assets/views/ui_buttons.html",
        title: 'Buttons',
        resolve: loadSequence('spin', 'ladda', 'angular-ladda', 'laddaCtrl'),
        ncyBreadcrumb: {
            label: 'Buttons'
        }
    }).state('app.ui.links', {
        url: '/links',
        templateUrl: "assets/views/ui_links.html",
        title: 'Link Effects',
        ncyBreadcrumb: {
            label: 'Link Effects'
        }
    }).state('app.ui.icons', {
        url: '/icons',
        templateUrl: "assets/views/ui_icons.html",
        title: 'Font Awesome Icons',
        ncyBreadcrumb: {
            label: 'Font Awesome Icons'
        },
        resolve: loadSequence('iconsCtrl')
    }).state('app.ui.lineicons', {
        url: '/line-icons',
        templateUrl: "assets/views/ui_line_icons.html",
        title: 'Linear Icons',
        ncyBreadcrumb: {
            label: 'Linear Icons'
        },
        resolve: loadSequence('iconsCtrl')
    }).state('app.ui.modals', {
        url: '/modals',
        templateUrl: "assets/views/ui_modals.html",
        title: 'Modals',
        ncyBreadcrumb: {
            label: 'Modals'
        },
        resolve: loadSequence('asideCtrl')
    }).state('app.ui.toggle', {
        url: '/toggle',
        templateUrl: "assets/views/ui_toggle.html",
        title: 'Toggle',
        ncyBreadcrumb: {
            label: 'Toggle'
        }
    }).state('app.ui.tabs_accordions', {
        url: '/accordions',
        templateUrl: "assets/views/ui_tabs_accordions.html",
        title: "Tabs & Accordions",
        ncyBreadcrumb: {
            label: 'Tabs & Accordions'
        },
        resolve: loadSequence('vAccordionCtrl')
    }).state('app.ui.panels', {
        url: '/panels',
        templateUrl: "assets/views/ui_panels.html",
        title: 'Panels',
        ncyBreadcrumb: {
            label: 'Panels'
        }
    }).state('app.ui.notifications', {
        url: '/notifications',
        templateUrl: "assets/views/ui_notifications.html",
        title: 'Notifications',
        ncyBreadcrumb: {
            label: 'Notifications'
        },
        resolve: loadSequence('toasterCtrl', 'sweetAlertCtrl', 'NotificationIconsCtrl')
    }).state('app.ui.treeview', {
        url: '/treeview',
        templateUrl: "assets/views/ui_tree.html",
        title: 'TreeView',
        ncyBreadcrumb: {
            label: 'Treeview'
        },
        resolve: loadSequence('angularBootstrapNavTree', 'treeCtrl')
    }).state('app.ui.media', {
        url: '/media',
        templateUrl: "assets/views/ui_media.html",
        title: 'Media',
        ncyBreadcrumb: {
            label: 'Media'
        }
    }).state('app.ui.nestable', {
        url: '/nestable2',
        templateUrl: "assets/views/ui_nestable.html",
        title: 'Nestable List',
        ncyBreadcrumb: {
            label: 'Nestable List'
        },
        resolve: loadSequence('jquery-nestable-plugin', 'ng-nestable', 'nestableCtrl')
    }).state('app.ui.typography', {
        url: '/typography',
        templateUrl: "assets/views/ui_typography.html",
        title: 'Typography',
        ncyBreadcrumb: {
            label: 'Typography'
        }
    }).state('app.table', {
        url: '/table',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'Tables',
        ncyBreadcrumb: {
            label: 'Tables'
        }
    }).state('app.table.basic', {
        url: '/basic',
        templateUrl: "assets/views/table_basic.html",
        title: 'Basic Tables',
        ncyBreadcrumb: {
            label: 'Basic'
        }
    }).state('app.table.responsive', {
        url: '/responsive',
        templateUrl: "assets/views/table_responsive.html",
        title: 'Responsive Tables',
        ncyBreadcrumb: {
            label: 'Responsive'
        }
    }).state('app.table.dynamic', {
        url: '/dynamic',
        templateUrl: "assets/views/table_dynamic.html",
        title: 'Dynamic Tables',
        ncyBreadcrumb: {
            label: 'Dynamic'
        },
        resolve: loadSequence('dynamicTableCtrl')
    }).state('app.table.data', {
        url: '/data',
        templateUrl: "assets/views/table_data.html",
        title: 'ngTable',
        ncyBreadcrumb: {
            label: 'ngTable'
        },
        resolve: loadSequence('ngTable', 'ngTableCtrl')
    }).state('app.table.export', {
        url: '/export',
        templateUrl: "assets/views/table_export.html",
        title: 'Table'
    }).state('app.form', {
        url: '/form',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'Forms',
        ncyBreadcrumb: {
            label: 'Forms'
        }
    }).state('app.form.elements', {
        url: '/elements',
        templateUrl: "assets/views/form_elements.html",
        title: 'Forms Elements',
        ncyBreadcrumb: {
            label: 'Elements'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'selectCtrl')
    }).state('app.form.xeditable', {
        url: '/xeditable',
        templateUrl: "assets/views/form_xeditable.html",
        title: 'Angular X-Editable',
        ncyBreadcrumb: {
            label: 'X-Editable'
        },
        resolve: loadSequence('xeditable', 'checklist-model', 'xeditableCtrl')
    }).state('app.form.texteditor', {
        url: '/editor',
        templateUrl: "assets/views/form_text_editor.html",
        title: 'Text Editor',
        ncyBreadcrumb: {
            label: 'Text Editor'
        },
        resolve: loadSequence('ckeditor-plugin', 'ckeditor', 'ckeditorCtrl')
    }).state('app.form.wizard', {
        url: '/wizard',
        templateUrl: "assets/views/form_wizard.html",
        title: 'Form Wizard',
        ncyBreadcrumb: {
            label: 'Wizard'
        },
        resolve: loadSequence('wizardCtrl')
    }).state('app.form.validation', {
        url: '/validation',
        templateUrl: "assets/views/form_validation.html",
        title: 'Form Validation',
        ncyBreadcrumb: {
            label: 'Validation'
        },
        resolve: loadSequence('validationCtrl')
    }).state('app.form.cropping', {
        url: '/image-cropping',
        templateUrl: "assets/views/form_image_cropping.html",
        title: 'Image Cropping',
        ncyBreadcrumb: {
            label: 'Image Cropping'
        },
        resolve: loadSequence('ngImgCrop', 'cropCtrl')
    }).state('app.form.upload', {
        url: '/file-upload',
        templateUrl: "assets/views/form_file_upload.html",
        title: 'Multiple File Upload',
        ncyBreadcrumb: {
            label: 'File Upload'
        },
        resolve: loadSequence('angularFileUpload', 'uploadCtrl')
    }).state('app.pages', {
        url: '/pages',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'Pages',
        ncyBreadcrumb: {
            label: 'Pages'
        }
    }).state('app.pages.user', {
        url: '/user',
        templateUrl: "assets/views/pages_user_profile.html",
        title: 'User Profile',
        ncyBreadcrumb: {
            label: 'User Profile'
        },
        resolve: loadSequence('flow', 'userCtrl')
    }).state('app.pages.invoice', {
        url: '/invoice',
        templateUrl: "assets/views/pages_invoice.html",
        title: 'Invoice',
        ncyBreadcrumb: {
            label: 'Invoice'
        }
    }).state('app.pages.timeline', {
        url: '/timeline',
        templateUrl: "assets/views/pages_timeline.html",
        title: 'Timeline',
        ncyBreadcrumb: {
            label: 'Timeline'
        },
        resolve: loadSequence('ngMap')
    }).state('app.pages.calendar', {
        url: '/calendar',
        templateUrl: "assets/views/pages_calendar.html",
        title: 'Calendar',
        ncyBreadcrumb: {
            label: 'Calendar'
        },
        resolve: loadSequence('moment', 'mwl.calendar', 'calendarCtrl')
    }).state('app.pages.messages', {
        url: '/messages',
        templateUrl: "assets/views/pages_messages.html",
        resolve: loadSequence('truncate', 'htmlToPlaintext', 'inboxCtrl')
    }).state('app.pages.messages.inbox', {
        url: '/inbox/:inboxID',
        templateUrl: "assets/views/pages_inbox.html",
        controller: 'ViewMessageCrtl'
    }).state('app.pages.blank', {
        url: '/blank',
        templateUrl: "assets/views/pages_blank_page.html",
        ncyBreadcrumb: {
            label: 'Starter Page'
        }
    }).state('app.utilities', {
        url: '/utilities',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'Utilities',
        ncyBreadcrumb: {
            label: 'Utilities'
        }
    }).state('app.utilities.search', {
        url: '/search',
        templateUrl: "assets/views/utility_search_result.html",
        title: 'Search Results',
        ncyBreadcrumb: {
            label: 'Search Results'
        }
    }).state('app.utilities.pricing', {
        url: '/pricing',
        templateUrl: "assets/views/utility_pricing_table.html",
        title: 'Pricing Table',
        ncyBreadcrumb: {
            label: 'Pricing Table'
        }
    }).state('app.maps', {
        url: "/maps",
        templateUrl: "assets/views/maps.html",
        resolve: loadSequence('ngMap', 'mapsCtrl'),
        title: "Maps",
        ncyBreadcrumb: {
            label: 'Maps'
        }
    }).state('app.charts', {
        url: "/charts",
        templateUrl: "assets/views/charts.html",
        resolve: loadSequence('chartjs', 'tc.chartjs', 'chartsCtrl'),
        title: "Charts",
        ncyBreadcrumb: {
            label: 'Charts'
        }
    }).state('app.documentation', {
        url: "/documentation",
        templateUrl: "assets/views/documentation.html",
        title: "Documentation",
        ncyBreadcrumb: {
            label: 'Documentation'
        }
    }).state('error', {
        url: '/error',
        template: '<div ui-view class="fade-in-up"></div>'
    }).state('error.404', {
        url: '/404',
        templateUrl: "assets/views/utility_404.html",
    }).state('error.500', {
        url: '/500',
        templateUrl: "assets/views/utility_500.html",
    })

	// Login routes

	.state('login', {
	    url: '/login',
	    template: '<div ui-view class="fade-in-right-big smooth"></div>',
	    abstract: true
	}).state('login.signin', {
	    url: '/signin',
	    templateUrl: "assets/views/login_login.html"
	}).state('login.forgot', {
	    url: '/forgot',
	    templateUrl: "assets/views/login_forgot.html"
	}).state('login.registration', {
	    url: '/registration',
	    templateUrl: "assets/views/login_registration.html"
	}).state('login.lockscreen', {
	    url: '/lock',
	    templateUrl: "assets/views/login_lock_screen.html"
	});






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