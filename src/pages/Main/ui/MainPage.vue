<script setup>
import HeaderMenu from "./HeaderMenu.vue";
import MainFooter from "./MainFooter.vue";
import { COMPONENTS } from "@/shared/types/components";
import { ref, computed } from "vue";

const currentComponentName = ref("Form");

const currentComponent = computed(() => {
  return COMPONENTS.find((c) => c.name === currentComponentName.value)
    .component;
});

function handleUpdateCurrentComponentName(name) {
  currentComponentName.value = name;
}
</script>

<template>
  <div class="page">
    <HeaderMenu
      :currentComponentName="currentComponentName"
      @update:currentComponentName="handleUpdateCurrentComponentName"
    />
    <div class="content">
      <KeepAlive>
        <component :is="currentComponent" />
      </KeepAlive>
    </div>
    <MainFooter />
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  overflow-y: auto;
  align-items: center;
  justify-content: center;
  padding: 30px 375px;
}

.content::-webkit-scrollbar {
  display: none;
}
</style>
