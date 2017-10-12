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
            title: "基本计量单位",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        materialNumber: {
            key: "materialNumber",
            title: "订单单位",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        materialType: {
            key: "materialType",
            title: "采购组",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        materialGroup: {
            key: "materialGroup",
            title: "运输组",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        materialType1: {
            key: "materialType1",
            title: "批次管理",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        materialGroup1: {
            key: "materialGroup1",
            title: "自动采购",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        group2: {
            key: "group2",
            title: "",
            type: "formGroupTitle",
            value: "采购数据"
        },
        aaa: {
            key: "aaa",
            title: "第一封崔询单",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]

        },
        baozhuang1: {
            key: "baozhuang1",
            title: "交货不足限度",
            type: "select",
            value: [{ key: "canyin", value: "小规模纳税人" }, { key: "ertong", value: "EAN12" }, { key: "tiyu", value: "克" }, { key: "wenchuang", value: "斤" }, { key: "lingshou", value: "两" }],
            rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
        },
        aaa1: {
            key: "aaa1",
            title: "第二封崔询单",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]

        },
        aaa2: {
            key: "aaa2",
            title: "过量交货限度",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]

        },
        maozhong: {
            key: "maozhong",
            title: "第三封崔询单",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        jingzhong: {
            key: "jingzhong",
            title: "最小交货数量",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        jingzhong2: {
            key: "jingzhong2",
            title: "请求回执",
            type: "radio",
            value: [{ key: "yes", value: "是" }, { key: "on", value: "否" }],
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        jingzhong3: {
            key: "jingzhong3",
            title: "无限交货限制",
            type: "radio",
            value: [{ key: "yes", value: "是" }, { key: "on", value: "否" }],
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
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