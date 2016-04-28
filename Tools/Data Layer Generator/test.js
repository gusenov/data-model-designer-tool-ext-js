Ext.define('Entity', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'uid',
        type: 'int',
        convert: null
    }, {
        name: 'name',
        type: 'string'
    }],
    idProperty: 'uid',
    manyToMany: 'Attribute'
});

Ext.define('Attribute', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'uid',
        type: 'int',
        convert: null
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'type',
        type: 'string'
    }],
    idProperty: 'uid',
    manyToMany: 'Entity'
});

var data = {
    data: [{
        id: 1,
        name: 'firstName',
        type: 'String'
    }]
};

var attributeStore = Ext.create('Ext.data.Store', {
    model: 'Attribute',
    data: data,
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});

Ext.application({
    name: 'Fiddle',

    launch: function() {

        Ext.create('Ext.panel.Panel', {
            renderTo: Ext.getBody(),
            layout: 'accordion',
            title: 'Атрибуты',
            items: [{
                xtype: 'grid',
                store: attributeStore,
                title: 'Флажки',
                columns: [{
                    editor: {
                        xtype: 'checkbox'
                    }
                }, {
                    dataIndex: 'uid',
                    hidden: true
                }, {
                    text: 'Наименование',
                    flex: 1,
                    dataIndex: 'name'
                }, {
                    text: 'Тип',
                    flex: 1,
                    dataIndex: 'type'
                }]
            }, {
                xtype: 'panel',
                title: 'Тащи-и-бросай',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'stretch',
                },
                items: [{
                    xtype: 'grid',
                    title: 'Атрибуты выбранной сущности',
                    store: attributeStore,
                    columns: [{
                        dataIndex: 'uid',
                        hidden: true
                    }, {
                        text: 'Наименование',
                        flex: 1,
                        dataIndex: 'name'
                    }, {
                        text: 'Тип',
                        flex: 1,
                        dataIndex: 'type'
                    }]
                }, {
                    xtype: 'grid',
                    title: 'Атрибуты других сущностей',
                    store: attributeStore,
                    columns: [{
                        dataIndex: 'uid',
                        hidden: true
                    }, {
                        text: 'Наименование',
                        flex: 1,
                        dataIndex: 'name'
                    }, {
                        text: 'Тип',
                        flex: 1,
                        dataIndex: 'type'
                    }]
                }]
            }],
            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    text: 'Добавить',
                    iconCls: 'icon-add',
                    handler: function() {
                        // empty record
                        var rec = new Attribute();
                        attributeStore.insert(0, rec);
                        //rowEditing.startEdit(rec, 0);
                    }
                }, '-', {
                    itemId: 'delete',
                    text: 'Удалить',
                    iconCls: 'icon-delete',
                    disabled: true,
                    handler: function() {}
                }]
            }]
        });

    }
});