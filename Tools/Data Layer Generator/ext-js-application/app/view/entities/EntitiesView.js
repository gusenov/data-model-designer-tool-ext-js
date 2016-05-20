/*
Данный файл был создан после команды:
sencha generate view entities.EntitiesView
*/

Ext.define('Dalagen.view.entities.EntitiesView', {
    extend: 'Ext.tree.Panel',

    requires: ['Dalagen.view.entities.EntitiesViewController', 'Dalagen.view.entities.EntitiesViewModel', 'Dalagen.model.EntityModel'],

    controller: 'entities-entitiesview',
    viewModel: {
        type: 'entitiesViewModel'
    },
	
    //html: 'Hello, World!!',
    xtype: 'entitiesview',
    title: 'Entities',
    allowDeselect: true,
    bind: {
        store: '{entitiesStore}'
    },

    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: '↖',
            handler: 'onPointerBtnClick'
        }, {
            text: '➕',
            //iconCls: 'icon-add',
            handler: 'onClickAddEntity'
        }, {
            itemId: 'delete',
            text: '⌦',
            //iconCls: 'icon-delete',
            disabled: true,
            handler: function() {}
        }, '-']
    }],

    listeners: {
        'selectionchange': 'onSelectionChange',
        scope: 'controller'
    },
	
	plugins: ['rowediting','gridfilters'],

    columns: [{
        xtype: 'treecolumn',
        text: 'Name',
        dataIndex: 'entityName',
		flex: 1,
		editor: {
            // defaults to textfield if no xtype is supplied
            allowBlank: false
        }
    }],
	
	rootVisible: true

});