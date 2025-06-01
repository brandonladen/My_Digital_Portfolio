<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePortFolioStore } from "@/store/PortFolioStore.ts";

const { technologies } = usePortFolioStore();
const skillsSection = ref<HTMLElement | null>(null);
const loadingIcons = ref<Record<string, boolean>>({});

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  technologies.forEach((skill) => {
    loadingIcons.value[skill.title] = true;

    // Simulated loading delay
    setTimeout(() => {
      loadingIcons.value[skill.title] = false;
    }, 1000);
  });

  if (skillsSection.value) {
    gsap.from(document.querySelectorAll(".skill-item"), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: skillsSection.value?.enterKeyHint,
        start: "top center+=200",
      },
    });
  }
});
</script>

<template>
  <v-container ref="skillsSection" class="skills-section py-8">
    <h2 class="section-title">
      <span class="icon-holder"><i class="fa-solid fa-rocket"></i></span>
      Tech Stack & Frameworks
    </h2>

    <v-row class="justify-center">
      <v-col
        v-for="skill in technologies"
        :key="skill.title"
        cols="6"
        sm="4"
        md="3"
        class="skill-item"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            :class="{ 'skill-card-hover': isHovering }"
            class="skill-card text-center pa-4"
            elevation="4"
          >
            <template v-if="loadingIcons[skill.title]">
              <v-progress-circular indeterminate color="primary" size="40" />
            </template>
            <template v-else>
              <v-icon
                size="64"
                :class="`mb-4 ${skill.color} ${isHovering ? 'text-primary' : ''}`"
                :icon="skill.icon || 'mdi-code-braces'"
              />
            </template>
            <div class="text-h6 font-weight-medium">{{ skill.title }}</div>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.skills-section {
  width: 100%;
  padding: 3rem 0;
}

.skill-card {
  transition: all 0.3s ease;
  transform: translateY(0);
  border-radius: 16px !important;
  background: #ffffff;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.skill-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-card-hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1) !important;
}

.skill-card-hover::before {
  opacity: 1;
}

.v-icon {
  font-size: 3.5rem !important;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.text-h6 {
  font-size: 1.1rem !important;
  font-weight: 500;
  line-height: 1.4;
  color: #2d3748;
  text-align: center;
  margin: 0;
}

@media (max-width: 960px) {
  .skills-section {
    padding: 2rem 1rem;
  }

  .v-icon {
    font-size: 3rem !important;
  }

  .text-h6 {
    font-size: 1rem !important;
  }
}

@media (max-width: 600px) {
  .skills-section {
    padding: 1.5rem 1rem;
  }

  .skill-card {
    padding: 1rem;
  }

  .v-icon {
    font-size: 2.5rem !important;
    margin-bottom: 0.75rem;
  }

  .text-h6 {
    font-size: 0.9rem !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .skill-card,
  .v-icon {
    transition: none;
  }
}
</style>
