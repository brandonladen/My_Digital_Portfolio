<template>
  <div class="languages-container container-block">
    <h2 class="container-block-title">
      <i class="fas fa-language title-icon"></i>
      Languages
    </h2>

    <div class="languages-list">
      <div
        v-for="language in languages"
        :key="language.name"
        class="language-item"
      >
        <div class="language-header">
          <span class="language-name">{{ language.name }}</span>
          <div class="proficiency-badge">
            {{ language.description }}
          </div>
        </div>
        <div class="proficiency-bar">
          <div
            class="proficiency-level"
            :style="{ width: getProficiencyWidth(language.description) }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePortFolioStore } from "@/store/PortFolioStore";

const { languages } = usePortFolioStore();
const getProficiencyWidth = (description: string): string => {
  const levels: { [key: string]: string } = {
    Native: "100%",
    Fluent: "90%",
    Professional: "80%",
    Intermediate: "60%",
    Basic: "40%",
  };
  return levels[description] || "50%";
};
</script>

<style scoped>
.languages-container {
  margin-bottom: 2rem;
}

.container-block-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.5rem;
}

.title-icon {
  font-size: 1.1rem;
  opacity: 0.9;
}

.languages-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.language-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.language-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.language-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.language-name {
  font-size: 1.1rem;
  color: #ffffff;
  font-weight: 500;
}

.proficiency-badge {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
}

.proficiency-bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.proficiency-level {
  height: 100%;
  background: #ffffff;
  border-radius: 2px;
  transition: width 0.6s ease-in-out;
}

@media (max-width: 768px) {
  .language-item:hover {
    transform: none;
  }

  .language-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
