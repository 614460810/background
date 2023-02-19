<template>
    <div>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
            <el-form ref="form" :model="form" label-width="80px" :inline="true" :rules="rules">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-select v-model="form.sex" placeholder="请选择">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="出生日期" prop="birth">
                    <el-date-picker v-model="form.birth" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="地址" prop="addr">
                    <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </span>
        </el-dialog>
        <el-button type="primary" @click="handleAdd">+ 新增用户</el-button>
        <!-- 表格 -->
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="名字">
            </el-table-column>
            <el-table-column prop="age" label="年龄">
            </el-table-column>
            <el-table-column prop="sex" label="性别">
                <!-- 通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据 -->
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.sex === 1 ? '男' : '女' }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="birth" label="生日">
            </el-table-column>
            <el-table-column prop="addr" label="地址">
            </el-table-column>
            <el-table-column prop="addr" label="地址">
                <template slot-scope="scope">
                    <el-button @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button @click="handleDelete(scope.row)" type="danger">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
    </div>
</template>
<script>
import { getUser, addUser, editUser ,delUser} from '../api'
export default {
    name: 'UserView',
    data() {
        return {
            dialogVisible: false,
            form: {
                name: '',
                age: '',
                sex: '',
                birth: '',
                addr: '',

            },
            // ：rules="rules" 表单校验 不能为空
            rules: {
                name: [{
                    required: true,
                    message: '请输入名字'
                }],
                age: [{
                    required: true,
                    message: '请输入年纪'
                }],
                sex: [{
                    required: true,
                    message: '请选择性别'
                }],
                birth: [{
                    required: true,
                    message: '请输入生日'
                }],
                addr: [{
                    required: true,
                    message: '请输入地址'
                }],

            },
            tableData: [],
            // 0新增 1编辑
            modalType: 0
        };
    },
    methods: {
        submit() {
            // 表单校验 返回一个值true false
            this.$refs.form.validate(val => {
                console.log(val)
                if (val) {
                    if (this.modalType === 0) {
                        addUser(this.form).then(() => {
                            this.getList();
                        })
                    } else {
                        editUser(this.form).then(() => {
                            this.getList();
                        })
                    }
                    // console.log(this.form)
                    // 关闭表单
                    this.dialogVisible = false
                }
            })

        },
        handleClose() {
            // 重置表单内容
            this.$refs.form.resetFields()
            this.dialogVisible = false
        },
        cancel() {
            this.handleClose()
        },
        // 新增
        handleAdd() {
            this.modalType = 0;
            this.dialogVisible = true
        },
        // 编辑
        handleEdit(row) {
            this.modalType = 1
            this.dialogVisible = true
            // 注意需要对当前行数据进行深拷贝，否则会出错
            this.form = JSON.parse(JSON.stringify(row))

        },
        getList() {
            getUser().then(({ data }) => {

                // console.log(data)
                this.tableData = data.list
            })
        },
        // 删除
        handleDelete(row) {
            console.log(row)
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    delUser({ id: row.id }).then(() => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        // 重新获取列表的接口
                        this.getList()
                    })
                    
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
            });
        },
       

    },
    mounted() {
        this.getList();
        // 获取列表数据


    }
}
</script>