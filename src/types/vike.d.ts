declare module "vike-react/config" {
  const config: any;
  export default config;
}

declare module "vike-react/useConfig" {
  export function useConfig(): (config: {
    title?: string;
    description?: string;
  }) => void;
}

declare module "vike-react/usePageContext" {
  interface PageContext {
    meta?: {
      title?: string;
      description?: string;
      keywords?: string;
      ogTitle?: string;
      ogDescription?: string;
      ogImage?: string;
      twitterTitle?: string;
      twitterDescription?: string;
      twitterImage?: string;
    };
    urlPathname?: string;
  }

  export function usePageContext(): PageContext;
}
