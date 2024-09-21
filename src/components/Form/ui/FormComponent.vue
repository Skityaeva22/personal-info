<script setup>
import ParentInfo from "./ParentInfo.vue";
import ChildrenInfo from "./ChildrenInfo.vue";
import { ref, onMounted } from "vue";
import { checkValidForm } from "@/shared/lib/checkValidForm";
import { useValidate } from "@/shared/composables/useValidate";
import { customNotification } from "@/shared/lib/messageNotify";
import { usePreviewInfoStore } from "@/store/preview-info-store";
import { storeToRefs } from "pinia";

const previewInfoStore = usePreviewInfoStore();
const { previewInfo } = storeToRefs(previewInfoStore);

const form = ref({});

const { validateRuText, validateAge } = useValidate(form);

const INIT_FORM = {
  lastName: "",
  firstName: "",
  patronymic: "",
  age: null,
  children: [],
};

const formRef = ref();

const rules = ref({
  lastName: [
    { required: true, message: "Укажите фамилию", trigger: "change" },
    { trigger: "change", validator: validateRuText },
  ],
  firstName: [
    { required: true, message: "Укажите имя", trigger: "change" },
    { trigger: "change", validator: validateRuText },
  ],
  patronymic: [{ trigger: "change", validator: validateRuText }],
  age: [
    {
      required: true,
      type: "number",
      message: "Укажите возраст",
      trigger: "change",
    },
    { trigger: "change", type: "number", validator: validateAge },
  ],
});

async function handleSaveForm() {
  if (!formRef.value) return;

  const isValid = await checkValidForm(formRef.value);
  if (!isValid) return;

  try {
    previewInfoStore.updatePreviewInfo(form.value);
    customNotification("", "Данные формы сохранены", "success");
  } catch (e) {
    console.log(e);
    customNotification("", "Ошибка в заполнении формы", "error");
  }
}

onMounted(() => {
  if (previewInfo.value) form.value = { ...form.value, ...previewInfo.value };
  else form.value = { ...form.value, ...INIT_FORM };
});
</script>

<template>
  <ElForm
    ref="formRef"
    :model="form"
    :rules="rules"
    label-width="auto"
    label-position="top"
    class="page-content"
  >
    <ParentInfo v-model="form" />
    <ChildrenInfo v-model="form" />
    <div class="item">
      <ElButton round class="save-button" @click="handleSaveForm">
        <span>Сохранить</span>
      </ElButton>
    </div>
  </ElForm>
</template>

<style lang="scss" scoped>
.save-button {
  background-color: #01a7fd;
  border: 2px solid #01a7fd;
  width: 118px;
  height: 44px;
  font-size: 14px;
  color: white;
}
</style>
