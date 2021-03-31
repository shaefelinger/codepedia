const { description } = require('../../package')

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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'HTML',
        link: '/HTML/'
      },
      {
        text: 'CSS',
        link: '/CSS/'
      },
      {
        text: 'Javascript',
        ariaLabel: 'JS Menu',
        items: [
          { text: 'Javascript', link: '/JS/' },
          { text: 'JS 4 Web', link: '/JS4web/' }
        ]
      },
      {
        text: 'GIT',
        link: '/GIT/'
      },
      {
        text: 'Databases',
        link: '/DB/'
      },
      {
        text: 'Misc.',
        ariaLabel: 'misc',
        items: [
          { text: 'Command Line', link: '/commandline/' },
          { text: 'VS Code', link: '/vscode/' },
          { text: 'Markdown', link: '/markdown/' },
          { text: 'Design', link: '/design/' }
        ]
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
   
      '/HTML/': [
        {
          title: 'HTML',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'forms',
            'reference links',
          ]
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
          ]
        }
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
            'play audio',
            'classes',
            'JS links',
          ]
        },
      ],
      '/JS4web/': [
        {
          title: 'JS 4 web',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'the dom',
            'dom manipulation',
            'browser events',
          ]
        },
      ],
      '/GIT/': [
        {
          title: 'GIT',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'github',
            'git links',
          ]
        },
      ],
      '/COMMANDLINE/': [
        {
          title: 'Command Line',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            '',
          ]
        },
      ],
      '/VSCODE/': [
        {
          title: 'VS Code',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            '',
            'chrome devtools',
          ]
        },
      ],
      '/DESIGN/': [
        {
          title: 'Design',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
          ]
        },
      ],
      '/MARKDOWN/': [
        {
          title: 'Design',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
          ]
        },
      ],
      '/DB/': [
        {
          title: 'Databases',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'mariadb',
            'mongodb',
          ]
        },
      ],
      
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
