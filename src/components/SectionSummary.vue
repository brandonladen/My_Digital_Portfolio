<template>
  <section class="summary-section">
    <h2 class="section-title">
      <span class="icon-holder"><i class="fa-solid fa-user"></i></span>
      Career Profile
    </h2>
    <div class="summary">
     <ul>
      <li>I’m Brandon Odhiambo Wamboga, a tech enthusiast passionate about building software that creatively solves real-world problems.</li>
      <li>I recently graduated from ALX Africa’s intensive Software Engineering program and have completed my BSc in Information Technology at Maseno University, awaiting graduation in December 2025.</li>
      <li>I’ve developed practical solutions through hackathons—such as a missing children search system currently being incubated within CPIMS—and contributed to cybersecurity challenges.</li>
      <li>My passion for backend development spans Django, Flask, and Node.js, while my frontend stack includes Vue.js and HTML/CSS.</li>
      <li>I value leadership and collaboration, often guiding peers in both tech and academic spaces.</li>
      <li>Above all, I’m driven by resilience, creativity, and a mindset of continuous learning and contribution.</li>
      <li><a href="https://theothersideofsilence2.substack.com/">Beyond tech, I write stories and reflections about healing, emotional intelligence, and inner growth — because I believe engineers build better when they understand themselves.</a><\li>
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
