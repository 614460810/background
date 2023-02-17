<template>
    <el-container >
        <el-aside width="auto"><CommonAside/></el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import CommonAside from '../components/CommonAside.vue';
export default {
    name: 'MainView',
    components:{
        CommonAside
    }
}

</script>
<style>
.el-header{
    background-color: #333;
}

</style>