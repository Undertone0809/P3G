<script setup lang="ts">
import { ref } from 'vue'

const offlineReady = ref(false)
const needRefresh = ref(false)

async function close() {
  offlineReady.value = false
  needRefresh.value = false
}
</script>

<template>
  <template v-if="offlineReady">
    <div class="pwa-toast" role="alertdialog" aria-labelledby="pwa-message">
      <div id="pwa-message" class="mb-3">
        App ready to work offline.
      </div>
      <button type="button" class="pwa-cancel" @click="close">
        Close
      </button>
    </div>
  </template>
</template>

<style>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 100;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: white;
}
.pwa-toast #pwa-message {
  margin-bottom: 8px;
}
.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
}
.pwa-toast .pwa-refresh {
  background-color: #d77a59;
  color: white;
}
</style>
