const isGithubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
export const imagesBasePath = isGithubPages ? "/etp-attendee-front/" : "/";
