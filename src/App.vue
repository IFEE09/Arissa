<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import CookieConsent from './components/CookieConsent.vue'
import WelcomeSplash from './components/WelcomeSplash.vue'
</script>

<template>
  <WelcomeSplash />
  <AppHeader />
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <AppFooter />
  <CookieConsent />
</template>

<style scoped>
main {
  min-height: calc(100vh - 70px);
}
</style>
