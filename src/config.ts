export const SITE = {
  website: "https://joemaddalone.com/", // replace this with your deployed domain
  author: "Joe Maddalone",
  profile: "https://joemaddalone.com/",
  desc: "Joe Maddalone's talks about software, books, and movies.",
  title: "Joe MAddalone",
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
