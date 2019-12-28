/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

// @ts-ignore
const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const ProjectTitle = ({ siteConfig }) => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

const Button = props => (
  <div className="pluginWrapper buttonWrapper">
    <a className="button" href={props.href} target={props.target}>
      {props.children}
    </a>
  </div>
);

const HomeSplash = props => {
  const { siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  return (
    <SplashContainer>
      <div className="inner">
        <ProjectTitle siteConfig={siteConfig} />
        <PromoSection>
          <Button href={docUrl("getting-started/installation")}>
            Get Started
          </Button>
        </PromoSection>
      </div>
    </SplashContainer>
  );
};

const Block = props => (
  <Container
    padding={["bottom", "top"]}
    id={props.id}
    background={props.background}
  >
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = ({ baseUrl }) => (
  <Block layout="threeColumn">
    {[
      {
        title: "Quick Setup",
        image: `${baseUrl}/img/quick_setup.svg`,
        imageAlign: "top"
      },
      {
        title: "Custom Files",
        image: `${baseUrl}/img/custom_files.svg`,
        imageAlign: "top"
      },
      {
        title: "Profiles",
        image: `${baseUrl}/img/profiles.svg`,
        imageAlign: "top"
      },
      {
        title: "Custom Extensions",
        image: `${baseUrl}/img/custom_extensions.svg`,
        imageAlign: "top"
      },
      {
        title: "Conflict Resolution",
        image: `${baseUrl}/img/conflict_resolution.svg`,
        imageAlign: "top"
      },
      {
        title: "Intuitive Interface",
        image: `${baseUrl}/img/intuitive_interface.svg`,
        imageAlign: "top"
      }
    ]}
  </Block>
);

module.exports = props => {
  const { config, language = "" } = props;
  const { baseUrl } = config;

  return (
    <div>
      <HomeSplash siteConfig={config} language={language} />
      <div className="mainContainer">
        <Features baseUrl={baseUrl} />
      </div>
    </div>
  );
};
