<script setup>
import IconPlus from "@/assets/icons/IconPlus.vue";
import { computed } from "vue";
import { useValidate } from "@/shared/composables/useValidate";

const { validateRuText } = useValidate();

const childrenForm = defineModel();

const INIT_CHILDREN_FORM = {
  name: "",
  age: null,
};

const showAddButton = computed(() => {
  return childrenForm.value.children?.length < 5;
});

function handleAddChild() {
  childrenForm.value.children.push({ ...INIT_CHILDREN_FORM });
}

function handleDeleteChild(index) {
  childrenForm.value.children.splice(index, 1);
}
</script>

<template>
  <div class="item">
    <div class="space">
      <h2 class="header">Дети (макс. 5)</h2>
      <ElButton
        v-if="showAddButton"
        round
        class="add-button"
        @click="handleAddChild"
      >
        <ElIcon :size="24"><IconPlus /></ElIcon>
        <span>Добавить ребенка</span>
      </ElButton>
    </div>
    <div v-for="(child, index) in childrenForm.children?.length" :key="index">
      <div style="display: flex; gap: 18px; width: 616px; align-items: center">
        <div class="form-item">
          <label class="label">
            <span>Имя</span>
          </label>
          <ElFormItem
            :prop="'children.' + index + '.name'"
            :rules="[
              {
                required: true,
                message: 'Укажите имя',
                trigger: 'change',
              },
              {
                trigger: 'change',
                validator: validateRuText,
              },
            ]"
          >
            <ElInput
              v-model="childrenForm.children[index].name"
              style="width: 260px"
            />
          </ElFormItem>
        </div>
        <div class="form-item">
          <label class="label">
            <span>Возраст</span>
          </label>
          <ElFormItem
            :prop="'children.' + index + '.age'"
            :rules="{
              required: true,
              type: 'number',
              message: 'Укажите возраст',
              trigger: 'change',
            }"
          >
            <ElInputNumber
              v-model="childrenForm.children[index].age"
              :min="1"
              :controls="false"
              style="width: 260px"
            />
          </ElFormItem>
        </div>
        <ElButton text @click="handleDeleteChild(index)">
          <span style="color: #01a7fd">Удалить</span>
        </ElButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.space {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-button {
  width: 204px;
  height: 44px;
  border: 2px solid #01a7fd;
  background-color: white;
  font-size: 14px;
  color: #01a7fd;
}
</style>
