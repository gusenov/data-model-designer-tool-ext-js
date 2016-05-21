/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Dalagen.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Dalagen.view.main.MainController',
        'Dalagen.view.main.MainModel',
        'Dalagen.view.main.List',
		
		'Dalagen.view.entities.EntitiesView',
		'Dalagen.view.attributes.AttributesView',
		'Dalagen.view.attributes.MembershipView',
		'Dalagen.view.entities.RelationshipView'
    ],

    /*controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]*/
	
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch',
    },
    items: [
		{
			xtype: 'entitiesview',
			flex: 1
		}, {
			xtype: 'attrview',
			flex: 1
		}, {
			xtype: 'panel',
			flex: 3,
			layout: {
				type: 'vbox',
				pack: 'start',
				align: 'stretch',
			},
			items: [
				{
					xtype: 'membershipview',
					flex: 1
				}, {
					xtype: 'relationshipview',
					flex: 1
				}
			]
		}
	]
});
