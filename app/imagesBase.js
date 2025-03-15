const isGithubPages = process.env.GITHUB_PAGES === "true";
export const imagesBasePath = isGithubPages ? "/etp-attendee-front/" : "/";
