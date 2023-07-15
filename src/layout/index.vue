<template>
  <div>
<!--    左边菜单栏-->
    <sidebar class="sidebar-container"/>
<!--    右边主显示区-->
    <div class="main-container">
<!--      头部区域-->
      <div>
        <navbar />
      </div>
    </div>
<!--    <sidebar class="sidebar-container"/>-->
<!--    <app-main/>-->
  </div>
</template>

<script>
    import { AppMain, Sidebar, Navbar } from './components'

    export default {
        name: 'index',
        components: {
            AppMain,
            Sidebar,
            Navbar
        }
    }
</script>

<style scoped>

</style>
