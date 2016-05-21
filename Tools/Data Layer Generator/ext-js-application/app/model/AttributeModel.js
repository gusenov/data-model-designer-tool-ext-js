/*
Данный файл был создан после команды:
sencha generate model AttributeModel uid:int,name,type
*/

Ext.define('Dalagen.model.AttributeModel', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'uid', type: 'int', convert: null },
        { name: 'name', type: 'string' },
        { name: 'type', type: 'string' }

    ],
	
	idProperty: 'uid'
    //manyToMany: 'Entity'
});
