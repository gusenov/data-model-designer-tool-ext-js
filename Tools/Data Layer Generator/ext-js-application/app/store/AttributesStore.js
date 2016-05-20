

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
	autoLoad: true,
	autoSync: true,
    //data: data,
	
    proxy: {
		type: 'sessionstorage',
		id  : 'attributes'
        //type: 'memory',
        //reader: {
        //    type: 'json',
        //    rootProperty: 'data'
        //}
    }/*,
	
	listeners: {
				datachanged: function(store, options) {
					console.log(data);
				}
			}*/
});
