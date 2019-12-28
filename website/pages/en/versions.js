/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

// @ts-ignore
const CompLibrary = require("../../core/CompLibrary");

const Container = CompLibrary.Container;

const CWD = process.cwd();

const versions = require(`${CWD}/versions.json`);

module.exports = props => {
  const { config: siteConfig } = props;
  const latestVersion = versions[0];
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>{siteConfig.title} Versions</h1>
          </header>
          <h3 id="latest">Current version (Stable)</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <a
                    href={`${siteConfig.baseUrl}docs/getting-started/installation`}
                  >
                    Documentation
                  </a>
                </td>
                <td>
                  <a href={`${repoUrl}/releases/tag/${latestVersion}`}>
                    Release Notes
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <h3 id="rc">Pre-release versions</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>master</th>
                <td>
                  <a
                    href={`${siteConfig.baseUrl}docs/next/getting-started/installation`}
                  >
                    Documentation
                  </a>
                </td>
                <td>
                  <a href={repoUrl}>Source Code</a>
                </td>
              </tr>
            </tbody>
          </table>
          <h3 id="archive">Past Versions</h3>
          <table className="versions">
            <tbody>
              {versions.map(
                version =>
                  version !== latestVersion && (
                    <tr key={version}>
                      <th>{version}</th>
                      <td>
                        <a
                          href={`${siteConfig.baseUrl}docs/${version}/getting-started/installation`}
                        >
                          Documentation
                        </a>
                      </td>
                      <td>
                        <a href={`${repoUrl}/releases/tag/${version}`}>
                          Release Notes
                        </a>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};
