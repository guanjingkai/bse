export default {
    self: this,
    api: {
        url: "http://brand.api.hanyun.com/brand/brand/info?pageNo=1&pageSize=10"
    },
    searchConfig: {
        contactName: {
            title: '姓名',
            key: 'contactName',
            type: 'input',
            width: 150,
            value: ''
        },
        phoneNum: {
            title: '联系电话',
            key: 'phoneNum',
            type: 'input',
            width: 150,
            value: ''
        }
    },
    tableData: [],
    tableColumns: [{
        title: '姓名',
        key: 'contactName'
    }, {
        title: '联系电话',
        key: 'phoneNum'
    }, {
        title: '称谓',
        key: 'title'
    }, {
        title: '部门',
        key: 'department',
    }, {
        title: '备注',
        key: 'remark',
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