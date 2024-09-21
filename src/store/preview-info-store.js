import { defineStore } from "pinia";

export const usePreviewInfoStore = defineStore("preview-info-store", {
    state: () => ({
        previewInfo: null,
    }),
    actions: {
        updatePreviewInfo(form) {
            this.previewInfo = { ...this.previewInfo, ...form };
        },
    },
})
