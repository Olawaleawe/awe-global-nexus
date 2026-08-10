export type PublicationType = "Journal Article" | "Book" | "Book Chapter" | "Conference Paper";

export interface Publication {
  title: string;
  venue: string;
  year: number;
  type: PublicationType;
  topics: string[];
  link?: string;
}

export const publications: Publication[] = [
  {
    title: "Interpretable Machine Learning for Civic Governance: A Framework for Accountable AI",
    venue: "Journal of Statistical Computation and Simulation",
    year: 2024,
    type: "Journal Article",
    topics: ["Explainable AI", "Civic Data Science"],
  },
  {
    title: "Practical Statistical Learning and Data Science Methods with R",
    venue: "Springer",
    year: 2024,
    type: "Book",
    topics: ["Statistical Learning", "Machine Learning", "Statistical Education"],
  },
  {
    title: "Machine Learning Approaches for Predicting Anaemia Risk Among Women of Reproductive Age",
    venue: "BMC Public Health",
    year: 2024,
    type: "Journal Article",
    topics: ["Machine Learning", "Health Modeling", "Biostatistics"],
  },
  {
    title: "Robust Time Series Forecasting Under Non-Gaussian Dependencies",
    venue: "Computational Statistics & Data Analysis",
    year: 2023,
    type: "Journal Article",
    topics: ["Statistical Learning", "Time Series"],
  },
  {
    title: "Statistical Capacity Building in Sub-Saharan Africa: The LISA 2020 Model",
    venue: "Statistical Journal of the IAOS",
    year: 2023,
    type: "Journal Article",
    topics: ["Statistical Education", "Capacity Building"],
  },
  {
    title: "Data Science Collaboratories as Drivers of Development",
    venue: "Springer Handbook of Data Science in Africa",
    year: 2023,
    type: "Book Chapter",
    topics: ["Statistical Education", "Capacity Building"],
  },
  {
    title: "Explainable Ensemble Methods for Malaria Incidence Prediction",
    venue: "BMC Medical Informatics",
    year: 2022,
    type: "Journal Article",
    topics: ["Explainable AI", "Health Modeling", "Machine Learning"],
  },
  {
    title: "Human-in-the-Loop Statistical Learning for Democratic Data Systems",
    venue: "Data & Policy (Cambridge)",
    year: 2022,
    type: "Journal Article",
    topics: ["Civic Data Science", "Explainable AI"],
  },
  {
    title: "Comparative Analysis of Machine Learning Classifiers for Health Insurance Uptake",
    venue: "International Conference on Applied Statistics",
    year: 2022,
    type: "Conference Paper",
    topics: ["Machine Learning", "Health Modeling"],
  },
  {
    title: "Bayesian Structural Time Series Modelling of Economic Indicators in Emerging Markets",
    venue: "Journal of Applied Statistics",
    year: 2021,
    type: "Journal Article",
    topics: ["Time Series", "Statistical Learning"],
  },
  {
    title: "Teaching Statistics with Real Data: Lessons from Collaborative Consulting Labs",
    venue: "Statistics Education Research Journal",
    year: 2021,
    type: "Journal Article",
    topics: ["Statistical Education"],
  },
  {
    title: "Regime Switching Models for Volatility in Developing Economies",
    venue: "Communications in Statistics: Case Studies",
    year: 2020,
    type: "Journal Article",
    topics: ["Time Series", "Statistical Learning"],
  },
  {
    title: "Statistical Modelling of Maternal Mortality Determinants",
    venue: "African Journal of Biostatistics",
    year: 2019,
    type: "Journal Article",
    topics: ["Biostatistics", "Health Modeling"],
  },
  {
    title: "Introduction to Statistical Computing with R for Social Scientists",
    venue: "Academic Press",
    year: 2018,
    type: "Book",
    topics: ["Statistical Education", "Statistical Learning"],
  },
];