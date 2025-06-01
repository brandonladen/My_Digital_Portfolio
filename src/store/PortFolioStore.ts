import { educations, experiences, langs, skills } from "@/projects/viewmodel";
import type {
  Contact,
  Education,
  Experience,
  Language,
  Project,
  Skill,
} from "@/types/Types.ts";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const usePortFolioStore = defineStore("portfolio", () => {
  const workExperiences = ref<Experience[]>([]);
  const contact = ref<Contact>({
    email: "brandonladen486@gmail.com",
    phone: "+254702499923",
    linkedin: {
      userName: "Brandon Odhiambo Wamboga",
      link: "https://www.linkedin.com/in/brandon-odhiambo-40b91a25a",
    },
    github: {
      userName: "brandonladen",
      link: "https://github.com/brandonladen",
    },
    twitter: {
      userName: "BrandonLyden",
      link: "https://twitter.com/BrandonLyden",
    },
  });
  const technologies = ref<Skill[]>([]);
  const educationLevels = ref<Education[]>([]);
  const languages = ref<Language[]>([]);
  const isLoading = ref(false);

  /**
   * Initializes the portfolio store with data.
   *
   * This function assigns imported data to the store's reactive properties. It populates work experiences,
   * technologies, education levels, and languages with the corresponding data arrays. The loading state is
   * set to true at the start and reset to false at the end, ensuring that the state is updated even if an error
   * occurs during initialization. Any errors encountered are logged to the console.
   */
  function initializeStore() {
    try {
      isLoading.value = true;
      workExperiences.value = experiences;
      technologies.value = skills;
      educationLevels.value = educations;
      languages.value = langs;
    } catch (error) {
      console.error("Store initialization error:", error);
    } finally {
      isLoading.value = false;
    }
  }

  // Initialize on store creation
  initializeStore();

  return {
    workExperiences,
    contact,
    technologies,
    educationLevels,
    languages,
    isLoading,
  };
});
