import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <title>Jai Hari Nataraj | Data Analyst</title>

      <meta
        name="description"
        content="Official portfolio of Jai Hari Nataraj, a Data Analyst specializing in Python, SQL, Power BI, Excel, data visualization, machine learning, and analytics."
      />

      <meta
        name="keywords"
        content="Jai Hari Nataraj, Data Analyst, Python, SQL, Power BI, Portfolio, Data Analytics"
      />

      <meta name="author" content="Jai Hari Nataraj" />

      <link
        rel="canonical"
        href="https://jaiharinataraj.com/"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Jai Hari Nataraj | Data Analyst" />
      <meta
        property="og:description"
        content="Data Analyst Portfolio showcasing analytics and machine learning projects."
      />
      <meta
        property="og:url"
        content="https://jaiharinataraj.com/"
      />
      <meta
        property="og:image"
        content="https://jaiharinataraj.com/profile.png"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jai Hari Nataraj",
          url: "https://jaiharinataraj.com",
          image: "https://jaiharinataraj.com/profile.png",
          jobTitle: "Data Analyst",
          description:
            "Data Analyst specializing in Python, SQL, Power BI, Excel, data visualization, and machine learning.",
          sameAs: [
            "https://github.com/jaiharinataraj",
            "https://www.linkedin.com/in/jaiharinataraj"
          ]
        })}
      </script>
    </Helmet>
  );
}