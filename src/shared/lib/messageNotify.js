import { ElNotification } from "element-plus";

export function customNotification(title, message, type) {
    ElNotification({
      title,
      message,
      type,
    })
}
