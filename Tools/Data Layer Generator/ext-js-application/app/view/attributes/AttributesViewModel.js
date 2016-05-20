/*
Данный файл был создан после команды:
sencha generate view attributes.AttributesView
*/

Ext.define('Dalagen.view.attributes.AttributesViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'Dalagen.store.AttributesStore'
    ],
    alias: 'viewmodel.attributesViewModel',
    data: {
        name: 'Dalagen'
    },
    stores: {
		attributesStore: {
			type: 'attributes'
			/*listeners: {
				datachanged: function(store, options) {
					// Do nothing
				}
			}*/
		}
	}

});
