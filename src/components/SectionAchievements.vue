<template>
  <section class="achievements-section">
    <h2 class="section-title">
      <span class="icon-holder"><i class="fa-solid fa-trophy"></i></span>
      Achievements & Awards
    </h2>
    <div class="achievements">
      <ul>
        <li>
          <strong>2025 – M-PESA Fintech 2.0 Upgrade – Quality Assurance Contributor:</strong> Contributed to QA activities for a long-running M-PESA core system upgrade. Participated in testing during planned downtimes and post-migration phases. Verified system readiness and service stability before public release. Supported successful go-live of upgraded financial services at national scale.
        </li>
        <li>
          <strong>5th May 2023 – 7th May 2023:</strong> I participated in the Maseno University Hackathon 2023, HealthIT. Together with a team of two, I gained real-life experience working with software. We implemented a face progression system based on the current age of the child from the age when the photo was taken and provided an API key endpoint. Our project was incubated as the winning system and later incorporated into CPIMS (uonafya).
        </li>
        <li>
          <strong>3rd August 2023 - 4th August 2023:</strong> I had the privilege of participating in the CA Cyber Security Bootcamp and Hackathon Series 2023, Kisumu edition. During this event, we successfully overcame various challenges, effectively demonstrating our prowess in the field of cybersecurity, while also fostering a spirit of innovation. My team together with me secured position three. <a target="_blank" href="https://twitter.com/KeCIRT/status/1687485184097075200?t=J8wTreA2U7nUMT8XOf484Q&s=19">Learn more</a>
        </li>
        <li>
          <strong>22nd March 2024 – 24th March 2024:</strong> I participated in the Health IT Hackathon. Together with a team of three, I developed a solution leveraging data mapping techniques to determine the geographical coordinates (latitude and longitude) of villages. We enhanced the Digimal system by incorporating precise location information for effective planning, monitoring, and resource allocation. Our project facilitated data visualization with maps, providing valuable insights and enabling informed decision-making. Our project secured the second position in the hackathon.
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.achievements-section {
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

.achievements {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.achievements ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
}

.achievements li {
  position: relative;
  padding-left: 2rem;
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.6;
}

.achievements li::before {
  content: "🏆";
  position: absolute;
  left: 0;
  font-weight: bold;
}

@media (max-width: 768px) {
  .achievements-section {
    padding: 1.5rem 1rem;
  }

  .achievements {
    padding: 1.5rem;
  }

  .achievements li {
    font-size: 1rem;
    padding-left: 1.5rem;
  }
}
</style>
