const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { Emoji } = require('react-component-utility')

const app = express()
const port = 3000

app.get('*', (req, res) => {
  const el = React.createElement(Emoji, { symbol: '🥰' })
  const html = ReactDOMServer.renderToStaticMarkup(el)

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
      ${html}
    </body>
    </html>
  `)
})

app.listen(port, () => console.log(`App is up and running on port: ${port}`))
