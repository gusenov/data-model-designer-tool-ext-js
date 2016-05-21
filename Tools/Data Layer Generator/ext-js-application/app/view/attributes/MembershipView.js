/*
Данный файл был создан после команды:
sencha generate view attributes.MembershipView
*/

Ext.define('Dalagen.view.attributes.MembershipView',{
    extend: 'Ext.panel.Panel',

    requires: [
        'Dalagen.view.attributes.MembershipViewController',
        'Dalagen.view.attributes.MembershipViewModel'
    ],

    controller: 'attributes-membershipview',
    viewModel: {
        type: 'attributes-membershipview'
    },

	title: 'Membership',
    //html: 'Hello, World!!',
	
	xtype: 'membershipview'
});
