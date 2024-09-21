<script setup>
const parentForm = defineModel();
</script>

<template>
  <div class="item">
    <h2 class="header">Персональные данные</h2>
    <div class="form-item">
      <label class="label">
        <span>Фамилия</span>
      </label>
      <ElFormItem prop="lastName">
        <ElInput v-model="parentForm.lastName" />
      </ElFormItem>
    </div>
    <div class="form-item">
      <label class="label">
        <span>Имя</span>
      </label>
      <ElFormItem prop="firstName">
        <ElInput v-model="parentForm.firstName" />
      </ElFormItem>
    </div>
    <div class="form-item">
      <label class="label">
        <span>Отчество</span>
      </label>
      <ElFormItem prop="patronymic">
        <ElInput v-model="parentForm.patronymic" />
      </ElFormItem>
    </div>
    <div class="form-item">
      <label class="label">
        <span>Возраст</span>
      </label>
      <ElFormItem prop="age">
        <ElInputNumber
          v-model="parentForm.age"
          :min="1"
          :controls="false"
          style="width: 100%"
        />
      </ElFormItem>
    </div>
  </div>
</template>
