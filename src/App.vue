<script lang="ts" setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" />
      </nav>
    </div>
  </header>

  <RouterView />
</template>
