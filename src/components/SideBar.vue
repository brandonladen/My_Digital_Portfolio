<script setup lang="ts">
import { ref, onMounted } from "vue";
import Socials from "@/components/Socials.vue";
import Education from "@/components/Education.vue";
import Languages from "@/components/Languages.vue";
import Hobbies from "@/components/Hobbies.vue";

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});
</script>

<template>
  <aside class="sidebar-wrapper" :class="{ visible: isVisible }">
    <div class="profile-container">
      <div class="image-wrapper">
        <VImg
          alt="profile image"
          class="profile"
          src="/images/profile.jpg"
          width="220px"
          height="220px"
          rounded="circle"
          contain
          loading="lazy"
          :transition="'scale-transition'"
        />
      </div>
      <h1 class="name">Brandon Odhiambo</h1>
      <h3 class="tagline">Junior Software Engineer</h3>

      <div class="profile-actions">
        <a href="mailto:brandonladen486@gmail.com" class="action-button">
          <i class="fas fa-envelope"></i> Contact Me
        </a>
        <a href="/resume.pdf" target="_blank" class="action-button secondary">
          <i class="fas fa-download"></i> Download CV
        </a>
      </div>
    </div>

    <div class="sidebar-content">
      <Socials />
      <Education />
      <Languages />
      <Hobbies />
    </div>
  </aside>
</template>

<style scoped>
.sidebar-wrapper {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.5s ease-out;
}

.sidebar-wrapper.visible {
  opacity: 1;
  transform: translateX(0);
}

.profile-container {
  padding: 2rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0 0 1rem 1rem;
}

.image-wrapper {
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.image-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.image-wrapper:hover::after {
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.3);
}

.profile {
  border: 3px solid rgba(255, 255, 255, 0.9);
  transition: transform 0.3s ease;
}

.profile:hover {
  transform: scale(1.05);
}

.name {
  font-size: 2rem;
  font-weight: 700;
  margin: 0.5rem 0;
  color: #ffffff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.tagline {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
}

.profile-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.action-button {
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  background: #ffffff;
  color: #42a8c0;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.action-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-decoration: none;
}

.action-button.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.action-button.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
}

.sidebar-content {
  padding: 2rem;
}

@media (max-width: 768px) {
  .sidebar-wrapper {
    transform: none;
    opacity: 1;
  }

  .profile-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .action-button {
    justify-content: center;
  }
}
</style>
