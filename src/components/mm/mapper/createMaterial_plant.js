export default {
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
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        materialNumber: {
            key: "materialNumber",
            title: "物料编号",
            type: "input",
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        materialType: {
            key: "materialType",
            title: "物料类型",
            type: "input",
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        materialGroup: {
            key: "materialGroup",
            title: "物料组",
            type: "input",
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        group2: {
            key: "group2",
            title: "",
            type: "formGroupTitle",
            value: "存储信息"
        },
        basicUnit: {
            key: "basicUnit",
            title: "基本单位",
            type: "select",
            value: [{ key: "canyin", value: "千克" }, { key: "ertong", value: "吨" }, { key: "tiyu", value: "克" }, { key: "wenchuang", value: "斤" }, { key: "lingshou", value: "两" }],
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        deliveryUnit: {
            key: "deliveryUnit",
            title: "发货单位",
            type: "select",
            value: [{ key: "canyin", value: "千克" }, { key: "ertong", value: "吨" }, { key: "tiyu", value: "克" }, { key: "wenchuang", value: "斤" }, { key: "lingshou", value: "两" }],
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        temperatureCondition: {
            key: "temperatureCondition",
            title: "温度条件",
            type: "select",
            value: [{ key: "day", value: "无特殊条件" }, { key: "week", value: "0°冷藏" }, { key: "mouth", value: "-18°冷藏" }, { key: "year", value: "18°恒温" }],
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        storageCondition: {
            key: "storageCondition",
            title: "存储条件",
            type: "select",
            value: [{ key: "day", value: "无特殊条件" }, { key: "week", value: "0°冷藏" }, { key: "mouth", value: "-18°冷藏" }, { key: "year", value: "18°恒温" }],
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        containerCondition: {
            key: "containerCondition",
            title: "集装箱条件",
            type: "select",
            value: [{ key: "day", value: "无特殊条件" }, { key: "week", value: "0°冷藏" }, { key: "mouth", value: "-18°冷藏" }, { key: "year", value: "18°恒温" }],
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        dangerLevel: {
            key: "dangerLevel",
            title: "危险物料等级",
            type: "select",
            value: [{ key: "canyin", value: "S级" }, { key: "ertong", value: "A级" }, { key: "tiyu", value: "B级" }, { key: "wenchuang", value: "C级" }, { key: "lingshou", value: "无" }],
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        cycleCount: {
            key: "cycleCount",
            title: "周期盘点",
            type: "input",
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        batchManagement: {
            key: "batchManagement",
            title: "批次管理",
            type: "radio",
            value: [{ key: "male", value: "是" }, { key: "female", value: "否" }],
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        group3: {
            key: "group3",
            title: "",
            type: "formGroupTitle",
            value: "货架寿命"
        },
        maxStorageTime: {
            key: "maxStorageTime",
            title: "最大存储时间",
            type: "input",
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        minStorageTime: {
            key: "minStorageTime",
            title: "最小存储时间",
            type: "input",
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        allStorageTime: {
            key: "allStorageTime",
            title: "保质期",
            type: "input",
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
        },
        storageTimeUnit: {
            key: "storageTimeUnit",
            title: "货架时间单位",
            type: "select",
            placement: "top",
            value: [{ key: "day", value: "天" }, { key: "week", value: "周" }, { key: "mouth", value: "月" }, { key: "year", value: "年" }],
            rule: [{ required: true, message: '请选填写内容', trigger: 'blur' }]
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