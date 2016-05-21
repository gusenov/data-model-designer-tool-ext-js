/*
Данный файл был создан после команды:
sencha generate view entities.RelationshipView
*/

Ext.define('Dalagen.view.entities.RelationshipView',{
    extend: 'Ext.panel.Panel',

    requires: [
        'Dalagen.view.entities.RelationshipViewController',
        'Dalagen.view.entities.RelationshipViewModel'
    ],

    controller: 'entities-relationshipview',
    viewModel: {
        type: 'entities-relationshipview'
    },

	title: 'Relationship',
    //html: 'Hello, World!!',
	
	xtype: 'relationshipview'
});
