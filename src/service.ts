import program from 'commander'
import packageInfo from '../package.json'
import { create } from "./commands/create";

module.exports = class Service {
    constructor() {
        setupDefaultCommands() //设置默认命令
    }
    run(_id, _args = {}, rawArgv = []) {
        program.parse(rawArgv, { from: 'user' })  //执行相应的命令
    }
}

// 设置默认命令
const setupDefaultCommands = () => {
    program.version(packageInfo.version, '-v, --version', '输出当前版本号')
    program.helpOption('-h, --help', '获取帮助')
    program.command('create').description('新建项目').alias('c').action(async () => {
        await create()
    })
    program.addHelpCommand(false)
}

