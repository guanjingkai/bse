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
            title: "物料名称",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        materialNumber: {
            key: "materialNumber",
            title: "物料编号",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        materialType: {
            key: "materialType",
            title: "物料类型",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        materialGroup: {
            key: "materialGroup",
            title: "物料组",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        group2: {
            key: "group2",
            title: "",
            type: "formGroupTitle",
            value: "量纲"
        },
        logo: {
            key: "logo",
            title: "物料图片",
            type: "upload-img",
            value: { defaultList: [], imgName: '', visible: false, uploadList: [] },
            rule: [{ required: true, message: '请选上传图片', trigger: 'blur' }]

        },
        maozhong: {
            key: "maozhong",
            title: "毛重",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        jingzhong: {
            key: "jingzhong",
            title: "净重",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        zhongliangdanwei: {
            key: "zhongliangdanwei",
            title: "重量单位",
            type: "select",
            value: [{ key: "canyin", value: "千克" }, { key: "ertong", value: "吨" }, { key: "tiyu", value: "克" }, { key: "wenchuang", value: "斤" }, { key: "lingshou", value: "两" }],
            rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
        },
        kong1: {
            key: "kong1",
            title: "",
            type: "kong"
        },
        tiji: {
            key: "tiji",
            title: "体积",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        tijidanwei: {
            key: "tijidanwei",
            title: "体积单位",
            type: "select",
            value: [{ key: "canyin", value: "千克" }, { key: "ertong", value: "吨" }, { key: "tiyu", value: "克" }, { key: "wenchuang", value: "斤" }, { key: "lingshou", value: "两" }],
            rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
        },
        ean: {
            key: "ean",
            title: "国际条码",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        eanType: {
            key: "eanType",
            title: "条码类型",
            type: "select",
            value: [{ key: "canyin", value: "EAN8" }, { key: "ertong", value: "EAN12" }, { key: "tiyu", value: "克" }, { key: "wenchuang", value: "斤" }, { key: "lingshou", value: "两" }],
            rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
        },
        group3: {
            key: "group3",
            title: "",
            type: "formGroupTitle",
            value: "包装物料数据"
        },
        baozhuang: {
            key: "baozhuang",
            title: "包装物料",
            type: "select",
            value: [{ key: "canyin", value: "EAN8" }, { key: "ertong", value: "EAN12" }, { key: "tiyu", value: "克" }, { key: "wenchuang", value: "斤" }, { key: "lingshou", value: "两" }],
            rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
        },
        baozhuangnum: {
            key: "baozhuangnum",
            title: "包装数量",
            type: "input",
            rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        group4: {
            key: "group4",
            title: "",
            type: "formGroupTitle",
            value: "基本数据"
        },
        desc: {
            key: "desc",
            title: "介绍",
            type: "md-edit",
            gridSpan: 24,
            rule: [{ required: true, message: '请选填写品牌介绍', trigger: 'blur' }]
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