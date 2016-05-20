/*
Данный файл был создан после команды:
sencha generate view attributes.AttributesViaCheckboxView
*/

Ext.define('Dalagen.view.attributes.AttributesViaCheckboxViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'Dalagen.store.AttributesStore'
    ],
    alias: 'viewmodel.attributesViaCheckboxView',
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
