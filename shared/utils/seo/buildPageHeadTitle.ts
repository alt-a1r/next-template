export const buildPageHeadTitle = (title: string, site: string) =>
  site ? `${title} | ${site}` : title;
