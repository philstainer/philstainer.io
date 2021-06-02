const fs = require('fs')

const globby = require('globby')
const prettier = require('prettier')

;(async () => {
  const pages = await globby([
    'pages/*.tsx',
    'data/**/*.mdx',
    '!data/*.mdx',
    '!pages/_*.tsx',
    '!pages/api',
    '!pages/404.tsx'
  ])

  const routes = pages
    .map(page => {
      const path = page
        .replace('pages', '')
        .replace('data', '')
        .replace('.tsx', '')
        .replace('.mdx', '')

      const route = path === '/index' ? '' : path

      return `
                        <url>
                            <loc>${`https://philstainer.io${route}`}</loc>
                        </url>
                    `
    })
    .join('')

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${routes}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    parser: 'html'
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
})()
