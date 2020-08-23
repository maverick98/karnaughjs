define(['ojs/ojcore', 'text!./cca-kmap-view.html', './cca-kmap-viewModel', 'text!./component.json', 'ojs/ojcomposite',
         'css!./css/cca-kmap-styles'],
    function(oj, view, viewModel, metadata){
        oj.Composite.register('cca-kmap', {
            view: view,
            viewModel : viewModel,
            metadata : JSON.parse(metadata)
        });
    }
);


