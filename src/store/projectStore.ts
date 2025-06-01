import { defineStore } from "pinia";
import type { Project } from "@/projects/viewmodel";
import { getProjectWithStars } from "@/projects/viewmodel";
import { type Ref, ref } from "vue";

export const useProjectStore = defineStore("project", () => {
  const projects = ref([] as Project[]);
  const isLoading: Ref<boolean> = ref(false);
  const error: Ref<string | null> = ref(null);

  /**
   * Fetches project data and updates reactive state variables.
   *
   * Sets the loading flag to true and clears any previous error before initiating a project fetch using a callback-based API.
   * If projects are successfully retrieved, the state is updated; if not, an error message is recorded and logged.
   * The loading state is reset to false once the operation completes, whether it succeeds or fails.
   */
  async function fetchProjects() {
    try {
      isLoading.value = true;
      error.value = null;
      projects.value = await new Promise<Project[]>((resolve, reject) => {
        getProjectWithStars((result: Project[]) => {
          if (!result || result.length === 0) {
            reject(new Error("No projects found"));
            return;
          }
          resolve(result);
        });
      });
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : "Failed to fetch projects";
      console.error("Project fetch error:", err);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    projects,
    fetchProjects,
    isLoading,
    error,
  };
});
