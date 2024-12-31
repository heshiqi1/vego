<template>
  <div class="login">
    <div class="login-container">
      <h1>Login System</h1>
      <el-form ref="ruleFormRef" style="max-width: 400px" :model="ruleForm" status-icon :rules="rules" label-width="auto" class="demo-ruleForm">
        <el-form-item label="username" prop="username">
          <el-input v-model="ruleForm.username" type="text" />
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input v-model="ruleForm.password" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"> Submit </el-button>
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { login } from "../api/login";

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  username: "",
  password: "",
});

const validateusername = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the username"));
  } else {
    if (ruleForm.username !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("username");
    }
  }
};
const validatePwd = (rule: any, value: any, callback: any) => {
  if (ruleForm.password === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm.username !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("password");
    }
  }
};

const rules = reactive<FormRules<typeof ruleForm>>({
  username: [{ validator: validateusername, trigger: "blur" }],
  password: [{ validator: validatePwd, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  login(formEl);
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #fdfbfb, #ebedee);
  display: flex;
  justify-content: center;
  align-items: center;
  .login-container {
    height: 400px;
    width: 600px;

    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid rgb(200, 189, 189);
    border-radius: 5px;
    background-color: #fff;
    h1 {
      margin-top: -60px;
      margin-bottom: 20px;
      font-size: 30px;
      text-align: center;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .el-form-item {
      margin-right: -20px;
    }
    .el-button {
      width: 100px;
    }
  }
}
</style>
