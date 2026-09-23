export const SITE = {
  website: "https://joemaddalone.com/", // replace this with your deployed domain
  author: "Joe Maddalone",
  profile: "https://joemaddalone.com/",
  desc: "A digital garden by Joe Maddalone — notes, writing, visuals, and links worth keeping. Not a resume, not a classroom (that's el337.com).",
  title: "Joe Maddalone",
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Chicago", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
