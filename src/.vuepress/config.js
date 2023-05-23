const {description} = require('../../package');

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
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    [
      'meta',
      {name: 'apple-mobile-web-app-status-bar-style', content: 'black'},
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
          {text: 'Javascript', link: '/JS/'},
          {text: 'JS for Web', link: '/JS4web/'},
          {text: 'JQuery', link: '/jquery/'},
          {text: 'Async JS', link: '/JSasync/'},
        ],
      },
      {
        text: 'Typescript',
        link: '/TYPESCRIPT/',
      },
      {
        text: 'Backend',
        ariaLabel: 'Backend',
        items: [
          {text: 'Basics', link: '/BACKEND/'},
          {text: 'Node', link: '/NODE/'},
          {text: 'Express', link: '/EXPRESS/'},
          {text: 'Connect DB to Node', link: '/NODE-DB/'},
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
          {text: 'Basics', link: '/DB/'},
          {text: 'SQL', link: '/DBsql/'},
          {text: 'No SQL', link: '/DBnosql/'},
        ],
      },
      {
        text: 'Vue',
        items: [
          {text: 'Vue', link: '/VUE/'},
          {text: 'Vue Router', link: '/VUEROUTER/'},
          {text: 'Vue-State-Management', link: '/VUESTATE/'},
          {text: 'Vite', link: '/VITE/'},
          {text: 'Quasar', link: '/QUASAR/'},
          {text: 'Nuxt', link: '/NUXT/'},
          {text: 'Vue Animation', link: '/VUEANIMATION/'},
          {text: 'VuePress', link: 'https://v1.vuepress.vuejs.org/'},
        ],
      },
      {
        text: 'Misc.',
        ariaLabel: 'misc',
        items: [
          {text: 'Command Line', link: '/commandline/'},
          {text: 'VS Code', link: '/vscode/'},
          {text: 'Jetbrains IntelliJ', link: '/jetbrains/'},
          {text: 'Markdown', link: '/markdown/'},
          {text: 'Design', link: '/design/'},
          {text: 'Performance', link: '/performance/'},
          {text: 'Clean Code', link: '/cleancode/'},
          {text: 'Fake API', link: '/fakeapi/'},
          {text: 'SSH', link: '/ssh/'},
        ],
      },
      {
        text: 'About/Imprint',
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
            'scss_sass',
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
            'this',
            'maps_sets',
            'destructuring',
            'spread and rest',
            'modules',
            'play audio',
            'classes',
            'dates',
            'JS links',
          ],
        },
      ],
      '/TYPESCRIPT/': [
        {
          title: 'Javascript',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'compiler-settings'
          ],
        },
      ],
      '/JS4web/': [
        {
          title: 'JS for web',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            '',
            'the dom',
            'dom selecting',
            'dom manipulation',
            'browser events',
          ],
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
      '/JSasync/': [
        {
          title: 'Async JS',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'nested callbacks',
            'promises',
            'async await',
            'to_function',
          ],
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
      '/JETBRAINS/': [
        {
          title: 'Intelli J/Webstorm',
          collapsable: false,
          sidebarDepth: 3,
          children: [''],
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
      '/CLEANCODE/': [
        {
          title: 'Clean Code',
          collapsable: false,
          sidebarDepth: 2,
          children: ['', 'naming', 'comments_formatting', 'functions'],
        },
      ],
      '/FAKEAPI/': [
        {
          title: 'Fake API',
          collapsable: false,
          sidebarDepth: 2,
          children: [''],
        },
      ],
      '/SSH/': [
        {
          title: 'SSH',
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
      '/PERFORMANCE/': [
        {
          title: 'Performance',
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
            'sql_create',
            'sql_read',
            'sql_aggregate_functions',
            'sql_conditional_statements',
            'sql_constraints',
            'sql_update',
            'sql_delete',
            'sql_operators',
            'sql relations',
            'db modelling',
            'sql multiple_tables',
            'sql joins',
            'sql_manage',
            'sql designing',
            'sql_commands',
            'sql_db_handling',
            'sql_links',
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

            'vue axios',
            'vue options-api',
            'vue composition-api',
            'vue script-setup',
            'vue composables',
            'vue mixins',
            'vue styleguide',
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
      '/VUESTATE/': [
        {
          title: 'VUESTATE',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'pinia',
            'vuex',
            // 'vuex vue mastery'
          ],
        },
      ],
      '/VITE/': [
        {
          title: 'VUEX',
          collapsable: false,
          sidebarDepth: 2,
          children: [''],
        },
      ],
      '/VUEANIMATION/': [
        {
          title: 'VUE Animation',
          collapsable: false,
          sidebarDepth: 2,
          children: ['', 'vue transition', 'vue velocity', 'vue gsap3'],
        },
      ],
      '/QUASAR/': [
        {
          title: 'Quasar',
          collapsable: false,
          sidebarDepth: 2,
          children: ['', 'q_components'],
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
      '/NODE-DB/': [
        {
          title: 'Node & Databases',
          collapsable: false,
          sidebarDepth: 2,
          children: ['', 'sequelize'],
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
