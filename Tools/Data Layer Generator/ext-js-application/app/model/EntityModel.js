/*
Данный файл был создан после команды:
sencha generate model EntityModel uid:int,name
*/

Ext.define('Dalagen.model.EntityModel', {
	extend: 'Ext.data.TreeModel',
	
	// Ext.data.Model Configs:

	// У сущности может быть несколько атрибутов.
	        associations: [{
            type: 'hasMany', // Ext.data.HasManyAssociation
            model: 'Dalagen.model.AttributeModel',
            name: 'attributes' // имя функции, вызов которой будет возвращать хранилище
        }],
	/*
	Пример использования:
    var entity = Ext.create('EntityModel', { name: 'Company' });
    entity.attributes().add({ name: 'Country', type: 'string'}, { name: 'Founder', type: 'string' });
    entity.attributes().each(function (attribute){
        alert(attribute.get('name') + " "+attribute.get('type'));
    });	
	*/
		
	// У сущности есть автор - создатель или последний редактор.
	belongsTo: 'Dalagen.model.AuthorModel', // Ext.data.BelongsToAssociation
	/*
	Пример использования:
    entity.setAuthorModel(author);
    entity.getAuthorModel(function(author, operation){
        alert(author.get('fname'));
    });	
	*/
	
	//childType: 'Dalagen.model.EntityModel',
	
	//clientIdProperty: 'clientId',
	/*
	Сначала объект данной сущности создается на клиенте и ему присваивается клиентский (локальный) идентификатор.
	После отправки объекта на сервер, он там получит реальный (глобальный) идентификатор.
	В ответе сервера клиентский идентификатор подменится реальным идентификатором.
	А старый клиентский идентификатор сервер вернет в поле с именем 'clientId'.
	*/
	
	convertOnSet: true,
	/*
	Этой опцией можно вкл. или выкл. постобработку методом convert для значений полей устанавливающихся методом set.
	tina.set({
		salary: 60000,
		yearsOfService: 4
	});
	Пример можно посмотреть в справке.
	*/
    
    fields: [
        { name: 'uid', type: 'int' },
        { name: 'entityName', type: 'string' }
    ],
	/*
	В поле type указывается псевдоним (alias) для одного из типов из Ext.data.field.*.
	*/
	
	/*
	Сущность может иметь несколько наследников.
	*/
    hasMany: {                                                              
        model: 'Dalagen.model.EntityModel',                                                  
        name: 'childs'                                                   
    },	
	
	// Имя поля, которое будет использоваться в качестве уникального идентификатора
	idProperty: 'uid',
	
	// Генератор значений для idProperty, когда значение для него не задается явно.
    identifier: {
         type: 'sequential'
         //id: 'xy' // общий генератор для моделей с таким же id у их генератора
    },
	
    //manyToMany: 'Attribute'
	
    requires: [
        'Dalagen.model.AttributeModel',
		'Dalagen.model.AuthorModel'
    ]	
});
