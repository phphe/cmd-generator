export interface FormControl{
  id?: string // to mark control, useful when you use getCmd' value
  name?: string|I18nString
  description?: string|I18nString
  type: 'string' | 'select' | 'check' | 'mixed'
  multiple?: boolean
  items?: SelectItem[]
  cmd?: CMD
  defaultValue?: string|string[]|boolean
  joinValue?: boolean
  valueSeparator?: string // available when joinValue = true. default: ','
  cmdPriority?: number // The priority in result cmd, asc order.
  value?: string|string[]|MixedMultipleControlValue // don't set this
  // mixed
  controls?: FormControl[],
  getCmd?: (info: getCmdArg) => string,
  ignoreValue?: boolean // don't join value to result
  hideLabel?: boolean // refer the generator of ssh
}

export interface controlsObject{
  [key:string]: FormControl
}
export type MixedMultipleControlValue = (string|string[])[][]

export interface getCmdArg{
  control: FormControl
  usage: Usage
  longFormat: boolean // long format option name preferred
  getControlByID: (id: string) => FormControl
}

type ControlValue = string|string[]
interface ControlValues {
  [id:string]: ControlValue
}
type CMD = string|string[] // if array, [short format, long format, ...other formats]

export interface Generator{
  name: string
  description?: string|I18nString
  contributors: Contributor[]
  cmdName?: string
  related?: string[]
  optionNameValueSeparator?: string // default ' '; some command use '='
  usages: {
    name: string|I18nString
    description?: string|I18nString
    cmd?: CMD
    cmdName?: string
    form: {
      controls: FormControl[]
      advanced?: FormControl[]
    }
  }[]
}
export type Usage = Generator['usages'][0]

interface I18nString{
  [languageCode: string]: string
}

interface Contributor{
  name: string
  url: string
}

type SelectItem = string|{
  name:string|I18nString
  value?:string
  description?: string|I18nString
  cmd?: CMD
  defaultValue?: boolean // for multi-select checkbox
}

export const common = {
  verbose: {
    name: {
      en: 'Verbose',
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
      en: 'Interactive',
      'zh-CN': '交互',
    },
    description: {
      en: 'Ask for confirmation for every action.',
      'zh-CN': '每个动作前需要确认.',
    },
  },
  others: <FormControl>{
    name: {
      en: 'Others',
      'zh-CN': '杂项',
    },
    type: 'check',
    multiple: true,
  },
  file: <FormControl>{
    name: {en: 'File', 'zh-CN': '文件'},
    type: 'string',
  },
  fileOrDir: <FormControl>{
    name: {en: 'File or directory', 'zh-CN': '文件或目录'},
    type: 'string',
  },
  pathOrPattern: <FormControl>{
    name: {en: 'Path or pattern', 'zh-CN': '路径或pattern'},
    type: 'string',
  },
}

export const defaultUsageName = {'en': 'Usage', 'zh-CN': '使用方法'}