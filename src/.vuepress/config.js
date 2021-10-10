const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'codepedia.de',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: 'thindark',
  themeConfig: {
    displayAllHeaders: false, // Default: false
    searchPlaceholder: 'Search...',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'HTML',
        link: '/HTML/',
      },
      {
        text: 'CSS',
        link: '/CSS/',
      },
      {
        text: 'Javascript',
        ariaLabel: 'JS Menu',
        items: [
          { text: 'Javascript', link: '/JS/' },
          { text: 'JS for Web', link: '/JS4web/' },
          { text: 'JQuery', link: '/jquery/' },
        ],
      },
      {
        text: 'Backend',
        ariaLabel: 'Backend',
        items: [
          { text: 'Basics', link: '/BACKEND/' },
          { text: 'Node', link: '/NODE/' },
          { text: 'Express', link: '/EXPRESS/' },
        ],
      },
      {
        text: 'GIT',
        link: '/GIT/',
      },

      {
        text: 'Databases',
        ariaLabel: 'Databases',
        items: [
          { text: 'Basics', link: '/DB/' },
          { text: 'SQL', link: '/DBsql/' },
          { text: 'No SQL', link: '/DBnosql/' },
        ],
      },
      {
        text: 'Vue',
        items: [
          { text: 'Vue', link: '/VUE/' },
          { text: 'Vue Router', link: '/VUEROUTER/' },
          { text: 'Vuex', link: '/VUEX/' },
          { text: 'Nuxt', link: '/NUXT/' },
          { text: 'VuePress', link: 'https://v1.vuepress.vuejs.org/' },
        ],
      },
      {
        text: 'Misc.',
        ariaLabel: 'misc',
        items: [
          { text: 'Command Line', link: '/commandline/' },
          { text: 'VS Code', link: '/vscode/' },
          { text: 'Markdown', link: '/markdown/' },
          { text: 'Design', link: '/design/' },
        ],
      },
      {
        text: 'About',
        link: '/ABOUT/',
      },
    ],
    sidebar: {
      '/HTML/': [
        {
          title: 'HTML',
          collapsable: false,
          sidebarDepth: 2,
          children: ['', 'forms', 'reference links'],
        },
      ],
      '/CSS/': [
        {
          title: 'CSS',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'selectors',
            'color',
            'units',
            'typography',
            'specifity',
            'box model',
            'positioning',
            'float & clear',
            'display type',
            'centering',
            'flexbox',
            'grid',
            'responsiveness',
            'transition',
            'animation',
            'css_div',
            'css_links',
          ],
        },
      ],
      '/JS/': [
        {
          title: 'Javascript',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'variables',
            'operators',
            'numbers',
            'strings',
            'arrays',
            'conditional statements',
            'functions',
            'loops',
            'objects',
            'destructuring',
            'spread and rest',
            'modules',
            'play audio',
            'async',
            'classes',
            'JS links',
          ],
        },
      ],
      '/JS4web/': [
        {
          title: 'JS for web',
          collapsable: true,
          sidebarDepth: 2,
          children: ['', 'the dom', 'dom manipulation', 'browser events'],
        },
      ],
      '/JQUERY/': [
        {
          title: 'jQuery',
          collapsable: false,
          sidebarDepth: 2,
          children: [''],
        },
      ],

      '/GIT/': [
        {
          title: 'GIT',
          collapsable: false,
          sidebarDepth: 2,
          children: ['', 'github', 'git links'],
        },
      ],

      '/COMMANDLINE/': [
        {
          title: 'Command Line',
          collapsable: false,
          sidebarDepth: 2,
          children: [''],
        },
      ],
      '/VSCODE/': [
        {
          title: 'VS Code',
          collapsable: false,
          sidebarDepth: 3,
          children: ['', 'chrome devtools'],
        },
      ],
      '/DESIGN/': [
        {
          title: 'Design',
          collapsable: false,
          sidebarDepth: 2,
          children: [''],
        },
      ],
      '/MARKDOWN/': [
        {
          title: 'Markdown',
          collapsable: false,
          sidebarDepth: 2,
          children: [''],
        },
      ],
      '/DB/': [
        {
          title: 'Databases',
          collapsable: false,
          sidebarDepth: 2,
          children: [''],
        },
      ],
      '/DBsql/': [
        {
          title: 'SQL Databases',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'sql db',
            'sql tables',
            'sql relations',
            'db modelling',
            'sql joins',
            'mariadb',
          ],
        },
      ],
      '/DBnosql/': [
        {
          title: 'NoSQL Databases',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'create_mongo',
            'read_mongo',
            'update_mongo',
            'delete_mongo',
            'relations_mongo',
            'atlas',
            'mongo and node',
            'mongoose',
          ],
        },
      ],
      '/VUE/': [
        {
          title: 'VUE',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'vue optimizing vscode',
            'vue project-structure',
            'vue data-binding',
            'vue conditional-rendering',
            'vue list-rendering',
            'vue events',
            'vue dynamic-styling',
            'vue advanced-reactivity',
            'vue template refs',
            'vue lifecycleHooks',

            'vue components',
            'vue passing data',
            'vue slots',
            'vue dynamic components',
            'vue forms',
            'vue teleporting',

            'vue options-api',
            'vue links',
          ],
        },
      ],
      '/VUEROUTER/': [
        {
          title: 'VUEROUTER',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'styling-links',
            'registering-routes',

            'vue-router-components',
            'changing-routes',
            'programmatic-nav',
            'passing-data',
            'history-mode',
            'handling404s',
            'extras',
            'navigation-guards',
          ],
          // children: ['',  'navigation-guards'],
        },
      ],
      '/VUEX/': [
        {
          title: 'VUEX',
          collapsable: false,
          sidebarDepth: 2,
          children: ['', 'vuex vue mastery'],
        },
      ],
      '/NUXT/': [
        {
          title: 'Nuxt',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'create app',
            'folder structure',
            'universal mode',
            'seo',
            'routing',
            'axios',
            'vuex nuxt',
            'deploy',
            'i18n nuxt',
            'content nuxt',
          ],
        },
      ],
      '/BACKEND/': [
        {
          title: 'Backend',
          collapsable: false,
          sidebarDepth: 2,
          children: [''],
        },
      ],
      '/NODE/': [
        {
          title: 'Node',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'npm',
            'yarn',
            'nvm',
            'debugging',
            'process object',
            'event architecture',
            'modules',
            'filesystem',
            'errors',
            'links',
          ],
        },
      ],
      '/EXPRESS/': [
        {
          title: 'Express',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'routes',
            'router',
            'middleware',
            'requests',
            'response',
            'file path',
            'static files',
            'error handling',
            'templating engines',
            'mvc',
            'env',
            'links',
          ],
        },
      ],
      // '/ABOUT/': [
      //   {
      //     title: 'About',
      //     collapsable: false,
      //     sidebarDepth: 2,
      //     children: [
      //       '',
      //     ]
      //   },
      // ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
