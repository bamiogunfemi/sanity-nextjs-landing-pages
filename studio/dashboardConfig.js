export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62eda1eeba5a224dbb3c3688',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-oa7dowco',
                  apiId: '71b85788-9237-4e98-8904-f0af684ac8c6'
                },
                {
                  buildHookId: '62eda1ee4739795426345ede',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7vojavkt',
                  apiId: '129152f9-dbf2-40ca-9255-0fff9c0c45e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bamiogunfemi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7vojavkt.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
