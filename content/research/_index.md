---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<script async src="https://www.googletagmanager.com/gtag/js?id=G-JXH49J0PEN"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JXH49J0PEN');
</script> 

<h2 style="font-size:26px; ">Publications</h2>

<p>
<p>
<h3 style="font-size:22px; ">Computational Social Science</h2>
<p>
<p>
The Discursive Evolution of Human Rights Law: Empirical Insights from a Computational Analysis of 180,000 UN Recommendations  (with Renana Keydar, Vera Shikhelman, Tomer Broude)
<em>Conditionally accepted to Human Rights Law Review</em>
<p>
<details>
  <summary><i>Abstract</i></summary>

Building on an independent database of 180,000 UN recommendations and a novel computational method, we present the most comprehensive study of HR debates to date. We develop a unique empirical model that measures topical density of discourse. This innovative instrument measures the discursive activity of UN HR bodies through a machine-learning textual analysis of their outputs, offering a dynamic map of evolving trends in human rights, both over time (diachronically) and across different mechanisms (synchronically) within the UN HR ecosystem. Leveraging this comprehensive dataset and sophisticated computational methodologies, we identify which protected groups are central to different mechanisms’ attention and highlight the major human rights issues that have witnessed significant changes in attention. Our research presents significant findings on the density of UN HR discourse and its implications for two major debates in the field of human rights law – HR proliferation and the structural critique of UN HR bodies. 
</details>


<p>
<p>
<h3 style="font-size:22px; ">Software Engineering</h2>
<p>
<p>
<a href = "https://www.computer.org/csdl/proceedings-article/sera/2023/10197800/1PlnISVXqJW">TIPICAL - Type Inference for Python In Critical Accuracy Level</a> (with Bernd Gruner, Tim Sonnekalb & Clemens-Alexander Brust)
<p>
<em>2023 IEEE/ACIS 21st International Conference on Software Engineering Research, Management and Applications (SERA)</em>
<details>
  <summary><i>Abstract</i></summary>

Type inference methods based on deep learning are becoming increasingly popular as they aim to compensate for the drawbacks of static and dynamic analysis approaches, such as high uncertainty. However, their practical application is still debatable due to several intrinsic issues such as code from different software domains will involve data types that are unknown to the type inference system. In order to overcome these problems and gain high-confidence predictions, we thus present TIPICAL, a method that combines deep similarity learning with novelty detection. We show that our method can better predict data types in high confidence by successfully filtering out unknown and inaccurate predicted data types and achieving higher F1 scores to the state-of-the-art type inference method Type4Py. Additionally, we investigate how different software domains and data type frequencies may affect the results of our method.
</details>

<p>
<p>
<p>
<p>

<br>
<br>

<h2 style="font-size:26px; "> Master's Thesis</h2>
<p>
<p>
<p>
<p>
  
Novelty Probing
Measurement of Xi Jinping’s policy preferences and political influence by comparing the autocrat’s speeches with official state reports 
<details>
  <summary><i>Abstract</i></summary>

The leader’s preferences shape policy outcomes, however, the lack of accurate tools to measure the leader’s priorities, especially among autocrats, leads to overlooking these preferences as part of elite decision-making processes. To solve that, this paper introduces Novelty Probing, a new method for measuring the policy priorities of political elites across topics, and their influence on the same topics. This framework quantifies the novelty and influence of a leader’s ideas by utilizing semantic similarity between sentence embeddings to assess the deviation of their speeches from official propaganda, constructing indices for a leader’s novelty, and influence across policy topics. The Novelty and Influence indices are combined to create the Dominance Index, a metric for a leader’s ability to implement their novelty into policymaking. The paper exemplifies the method in the field of Chinese elite politics, by applying the Novelty Probing framework to Xi Jinping, using a corpus of Xi’s speeches and 179823 China’s State-Councilissued communications. Hence, this study measures Xi’s policy novelty, level of influence, and dominance over China. To represent the usage of the measures, the paper provides five empirical results to study patterns of Chinese elite politics. First, Novelty Probing is used for a mini case study of the effect of Xi on Health policy, by highlighting key speeches, and policy documents affected by these speeches. Second, the method is employed to reveal temporal patterns in Chinese elite politics. Third, Novelty Probing constructs a quantitative case for comparison Between Xi and Li Keqiang, the primer of China, and indices are used to study Xi’s consolidation of power after the 19th Party Congress. Fourth, the author conducts audience analysis for Xi’s speeches. Fifth, the framework aggregated evidence that indicates Xi has only minor dominance over foreign policy making in China.
</details>

<p>
<p>
<p>
<p>

<br>
<br>
<h2 style="font-size:26px; ">Work in Progress</h2>
<p>
<p>


<h3 style="font-size:22px; ">Computational Social Science</h2>


The Patrol-Alarm Topic Model: A Tool for Streaming News Data with Application to China (with Kevin Flannagan, Adam Wu, Yang Yang, Margaret Roberts & Brandon Stewart)

<details>
  <summary><i>Abstract</i></summary>

Contemporary news sources and online social platforms are dynamic. An abundance of new documents arrives daily in a stream. This ever-changing content forces analysts to make an unpalatable choice when new documents come in: fit the model only on past documents—foregoing using new documents to identify emerging topics—or create entirely new models each time—risking results being incomparable with previously fit models. We tackle this problem in the context of a large, daily-updated corpus of Chinese newspaper articles. An example of our interface is shown below.

Drawing on theories of news media behavior (Boydstun 2013), we develop the “Patrol-Alarm Topic Model.”  The P-A Topic Model captures patrol topics—those that reoccur regularly in the news cycle—and alarm topics which emerge suddenly due to current events.  Unlike standard topic models, the P-A topic model can handle a streaming document-source.  While patrol topics are assumed to stay constant, alarm topics are able to be created at weekly intervals, capturing new and emerging stories.
The workflow for the P-A topic model has four major steps: initializing patrol topics, classifying new documents, merging the topics, and visualizing the result. It is a human-in-the-loop style model with substantial oversight from domain experts.

In the initializing step, we either start with a list of documents generated by a domain expert or generate a list of our own.  To initialize a list from scratch we use a BERT-based single-membership topic model inspired by BERTopic (Maarten 2022). We  preprocess and embed the documents using a sentence embedding model, followed by dimensionality reduction using the UMAP algorithm.  We then use the single-membership algorithmic clustering model, HDBSCAN, on a substantial initial corpus of documents to generate initial clusters. The clusters are given provisional labels using GPT that are validated by a domain expert.  We then group these topics to find intuitive and relevant patrol topics for our model.  Finally documents are assigned to these topics using a zero-shot GPT labeling strategy (this ensures that even if the topics are changed by the domain expert or augmented, there is a uniform strategy for classifying them). Next is the classifying new documents step. As new document chunks arrive, we connect new observations with existing topics based on proximity to the closest topic exemplar.  Documents that have nearest neighbors that are majority from previous models, and below the median distance to these topic exemplars are directly assigned to previous topic.  Next we merge the newly created topics to existing ones in the model where appropriate. A best-of-three recommendation system is implemented to link the new model topics with older ones providing recommendations that are judged by domain experts. These links enable the continuity of the news cycle topics for each iteration while distinguishing the novel topics for each chunk. This iterative process is repeated as each new batch of data enters into the system. Finally we visualize the model (including the merges) as shown in our prototype above. 
To illustrate the effectiveness of our approach, we developed a product specially made for China analysts using data from millions of Chinese newspapers written between 2012 and 2024.  Our interactive product allows analysts to explore common “patrol” news cycle topics, observing their prevalence each week. Additionally, it highlights unique “alarm” topics specific to each week, providing a comprehensive understanding of events unfolding in each week of the news cycle in China. Thus, the analyst could study the repetitive patterns of the news as well as focus on the dynamics of the discourse in specific short periods of time.  So far, we have fit the model and developed the interactive product.
</details>



<p>
<p>
<p>
<p>
<br>
<br>
<h3 style="font-size:22px; ">Political Economy</h2>

<p>
<p>


Xi's Paradox: The Perils of Patronage in Political Turnovers - Evidence from China's Provincial Debt Market
<details>
  <summary><i>Abstract</i></summary>

Political connections are frequently discussed in political economy literature as influential factors that contribute to positive outcomes for leaders and their constituents. Nevertheless, scholars argue that when local government leaders are too closely tied to the central government, it may result in suboptimal economic behavior. Consequently, tension arises between the advantages of political ties, such as promotion and increased benefits from the central government, and the potential political costs suffered by the leader's constituency for paying back to his patron. This study aims to unravel this paradox by examining evidence from Chinese provincial leadership, utilizing high-frequency bond data to measure the perceived risk shift in the market following provincial party secretary turnovers. The two-way fixed effects model reveals a noteworthy finding of 25.8 basis points decrease in market price associated with the turnover of a leader personally connected to the supreme leader of China, Xi Jinping, as opposed to a leader with no ties to Xi. This suggests that the market interprets a higher risk when a leader is connected, undermining the effectiveness of their governance over the province's economy. In essence, this study provides empirical evidence that a leader's political connections may erode the market's trust, driven by political commitments that diverge from the interests of the local economy.
</details>

<p>
<p>
  
Unveiling China's Local Debt 
An Exploration of Local Government Debt and LGFV Debt Dynamics (with Victor Shih)
<details>
  <summary><i>Abstract</i></summary>

By collecting data on all bonds issued by local governments and local government financing vehicles, this paper documents the relentless rise of local government debt in China, which has increased by over 3.5-fold since 2017. For 12 of China’s provinces, average monthly debt servicing, which combines bond maturity and interest payments, has surpassed 100% of monthly provincial revenue. For another 15 provinces, debt servicing has surpassed 50% of monthly revenue. This debt is increasingly a drag on growth and an accelerant for regional inequality, which will require substantial intervention from the central government to resolve.
</details>

<p>
<p>


Budgetary Rigidity, Exogenous Shocks and the Rise of Local Government Debt in China (with Victor Shih)
<details>
  <summary><i>Abstract</i></summary>

Local government debt in China, by various calculations, has reached 90% of GDP, among some of the highest subnational debt in the world.  It also rose in a short window of time, mainly since 2012.  We hypothesize that fiscal rigidities caused by tax centralization in 1994 and slower revenue growth since 2008 led to local inability to deal with exogenous shocks which boosted expenditures and depleted revenue.  Short of a true catastrophe, the central government has been unwilling to provide  extraordinary budgetary support when natural disasters struck.  Nursing central fiscal strength continued to be a high priority for China’s leaders through two administrations.  We first scrape over 30 thousand local bond issuance announcements to create a dynamic picture of provincial level debt increase.  We further use satellite and official data on flooding to create a monthly data set of flooding across provinces.  We find that flooding in a province led to a rise in issuance in the following monthes of the local government debt, suggesting willful fiscal rigidity to preserve the central government’s fiscal resources. 
</details>

<p>
<p>

