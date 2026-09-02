export const siteName = "China's 15th Five-Year Plan Explorer";

export function pageTitle(title?: string) {
  return title ? `${title} | ${siteName}` : `${siteName} | 2026–2030`;
}

export function absoluteUrl(site: URL | undefined, pathname: string) {
  return new URL(pathname, site ?? 'https://china-five-year-plan-explorer.example.com/').toString();
}
