
'use strict';

define(
        ['ojs/ojcore', 'knockout', 'jquery', 'ojL10n!./resources/nls/cca-kmap-strings',
    './cca-kmap-gate-util','./cca-kmap-expression','./cca-kmap-exp-constants'           ],
        function (oj, ko, $, componentStrings,gateUtil,expression,expConstants) {
            var parent;
            var ccaKmapMap = {};
            
            function KarnaughViewModel(context) {
                var self = this;
                
                //At the start of your viewModel constructor
                var busyContext = oj.Context.getContext(context.element).getBusyContext();
                var options = {"description": "CCA Startup - Waiting for data"};
                self.busyResolve = busyContext.addBusyState(options);

                self.composite = context.element;

                self.properties = context.properties;
               
                self.uniqueId = context.uniqueId;
                self.nlsMsgs = self.properties.nlsMsgs;
                //_enableLocalisationForCCA(self,componentStrings);
               
                self.busyResolve();
                
                ccaKmapMap[self.uniqueId] =self.properties; 
                parent = self;



            }
            ;
            KarnaughViewModel.prototype.activated = function (context) {
               
            };

            KarnaughViewModel.prototype.connected = function (context) {
               
            };
            
            KarnaughViewModel.prototype.bindingsApplied = function (context) {
                let uniqueId = context.uniqueId;
                let properties = ccaKmapMap[uniqueId];
                let expression = properties.expression;
                alert(expression);
                var c = document.getElementById("myCanvas");
                var ctx=c.getContext("2d");
                gateUtil.drawANDGate(ctx,150,70,30,'green');
                gateUtil.drawNANDGate(ctx,300,70,40,'#ab1111');
                
            };
            
           
        
            return  KarnaughViewModel;
      });