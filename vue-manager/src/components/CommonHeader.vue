<template>
    <header>
        <div class="left-content">
            <el-button  @click="handleCollapes" icon="el-icon-menu" size="mini"></el-button>
            <h3>首页</h3>
        </div>
        <div class="right-content">
            <el-dropdown trigger="click" size="mini" @command="handleCommand">
            <span class="el-dropdown-link">
                <img :src="userImage" >
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
import Cookie from 'js-cookie'
export default {
    name: 'CommonHeader',
    data(){
        return{
            userImage:require('../assets/1.jpg')
        }
    },
    methods:{
        handleCollapes(){
            this.$store.commit('isCollapseMenu')
        },
        handleCommand(command){
            if(command==='logout'){
                Cookie.remove('token')
                this.$router.push('/login')
            }
        }
    }
}
</script>


<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
.left-content{
    display: flex;
    align-items: center;
}
.left-content .el-button{
    margin-right: 20px;
}

.right-content{
    display: flex;
    align-items: center;
}
.right-content img{
    width: 40px;
    height: 40px;
    border-radius: 50%;

}

</style>
