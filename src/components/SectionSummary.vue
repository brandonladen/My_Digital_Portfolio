<template>
  <section class="summary-section">
    <h2 class="section-title">
      <span class="icon-holder"><i class="fa-solid fa-user"></i></span>
      Career Profile
    </h2>
    <div class="summary">
     <ul>
      <li>I’m Brandon Odhiambo Wamboga, a software engineer passionate about building impactful and user-focused solutions.</li>

      <li>I graduated with a BSc in Information Technology from Maseno University and also completed ALX Africa’s intensive Software Engineering program.</li>

      <li>I’m currently a Software Developer at Boxraft, where I build internal applications that support company operations, develop scalable software solutions, and collaborate with cross-functional teams to deliver high-quality products.</li>

      <li>Previously, I interned at Safaricom PLC as an API Engineering Intern – QA, working within the API Engineering team to ensure the quality, reliability, and performance of Safaricom’s API services. My role included test automation, API validation, regression testing, and contributing to QA best practices.</li>

      <li>I’ve also built practical solutions through hackathons—such as a missing-children search system now being incubated within CPIMS—and I enjoy solving cybersecurity challenges.</li>

      <li>My backend experience spans Django, Flask, and Node.js, while my frontend stack includes Vue.js and HTML/CSS.</li>

      <li>I value leadership, collaboration, and continuous learning, and I thrive in environments where creativity meets purposeful engineering.</li>
    </ul>
    </div>
  </section>
</template>

<style scoped>
.summary-section {
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

.summary {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.summary ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
}

.summary li {
  position: relative;
  padding-left: 2rem;
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.6;
}

.summary li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #3498db;
  font-weight: bold;
}

@media (max-width: 768px) {
  .summary-section {
    padding: 1.5rem 1rem;
  }

  .summary {
    padding: 1.5rem;
  }

  .summary li {
    font-size: 1rem;
    padding-left: 1.5rem;
  }
}
</style>
