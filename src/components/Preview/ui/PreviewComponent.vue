<script setup>
import { usePreviewInfoStore } from "@/store/preview-info-store";
import { storeToRefs } from "pinia";
import { defineFullName } from "@/shared/lib/defineFullName";
import { defineYearsText } from "@/shared/lib/defineYearsText";

const previewInfoStore = usePreviewInfoStore();
const { previewInfo } = storeToRefs(previewInfoStore);
</script>

<template>
  <div class="page-content">
    <div v-if="previewInfo">
      <div class="item">
        <h2 class="header">Персональные данные</h2>
        <p class="info-text">
          {{ defineFullName(previewInfo) }},
          {{ defineYearsText(previewInfo.age) }}
        </p>
      </div>
      <div v-if="previewInfo?.children?.length" class="item">
        <h2 class="header">Дети</h2>
        <div v-for="(child, index) in previewInfo.children" :key="index">
          <ElTag class="tag">
            <span class="info-text">
              {{ child.name }}, {{ defineYearsText(child.age) }}
            </span>
          </ElTag>
        </div>
      </div>
    </div>
    <p v-else>Нет данных</p>
  </div>
</template>
