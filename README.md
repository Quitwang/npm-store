# Company Private NPM Packages

这个仓库包含了公司内部使用的 NPM 包，包括工具函数和 Vue 组件库。

## 包结构

- `@your-company/utils`: 通用工具函数库
- `@your-company/vue2-components`: Vue 2 组件库
- `@your-company/vue3-components`: Vue 3 组件库

## 开发指南

### 安装依赖

```bash
pnpm install
```

### 构建所有包

```bash
pnpm build
```

### 运行测试

```bash
pnpm test
```

### 发布包

1. 更新版本号
```bash
pnpm version patch/minor/major
```

2. 发布到私有 NPM 仓库
```bash
pnpm publish
```

## 使用指南

### 安装

```bash
# 安装工具函数库
pnpm add @your-company/utils

# 安装 Vue 2 组件库
pnpm add @your-company/vue2-components

# 安装 Vue 3 组件库
pnpm add @your-company/vue3-components
```

### 使用示例

```js
// 使用工具函数
import { capitalize } from '@your-company/utils';
console.log(capitalize('hello')); // 输出: Hello

// 使用 Vue 组件
import { Button } from '@your-company/vue3-components';