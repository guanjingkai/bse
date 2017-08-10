<template>
    <Row type="flex" justify="center" align="middle" style="height: 100%;background: #464c5b;">
        <Col :xs="20" :sm="16" :md="12" :lg="8">
            <Card style="width:100%;margin-top: -20%;">
                <p slot="title">汉云数据可视化管理后台</p>
                <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80">
                  <Form-item prop="user" label="用户名">
                    <Input type="text" v-model="formInline.user" placeholder="手机号/企业邮箱/UID">
                    </Input>
                  </Form-item>
                  <Form-item prop="password" label="密码">
                    <Input type="password" v-model="formInline.password" placeholder="请输入密码">
                    </Input>
                  </Form-item>
                  <Form-item>
                    <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                  </Form-item>
                </Form>
            </Card>
        </Col>
    </Row>
</template>
<script>
  export default {
    name: 'login',
    components: {

    },
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('登录成功!');
            this.$store.state.user.token = "IUim5MEv4lkQG4duVjARJTFIvo3B36dXAmSJzEi0qNa";
            this.$store.state.user.uid = "1";
            localStorage.setItem('token',this.$store.state.user.token);
            this.router.push({ path: "/dashboard" });
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      }
    }
  }
</script>
<style>

</style>
