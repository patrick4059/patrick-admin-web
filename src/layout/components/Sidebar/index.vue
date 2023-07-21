<template>
  <div>
    <logo/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse= false
        :unique-opened=true
        :background-color="variables.menuBg"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        :text-color="variables.menuText">
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
    import variables from '@/assets/styles/variables.module.scss'
    import Logo from './Logo'
    import SidebarItem from './SidebarItem'

    export default {
        data() {
            return {
                activeMenu: '1',
                sidebarRouters: []
            }
        },
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
