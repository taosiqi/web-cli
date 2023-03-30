## 插件介绍
cli插件，用于快速创建内部项目

## 插件开发
推荐使用`nrm`管理`npm`源

1. 创建用户
```bash
npm adduser --registry http://127.0.0.1:4873/
```

2. 发布
```bash
npm publish --registry http://127.0.0.1:4873/
```

## 使用

1. 安装
```bash
npm install @rs/cli -g --registry http://127.0.0.1:4873/
```

2. 使用
```bash
rs-cli create
```

