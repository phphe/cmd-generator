const fs = require('fs')
const yaml = require('js-yaml')
const rimraf = require('rimraf')
const path = require('path')
const p = pt => path.join(__dirname, pt)

rimraf.sync(p('generators-json/')) // remove dir
fs.mkdirSync(p('generators-json/'))

fs.readdirSync(p('generators/')).forEach(fileName => {
  if (fileName.endsWith('.yaml')) {
    const str = fs.readFileSync(p('generators/' + fileName)).toString()
    const info = yaml.safeLoad(str)
    const target = p('generators-json/'+fileName.replace(/\.yaml$/, '.json'))
    fs.writeFileSync(target, JSON.stringify(info))
  }
})