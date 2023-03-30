import shelljs from 'shelljs'
import inquirer from 'inquirer'
import * as fs from 'fs'
import rimraf from 'rimraf'
import log from '../utils/log'
const templateType = {
    type: 'list',
    message: '请选择模版类型',
    name: 'type',
    choices: [
        {
            name: 'h5',
            value: 'vue3-h5-starter'
        },
        {
            name: 'admin',
            value: 'vue3-admin-starter'
        }
    ]
}
const templateName = [
    {
        type: 'input',
        message: '请输入项目名称:',
        name: 'name',
        validate: (val) => {
            return val !== ''
        }
    }
]
export const create = async () => {
    // 选择模版类型
    let { type } = await inquirer.prompt([templateType])
    // 项目名称
    let { name } = await inquirer.prompt(templateName)
    // 拼接git地址，自行替换
    const url = `git clone http://gitlab-ci-token:[token]@[ip/域名]/pinxin/${type}.git --depth 1`
    // 执行clone
    await shelljs.exec(url)
    // 重命名
    await fs.renameSync(`./${type}`, `./${name}`)
    // 删除无关文件
    await rimraf(`./${name}/.git`)
    await rimraf(`./${name}/.idea`)
    await rimraf(`./${name}/.vscode`)
    log.succeed('创建成功')
    log.info(`cd ${name}`)
    log.info(`pnpm install`)
}
