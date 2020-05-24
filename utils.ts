export interface BaseFormControl{
  id?: string // to mark control, useful when you use valueGetters to format multiple controls' value
  name?: string|I18nString
  description?: string|I18nString
  multiple?: boolean
  cmd?: CMD
  required?: boolean // show red '*'
  joinValue?: boolean
  valueSeparator?: string // available when joinValue = true. default: ','
}

export interface FormControlInput extends BaseFormControl{
  type: 'string'
  defaultValue?: string
}

export interface FormControlInputMultiple extends BaseFormControl{
  type: 'string'
  defaultValue?: string[]
  multiple: true
}

export interface FormControlSelect extends BaseFormControl{
  type: 'select'
  defaultValue?: string
  items: SelectItem[]
}

export interface FormControlSelectMultiple extends BaseFormControl{
  type: 'select'
  defaultValue?: string[]
  multiple: true
  items: SelectItem[]
}

export interface FormControlCheck extends BaseFormControl{
  type: 'check'
  defaultValue?: boolean|number // number is for single choice, it is index
  items?: SelectItem[] // single choice if items existing
}

export interface FormControlCheckMultiple extends BaseFormControl{
  type: 'check'
  defaultValue?: string[]
  multiple: true
}

export type FormControl = FormControlInput|FormControlInputMultiple|FormControlSelect|FormControlSelectMultiple|FormControlCheck|FormControlCheckMultiple

type ControlValue = string|string[]
interface ControlValues {
  [id:string]: ControlValue
}
type ValueGetterFunction = (value:ControlValue|ControlValues) => string
interface ValueGetterObject{
  id?: string|string[] // override controlId in key
  getter: ValueGetterFunction
}
type ValueGetter = ValueGetterFunction|ValueGetterObject

type CMD = string|string[] // if array, [short format, long format, ...other formats]

export interface Generator{
  name: string
  description?: string|I18nString
  contributors: Contributor[]
  cmdName?: string
  related?: string[]
  usages: {
    name: string|I18nString
    description?: string|I18nString
    cmd?: CMD
    cmdName?: string
    form: {
      controls: FormControl[]
      advanced?: FormControl[]
      valueGetters?: {
        [controlId:string]: ValueGetter
      },
    }
  }[]
}

interface I18nString{
  [languageCode: string]: string
}

interface Contributor{
  name: string
  url: string
}

type SelectItem = string|{
  name:string|I18nString
  value:string
  description?: string|I18nString
  cmd?: CMD
  defaultValue?: boolean // for multi-select checkbox
}

export const common = {
  verbose: {
    name: {
      en: 'verbose',
      'zh-CN': '详细模式',
    },
    description: {
      en: 'Produce verbose output',
      'zh-CN': '输出详细情况',
    },
    cmd: ['-v', '--verbose']
  },
  interactive: {
    name: {
      en: 'interactive',
      'zh-CN': '交互',
    },
    description: {
      en: 'Ask for confirmation for every action.',
      'zh-CN': '每个动作前需要确认.',
    },
    cmd: ['--interactive']
  },
}