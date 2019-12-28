/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

module.exports = props => {
  function docUrl(doc, language) {
    const baseUrl = props.config.baseUrl;
    const docsUrl = props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  return (
    <footer className="nav-footer" id="footer">
      <section className="sitemap">
        <div>
          <h5>Docs</h5>
          <a href={docUrl("getting-started/installation", props.language)}>
            Getting Started
          </a>
        </div>
        <div>
          <h5>Community</h5>
          <a
            href="https://discord.gg/DGvuqWD"
            target="_blank"
            rel="noreferrer noopener"
          >
            Discord
          </a>
          <a
            href="https://join.slack.com/t/vscode-syncify/shared_invite/enQtNzc5MjYyMjYyNzEwLWQ5MGMxNDljZjk5NmYwNWZlYTBmYjk0MjliNjgyYWRkM2NiYjU2YjExY2RmODg2MGIyZTUwY2YzYWM2YThjMmM"
            target="_blank"
            rel="noreferrer noopener"
          >
            Slack
          </a>
        </div>
        <div>
          <h5>More</h5>
          <a href="https://github.com/arnohovhannisyan/vscode-syncify">
            GitHub Repo
          </a>
          <a href="https://github.com/arnohovhannisyan">@arnohovhannisyan</a>
        </div>
      </section>
      <section className="copyright">{props.config.copyright}</section>
    </footer>
  );
};
