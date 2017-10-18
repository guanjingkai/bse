export default {
    self: this,
    gridSpan: 13,
    parameter: {
        brandName: {
            key: "brandName",
            title: "供应商名称",
            type: "input",
            rule: [{ required: true, message: '姓名不能为空', trigger: 'blur' }]
        },
        materialType: {
            key: "materialType",
            title: "采购组织",
            type: "select",
            value: [{ key: "roh", value: "原材料" }, { key: "halb", value: "半成品" }, { key: "fert", value: "成本" }, { key: "zfsf", value: "鲜冻品" }, { key: "unbw", value: "未估价物料" }, { key: "nalg", value: "非存储物料" }, { key: "verp", value: "包装" }, { key: "zves", value: "维护装配" }, { key: "jingpin", value: "竞争对手产品" }],
            rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
        },
        materialType1: {
            key: "materialType1",
            title: "合作方式",
            type: "radio",
            value: [{ key: "roh", value: "购销" }, { key: "halb", value: "联营" }, { key: "fert", value: "代销" }],
            rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
        },
        state: {
            key: "state",
            title: "状态",
            type: "radio",
            value: [{ key: "roh", value: "正常" }, { key: "halb", value: "停用" }],
            rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
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