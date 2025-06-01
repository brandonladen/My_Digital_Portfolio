<template>
  <section class="blogs-section">
    <h2 class="section-title">
      <span class="icon-holder"><i class="fa-solid fa-blog"></i></span>
      Blogs
    </h2>
    <div class="blogs-grid">
      <div v-for="blog in blogs" :key="blog.url" class="blog-card">
        <a :href="blog.url" target="_blank" rel="noopener noreferrer">
          <h3 class="blog-title">{{ blog.title }}</h3>
        </a>
        <p class="blog-description">{{ blog.description }}</p>
        <div class="blog-tags">
          <span v-for="tag in blog.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Blog {
  title: string;
  url: string;
  description: string;
  tags: string[];
}

const blogs = ref<Blog[]>([
  {
    title: "Web Browsing",
    url: "https://medium.com/@brandonladen486/what-happens-when-you-type-https-www-google-com-in-your-browser-and-press-enter-18f6abb01860",
    description: "What happens when you type https://www.google.com in your browser and press Enter.",
    tags: ["Software Development", "Web Development"],
  },
  {
    title: "Working With APIs",
    url: "https://medium.com/@brandonladen486/subneteaseprocalc-simplifying-subnetting-for-everyone-alx-portfolio-project-802391cbd00c",
    description: "SubnetEaseProCalc — Simplifying Subnetting for Everyone (ALX Portfolio Project).",
    tags: ["Software Development", "Web Development", "APIs", "Django"],
  },
]);
</script>

<style scoped>
.blogs-section {
  width: 100%;
  padding: 2rem 0;
}

.section-title {
  color: #2d3748;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;
  border-bottom: 3px solid #e2e8f0;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
}

.icon-holder {
  background: linear-gradient(135deg, #3498db, #2ecc71);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Cards Grid */
.blogs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.blog-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
}

.blog-card:hover {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.blog-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #3498db;
  margin-bottom: 0.5rem;
  text-decoration: none;
}

.blog-title:hover {
  text-decoration: underline;
}

.blog-description {
  color: #4a5568;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #e2e8f0;
  color: #2d3748;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
}
</style>
