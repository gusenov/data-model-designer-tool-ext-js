/*
Данный файл был создан после команды:
sencha generate view attributes.AttributesViaCheckboxView
*/

Ext.define('Dalagen.view.attributes.AttributesViaCheckboxView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Dalagen.view.attributes.AttributesViaCheckboxViewController',
        'Dalagen.view.attributes.AttributesViaCheckboxViewModel'
    ],

    //controller: 'attributes-attributesviacheckboxview',
    viewModel: {
        type: 'attributesViaCheckboxView'
    },

    //html: 'Hello, World!!'

                //store: attributeStore,
				
				bind: '{attributesStore}', // По умолчанию свойство bind для Ext.grid.Panel ждет в качестве значения store
// Альтернативный длинный синтаксис:
/*	bind: { 
   store: '{attributesStore}' 
},*/

                title: 'Check',
                columns: [{
                    editor: {
                        xtype: 'checkbox'
                    }
                }, {
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
				    xtype: 'attrcheckview'

});
