import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Quick Setup",
    imageUrl: "quick_setup.svg"
  },
  {
    title: "Custom Files",
    imageUrl: "custom_files.svg"
  },
  {
    title: "Profiles",
    imageUrl: "profiles.svg"
  },
  {
    title: "Custom Extensions",
    imageUrl: "custom_extensions.svg"
  },
  {
    title: "Conflict Resolution",
    imageUrl: "conflict_resolution.svg"
  },
  {
    title: "Intuitive Interface",
    imageUrl: "intuitive_interface.svg"
  }
];

function Feature({ imageUrl, title, description = "" }) {
  const imgUrl = useBaseUrl(`img/${imageUrl}`);
  return (
    <div className="col col--4">
      {imgUrl && (
        <div className={classnames("text--center", styles.featureContainer)}>
          <img src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

function Home() {
  const { siteConfig = {} } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title}>
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div>
            <img alt="Syncify Logo" src={useBaseUrl("img/logo.svg")} />
          </div>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--outline button--secondary button--lg"
              to={useBaseUrl("docs/getting-started/installation")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
