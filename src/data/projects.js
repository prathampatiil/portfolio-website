export const projects = [
  {
    id: 1,
    title: "Campus Sensor ETL Pipeline",
    type: "Data Engineering",
    summary:
      "Ingested and normalized IoT air quality data from ten campus buildings, built automated data cleansing logic, and published ready-to-consume tables for analytics.",
    impact: "Shortened reporting prep from 6 hours to 10 minutes per week.",
    stack: ["Python", "Airflow", "BigQuery", "GCP Storage"],
    timeline: "Fall 2025 · 5 weeks",
    link: "https://example.com/campus-sensors",
    gradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.05), rgba(56, 189, 248, 0.1))"
  },
  {
    id: 2,
    title: "Enrollment Forecast Model",
    type: "Predictive Analytics",
    summary:
      "Built an ensemble regression pipeline using historical enrollment, regional economic indicators, and marketing spend; automated retraining and evaluation scripts.",
    impact: "Improved forecast accuracy by 12% over previous spreadsheets.",
    stack: ["Python", "scikit-learn", "Prefect", "GCP AI Platform"],
    timeline: "Spring 2025 · 6 weeks",
    link: "https://example.com/enrollment-forecast",
    gradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(99, 102, 241, 0.1))"
  },
  {
    id: 3,
    title: "Student Success Analytics Hub",
    type: "Dashboard & Insights",
    summary:
      "Designed a Storybook-backed component system and connected Plotly dashboards to BigQuery summaries so advisors can visualize retention triggers.",
    impact: "Advising team adopted the dashboard for weekly strategy meetings.",
    stack: ["React", "Plotly", "BigQuery", "DBT"],
    timeline: "Winter 2024 · 4 weeks",
    link: "https://example.com/student-success",
    gradient: "linear-gradient(135deg, rgba(20, 184, 166, 0.05), rgba(20, 184, 166, 0.1))"
  }
];
