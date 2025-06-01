<script lang="ts" setup>
interface Hobby {
  name: string;
  icon: string;
}

const hobbies: Hobby[] = [
  { name: "Cycling", icon: "fa-solid fa-bicycle" },
  { name: "Traveling and Adventure", icon: "fa-solid fa-mountain" },
  { name: "Tech & Programming", icon: "fa-solid fa-code" },
];
</script>

<template>
  <div class="hobbies-container container-block">
    <h2 class="container-block-title">
      <i class="fas fa-heart title-icon"></i>
      Interests & Hobbies
    </h2>

    <div class="hobbies-grid">
      <div v-for="hobby in hobbies" :key="hobby.name" class="hobby-item">
        <i :class="['fas', hobby.icon]"></i>
        <span class="hobby-name">{{ hobby.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hobbies-container {
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

.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.hobby-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  cursor: default;
}

.hobby-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.hobby-item i {
  font-size: 1.5rem;
  color: #ffffff;
  opacity: 0.9;
  transition: transform 0.3s ease;
}

.hobby-item:hover i {
  transform: scale(1.1);
}

.hobby-name {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
}

@media (max-width: 768px) {
  .hobbies-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hobby-item:hover {
    transform: none;
  }

  .hobby-item:hover i {
    transform: none;
  }
}
</style>
