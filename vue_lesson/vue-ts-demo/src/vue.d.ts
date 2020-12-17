import Vue from 'vue'
import { ElMessage } from 'element-ui/types/message'
import { ElMessageBox } from 'element-ui/types/message-box'
declare module "vue/types/vue" {
  interface Vue {
    $message: ElMessage;
    $messageBox: ElMessageBox
  }
}