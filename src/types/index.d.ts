declare module "@docusaurus/useBaseUrl" {
	const exported: (str: string) => string;

	export default exported;
}

declare module "@docusaurus/useDocusaurusContext" {
	import { DocusaurusContext } from "@docusaurus/types";

	const exported: () => DocusaurusContext;

	export default exported;
}

declare module "@docusaurus/Link" {
	type DefaultProps = React.DetailedHTMLProps<
		React.AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	>;

	interface ExtraProps {
		to: string;
	}

	const exported: (props: DefaultProps & ExtraProps) => JSX.Element;

	export default exported;
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

	const exported: (props: DefaultProps & ExtraProps) => JSX.Element;

	export default exported;
}

declare module "*.css" {
	const exported: any;

	export default exported;
}

interface Feature {
	title: string;
	imageUrl: string;
	description?: React.ReactNode;
}
