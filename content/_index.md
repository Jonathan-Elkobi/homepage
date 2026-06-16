---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Greetings
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
            <p class="paper-status">R&amp;R at China Quarterly</p>
            <h3>The End of Fiscal Autonomy: Rising Local Debt and Fiscal Constraints in Chinese Provinces</h3>
            <p class="paper-meta">with Victor Shih</p>
          </article>
          <article class="paper-card">
            <p class="paper-status">R&amp;R at Science Advances</p>
            <h3><a href="https://arxiv.org/abs/2601.14118">Foreign influencer operations: How TikTok shapes American perceptions of China</a></h3>
            <p class="paper-meta">with Trevor Incerti and Daniel Mattingly</p>
          </article>
          <article class="paper-card">
            <p class="paper-status">Preprint</p>
            <h3><a href="https://osf.io/preprints/socarxiv/n6zxw_v2">How Prediction Markets Affect Political Speech</a></h3>
            <p class="paper-meta">with Daniel Karell</p>
          </article>
        </div>
    design:
      columns: '1'
  - block: experience
    id: experience
    content:
      title: Experience
      subtitle: Research and data science roles.
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Data Science Research Consultant
          company: StatsLab, Yale
          company_url: ''
          company_logo: 
          location: New Haven, CT
          date_start: '2025-08-01'
          date_end: 
          description: 
        - title: Visiting Researcher
          company: Law, Economics and Data Science Group, ETH Zurich
          company_url: ''
          company_logo: 
          location: Zurich, Switzerland
          date_start: '2025-05-01'
          date_end: '2025-08-01'
          description: Visiting researcher with Elliott Ash.
        - title: Student Researcher
          company: China Data Lab, 21st Century China Center, UC San Diego
          company_url: ''
          company_logo: 
          location: San Diego, California, US
          date_start: '2022-12-01'
          date_end: '2024-08-01'
          description: |2-
              Responsibilities include:
              * Develop natural language processing algorithms to conduct topic modelling on streaming corpora with millions of newspaper articles using machine learning frameworks
              * Analyze the Chinese Local Bond Market using time series analysis, and fixed effect regressions
              * Enhance an elite database by scraping data from official Chinese government websites and applying GPT API calls to extract relevant information
        - title: Software Engineering Research Intern
          company: Data Science Institute, German Aerospace Center
          company_url:
          company_logo:
          location: Jena, Germany
          date_start: '2022-06-01'
          date_end: '2022-08-31'
          description: Developed a machine learning type inference algorithm by combining machine learning and novelty detection; synthesized data with Python libraries including SpaCy, NumPy, Pandas, Matplotlib, and Annoy.
        - title: Research Project Manager
          company: Digital Humanities Lab, Hebrew University of Jerusalem
          company_url:
          company_logo:
          location: Jerusalem, Israel
          date_start: '2021-08-01'
          date_end: '2022-09-01'
          description: Developed computational pipelines in Python using NLP models, data mining, big data analysis, and machine learning for research on human rights discourse in the UN.
    design:
      columns: '2'
      spacing:
        padding: ['72px', '0', '88px', '0']
---
