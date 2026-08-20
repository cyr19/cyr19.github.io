// Paste each official abstract between the backticks after `String.raw`.
// Keep the surrounding backticks and comma in place.
window.publicationDetails = {
  "syntax-change": {
    title: "Syntactic Language Change in English and German: Metrics, Parsers, and Convergences",
    abstract: String.raw`Syntactic language change has gained increasing attention in recent years. Previous computational work based on dependency relations has focused on diachronic trends in dependency distance, which measures the linear distance between dependent words, using dependency trees automatically predicted by a dependency parser (mostly the Stanford CoreNLP parser). In this work, we introduce a set of 15 syntax metrics that extend the analysis beyond linear distance by incorporating both linear and tree graph properties of dependency trees, such as tree height and degree. Besides, we propose a multi-parser approach to reduce the impact of using specific parsers, thereby increasing the robustness of the detected language changes. Through a cross-lingual investigation of English and German in parliamentary debates from the last 160 years, using 6 different parsers (CoreNLP and five newer alternatives), we demonstrate that: (1) Relying on one single parser can be problematic, as the agreement on predicted trends can be low across parsers. (2) Our set of metrics can capture subtle patterns of syntactic changes. Our analysis shows that syntactic change over the time period inspected is largely similar between English and German, with only 2.2% of cases yielding opposite trends in these metrics. (3) We also show that changes in syntactic metrics seem to be more frequent at the tails of sentence length distributions and often move in opposite directions for short and long sentences. To our best knowledge, ours is the most comprehensive computational analysis of syntactic language change using modern NLP technology in recent corpora of English and German.`,
    bibtex: String.raw`@article{10.1371/journal.pone.0346096,
  doi = {10.1371/journal.pone.0346096},
  author = {Chen, Yanran AND Zhao, Wei AND Breitbarth, Anne AND Stoeckel, Manuel AND Mehler, Alexander AND Schlechtweg, Dominik AND Eger, Steffen},
  journal = {PLOS ONE},
  publisher = {Public Library of Science},
  title = {Syntactic language change in English and German: Metrics, parsers, and convergences},
  year = {2026},
  month = {04},
  volume = {21},
  number = {4},
  pages = {1--33},
  url = {https://doi.org/10.1371/journal.pone.0346096}
}`,
  },
  "emotion-fallacy": {
    title: "Emotionally Charged, Logically Blurred: AI-driven Emotional Framing Impairs Human Fallacy Detection",
    abstract: String.raw`Logical fallacies are common in public communication and can mislead audiences; fallacious arguments may still appear convincing despite lacking soundness, because convincingness is inherently subjective. We present the first computational study of how emotional framing interacts with fallacies and convincingness, using large language models (LLMs) to systematically change emotional appeals in fallacious arguments. We benchmark eight LLMs on injecting emotional appeal into fallacious arguments while preserving their logical structures, then use the best models to generate stimuli for a human study. Our results show that LLM-driven emotional framing reduces human fallacy detection in F1 by 14.5% on average. Humans perform better in fallacy detection when perceiving enjoyment than fear or sadness, and these three emotions also correlate with significantly higher convincingness compared to neutral or other emotion states. Our work has implications for AI-driven emotional manipulation in the context of fallacious argumentation.`,
    bibtex: String.raw`@inproceedings{chen-etal-2026-emotionally,
  title = "Emotionally Charged, Logically Blurred: {AI}-driven Emotional Framing Impairs Human Fallacy Detection",
  author = "Chen, Yanran  and
    Greschner, Lynn  and
    Klinger, Roman  and
    Klenk, Michael  and
    Eger, Steffen",
  editor = "Demberg, Vera  and
    Inui, Kentaro  and
    Marquez, Llu{'i}s",
  booktitle = "Proceedings of the 19th Conference of the {E}uropean Chapter of the {A}ssociation for {C}omputational {L}inguistics (Volume 1: Long Papers)",
  month = mar,
  year = "2026",
  address = "Rabat, Morocco",
  publisher = "Association for Computational Linguistics",
  url = "https://aclanthology.org/2026.eacl-long.316/",
  doi = "10.18653/v1/2026.eacl-long.316",
  pages = "6709--6732",
  ISBN = "979-8-89176-380-7"
}`,
  },
  "who-annotates": {
    title: "Who Annotates in NLP? A Large-scale Assessment of Human Annotation Reporting between 2018 and 2025",
    abstract: String.raw`Human annotation is the empirical foundation of much NLP research, from dataset construction to model evaluation, but papers often leave unclear who produced the annotations and how the annotation process was controlled. We provide the first large-scale, task-level audit of human annotation reporting across major NLP venues, asking which annotation details are documented, which are missing, and how reporting varies across time, topic, venue, and intended use of human judgment. We introduce a unified taxonomy of annotation-reporting practices and validate an LLM-assisted extraction pipeline against Annotated-gold, a human-adjudicated gold standard of 41 papers and 72 annotation tasks, where the best model reaches human-comparable agreement with adjudicated labels, with Krippendorff's alpha of 0.606 versus 0.585 for human-human agreement. Using this pipeline, we construct Annotated-llm, a dataset covering ACL-venue papers from 2018-2025, with 2,667 extracted annotation tasks from 1,603 papers, and find that papers frequently report operational details such as recruitment strategies, annotator expertise, and annotation volume, but often omit details needed to assess annotation validity, including training, language proficiency, compensation, socio-demographics, adjudication, and agreement values, especially in model-evaluation studies. Our results show that annotation reporting in NLP has improved over time but remains uneven, and they establish a scalable framework and bare-minimum reporting recommendations for making human annotation more reliable, reproducible, and interpretable.`,
    bibtex: String.raw`@misc{kunilovskaya2026annotatesnlplargescaleassessment,
  title={Who Annotates in NLP? A Large-scale Assessment of Human Annotation Reporting between 2018 and 2025},
  author={Maria Kunilovskaya and Gagan Bhatia and Lisa Sophie Albertelli and Yanran Chen and Christian Greisinger and Lotta Kiefer and Christoph Leiter and Subhadeep Roy and Tewodros Achamaleh and Muhammad Arslan Manzoor and Sebastian Pohl and Yufang Hou and Steffen Eger},
  year={2026},
  eprint={2606.02255},
  archivePrefix={arXiv},
  primaryClass={cs.CL},
  url={https://arxiv.org/abs/2606.02255}
}`,
  },
  "argument-summarization": {
    title: "Argument Summarization and its Evaluation in the Era of Large Language Models",
    abstract: String.raw`Large Language Models (LLMs) have revolutionized various Natural Language Generation (NLG) tasks, including Argument Summarization (ArgSum), a key subfield of Argument Mining. This paper investigates the integration of state-of-the-art LLMs into ArgSum systems and their evaluation. In particular, we propose a novel prompt-based evaluation scheme, and validate it through a novel human benchmark dataset. Our work makes three main contributions: (i) the integration of LLMs into existing ArgSum systems, (ii) the development of two new LLM-based ArgSum systems, benchmarked against prior methods, and (iii) the introduction of an advanced LLM-based evaluation scheme. We demonstrate that the use of LLMs substantially improves both the generation and evaluation of argument summaries, achieving state-of-the-art results and advancing the field of ArgSum. We also show that among the four LLMs integrated in (i) and (ii), Qwen-3-32B, despite having the fewest parameters, performs best, even surpassing GPT-4o.`,
    bibtex: String.raw`@inproceedings{altemeyer-etal-2025-argument,
  title = "Argument Summarization and its Evaluation in the Era of Large Language Models",
  author = "Altemeyer, Moritz  and
    Eger, Steffen  and
    Daxenberger, Johannes  and
    Chen, Yanran  and
    Altendorf, Tim  and
    Cimiano, Philipp  and
    Schiller, Benjamin",
  editor = "Christodoulopoulos, Christos  and
    Chakraborty, Tanmoy  and
    Rose, Carolyn  and
    Peng, Violet",
  booktitle = "Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing",
  month = nov,
  year = "2025",
  address = "Suzhou, China",
  publisher = "Association for Computational Linguistics",
  url = "https://aclanthology.org/2025.emnlp-main.1797/",
  doi = "10.18653/v1/2025.emnlp-main.1797",
  pages = "35490--35511",
  ISBN = "979-8-89176-332-6"
}`,
  },
  "emotion-convincingness": {
    title: "Do Emotions Really Affect Argument Convincingness? A Dynamic Approach with LLM-based Manipulation Checks",
    abstract: String.raw`Emotions have been shown to play a role in argument convincingness, yet this aspect is underexplored in the natural language processing (NLP) community. Unlike prior studies that use static analyses, focus on a single text domain or language, or treat emotion as just one of many factors, we introduce a dynamic framework inspired by manipulation checks commonly used in psychology and social science; leveraging LLM-based manipulation checks, this framework examines the extent to which perceived emotional intensity influences perceived convincingness. Through human evaluation of arguments across different languages, text domains, and topics, we find that in over half of cases, human judgments of convincingness remain unchanged despite variations in perceived emotional intensity; when emotions do have an impact, they more often enhance rather than weaken convincingness.We further analyze whether 11 LLMs behave like humans in the same scenario, finding that while LLMs generally mirror human patterns,they struggle to capture nuanced emotional effects in individual judgments.`,
    bibtex: String.raw`@inproceedings{chen-eger-2025-emotions,
  title = "Do Emotions Really Affect Argument Convincingness? A Dynamic Approach with {LLM}-based Manipulation Checks",
  author = "Chen, Yanran  and
    Eger, Steffen",
  editor = "Che, Wanxiang  and
    Nabende, Joyce  and
    Shutova, Ekaterina  and
    Pilehvar, Mohammad Taher",
  booktitle = "Findings of the Association for Computational Linguistics: ACL 2025",
  month = jul,
  year = "2025",
  address = "Vienna, Austria",
  publisher = "Association for Computational Linguistics",
  url = "https://aclanthology.org/2025.findings-acl.1250/",
  doi = "10.18653/v1/2025.findings-acl.1250",
  pages = "24357--24381",
  ISBN = "979-8-89176-256-5"
}`,
  },
  "deepseek-eval": {
    title: "DeepSeek-R1 vs. o3-mini: How Well can Reasoning LLMs Evaluate MT and Summarization?",
    abstract: String.raw`Reasoning-enabled large language models (LLMs) excel in logical tasks, yet their utility for evaluating natural language generation remains unexplored. This study systematically compares reasoning LLMs with non-reasoning counterparts across machine translation and text summarization evaluation tasks. We evaluate eight models spanning state-of-the-art reasoning models (DeepSeek-R1, OpenAI o3), their distilled variants (8B-70B parameters), and equivalent non-reasoning LLMs. Experiments on WMT23 and SummEval benchmarks reveal architecture and task-dependent benefits: OpenAI o3-mini models show improved performance with increased reasoning on MT, while DeepSeek-R1 and generally underperforms compared to its non-reasoning variant except in summarization consistency evaluation. Correlation analysis demonstrates that reasoning token usage correlates with evaluation quality only in specific models, while almost all models generally allocate more reasoning tokens when identifying more quality issues. Distillation maintains reasonable performance up to 32B parameter models but degrades substantially at 8B scale. This work provides the first assessment of reasoning LLMs for NLG evaluation and comparison to non-reasoning models. We share our code to facilitate further research: this https URL.`,
    bibtex: String.raw`@misc{larionov2025deepseekr1vso3minireasoning,
  title={DeepSeek-R1 vs. o3-mini: How Well can Reasoning LLMs Evaluate MT and Summarization?},
  author={Daniil Larionov and Sotaro Takeshita and Ran Zhang and Yanran Chen and Christoph Leiter and Zhipin Wang and Christian Greisinger and Steffen Eger},
  year={2025},
  eprint={2504.08120},
  archivePrefix={arXiv},
  primaryClass={cs.CL},
  url={https://arxiv.org/abs/2504.08120}
}`,
  },
  "poetry-diversity": {
    title: "Evaluating Diversity in Automatic Poetry Generation",
    abstract: String.raw`Natural Language Generation (NLG), and more generally generative AI, are among the currently most impactful research fields. Creative NLG, such as automatic poetry generation, is a fascinating niche in this area. While most previous research has focused on forms of the Turing test when evaluating automatic poetry generation — can humans distinguish between automatic and human generated poetry — we evaluate the diversity of automatically generated poetry (with a focus on quatrains), by comparing distributions of generated poetry to distributions of human poetry along structural, lexical, semantic and stylistic dimensions, assessing different model types (word vs. character-level, general purpose LLMs vs. poetry-specific models), including the very recent LLaMA3-8B, and types of fine-tuning (conditioned vs. unconditioned). We find that current automatic poetry systems are considerably underdiverse along multiple dimensions — they often do not rhyme sufficiently, are semantically too uniform and even do not match the length distribution of human poetry. Our experiments reveal, however, that style-conditioning and character-level modeling clearly increases diversity across virtually all dimensions we explore. Our identified limitations may serve as the basis for more genuinely diverse future poetry generation models.`,
    bibtex: String.raw`@inproceedings{chen-etal-2024-evaluating-diversity,
  title = "Evaluating Diversity in Automatic Poetry Generation",
  author = {Chen, Yanran and Gr{"o}ner, Hannes and Zarrie{\ss}, Sina and Eger, Steffen},
  editor = "Al-Onaizan, Yaser and Bansal, Mohit and Chen, Yun-Nung",
  booktitle = "Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing",
  month = nov,
  year = "2024",
  address = "Miami, Florida, USA",
  publisher = "Association for Computational Linguistics",
  url = "https://aclanthology.org/2024.emnlp-main.1097/",
  doi = "10.18653/v1/2024.emnlp-main.1097",
  pages = "19671--19692"
}`,
  },
  "chatgpt-meta": {
    title: "ChatGPT: A Meta-Analysis after 2.5 Months",
    abstract: String.raw`ChatGPT, a chatbot developed by OpenAI, has gained widespread popularity and media attention since its release in November 2022. However, little hard evidence is available regarding its perception in various sources. In this paper, we analyze over 300,000 tweets and more than 150 scientific papers to investigate how ChatGPT is perceived and discussed. Our findings show that ChatGPT is generally viewed as of high quality, with positive sentiment and emotions of joy dominating social media. Its perception has slightly decreased since its debut, however, with joy decreasing and (negative) surprise on the rise, and it is perceived more negatively in languages other than English. In recent scientific papers, ChatGPT is characterized as a great opportunity across various fields including the medical domain, but also as a threat concerning ethics and receives mixed assessments for education. Our comprehensive meta-analysis of ChatGPT’s perception after 2.5 months since its release can contribute to shaping the public debate and informing its future development. We make our data available.`,
    bibtex: String.raw`@article{Leiter_2024,
  title={ChatGPT: A meta-analysis after 2.5 months},
  volume={16},
  ISSN={2666-8270},
  url={http://dx.doi.org/10.1016/j.mlwa.2024.100541},
  DOI={10.1016/j.mlwa.2024.100541},
  journal={Machine Learning with Applications},
  publisher={Elsevier BV},
  author={Leiter, Christoph and Zhang, Ran and Chen, Yanran and Belouadi, Jonas and Larionov, Daniil and Fresen, Vivian and Eger, Steffen},
  year={2024},
  month=jun,
  pages={100541}
}`,
  },
  "refugee-solidarity": {
    title: "Social Solidarity with Ukrainian and Syrian Refugees in the Twitter Discourse: A Comparison between 2015 and 2022",
    abstract: String.raw`Incoming refugees from Ukraine are currently encountering a wave of solidarity that is seen, according to some, in stark contrast to the solidarity experienced by earlier groups of refugees i.e. from Syria during the so-called ‘immigration crisis’ in 2015. We aim to inform this debate on solidarity bias by collecting and analyzing quantitative data on (anti-)solidarity statements posted on Twitter during both waves of refugee immigration. We assess how social solidarity towards refugees differed between 2015 and the current wave of refugees fleeing Ukraine. To this end, we collect and analyze a longitudinal dataset of refugee-related tweets selected via hashtags and covering the period between January 2015 and August 2022. We first annotate the tweets for (anti-)solidarity expressions towards refugees. On these annotations, we train a supervised machine learning model and use it to automatically label over 2.3 million tweets. We assess the automatically labeled data for how statements related to refugee (anti-)solidarity developed and differed for distinct groups of refugees. Our findings show that in relative terms, refugee solidarity was expressed more often in tweets during September 2015 compared to March 2022. However, we find some evidence of solidarity bias in March 2022.`,
    bibtex: String.raw`@article{Weber_2023,
  title={Social solidarity with Ukrainian and Syrian refugees in the twitter discourse. A comparison between 2015 and 2022},
  volume={26},
  ISSN={1469-8307},
  url={http://dx.doi.org/10.1080/14616696.2023.2275604},
  DOI={10.1080/14616696.2023.2275604},
  number={2},
  journal={European Societies},
  publisher={MIT Press},
  author={Weber, Maximilian and Grunow, Daniela and Chen, Yanran and Eger, Steffen},
  year={2023},
  month=nov,
  pages={346--373}
}`,
  },
  "nllg-0924": {
    title: "NLLG Quarterly arXiv Report 09/24: What are the Most Influential Current AI Papers?",
    abstract: String.raw`The NLLG (Natural Language Learning & Generation) arXiv reports assist in navigating the rapidly evolving landscape of NLP and AI research across cs.CL, cs.CV, cs.AI, and cs.LG categories. This fourth installment captures a transformative period in AI history - from January 1, 2023, following ChatGPT's debut, through September 30, 2024. Our analysis reveals substantial new developments in the field - with 45% of the top 40 most-cited papers being new entries since our last report eight months ago and offers insights into emerging trends and major breakthroughs, such as novel multimodal architectures, including diffusion and state space models. Natural Language Processing (NLP; cs.CL) remains the dominant main category in the list of our top-40 papers but its dominance is on the decline in favor of Computer vision (cs.CV) and general machine learning (cs.LG). This report also presents novel findings on the integration of generative AI in academic writing, documenting its increasing adoption since 2022 while revealing an intriguing pattern: top-cited papers show notably fewer markers of AI-generated content compared to random samples. Furthermore, we track the evolution of AI-associated language, identifying declining trends in previously common indicators such as "delve".`,
    bibtex: String.raw`@misc{leiter2024nllgquarterlyarxivreport,
  title={NLLG Quarterly arXiv Report 09/24: What are the most influential current AI Papers?},
  author={Christoph Leiter and Jonas Belouadi and Yanran Chen and Ran Zhang and Daniil Larionov and Aida Kostikova and Steffen Eger},
  year={2024},
  eprint={2412.12121},
  archivePrefix={arXiv},
  primaryClass={cs.DL},
  url={https://arxiv.org/abs/2412.12121}
}`,
  },
  "nllg-0124": {
    title: "NLLG Quarterly arXiv Report 01/24: What are the Most Influential Current AI Papers?",
    abstract: String.raw`The field of Artificial Intelligence (AI) is evolving at an unprecedented pace, making it increasingly challenging for researchers and professionals to stay informed about the latest developments. This report from the Natural Language Learning Group (NLLG), the third of its kind, provides a comprehensive overview of the most influential AI papers on arXiv from January 1, 2023, to January 31, 2024. In addition to identifying and examining the top-cited papers, we introduce a novel writing analysis that compares the writing quality of the top-40 most influential papers to a randomly selected set of papers. Our findings reveal a continued dominance of Natural Language Processing (NLP) related research, especially of Large Language Models (LLMs), with increased attention on newly-released LLMs such as Mistral, Mixtral, and Gemini. Our writing analysis suggests that the top-40 most impactful papers are better formulated and written (according to general criteria such as fluency and grammaticality and principles of good scientific writing such as the SMART writing principles), with additionally a higher number of figures and tables compared to randomly selected papers. Our code and data are available from https://github.com/NL2G/Quaterly-Arxiv.`,
    bibtex: String.raw`@article{Chen_2024,
  title={NLLG Quarterly arXiv Report 01/24: What are the most influential current AI Papers?},
  url={http://dx.doi.org/10.2139/ssrn.4896347},
  DOI={10.2139/ssrn.4896347},
  publisher={Elsevier BV},
  author={Chen, Yanran and Larionov, Daniil and Zhang, Ran and Leiter, Christoph and Belouadi, Jonas and Kostikova, Aida and Eger, Steffen},
  year={2024}
}`,
  },
  "menli": {
    title: "MENLI: Robust Evaluation Metrics from Natural Language Inference",
    abstract: String.raw`Recently proposed BERT-based evaluation metrics for text generation perform well on standard benchmarks but are vulnerable to adversarial attacks, e.g., relating to information correctness. We argue that this stems (in part) from the fact that they are models of semantic similarity. In contrast, we develop evaluation metrics based on Natural Language Inference (NLI), which we deem a more appropriate modeling. We design a preference-based adversarial attack framework and show that our NLI based metrics are much more robust to the attacks than the recent BERT-based metrics. On standard benchmarks, our NLI based metrics outperform existing summarization metrics, but perform below SOTA MT metrics. However, when combining existing metrics with our NLI metrics, we obtain both higher adversarial robustness (15%–30%) and higher quality metrics as measured on standard benchmarks (+5% to 30%).`,
    bibtex: String.raw`@article{chen-eger-2023-menli,
  title = "{MENLI}: Robust Evaluation Metrics from Natural Language Inference",
  author = "Chen, Yanran  and
    Eger, Steffen",
  journal = "Transactions of the Association for Computational Linguistics",
  volume = "11",
  year = "2023",
  address = "Cambridge, MA",
  publisher = "MIT Press",
  url = "https://aclanthology.org/2023.tacl-1.47/",
  doi = "10.1162/tacl_a_00576",
  pages = "804--825"
}`,
  },
  "transformers-lols": {
    title: "Transformers Go for the LOLs: Generating (Humourous) Titles from Scientific Abstracts End-to-End",
    abstract: String.raw`We consider the end-to-end abstract-to-title generation problem, exploring seven recent transformer based models (including ChatGPT) fine-tuned on more than 30k abstract-title pairs from NLP and machine learning (ML) venues. As an extension, we also consider the harder problem of generating humorous paper titles. For the latter, we compile the first large-scale humor annotated dataset for scientific papers in the NLP/ML domains, comprising 2.6k titles. We evaluate all models using human and automatic metrics. Our human evaluation suggests that our best end-to-end system per-forms similarly to human authors (but arguably slightly worse). Generating funny titles is more difficult, however, and our automatic systems clearly underperform relative to humans and often learn dataset artefacts of humor. Finally, ChatGPT, without any fine-tuning, performs on the level of our best fine-tuned system.`,
    bibtex: String.raw`@inproceedings{chen-eger-2023-transformers,
  title = "Transformers Go for the {LOL}s: Generating (Humourous) Titles from Scientific Abstracts End-to-End",
  author = "Chen, Yanran  and
    Eger, Steffen",
  editor = {Deutsch, Daniel  and
    Dror, Rotem  and
    Eger, Steffen  and
    Gao, Yang  and
    Leiter, Christoph  and
    Opitz, Juri  and
    R{"u}ckl{'e}, Andreas},
  booktitle = "Proceedings of the 4th Workshop on Evaluation and Comparison of NLP Systems",
  month = nov,
  year = "2023",
  address = "Bali, Indonesia",
  publisher = "Association for Computational Linguistics",
  url = "https://aclanthology.org/2023.eval4nlp-1.6/",
  doi = "10.18653/v1/2023.eval4nlp-1.6",
  pages = "62--84"
}`,
  },
  "nllg-0923": {
    title: "NLLG Quarterly arXiv Report 09/23: What are the Most Influential Current AI Papers?",
    abstract: String.raw`Artificial Intelligence (AI) has witnessed rapid growth, especially in the subfields Natural Language Processing (NLP), Machine Learning (ML) and Computer Vision (CV). Keeping pace with this rapid progress poses a considerable challenge for researchers and professionals in the field. In this arXiv report, the second of its kind, which covers the period from January to September 2023, we aim to provide insights and analysis that help navigate these dynamic areas of AI. We accomplish this by 1) identifying the top-40 most cited papers from arXiv in the given period, comparing the current top-40 papers to the previous report, which covered the period January to June; 2) analyzing dataset characteristics and keyword popularity; 3) examining the global sectoral distribution of institutions to reveal differences in engagement across geographical areas. Our findings highlight the continued dominance of NLP: while only 16% of all submitted papers have NLP as primary category (more than 25% have CV and ML as primary category), 50% of the most cited papers have NLP as primary category, 90% of which target LLMs. Additionally, we show that i) the US dominates among both top-40 and top-9k papers, followed by China; ii) Europe clearly lags behind and is hardly represented in the top-40 most cited papers; iii) US industry is largely overrepresented in the top-40 most influential papers.`,
    bibtex: String.raw`@misc{zhang2023nllgquarterlyarxivreport,
  title={NLLG Quarterly arXiv Report 09/23: What are the most influential current AI Papers?},
  author={Ran Zhang and Aida Kostikova and Christoph Leiter and Jonas Belouadi and Daniil Larionov and Yanran Chen and Vivian Fresen and Steffen Eger},
  year={2023},
  eprint={2312.05688},
  archivePrefix={arXiv},
  primaryClass={cs.DL},
  url={https://arxiv.org/abs/2312.05688}
}`,
  },
  "nllg-0623": {
    title: "NLLG Quarterly arXiv Report 06/23: What are the Most Influential Current AI Papers?",
    abstract: String.raw`The rapid growth of information in the field of Generative Artificial Intelligence (AI), particularly in the subfields of Natural Language Processing (NLP) and Machine Learning (ML), presents a significant challenge for researchers and practitioners to keep pace with the latest developments. To address the problem of information overload, this report by the Natural Language Learning Group at Bielefeld University focuses on identifying the most popular papers on arXiv, with a specific emphasis on NLP and ML. The objective is to offer a quick guide to the most relevant and widely discussed research, aiding both newcomers and established researchers in staying abreast of current trends. In particular, we compile a list of the 40 most popular papers based on normalized citation counts from the first half of 2023. We observe the dominance of papers related to Large Language Models (LLMs) and specifically ChatGPT during the first half of 2023, with the latter showing signs of declining popularity more recently, however. Further, NLP related papers are the most influential (around 60\% of top papers) even though there are twice as many ML related papers in our data. Core issues investigated in the most heavily cited papers are: LLM efficiency, evaluation techniques, ethical considerations, embodied agents, and problem-solving with LLMs. Additionally, we examine the characteristics of top papers in comparison to others outside the top-40 list (noticing the top paper's focus on LLM related issues and higher number of co-authors) and analyze the citation distributions in our dataset, among others.`,
    bibtex: String.raw`@misc{eger2023nllgquarterlyarxivreport,
  title={NLLG Quarterly arXiv Report 06/23: What are the most influential current AI Papers?},
  author={Steffen Eger and Christoph Leiter and Jonas Belouadi and Ran Zhang and Aida Kostikova and Daniil Larionov and Yanran Chen and Vivian Fresen},
  year={2023},
  eprint={2308.04889},
  archivePrefix={arXiv},
  primaryClass={cs.CY},
  url={https://arxiv.org/abs/2308.04889}
}`,
  },
  "bert-repro": {
    title: "Reproducibility Issues for BERT-based Evaluation Metrics",
    abstract: String.raw`Reproducibility is of utmost concern in machine learning and natural language processing (NLP). In the field of natural language generation (especially machine translation), the seminal paper of Post (2018) has pointed out problems of reproducibility of the dominant metric, BLEU, at the time of publication. Nowadays, BERT-based evaluation metrics considerably outperform BLEU. In this paper, we ask whether results and claims from four recent BERT-based metrics can be reproduced. We find that reproduction of claims and results often fails because of (i) heavy undocumented preprocessing involved in the metrics, (ii) missing code and (iii) reporting weaker results for the baseline metrics. (iv) In one case, the problem stems from correlating not to human scores but to a wrong column in the csv file, inflating scores by 5 points. Motivated by the impact of preprocessing, we then conduct a second study where we examine its effects more closely (for one of the metrics). We find that preprocessing can have large effects, especially for highly inflectional languages. In this case, the effect of preprocessing may be larger than the effect of the aggregation mechanism (e.g., greedy alignment vs. Word Mover Distance).`,
    bibtex: String.raw`@inproceedings{chen-etal-2022-reproducibility,
  title = "Reproducibility Issues for {BERT}-based Evaluation Metrics",
  author = "Chen, Yanran  and
    Belouadi, Jonas  and
    Eger, Steffen",
  editor = "Goldberg, Yoav  and
    Kozareva, Zornitsa  and
    Zhang, Yue",
  booktitle = "Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing",
  month = dec,
  year = "2022",
  address = "Abu Dhabi, United Arab Emirates",
  publisher = "Association for Computational Linguistics",
  url = "https://aclanthology.org/2022.emnlp-main.192/",
  doi = "10.18653/v1/2022.emnlp-main.192",
  pages = "2965--2989"
}`,
  },
  "tuda-repro": {
    title: "TUDA-Reproducibility @ ReproGen: Replicability of Human Evaluation of Text-to-Text and Concept-to-Text Generation",
    abstract: String.raw`This paper describes our contribution to the Shared Task ReproGen by Belz et al. (2021), which investigates the reproducibility of human evaluations in the context of Natural Language Generation. We selected the paper “Generation of Company descriptions using concept-to-text and text-to-text deep models: data set collection and systems evaluation” (Qader et al., 2018) and aimed to replicate, as closely to the original as possible, the human evaluation and the subsequent comparison between the human judgements and the automatic evaluation metrics. Here, we first outline the text generation task of the paper of Qader et al. (2018). Then, we document how we approached our replication of the paper’s human evaluation. We also discuss the difficulties we encountered and which information was missing. Our replication has medium to strong correlation (0.66 Spearman overall) with the original results of Qader et al. (2018), but due to the missing information about how Qader et al. (2018) compared the human judgements with the metric scores, we have refrained from reproducing this comparison.`,
    bibtex: String.raw`@inproceedings{richter-etal-2021-tuda,
  title = "{TUDA}-Reproducibility @ {R}epro{G}en: Replicability of Human Evaluation of Text-to-Text and Concept-to-Text Generation",
  author = "Richter, Christian  and
    Chen, Yanran  and
    Eger, Steffen",
  editor = "Belz, Anya  and
    Fan, Angela  and
    Reiter, Ehud  and
    Sripada, Yaji",
  booktitle = "Proceedings of the 14th International Conference on Natural Language Generation",
  month = aug,
  year = "2021",
  address = "Aberdeen, Scotland, UK",
  publisher = "Association for Computational Linguistics",
  url = "https://aclanthology.org/2021.inlg-1.32/",
  doi = "10.18653/v1/2021.inlg-1.32",
  pages = "301--307"
}`,
  },
};
