# CMD Generators
The purpose of this project is to provide a web GUI for the majority of command lines, making them easier to use.

The GUI is be hosting at [cmdgenerators.com](https://cmdgenerators.com). It reads the info file of a CMD and presents a user-friendly interface.

All info files are stored in this repository.

## Usage
[cmdgenerators.com](https://cmdgenerators.com)


## Contribution
You can create new generators, or help optimize existing generators, or fix bugs, or translate text. Just folk this repository, then modify it, pull a request. Check 'CMD Info File' follow.

### CMD Info File
They are in 'generators/' dir, in yaml format. One CMD one file. Follow is its type definition, by typescript:
```ts

interface Generator{
  name: string
  description?: string|I18nString
  related?: string[]
  versions: {
    [version: string]: {
      cmdName: string // like tar, ssh
      description?: string|I18nString
      contributors: Contributor[]
      options: {
        [optionID:string]: {
          name: string|I18nString
          description?: string|I18nString
          short?: string // short format of option, like -p
          long: string // long format of option, like --port
          value?: Value|I18nValue
          noQuotes?: boolean
          valueControls?: ValueControl[]
          getValue?: string // js function string, example: "value => value[0] ? value.join('') : value[2]"
        }
      }
      usages: {
        name: string|I18nString
        description?: string|I18nString
        steps: UsageStep[]
      }[]
    }
  }
}
interface I18nString{
  [languageCode: string]: string
}

interface Contributor{
  name: string
  url: string
}

type Value = boolean|string|SelectItem[]|{items: SelectItem[], multiple?: boolean}
interface I18nValue{
  [languageCode: string]: Value
}

type ValueControl = {type:'string'}|{type: 'specified_string', value: string}|{type:'select', items: SelectItem[], multiple?: boolean}

type SelectItem = string|{name:string|I18nString, value:string}
type UsageStep = string | {
  optional: boolean
  multiple: boolean
  items: string[] // optionID[]
}
```
You can refer to existing files.

## LICENSE
[MIT](http://opensource.org/licenses/MIT)