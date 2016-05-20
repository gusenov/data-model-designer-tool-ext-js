

Ext.define('Dalagen.store.EntitiesStore', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'Dalagen.model.EntityModel'
    ],

    model: 'Dalagen.model.EntityModel',
	//autoLoad: true,
	//autoSync: true,
    //data: data,

    proxy: {
        type: 'sessionstorage',
		id: 'entities'
        /*reader: {
            type: 'json',
            rootProperty: 'data'
        }*/
    },
	
	alias: 'store.entities',
	//rootVisible: true,
	defaultRootId: 0
	
	//defaultRootProperty: '',
	
    /*root: {
        expanded: true,
        text: 'Continents',

        children: [{
            text: 'Antarctica',
            leaf: true,
        }, {
            text: 'South America',
            expanded: false,
            children: [{
                text: 'Chile',
                leaf: true,
            }]
        }, {
            text: 'Asia',
            expanded: true,
            children: [{
                text: 'India',
                leaf: true,
            }, {
                text: 'China',
                leaf: true,
            }]
        }, {
            text: 'Africa',
            leaf: true,
        }]
    }*/
	
});
