import type { PostListStyle } from "./components/PostListing";

/// Configure your page here
export default {
  /// Global configuration
  site: {
    // SETUP:
    /// Your public page URL
    url: "https://marvin-j97.github.io/nanoblog",

    // SETUP:
    baseUrl: "/nanoblog",

    // SETUP:
    /// Your site's title
    title: "nanoblog",

    // SETUP:
    /// Default site description
    description: "nanoblog is a lightweight blog template for Astro",
  },

  layout: {
    pageSize: 5,

    /// Post list style
    postListStyle: "cards" as PostListStyle,

    landingPage: {
      /// Show recent posts on landing page
      showRecentPosts: true,
    },

    topbar: {
      links: [
        ["Posts", "/posts"],
        ["Tags", "/tags"],
      ],

      showThemeSwitch: true,

      showRssFeed: true,
    },

    footer: {
      showPoweredBy: true,
    },
  },

  /// Post page configuration
  post: {
    /// Show reading progress bar on top of page
    showReadingProgress: true,

    /// Shows a reading time estimate on top of every blog post
    readingTime: {
      enabled: true,

      /// Reading speed in words per minute (WPM) - 200 is a good baseline
      speed: 200,
    },

    /* /// Code editor configuration
    code: {
      /// See https://github.com/shikijs/shiki/blob/main/docs/themes.md
      ///
      /// NOTE: After changing, you need to restart the dev server because
      /// of a bug in Astro
      theme: {
        dark: "vitesse-light",
        light: "vitesse-light",
      },
    }, */
  },
};
