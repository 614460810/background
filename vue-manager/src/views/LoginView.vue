<template>
    <el-form ref="form" :model="form" class="login-container" :inline="true" :rules="rules">
        <h3>登录</h3>
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit()">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
// import Cookie from 'js-cookie'
// import Mock from 'mockjs'
import { getMenu } from '../api'
export default{
    name:'LoginView',
    data(){
        return{
            form:{
                username:'',
                password:''
            },
            rules:{
                username:{
                    required: true, message: '请输入用户名', trigger: 'blur'
                },
                password:{
                    required: true, message: '请输入密码', trigger: 'blur'
                },
            }
        }
    },
    methods:{
        submit(){
            this.$refs.form.validate((valid) =>{
                if(valid){
                    getMenu(this.form).then(({data})=>{
                console.log(data)
            })
                }
            })
          
            // Cookie.set('token',token)
            // this.$router.push('/home')

        }
    }

}
</script>
<style scoped>
.login-container{
    margin: 200px auto;
    width: 350px;
    border: 2px solid black;
    border-radius: 15px;
}
.login-container h3{
    text-align: center;
}
.login-container .el-input{
    width: 250px;
}
.login-container .el-button{
    margin-left:150px
    /* margin: 0 auto; */
}
</style>