/*
Данный файл был создан после команды:
sencha generate view entities.EntitiesView
*/

Ext.define('Dalagen.view.entities.EntitiesViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'Dalagen.store.EntitiesStore'
    ],	
    alias: 'viewmodel.entitiesViewModel',
    stores: {
		entitiesStore: {
			type: 'entities'
		}
	}	

});
