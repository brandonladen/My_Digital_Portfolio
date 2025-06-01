<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { openLink, type Project } from "@/projects/viewmodel";
import { useProjectStore } from "@/store/projectStore";
import { VSkeletonLoader } from "vuetify/components";

const projectStore = useProjectStore(); // Initialize the Pinia store

const projects = ref<Project[]>([]);

const startString = (project: Project) => {
  return parseInt(project.stars) === 1 ? "1 star" : `${project.stars} stars`;
};

onMounted(async () => {
  // Dispatch an action to fetch the projects
  await projectStore.fetchProjects();
  projects.value = projectStore.projects;
});
</script>

<template>
  <div class="container mt-4">
    <h2 class="section-title">
      <span class="icon-holder"><i class="fa-solid fa-archive"></i></span>
      Projects
    </h2>

    <!-- Error handling -->
    <v-alert v-if="projectStore.error" type="error" class="mb-4">
      {{ projectStore.error }}
    </v-alert>

    <!-- Loading state -->
    <div v-if="projectStore.isLoading" class="d-flex justify-center my-4">
      <VSkeletonLoader type="card" class="mx-auto" width="300" />
    </div>

    <!-- Projects grid -->
    <div v-else class="row">
      <div class="card-container">
        <div v-for="project in projects" :key="project.gitName" class="card">
          <!-- Card content -->
          <VImg
            :alt="project.name"
            :src="project.image"
            class="card-img-top img-fluid"
            cover
            aspect-ratio="16/9"
            :title="project.name"
          >
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular
                  color="grey-lighten-4"
                  indeterminate
                ></v-progress-circular>
              </div>
            </template>
          </VImg>
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="row">
              <!-- Tags and Contributors -->
              <div class="tags-and-contributors">
                <VCard class="tags">
                  <strong>Tags:</strong>
                  <ul>
                    <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
                  </ul>
                </VCard>

                <!-- Contributors -->
                <VCard class="contributors">
                  <strong>Contributors:</strong>
                  <div class="row align-items-center">
                    <ul class="d-flex flex-wrap p-3">
                      <li
                        v-for="contributor in project.contributors"
                        :key="contributor.login"
                        class="col p-2 d-flex gap-1 text-center v-list-item--border"
                      >
                        <div class="d-flex text-center gap-2">
                          <VImg
                            :src="contributor.avatar_url"
                            alt="Contributor Avatar"
                            height="24"
                            rounded="circle"
                            width="24"
                          />
                          <a
                            :href="contributor.html_url"
                            class="text-center"
                            target="_blank"
                            >{{ contributor.login }}</a
                          >
                          <v-badge
                            :content="contributor.contributions"
                            class="text-center mt-4 mr-3"
                            color="info"
                            floating
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </VCard>
              </div>
            </div>

            <div class="d-flex justify-content-between align-items-center mt-3">
              <p class="m-2 font-lg">{{ startString(project) }}</p>
              <p class="m-2 font-lg">{{ project.forks }} forks</p>

              <VBtn
                class="btn btn-outline-secondary"
                variant="outlined"
                @click="openLink(project.url)"
              >
                Source <i class="bi bi-github ml-2"></i>
              </VBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Default styles for larger screens */
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #e2e8f0;
}

.card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.card-text {
  color: #4a5568;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

.tags-and-contributors {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
}

.tags,
.contributors {
  background: #f7fafc;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.tags ul,
.contributors ul {
  list-style: none;
  margin: 0.5rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tags li {
  background: #ebf8ff;
  color: #2b6cb0;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
}

.contributors {
  strong {
    display: block;
    margin-bottom: 0.5rem;
  }

  ul {
    gap: 1rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    color: #2b6cb0;
    font-size: 0.875rem;
    &:hover {
      color: #2c5282;
    }
  }
}

@media (max-width: 768px) {
  .card-container {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  .card-img-top {
    height: 180px;
  }

  .card-body {
    padding: 1rem;
  }
}
</style>
