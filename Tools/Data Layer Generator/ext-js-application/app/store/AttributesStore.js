

var data = {
    data: [{
        id: 1,
        name: 'firstName',
        type: 'String'
    }]
};

Ext.define('Dalagen.store.AttributesStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Dalagen.model.AttributeModel'
    ],

    alias: 'store.attributes',

    model: 'Dalagen.model.AttributeModel',

    data: data,

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
