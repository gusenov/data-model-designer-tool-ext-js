/*
Данный файл был создан после команды:
sencha generate view attributes.AttributesViaCheckboxView
*/

Ext.define('Dalagen.view.attributes.AttributesViaCheckboxView', {
    extend: 'Ext.grid.Panel',

    requires: ['Dalagen.view.attributes.AttributesViaCheckboxViewController', 'Dalagen.view.attributes.AttributesViaCheckboxViewModel'],

    plugins: ['rowediting','gridfilters'],

    controller: 'attributesViaCheckboxViewCtrl',
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
        xtype: 'checkcolumn',
        editor: {
            xtype: 'checkbox'
        },
        flex: 1,
		dataIndex: 'active'
    }, {
        dataIndex: 'uid',
        hidden: true
    }, {
        text: 'Name',
        flex: 2,
        dataIndex: 'name',
        editor: {
            // defaults to textfield if no xtype is supplied
            allowBlank: false
        }

    }, {
        text: 'Type',
        flex: 2,
        dataIndex: 'type',
        editor: new Ext.form.field.ComboBox({
            typeAhead: true,
            triggerAction: 'all',
            store: [
                ['Bath', 'Bath'],
                ['Kitchen', 'Kitchen'],
                ['Electronic', 'Electronic'],
                ['Food', 'Food'],
                ['Computer', 'Computer']
            ]
        })

    }],
    xtype: 'attrcheckview'

});