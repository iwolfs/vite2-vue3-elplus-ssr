<template>
  <el-dialog
      title="提示"
      v-model="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段弹窗内容</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
    <el-button type="primary" @click="handleOpen">open modal</el-button>
</template>

<script setup>
import { ref } from 'vue'
const dialogVisible = ref(false)

const handleOpen = () => {
  dialogVisible.value = true
}
const handleClose = () => {

}
</script>
