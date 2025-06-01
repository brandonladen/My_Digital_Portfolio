<script setup lang="ts">
import SectionSkills from "@/components/SectionSkills.vue";
import SideBarVue from "@/components/SideBar.vue";
import SectionSummary from "@/components/SectionSummary.vue";
import SectionExperiences from "@/components/SectionExperiences.vue";
import SectionAchievements from "@/components/SectionAchievements.vue";
import SectionBlogs from "@/components/SectionBlogs.vue";
import Projects from "@/components/Projects.vue";
import FooterVue from "@/components/FooterVue.vue";
</script>
<template>
  <div class="wrapper mt-lg-5">
    <SideBarVue />
    <div class="main-wrapper">
      <SectionSummary />

      <SectionExperiences />
      <SectionAchievements />
      <SectionBlogs />
      <Projects />

      <SectionSkills />
      <FooterVue />
    </div>
  </div>
</template>
