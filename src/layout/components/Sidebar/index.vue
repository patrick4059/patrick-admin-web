<template>
  <div>
    <logo/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :background-color="variables.menuBg"
        :text-color="variables.menuText">
        <el-menu-item>首页</el-menu-item>
        <el-menu-item>系统管理</el-menu-item>
        <el-menu-item>系统工具</el-menu-item>
        <el-menu-item>组件管理</el-menu-item>
        <el-menu-item>菜单管理</el-menu-item>
        <el-menu-item>自定义系统</el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
    import variables from '@/assets/styles/variables.module.scss'
    import Logo from './Logo'
    import SidebarItem from './SidebarItem'

    export default {
        components: {
            SidebarItem,
            Logo
        },
        computed: {
            variables() {
                console.log(variables)
                console.log(variables.menuBg)
                return variables
            }
        }
    }
</script>

<style scoped>

</style>
