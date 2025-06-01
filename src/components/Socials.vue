<script lang="ts" setup>
import { usePortFolioStore } from "@/store/PortFolioStore";

const { contact } = usePortFolioStore();
</script>

<template>
  <div class="contact-container container-block">
    <h2 class="container-block-title">
      <i class="fas fa-address-book title-icon"></i>
      Contact Information
    </h2>

    <ul class="contact-list">
      <li class="contact-item">
        <a
          :href="'mailto:' + contact.email"
          target="_blank"
          class="contact-link"
        >
          <i class="fa-solid fa-envelope"></i>
          <span class="contact-text">{{ contact.email }}</span>
        </a>
      </li>

      <li class="contact-item">
        <a :href="contact.linkedin.link" target="_blank" class="contact-link">
          <i class="fa-brands fa-linkedin-in"></i>
          <span class="contact-text">{{ contact.linkedin.userName }}</span>
        </a>
      </li>

      <li class="contact-item">
        <a :href="contact.github.link" target="_blank" class="contact-link">
          <i class="fa-brands fa-github"></i>
          <span class="contact-text">{{ contact.github.userName }}</span>
        </a>
      </li>

      <li class="contact-item">
        <a :href="contact.twitter.link" target="_blank" class="contact-link">
          <i class="fa-brands fa-x-twitter"></i>
          <span class="contact-text">{{ contact.twitter.userName }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.contact-container {
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

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-item {
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.contact-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  text-decoration: none;
}

.contact-link i {
  width: 1.5rem;
  text-align: center;
  font-size: 1.1rem;
}

.contact-text {
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .contact-item:hover {
    transform: none;
  }

  .contact-link {
    padding: 0.75rem;
  }
}
</style>
