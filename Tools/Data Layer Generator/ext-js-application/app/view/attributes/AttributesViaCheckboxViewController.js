/*
Данный файл был создан после команды:
sencha generate view attributes.AttributesViaCheckboxView
*/

Ext.define('Dalagen.view.attributes.AttributesViaCheckboxViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.attributesViaCheckboxViewCtrl',
	
     listen: {
         controller: {
             '*': {
                 addAttrBtnClick: 'onAddAttrBtnClick'
             }
         }
     },
	 
	 onAddAttrBtnClick: function() {
		var vm = this.getViewModel();
		var attrStore = vm.getStore('attributesStore');
		attrStore.reload();
	 }
    
});
