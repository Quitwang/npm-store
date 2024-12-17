# 版本管理策略

## 版本号规范 (Semantic Versioning)

我们严格遵循语义化版本 (Semantic Versioning) 规范：

- **主版本号 (MAJOR)**：当进行不兼容的 API 修改时
- **次版本号 (MINOR)**：当添加向下兼容的新功能时
- **修订号 (PATCH)**：当进行向下兼容的问题修复时

示例：1.2.3
- 1: 主版本号
- 2: 次版本号
- 3: 修订号

## 版本发布流程

1. **准备发布**
   ```bash
   # 确保在 main 分支
   git checkout main
   git pull origin main
   
   # 运行测试和构建
   pnpm test
   pnpm build
   ```

2. **更新版本号**
   ```bash
   # 修订号更新 (patch)
   pnpm version patch -ws
   
   # 次版本号更新 (minor)
   pnpm version minor -ws
   
   # 主版本号更新 (major)
   pnpm version major -ws
   ```

3. **生成 Changelog**
   ```bash
   pnpm changelog
   ```

4. **发布到 NPM**
   ```bash
   pnpm publish -r
   ```

## 分支管理策略

- **main**: 主分支，用于发布
- **develop**: 开发分支，用于集成功能
- **feature/***: 功能分支，用于开发新功能
- **fix/***: 修复分支，用于修复 bug
- **release/***: 发布分支，用于版本发布准备

## 预发布版本规范

对于未稳定的版本，使用以下标签：

- **alpha**: 内部测试版本 (1.0.0-alpha.1)
- **beta**: 公开测试版本 (1.0.0-beta.1)
- **rc**: 发布候选版本 (1.0.0-rc.1)

## 发布检查清单

- [ ] 所有测试通过
- [ ] 代码已经完成 review
- [ ] 文档已更新
- [ ] CHANGELOG.md 已更新
- [ ] 版本号已更新
- [ ] 构建成功
- [ ] 新功能已经测试