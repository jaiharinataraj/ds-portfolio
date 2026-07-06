import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <title>Jai Hari Nataraj | Data Analyst</title>

      <meta
        name="description"
        content="Data Analyst specializing in Python, SQL, Power BI, Excel, machine learning and analytics."
      />

      <meta
        name="keywords"
        content="Jai Hari Nataraj, Data Analyst, Python, SQL, Power BI, Portfolio"
      />

      <meta name="author" content="Jai Hari Nataraj" />

      <link
        rel="canonical"
        href="https://jaiharinataraj.com"
      />
    </Helmet>
  );
}