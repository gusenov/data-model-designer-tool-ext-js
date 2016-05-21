/*
Данный файл был создан после команды:
sencha generate view attributes.AttributesView
*/

Ext.define('Dalagen.view.attributes.AttributesView',{
    extend: 'Ext.tab.Panel',

    requires: [
        'Dalagen.view.attributes.AttributesViewController',
        'Dalagen.view.attributes.AttributesViewModel',

		'Dalagen.view.attributes.AttributesViaCheckboxView',
		'Dalagen.view.attributes.AttributesViaDragAndDropView'
    ],

    controller: 'attributes-attributesview',
    viewModel: {
        type: 'attributes-attributesview'
    },

    // html: 'Hello, World!!'
	
            //layout: 'accordion',
            title: 'Attributes',	
        items: [{
            xtype: 'attrcheckview'
        },{
            xtype: 'attrdragndropview'
        }],
		
	xtype: 'attrview',
	
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
