// Данный файл был создан после команды: sencha generate view entities.EntitiesView
var i = 0;
Ext.define('Dalagen.view.entities.EntitiesViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.entities-entitiesview',

	// Пользователь нажал на кнопку для снятия выделения.
    onPointerBtnClick: function() {
		// Получаем представление связанное с этим контроллером.
		// В данном случае нам известно, что это наследник Ext.tree.Panel.
        var treePanelView = this.getView();
		
        var selectionModel = treePanelView.getSelectionModel();
        selectionModel.deselectAll();
    },

	// Пользователь сменил выделенную сущность.
    onSelectionChange: function(view, records) {
        // Do nothing
    },
	
	// Пользователь нажал на кнопку для добавления новой сущности.
    onClickAddEntity: function() {
		console.log("onClickAddEntity");
		var treePanelView = this.getView();

		// Текущее выделение.
        var selectionModel = treePanelView.getSelectionModel();
		var arrayOfSelected = selectionModel.getSelection();
		

		var newEntity = Ext.create('Dalagen.model.EntityModel', { entityName: i, leaf: true });
		i = i + 1;
		
		var vm = this.getViewModel();
		var store = vm.getStore('entitiesStore');
			
		if (arrayOfSelected.length > 0) {
			var selected = arrayOfSelected[0];
			if (selected.isLeaf()) {
				selected.set('leaf', false);
			}
			selected.appendChild(newEntity);
		} else {
			store.getRoot().appendChild(newEntity);
		}

		store.sync();
		//store.reload(); // framework bug-fix
		
        //rowEditing.startEdit(rec, 0);
    }
});