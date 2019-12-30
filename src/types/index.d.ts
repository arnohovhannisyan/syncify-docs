declare module "@docusaurus/useBaseUrl" {
  export default (str: string) => 0 as string;
}

declare module "@docusaurus/useDocusaurusContext" {
  interface SiteConfig {
    plugins: any[];
    themes: any[];
    customFields: any;
    themeConfig: any;
    title: string;
    tagline: string;
    url: string;
    baseUrl: string;
    favicon: string;
    organizationName: string;
    projectName: string;
    presets: [string, object][];
    [key: string]: any;
  }

  interface Context {
    siteConfig: SiteConfig;
    isClient: boolean;
  }

  export default () => 0 as Context;
}

declare module "@docusaurus/Link" {
  type DefaultProps = React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;

  interface ExtraProps {
    to: string;
  }

  export default (props: DefaultProps & ExtraProps) => 0 as JSX.Element;
}

declare module "@theme/Layout" {
  type DefaultProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;

  interface ExtraProps {
    title?: string;
    noFooter?: boolean;
    description?: string;
    image?: string;
    keywords?: string[];
    permalink?: string;
    version?: string;
  }

  export default (props: DefaultProps & ExtraProps) => 0 as JSX.Element;
}

declare module "*.css" {
  export default 0 as any;
}

interface Feature {
  title: string;
  imageUrl: string;
  description?: React.ReactNode;
}
