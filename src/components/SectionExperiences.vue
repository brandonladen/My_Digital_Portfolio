<script setup lang="ts">
import { usePortFolioStore } from "@/store/PortFolioStore";
import { computed, ref, onMounted } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import gsap from "gsap";
import { VSkeletonLoader } from "vuetify/components";

const portFolioStore = usePortFolioStore();
const sectionRef = ref<HTMLElement | null>(null);

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

const calculateTimeSince = (start: Date, end: Date): string => {
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
  const diffMonths = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
  );

  let timeSince = "";
  if (diffYears > 0) {
    timeSince += `${diffYears} yr${diffYears > 1 ? "s" : ""}`;
  }
  if (diffMonths > 0) {
    timeSince += timeSince ? " " : "";
    timeSince += `${diffMonths} mo${diffMonths > 1 ? "s" : ""}`;
  }
  return timeSince || " 1 month";
};

const currentDate = computed(() => new Date());

const formatTimeRange = (
  start: Date,
  end?: Date,
  current?: boolean,
): string => {
  const startDate = new Date(start);
  const endDate = current
    ? currentDate.value
    : end
      ? new Date(end)
      : currentDate.value;

  const formattedStart = formatDate(startDate);
  const formattedEnd = current ? "Present" : formatDate(endDate);
  const timeSince = calculateTimeSince(startDate, endDate);

  return `${formattedStart} - ${formattedEnd} · ${timeSince}`;
};

onMounted(() => {
  if (sectionRef.value) {
    const { stop } = useIntersectionObserver(
      sectionRef.value,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          animateExperiences();
          stop();
        }
      },
      { threshold: 0.2 },
    );
  }
});

const animateExperiences = () => {
  gsap.from(".experience-item", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out",
  });
};
</script>

<template>
  <section ref="sectionRef" class="experience-section">
    <div class="section-header">
      <h2 class="section-title">
        <i class="fas fa-briefcase"></i>
        Experience
      </h2>
      <div class="header-line"></div>
      <VSkeletonLoader v-if="portFolioStore.isLoading" type="card" />
    </div>

    <div class="timeline">
      <div
        v-for="experience in portFolioStore.workExperiences"
        :key="experience.company"
        class="experience-item"
      >
        <div class="timeline-dot"></div>
        <div class="experience-card">
          <div class="company-header">
            <div class="logo-container">
              <VImg
                v-if="experience.logo"
                :src="experience.logo"
                :alt="experience.company"
                class="company-logo"
              />
              <div v-else class="logo-placeholder">
                {{ experience.company.charAt(0) }}
              </div>
            </div>
            <div class="company-info">
              <h3>
                <a
                  :href="experience.companyLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ experience.company }}
                </a>
              </h3>
            </div>
          </div>

          <div class="roles-container">
            <div
              v-for="role in experience.roles"
              :key="role.jobTitle"
              class="role"
            >
              <div class="role-header">
                <h4>{{ role.jobTitle }}</h4>
                <span class="duration">
                  {{
                    formatTimeRange(
                      role.time.start,
                      role.time.end,
                      role.time.current,
                    )
                  }}
                </span>
              </div>
              <ul class="achievements">
                <li v-for="detail in role.details" :key="detail">
                  {{ detail }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.experience-section {
  width: 100%;
  padding: 2rem 0;
}

.section-header {
  margin-bottom: 3rem;
  position: relative;

  h2 {
    color: #2d3748;
    margin-bottom: 1rem;

    i {
      color: #0077b5;
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
  }

  .header-line {
    margin-top: 1rem;
    height: 3px;
    background: linear-gradient(90deg, #0077b5 0%, #00a0dc 100%);
    border-radius: 2px;
  }
}

.timeline {
  position: relative;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #0077b5;
  }
}

.experience-item {
  position: relative;
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }

  .timeline-dot {
    position: absolute;
    left: -2.4rem;
    top: 1.5rem;
    width: 1rem;
    height: 1rem;
    background: #0077b5;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 0 3px rgba(0, 119, 181, 0.2);
    transition: transform 0.2s ease;
  }

  &:hover .timeline-dot {
    transform: scale(1.2);
  }
}

.experience-card {
  background: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
}

.company-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.logo-container {
  flex-shrink: 0;
  width: 4rem;
  height: 4rem;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e8f0;

  .company-logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .logo-placeholder {
    width: 100%;
    height: 100%;
    background: #f7fafc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: #0077b5;
  }
}

.company-info {
  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0;
    color: #2d3748;

    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: #0077b5;
      }
    }
  }
}

.roles-container {
  .role {
    padding: 1.5rem 0;
    border-top: 1px solid #e2e8f0;

    &:first-child {
      padding-top: 0;
      border-top: none;
    }
  }
}

.role-header {
  margin-bottom: 1rem;

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #2d3748;
    margin: 0 0 0.5rem 0;
  }

  .duration {
    font-size: 0.9rem;
    color: #0077b5;
    font-weight: 500;
  }
}

.achievements {
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: 1.75rem;
    margin-bottom: 1rem;
    color: #4a5568;
    font-size: 1rem;
    line-height: 1.6;

    &::before {
      content: "•";
      position: absolute;
      left: 0.5rem;
      color: #0077b5;
      font-size: 1.2rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@media (max-width: 768px) {
  .experience-section {
    padding: 1.5rem 0;
  }

  .timeline {
    padding-left: 1.5rem;
  }

  .experience-item .timeline-dot {
    left: -1.9rem;
    width: 0.8rem;
    height: 0.8rem;
  }

  .company-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .logo-container {
    width: 3rem;
    height: 3rem;
  }

  .company-info h3 {
    font-size: 1.2rem;
  }
}
</style>
