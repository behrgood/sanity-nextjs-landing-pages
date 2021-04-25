export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '608581d04d5948e4e95ac64c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4yeh84tr',
                  apiId: 'ae08dfd0-fb50-4055-b4ca-8902496e9a3e'
                },
                {
                  buildHookId: '608581d0013240957942ff55',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gm9jgb8g',
                  apiId: '2c475688-6c81-44b3-ab4f-467be4e19782'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/behrgood/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gm9jgb8g.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
