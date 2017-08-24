export default {
    self: this,
    gridSpan: 13,
    parameter: {
        brandName: {
            key: "brandName",
            title: "物料编号",
            type: "input",
            rule: [{ required: true, message: '姓名不能为空', trigger: 'blur' }]
        },
        materialType: {
            key: "materialType",
            title: "物料类型",
            type: "select",
            value: [{ key: "roh", value: "原材料" }, { key: "halb", value: "半成品" }, { key: "fert", value: "成本" }, { key: "zfsf", value: "鲜冻品" }, { key: "unbw", value: "未估价物料" }, { key: "nalg", value: "非存储物料" }, { key: "verp", value: "包装" }, { key: "zves", value: "维护装配" }, { key: "jingpin", value: "竞争对手产品" }],
            rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
        },
        plant: {
            key: "plant",
            title: "工厂",
            type: "cascader",
            value: [{ value: 'beijing', label: '加盟区', children: [{ value: 'gugong', label: '广州分公司' }, { value: 'tiantan', label: '厦门分公司' }, { value: 'wangfujing', label: '福建分公司' }] }, { value: 'jiangsu', label: '直营区', children: [{ value: 'nanjing', label: '东北区', children: [{ value: 'fuzimiao', label: '沈阳分公司' }] }, { value: 'suzhou', label: '津京冀', children: [{ value: 'zhuozhengyuan', label: '北京分公司' }, { value: 'shizilin', label: '天津分公司' }] }] }],
            rule: [{ required: true, message: '请选择城市', trigger: 'change' }]
        },
        storageLocation: {
            key: "storageLocation",
            title: "存储地点",
            type: "select",
            value: [{ key: "canyin", value: "亚洲1号仓库" }, { key: "ertong", value: "北京1号仓库" }, { key: "tiyu", value: "龙德广场店仓" }, { key: "wenchuang", value: "大悦城店仓" }, { key: "lingshou", value: "秘密基地" }],
            rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
        },
        industry: {
            key: "industry",
            title: "行业",
            type: "select",
            value: [{ key: "canyin", value: "餐饮" }, { key: "ertong", value: "儿童" }, { key: "tiyu", value: "体育" }, { key: "wenchuang", value: "文创" }, { key: "lingshou", value: "零售" }],
            rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
        },
        materialGroup: {
            key: "materialGroup",
            title: "物料组",
            type: "select",
            value: [{ key: "canyin", value: "分组1" }, { key: "ertong", value: "分组2" }, { key: "tiyu", value: "分组3" }],
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