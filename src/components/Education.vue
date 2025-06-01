<script lang="ts" setup>
import { usePortFolioStore } from "@/store/PortFolioStore";

const { educationLevels } = usePortFolioStore();
</script>

<template>
  <div class="education-container container-block">
    <h2 class="container-block-title">
      <i class="fas fa-graduation-cap title-icon"></i>
      Education
    </h2>

    <div class="education-list">
      <div
        class="education-item"
        v-for="education in educationLevels"
        :key="education.degree"
      >
        <div class="education-header">
          <h4 class="degree">{{ education.degree }}</h4>
          <div class="duration">{{ education.duration }}</div>
        </div>
        <h5 class="school">
          <i class="fas fa-university school-icon"></i>
          {{ education.school }}
        </h5>
      </div>
    </div>
  </div>
</template>

<style scoped>
.education-container {
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

.education-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.education-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.education-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.degree {
  font-size: 1.1rem;
  color: #ffffff;
  margin: 0;
  font-weight: 600;
}

.duration {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
}

.school {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.school-icon {
  font-size: 0.9rem;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .education-item:hover {
    transform: none;
  }

  .education-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .duration {
    align-self: flex-start;
  }
}
</style>
