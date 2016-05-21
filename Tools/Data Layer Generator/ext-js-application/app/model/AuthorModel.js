/*
Данный файл был создан после команды:
sencha generate model AuthorModel uid:int,name
*/

Ext.define('Dalagen.model.AuthorModel', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'uid', type: 'int' },
        { name: 'fname', type: 'string' },
		{ name: 'lname', type: 'string' }

    ]
});
