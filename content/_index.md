---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Greetings,
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
    design:
      background:
        gradient_start: '#f8fbfb'
        gradient_end: '#eef5f3'
        gradient_angle: 135
  - block: markdown
    id: research
    content:
      title: Research Agenda
      subtitle: How political elites, local governments, and financial markets shape one another.
      text: |2-
        <div class="research-focus-grid">
          <article class="focus-card">
            <span class="focus-kicker">Political Economy</span>
            <h3>Municipal finance and fiscal constraint</h3>
            <p>I study how local debt, fiscal autonomy, and partisan signals shape municipal bond markets and local economic outcomes in the United States and China.</p>
          </article>
          <article class="focus-card">
            <span class="focus-kicker">Elite Politics</span>
            <h3>Speech, ideology, and influence</h3>
            <p>My projects measure how political elites communicate, how ideology structures elite behavior, and how online platforms can reshape public perceptions.</p>
          </article>
          <article class="focus-card">
            <span class="focus-kicker">Methods</span>
            <h3>Computational social science</h3>
            <p>I build text-as-data workflows using NLP, large language models, causal inference, and scalable data pipelines for political science research.</p>
          </article>
        </div>

        <div class="home-actions">
          <a class="home-button primary" href="/research/">View Research</a>
          <a class="home-button secondary" href="/uploads/resume.pdf">Download CV</a>
        </div>
    design:
      columns: '1'
      spacing:
        padding: ['80px', '0', '64px', '0']
  - block: markdown
    id: selected-work
    content:
      title: Selected Working Papers
      subtitle: Current projects from my CV.
      text: |2-
        <div class="paper-grid">
          <article class="paper-card">
            <p class="paper-status">Conditionally accepted at China Quarterly</p>
            <h3>The End of Fiscal Autonomy: Rising Local Debt and Fiscal Constraints in Chinese Provinces</h3>
            <p class="paper-meta">with Victor Shih</p>
          </article>
          <article class="paper-card">
            <p class="paper-status">R&amp;R at Science Advances</p>
            <h3><a href="https://arxiv.org/abs/2601.14118">Foreign influencer operations: How TikTok shapes American perceptions of China</a></h3>
            <p class="paper-meta">with Trevor Incerti and Daniel Mattingly</p>
          </article>
          <article class="paper-card">
            <p class="paper-status">Under Review</p>
            <h3><a href="https://osf.io/preprints/socarxiv/n6zxw_v1">How Prediction Markets Affect Political Speech</a></h3>
            <p class="paper-meta">with Daniel Karell</p>
          </article>
        </div>
    design:
      columns: '1'
---
