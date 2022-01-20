module.exports = {
  title: 'インターンシップ資料',
  description: '2022インターンシップ',
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    ['meta', { name: 'robots', content: 'noindex' }]
  ],
  themeConfig: {
    lastUpdated: '最終更新',
    sidebar: [
      {
        title: '3days',
        children: ['3day/',
          {
            title: '01.aboutインターンシップ',
            children: [
              '3day/01about/01azure_plan',              
              '3day/01about/07ssg',
              '3day/01about/08ssg-infomation',
              '3day/01about/09nextjs',
              '3day/01about/10tool_license',
            ]
          },
          {
            title: '02.portfolio-sight',
            children: [
              '3day/02portfolio/01introduction',
              '3day/02portfolio/02-1samplesite-code',
              '3day/02portfolio/02-2samplesite-code',
              '3day/02portfolio/03hint',
            ]
          },
          {
            title: '03.blog',
            children: [
              '3day/03blog/01introduction',
            ]
          },
          {
            title: '04.game',
            children: [
              '3day/04game/01prologue',
              '3day/04game/11step1',
              '3day/04game/02aboutJavaScript',
              '3day/04game/12step2',
              '3day/04game/13step3',
              '3day/04game/21azure-app-service',
              '3day/04game/31aboutGitHub',
              '3day/04game/32usingGitHub',
              '3day/04game/41link',
            ]
          },
          {
            title: '05.advance',
            children: [
              '3day/05advance/01advance',
            ]
          },
        ]
      }
    ]
  },
  /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
