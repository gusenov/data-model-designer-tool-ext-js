

Ext.define('Dalagen.store.EntitiesStore', {
    extend: 'Ext.data.TreeStore',

    /*requires: [
        'Dalagen.model.AttributeModel'
    ],

    model: 'Dalagen.model.AttributeModel',

    data: data,

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }*/
	
	alias: 'store.entities',
	
	//defaultRootProperty: '',
	
    root: {
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
    }
	
});
