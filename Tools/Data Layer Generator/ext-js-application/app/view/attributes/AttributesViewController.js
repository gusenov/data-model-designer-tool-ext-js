/*
Данный файл был создан после команды:
sencha generate view attributes.AttributesView
*/

Ext.define('Dalagen.view.attributes.AttributesViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.attributesViewCtrl',
    requires: [
        'Dalagen.model.AttributeModel'
    ],
    onClickAddAttribute: function () {
		var vm = this.getViewModel();
		var attrStore = vm.getStore('attributesStore');
		
		// empty record
		var rec = new Dalagen.model.AttributeModel();
		attrStore.insert(0, rec);

		this.fireEvent('addAttrBtnClick');
		//rowEditing.startEdit(rec, 0);
    }
});
