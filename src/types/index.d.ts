declare module "@docusaurus/useBaseUrl" {
  export default (str: string) => 0 as string;
}

declare module "@docusaurus/useDocusaurusContext" {
  import { DocusaurusContext } from "@docusaurus/types";

  export default () => 0 as DocusaurusContext;
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
