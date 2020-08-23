
'use strict';

requirejs.config(
        {
           
            // Path mappings for the logical module names
            paths:
                    {
                        

                    }
            ,
            
                    
                    
        }
);

let scriptsToLoad = [];
scriptsToLoad.push('config');
require(scriptsToLoad,
        function ()
        {
            $(function ()
            {
               
                QUnit.load();
                QUnit.start();
            });
        }
);
