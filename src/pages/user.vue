<template>
  <div class="user">
    User Page
    <el-form class="form">
      <el-form-item label="UserName">
        <el-input v-model="userName" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button v-loading="loading" type="primary" @click="submit"> Submit </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'User',
  data() {
    return {
      userName: '',
      password: '',
      loading: false,
      userInfo: {
        name: '',
        userId: '',
        token: ''
      }
    };
  },
  methods: {
    submit() {
 
    }
  }
}
</script>

<style lang="scss">
.form {
  width: 450px;
  margin: 0 auto;
}
.box-card {
  width: 480px;
  margin: 20px auto;
}
</style>
