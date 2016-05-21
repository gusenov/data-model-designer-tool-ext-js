/*
Данный файл был создан после команды:
sencha generate view entities.EntitiesView
*/

Ext.define('Dalagen.view.entities.EntitiesView',{
    extend: 'Ext.tree.Panel',

    requires: [
        'Dalagen.view.entities.EntitiesViewController',
        'Dalagen.view.entities.EntitiesViewModel'
    ],

    controller: 'entities-entitiesview',
    viewModel: {
        type: 'entitiesViewModel'
    },

    //html: 'Hello, World!!',
	xtype: 'entitiesview',
	title: 'Entities',
	
	bind: { 
		store: '{entitiesStore}' 
	},
	
	dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    text: 'Add',
                    iconCls: 'icon-add',
                    handler: function() {
                        // empty record
                        var rec = new Attribute();
                        attributeStore.insert(0, rec);
                        //rowEditing.startEdit(rec, 0);
                    }
                }, {
                    itemId: 'delete',
                    text: 'Delete',
                    iconCls: 'icon-delete',
                    disabled: true,
                    handler: function() {}
                }, '-']
            }]
	
});
