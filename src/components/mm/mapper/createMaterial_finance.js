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
        materialNumber: {
            key: "materialNumber",
            title: "评估类别",
            type: "radio",
            value: [{ key: "male", value: "自制品" }, { key: "female", value: "外购品" }],
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        materialGroup: {
            key: "materialGroup",
            title: "评估类型",
            type: "input",
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        materialType: {
            key: "materialType",
            title: "ML物料分类账",
            type: "radio",
            value: [{ key: "male", value: "开启" }, { key: "female", value: "关闭" }],
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        materialName: {
            key: "materialName",
            title: "基本计量单位",
            type: "input",
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        group2: {
            key: "group2",
            title: "",
            type: "formGroupTitle",
            value: "当前估价"
        },
        basicUnit: {
            key: "basicUnit",
            title: "价格控制",
            type: "radio",
            value: [{ key: "male", value: "标准单价" }, { key: "female", value: "移动平均价" }],
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        deliveryUnit: {
            key: "deliveryUnit",
            title: "价格单位",
            type: "input",
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        deliveryUnit1: {
            key: "deliveryUnit2",
            title: "标准单价",
            type: "input",
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        deliveryUnit2: {
            key: "deliveryUnit2",
            title: "移动平均价",
            type: "input",
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        deliveryUnit3: {
            key: "deliveryUnit3",
            title: "当前总库存",
            type: "input",
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        deliveryUnit4: {
            key: "deliveryUnit4",
            title: "总价值",
            type: "input",
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        }

    },
    formValidate: {
        deliveryUnit: 'RMB',
        logo: [{ 'name': 'a42bdcc1178e62b4694c830f028db5c0', 'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar' }, { 'name': 'bc7521e033abdd1e92222d733590f104', 'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar' }],
        materialGroup: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
    }
}