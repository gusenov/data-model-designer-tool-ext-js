/*
Данный файл был создан после команды:
sencha generate view attributes.AttributesViaDragAndDropView
*/

Ext.define('Dalagen.view.attributes.AttributesViaDragAndDropView',{
    extend: 'Ext.panel.Panel',

    requires: [
        'Dalagen.view.attributes.AttributesViaDragAndDropViewController',
        'Dalagen.view.attributes.AttributesViaDragAndDropViewModel'
    ],

    /*controller: 'attributes-attributesviadraganddropview',
    viewModel: {
        type: 'attributes-attributesviadraganddropview'
    },

    html: 'Hello, World!!'*/
	
                title: 'Drag-and-drop',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'stretch',
                },
                items: [{
                    xtype: 'grid',
                    title: 'Атрибуты выбранной сущности',
                    //store: attributeStore,
                    columns: [{
                        dataIndex: 'uid',
                        hidden: true
                    }, {
                        text: 'Наименование',
                        flex: 1,
                        dataIndex: 'name'
                    }, {
                        text: 'Тип',
                        flex: 1,
                        dataIndex: 'type'
                    }],
					flex: 1
                }, {
                    xtype: 'grid',
                    title: 'Атрибуты других сущностей',
                    //store: attributeStore,
                    columns: [{
                        dataIndex: 'uid',
                        hidden: true
                    }, {
                        text: 'Наименование',
                        flex: 1,
                        dataIndex: 'name'
                    }, {
                        text: 'Тип',
                        flex: 1,
                        dataIndex: 'type'
                    }],
					flex: 1
                }],
				xtype: 'attrdragndropview'
});
