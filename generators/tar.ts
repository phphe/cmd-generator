import { Generator, common } from "../utils";
import * as ut from "../utils";

const controls:ut.controlsObject = {
  archive: {
    name: {en: 'Archive', 'zh-CN': '打包文件'},
    description: {
      en: 'Read the archive from or write the archive to the specified file.',
      'zh-CN': '要解压或新建的打包文档.',
    },
    type: 'string',
    cmd: ['-f', '--file'],
  },
  algorithm: {
    name: {en: 'Algorithm', 'zh-CN': '算法'},
    type: 'check',
    items: [
      {name: 'gzip', cmd: ['-z', '--gzip']},
      {name: 'bzip2', cmd: ['-j', '--bzip2']},
      {name: 'xz', cmd: ['-J', '--xz']},
      {name: 'lzma', cmd: ['--lzma']},
    ]
  },
  workdir: {
    name: {en: 'Work Directory', 'zh-CN': '工作目录'},
    description: {
      en: 'Change the work directory.',
      'zh-CN': '指定工作目录, 或解压到目录.',
    },
    type: 'string',
    cmd: ['-C', '--directory'],
  },
  others: {
    name: {en: 'Others', 'zh-CN': '杂项'},
    type: 'check',
    multiple: true,
    items: [
      {...common.verbose, defaultValue: true},
      {...common.interactive, cmd: ['-w', '--interactive']},
    ],
  },
}

const baseUsage: ut.Usage = {
  name: '',
  form: {
    controls: [
      controls.archive,
      {
        name: {en: 'File(s)', 'zh-CN': '要添加的文件'},
        description: {
          en: 'The file to be added to the archive. file path or pattern, like: ./*.mp4. all files of current dir: ./*',
          'zh-CN': '路径或匹配式, 如: ./*.mp4 . 当前目录所有文件: ./*',
        },
        type: 'string',
        multiple: true,
      },
      controls.algorithm,
      controls.others,
    ],
    advanced: [
      {
        name: {en: 'Exclude', 'zh-CN': '排除'},
        description: {
          en: 'Skip files that match pattern.',
          'zh-CN': '跳过匹配的文件. 路径或匹配式, 如: ./*.mp4',
        },
        type: 'string',
        multiple: true,
        cmd: ['--exclude'],
      },
      controls.workdir,
    ],
  },
}

const generatorInfo:Generator = {
  name: 'tar',
  description: {
    en: `GNU 'tar' saves many files together into a single tape or disk archive, and can restore individual files from the archive.`,
    'zh-CN': `GNU 'tar' 将许多文件保存在一个存档中，并可以从存档中恢复文件.`
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  related: ['bsdtar'],
  usages: [
    {
      ...baseUsage,
      name: {en: 'Create', 'zh-CN': '新建'},
      cmd: ['-c', '--create'],
    },
    {
      ...baseUsage,
      name: {en: 'Add', 'zh-CN': '添加'},
      description: {
        en: 'Append new entries into the archive. Only works on uncompressed archives stored in regular files.',
        'zh-CN': '附加文件到打包文档. 仅限于未压缩的打包文档.',
      },
      cmd: ['-r', '--append'],
    },
    {
      ...baseUsage,
      name: {en: 'Update', 'zh-CN': '更新'},
      description: {
        en: 'Like -r, but new entries are added only if they have a modification date newer than the corresponding entry in the archive. Only works on uncompressed archives stored in regular files.',
        'zh-CN': '附加文件到打包文档. 修改日期更新的文件才会被更新. 仅限于未压缩的打包文档.',
      },
      cmd: ['-u', '--update'],
    },
    {
      name: {en: 'List archive contents to stdout.', 'zh-CN': '列出打包文件内容到stdout.'},
      cmd: ['-t', '--list'],
      form: {
        controls: [
          controls.archive,
          {
            name: {en: 'Others', 'zh-CN': '杂项'},
            type: 'check',
            multiple: true,
            items: [
              {...common.verbose, defaultValue: true},
            ],
          },
        ],
        advanced: [
          controls.workdir,
        ],
      },
    },
    {
      name: {en: 'Extract', 'zh-CN': '解压打包文件'},
      cmd: ['-x', '--extract', '--get'],
      form: {
        controls: [
          controls.archive,
          controls.others,
        ],
        advanced: [
          controls.workdir,
          {
            name: {en: 'Others', 'zh-CN': '杂项'},
            type: 'check',
            multiple: true,
            items: [
              {
                name: {en: 'Keep Old Files', 'zh-CN': '保留旧文件'},
                description: {
                  en: `Don't replace existing files when extracting,
                  treat them as errors`,
                  'zh-CN': '不覆盖存在文件. 并抛出错误.',
                },
                cmd: ['-k', '--keep-old-files'],
              },
              {
                name: {en: 'Keep Newer Files', 'zh-CN': '保留新文件'},
                description: {
                  en: `Don't replace existing files that are newer than
                  their archive copies`,
                  'zh-CN': '不覆盖存在的并且比存档内对应文件更新的文件.',
                },
                cmd: ['--keep-newer-files'],
              },
              {
                name: {en: 'Preserve existing symlinks to directories', 'zh-CN': '保留指向目录的软链接'},
                cmd: ['--keep-directory-symlink'],
              },
              {
                "name": {en: `Don't extract file modified time`, 'zh-CN': '不提取文件修改时间'},
                "cmd": ["-m", "--touch"]
              },
              {
                name: {
                  en: 'Extract information about file permissions (default for superuser)',
                  'zh-CN': '提取文件权限信息（默认为超级用户）.',
                },
                cmd: ['-p', '--preserve-permissions'],
              },
              {
                "name": {
                  "en": "Extract files to standard output",
                  "zh-CN": "提取文件到标准输出"
                },
                "cmd": ["-O", "--to-stdout"]
              },
            ],
          },
        ],
      },
    },
    {
      name: {en: 'Compare', 'zh-CN': '比较'},
      description: {
        en: 'Find differences between archive and file system.',
        'zh-CN': '比较存档和文件系统之间的差异.',
      },
      cmd: ['-d', '--diff', '--compare'],
      form: {
        controls: [
          controls.archive,
          {
            name: {en: 'File or directory path', 'zh-CN': '文件或目录路径'},
            type: 'string',
            multiple: true,
          },
        ],
      },
    },
    {
      name: {en: 'Delete', 'zh-CN': '删除'},
      description: {
        en: 'Delete from the archive (not on mag tapes!)',
        'zh-CN': '从档案中删除（不在磁带上！）',
      },
      cmd: ['--delete'],
      form: {
        controls: [
          controls.archive,
          {
            name: {en: 'File or directory path', 'zh-CN': '文件或目录路径'},
            type: 'string',
            multiple: true,
          },
        ],
      },
    },
  ],
}

export default generatorInfo