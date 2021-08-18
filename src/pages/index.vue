<template>
  <div class="index">
    <div class="primary">primary color {{message}} yes!!!22</div>
    <el-button type="primary" @click="handleChangeMessage">change msg</el-button>
    <el-switch v-model="dialogVisible" active-color="#13ce66" inactive-color="#ff4949">switch</el-switch>
    <el-dropdown>
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown>
      <span class="el-dropdown-link">
        下拉菜单22<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <CustomModal />
    <el-dialog
      title="提示"
      v-model="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import CustomModal from '@/components/CustomModal.vue'
export default {
  name: 'Index',
  components: {
    CustomModal
  },
  data() {
    return {
      value: false,
      dialogVisible: false,
      title: 'ssr aaa'
    };
  },
  computed: {
    message() {
      return this.$store.state.message
    }
  },
  async asyncData({store}) {
    // console.log('async data')
    return {
      title: 'ssr title'
    }
  },
  methods: {
    handleClose() {

    },
    handleChangeMessage() {
      this.$store.dispatch('fetchMessage')
    }
  }
}
</script>

<style lang="scss" scoped>
.primary {
  color: $color-primary;
}
</style>