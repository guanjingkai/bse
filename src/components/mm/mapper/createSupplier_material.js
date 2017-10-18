export default {
    self: this,
    api: {
        url: "/mm/material/list"
    },
    searchConfig: {
        orderId: {
            title: '物料ID',
            key: 'orderId',
            type: 'input',
            width: 150,
            value: ''
        },
        nameaaa: {
            title: '物料名称',
            key: 'nameaaa',
            type: 'input',
            width: 150,
            value: ''
        },
        payTools: {
            title: '物料类型',
            key: 'payType',
            type: 'select',
            data: [{ key: "canyin", value: "微信" }, { key: "ertong", value: "支付宝" }, { key: "ertong1", value: "POS刷卡" }, { key: "ertong2", value: "现金" }, { key: "ertong3", value: "预存" }],
            width: 100,
            value: ''
        },
    },
    tableData: [],
    tableColumns: [{
        title: '物料ID',
        key: 'id',
        width: 100
    }, {
        title: '物料名称',
        key: 'materialName',
    }, {
        title: '物料图片',
        key: 'materialImage',
        render: (h, params) => {
            return h('Avatar', {
                props: {
                    shape: "square",
                    src: params.row.materialImage
                }
            }, '编辑');
        }
    }, {
        title: '物料类型',
        key: 'materialType'
    }, {
        title: '物料组',
        key: 'materialGroup',
    }, {
        title: '分成比',
        key: 'lastSupplier',
        render: (h, params) => {
            return h('span', {},'20%');
        }
    }, {
        title: '类目',
        key: 'industryName',
    }, {
        title: '采购组',
        key: 'purchasingOrg'
    }, {
        title: '当前库存',
        key: 'stock'
    }, {
        title: '更新时间',
        key: 'updateTime',
        sortable: true,
    }, {
        title: '操作',
        key: 'brandStatus',
        width: 120,
        fixed: 'right',
        render: (h, params) => {
            return h('div', [
                h('Button', {
                    props: {
                        type: 'text',
                        size: 'small'
                    },
                    on: {
                        click: () => {
                            this.testFunction()
                        }
                    }
                }, '查看'),
                h('Button', {
                    props: {
                        type: 'text',
                        size: 'small'
                    }
                }, '编辑')
            ]);
        }

    }]
}