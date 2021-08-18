// import 'element-plus/lib/theme-chalk/index.css'
import './element-variables.scss'
// import 'element-plus/packages/theme-chalk/src/base.scss'
import {
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElCarousel,
  ElCarouselItem,
  ElCheckbox,
  ElCheckboxGroup,
  ElCol,
  ElDatePicker,
  ElDialog,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElIcon,
  ElInput,
  ElLoading,
  ElMessage,
  ElOption,
  ElPagination,
  ElPopper,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRow,
  ElSelect,
  ElSwitch,
  ElTable,
  ElTableColumn,
} from 'element-plus'

const components = [
  ElButton,
  ElInput,
  ElIcon,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElCarousel,
  ElCarouselItem,
  ElRadio,
  ElRadioGroup,
  ElRadioButton,
  ElSelect,
  ElOption,
  ElPopper,
  ElForm,
  ElFormItem,
  ElCol,
  ElRow,
  ElDatePicker,
  ElCheckbox,
  ElCheckboxGroup,
  ElDialog,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElSwitch,
]

const plugins = [
  ElLoading,
  ElMessage,
]

export default (app) => {

  components.forEach(component => {
    app.component(component.name, component)
  })
  plugins.forEach(plugin => {
    app.use(plugin)
  })

  return app
}