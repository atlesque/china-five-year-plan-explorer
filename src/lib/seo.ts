export const siteName = "China's 15th Five-Year Plan Explorer";
export const siteDescription = 'Explore the industries, technologies, and systems shaped by China’s 15th Five-Year Plan (2026–2030).';
export const siteUrl = 'https://china-five-year-plan.atlesque.dev';
export const socialImagePath = '/og-default.svg';

export function pageTitle(title?: string) {
  return title ? `${title} | ${siteName}` : `${siteName} | 2026–2030`;
}

export function absoluteUrl(site: URL | undefined, pathname: string) {
  return new URL(pathname, site ?? `${siteUrl}/`).toString();
}
