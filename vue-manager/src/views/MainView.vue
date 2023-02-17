<template>
    <el-container >
        <el-aside width="auto"><CommonAside/></el-aside>
        <el-container>
            <el-header>
                <CommonHeader/>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import CommonAside from '../components/CommonAside.vue';
import CommonHeader from '../components/CommonHeader.vue';
export default {
    name: 'MainView',
    components:{
        CommonAside,
        CommonHeader
    }
}

</script>
<style>
.el-header{
    background-color: gray;
}

</style>