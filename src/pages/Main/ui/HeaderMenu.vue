<script setup>
import { defineEmits, defineProps, computed } from "vue";

const props = defineProps({
  currentComponentName: String,
});

const emit = defineEmits(["update:currentComponentName"]);

const isActiveFormTab = computed(() => {
  return props.currentComponentName === "Form";
});

const isActivePreviewTab = computed(() => {
  return props.currentComponentName === "Preview";
});

function selectComponentName(name) {
  emit("update:currentComponentName", name);
}
</script>

<template>
  <div class="header">
    <img src="@/assets/pictures/alef-text-logo.svg" />
    <div class="tabs">
      <span
        :class="{ active: isActiveFormTab }"
        style="cursor: pointer"
        @click="selectComponentName('Form')"
      >
        Форма
      </span>
      <span
        :class="{ active: isActivePreviewTab }"
        style="cursor: pointer"
        @click="selectComponentName('Preview')"
      >
        Превью
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: #fafafa;
  height: 76px;
  display: flex;
  align-items: center;
  padding-left: 41px;
  padding-right: 41px;
}

.tabs {
  display: flex;
  justify-content: center;
  width: calc(100% - 93px);
  color: #1111117a;
  font-size: 14px;
  line-height: 24px;
  gap: 24px;
}
</style>
