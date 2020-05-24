const fs = require('fs')
const rimraf = require('rimraf')
const path = require('path')
const p = pt => path.join(__dirname, pt)

rimraf.sync(p('generators-json/')) // remove dir

setTimeout(() => {
  fs.mkdirSync(p('generators-json/'))

  fs.readdirSync(p('dist/generators/')).forEach(fileName => {
    if (fileName.endsWith('.js')) {
      const info = require(p('dist/generators/' + fileName)).default
      const target = p('generators-json/'+fileName.replace(/\.js$/, '.json'))
      fs.writeFileSync(target, JSON.stringify(info, null, 2))
    }
  })
}, 200)