export default {
    self: this,
    gridSpan: 12,
    parameter: {
        group1: {
            key: "group1",
            title: "",
            type: "formGroupTitle",
            value: "基本信息"
        },
        materialName: {
            key: "materialName",
            title: "供应商名称",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        materialNumber: {
            key: "materialNumber",
            title: "语言",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        materialType: {
            key: "materialType",
            title: "地区",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        materialGroup: {
            key: "materialGroup",
            title: "详细地址",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        group2: {
            key: "group2",
            title: "",
            type: "formGroupTitle",
            value: "财务数据"
        },
        aaa: {
            key: "aaa",
            title: "税收号码",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]

        },
        baozhuang1: {
            key: "baozhuang1",
            title: "税号类型",
            type: "select",
            value: [{ key: "canyin", value: "小规模纳税人" }, { key: "ertong", value: "EAN12" }, { key: "tiyu", value: "克" }, { key: "wenchuang", value: "斤" }, { key: "lingshou", value: "两" }],
            rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
        },
        aaa1: {
            key: "aaa1",
            title: "税率",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]

        },
        aaa2: {
            key: "aaa2",
            title: "计税基数",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]

        },
        maozhong: {
            key: "maozhong",
            title: "开户名称",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        jingzhong: {
            key: "jingzhong",
            title: "发票抬头",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        jingzhong1: {
            key: "jingzhong1",
            title: "开户行",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        jingzhong2: {
            key: "jingzhong2",
            title: "银行账户",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        jingzhong3: {
            key: "jingzhong3",
            title: "期初预付款",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        group3: {
            key: "group3",
            title: "",
            type: "formGroupTitle",
            value: "经营信息"
        },
        baozhuangnum: {
            key: "baozhuangnum",
            title: "营业执照",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        baozhuangnum1: {
            key: "baozhuangnum1",
            title: "执照有效期",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        }
    },
    formValidate: {
        name: '',
        logo: [{ 'name': 'a42bdcc1178e62b4694c830f028db5c0', 'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar' }, { 'name': 'bc7521e033abdd1e92222d733590f104', 'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar' }],
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
    }
}