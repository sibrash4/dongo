---

title: "Fun with RAG and Generative AI"
date: 2023-12-04
externalUrl: "https://furman.sibrahim.io"
summary: "This is my senior project based on RAG and generative AI."
showBreadcrumbs: true
showReadingTime: false

---

Abstract:
- Project focuses on using generative AI to process US corporate financial statements and enhance financial analysis
- Employs tools like LangChain and LLaMA 2 for efficient data retrieval and presentation
- Aims to streamline manual data entry and extraction from filings like 10-Qs and 10-Ks
### - Abstract
### Abstract
This project explores the use of generative AI in financial analysis, focusing on processing US corporate financial statements, including 10-Q and 10-K forms. It utilizes LangChain, a versatile library, to interface with generative AI models and improve the efficiency and user-friendliness of financial data analysis. Challenges include providing a customizable and cost-effective solution, as many AI tools are restricted by platform limitations.


This project explores the use of generative AI in financial analysis, focusing on processing US corporate financial statements, including 10-Q and 10-K forms. It utilizes LangChain and LLamaIndex, two versatile libraries, to interface with generative AI models and improve the efficiency and user-friendliness of financial data analysis. 

Challenges include providing a customizable and cost-effective solution, as many AI tools are restricted by platform limitations.

### Introduction
The introduction discusses the transformative impact of tools like ChatGPT, Claude, LLaMA, and other AI models on knowledge work. It highlights the potential of generative AI in augmenting work and productivity, citing a McKinsey study on its economic impact, especially in banking. The section focuses on the application of generative AI in financial analysis, outlining the challenges and opportunities in this domain.




Introduction: 
- Financial analysis involves assessing complex statements to derive insights
- Currently a manual, inefficient process 
- SEC oversees 35,000+ entities with vast data troves that hide meaningful insights
- Proposes using Language Models (LLMs) to accurately process financial data and answer queries
### Introduction

The introduction discusses the transformative impact of tools like ChatGPT, Claude, LLaMA, and other AI models on knowledge work. There have been far-ranging discussions on the state of AI and its reverberation impact on human society, culture, and world, depending on who you ask they argue that its likely to ahve no impact to a lot of impact. One such study taht sought tomearire the iamcpt was the McKinsey study that argued that we can expect to see in excess of 5 trillion in economics value

But mroe than that it can siganitlfy emotive work efciaiencly add product and that is also what makes it so great





Methods:
- Uses open-source LLaMA 2 model with LangChain for communication and control
- Employs prompt engineering to structure input and output 
- Converts PDF data into vector embeddings for analysis
- Stores data in vector databases and conducts similarity searches to enhance capabilities 
- Tested model on sample filings and websites, observed accurate retrieval albeit some formatting issues

Results: 
- Demonstrated ability to use own knowledge to answer questions not explicitly in source documents
- Provided detailed answers to financial performance questions based on filing contents
- Showed proficiency in extracting precise, relevant details from unstructured inputs




Data:
- Primary data source is SEC Form 10-K containing details on company operations and finances
- 10-Ks filed annually, 10-Qs filed quarterly with less detail 
- Over 3,000 filings processed daily in formats like PDF, HTML, XML
- Accessible via EDGAR system and company websites 

Model:
- Leverages open-source LLaMA 2 model for natural language processing
- Employs Retrieval Augmented Generation (RAG) framework 
- RAG enhances models by connecting them to external data sources
- Better suited for financial analysis than fine-tuning approach


Let me know if you need any other specific sections or details to be covered! I'm happy to add more context wherever needed.



### Related Work
This section delves into the background of generative AI, discussing the transformative impact of transformer models in natural language processing (NLP) introduced in 2017. It covers the evolution of these models, their key features, and the comparison between Retrieval-Augmented Generation (RAG) and fine-tuning methodologies. It concludes by discussing the contribution of transformer models to generative AI and the pursuit of general AI.

### Data
The Data section discusses the primary data source for the project, the Form 10-K, and compares it with the 10-Q report. It outlines the features of these data sources, including their source, frequency, sample size, and geographic range. This section also discusses the challenges of dealing with unstructured data from these filings.

### Comparison of LLMs
This part evaluates different Large Language Models (LLMs) and their performance in various aspects. It discusses evaluation frameworks like Big Bench, GLUE Benchmark, and SuperGLUE Benchmark, focusing on their domains and factors considered in evaluation. The section also addresses the trade-offs in model size and training.

### Methods
The Methods section describes the application of open-source models in project development, focusing on fine-tuning versus Retrieval Augmented Generation (RAG). It highlights the importance of prompt engineering and the process of application and data processing in the project.

### Experimentation and Results
This section details the experimentation process and the results obtained. It discusses how the model was tested for knowledge retrieval and its ability to process PDF filings. The section emphasizes the importance of precision in prompts to obtain accurate responses from the model.



### Related Work
This section delves into the background of generative AI, discussing the transformative impact of transformer models in natural language processing (NLP) introduced in 2017. It covers the evolution of these models, their key features, and the comparison between Retrieval-Augmented Generation (RAG) and fine-tuning methodologies. It concludes by discussing the contribution of transformer models to generative AI and the pursuit of general AI.

### Data
The Data section discusses the primary data source for the project, the Form 10-K, and compares it with the 10-Q report. It outlines the features of these data sources, including their source, frequency, sample size, and geographic range. This section also discusses the challenges of dealing with unstructured data from these filings.

### Comparison of LLMs
This part evaluates different Large Language Models (LLMs) and their performance in various aspects. It discusses evaluation frameworks like Big Bench, GLUE Benchmark, and SuperGLUE Benchmark, focusing on their domains and factors considered in evaluation. The section also addresses the trade-offs in model size and training.

### Methods
The Methods section describes the application of open-source models in project development, focusing on fine-tuning versus Retrieval Augmented Generation (RAG). It highlights the importance of prompt engineering and the process of application and data processing in the project.

### Experimentation and Results
This section details the experimentation process and the results obtained. It discusses how the model was tested for knowledge retrieval and its ability to process PDF filings. The section emphasizes the importance of precision in prompts to obtain accurate responses from the model.


Conclusion:  
- LLaMA 2 with RAG shows ability for efficient and accurate financial data processing
- Has potential to transform financial analysis through natural language queries


Conclusion:
- Integrated pipeline with LangChain, LlamaIndex and vector databases shows promise
- LLaMA 2 excels at analyzing data from variety of inputs to deliver insights
- Significant potential to expand knowledge base for more extensive analysis
- Overall demonstrates effectiveness as financial analysis tool  
### Future Work and Conclusion
The conclusion outlines the vision for developing foundational models focusing on speed, efficiency, and cost. It discusses the challenges in scaling these models for widespread use and the transition to fine-tuning models for specific tasks. The section concludes with the potential of creating custom AI assistants and the future of personalized AI models.



### Future Work and Conclusion
The conclusion outlines the vision for developing foundational models focusing on speed, efficiency, and cost. It discusses the challenges in scaling these models for widespread use and the transition to fine-tuning models for specific tasks. The section concludes with the potential of creating custom AI assistants and the future of personalized AI models.

### Index of Terms
This part provides definitions and explanations of key terms used throughout the paper, such as Generative AI, LangChain, LLaMA 2, 10-Q and 10-K forms, RAG, Transformer Models, Fine-Tuning, Prompt Engineering, Vector Embeddings, and several others.

### Index of Terms
This part provides definitions and explanations of key terms used throughout the paper, such as Generative AI, LangChain, LLaMA 2, 10-Q and 10-K forms, RAG, Transformer Models, Fine-Tuning, Prompt Engineering, Vector Embeddings, and several others.

This summary captures the essence of each section, providing a concise overview of your paper's content, which you can use for your presentation.

Here is a summary for each section of your scientific paper titled "Enhancing Financial Analysis Through Generative AI and Evolving Data Frameworks":


Acknowledgements:
- Thanks Facebook for development of LLaMA 2 model
- Thanks Anthropic for LangChain library  


