# 开发指南

## 目录
1. [开发环境设置](#开发环境设置)
2. [项目结构](#项目结构)
3. [开发规范](#开发规范)
4. [组件开发指南](#组件开发指南)
5. [工具函数开发指南](#工具函数开发指南)
6. [测试规范](#测试规范)
7. [提交规范](#提交规范)
8. [版本发布流程](#版本发布流程)
9. [使用指南](#使用指南)

## 开发环境设置

```bash
# 1. 克隆仓库
git clone <repository-url>

# 2. 安装依赖
pnpm install

# 3. 启动开发环境
pnpm build
```

## 项目结构

```
├── packages/
│   ├── utils/                # 工具函数库
│   ├── vue2-components/      # Vue 2 组件库
│   └── vue3-components/      # Vue 3 组件库
├── package.json
└── pnpm-workspace.yaml
```

## 开发规范

### 通用规范

1. **文件命名**
   - 组件文件使用 PascalCase: `Button.vue`
   - 工具函数文件使用 camelCase: `stringUtils.ts`
   - 样式文件使用 kebab-case: `button-styles.css`

2. **代码组织**
   - 每个功能模块独立目录
   - 相关文件放在同一目录下
   - 导出统一在 index.ts 中管理

3. **代码风格**
   - 使用 TypeScript 开发
   - 使用 ESLint + Prettier 格式化代码
   - 遵循项目配置的编码规范

## 组件开发指南

### 目录结构

```
components/
└── Button/
    ├── index.ts         # 导出文件
    ├── Button.vue       # 组件主文件
    ├── styles.css       # 样式文件
    └── Button.test.ts   # 测试文件
```

### 组件开发规范

1. **组件设计原则**
   ```vue
   <!-- 好的实践 -->
   <template>
     <button
       class="company-button"
       :class="buttonClasses"
       v-bind="$attrs"
       @click="handleClick"
     >
       <slot></slot>
     </button>
   </template>
   
   <script setup lang="ts">
   // 1. 类型定义
   interface Props {
     type?: 'primary' | 'secondary' | 'danger';
     disabled?: boolean;
   }
   
   // 2. Props 定义
   const props = withDefaults(defineProps<Props>(), {
     type: 'primary',
     disabled: false,
   });
   
   // 3. 事件定义
   const emit = defineEmits<{
     (e: 'click', event: MouseEvent): void;
   }>();
   
   // 4. 组件逻辑
   const buttonClasses = computed(() => [
     `company-button--${props.type}`,
     { 'company-button--disabled': props.disabled }
   ]);
   </script>
   ```

2. **样式规范**
   ```css
   /* 使用 BEM 命名规范 */
   .company-button { /* 块 */ }
   .company-button--primary { /* 修饰符 */ }
   .company-button__icon { /* 元素 */ }
   ```

## 工具函数开发指南

### 目录结构

```
utils/
└── string/
    ├── index.ts
    ├── capitalize.ts
    └── capitalize.test.ts
```

### 开发规范

1. **函数设计**
   ```typescript
   /**
    * 函数描述
    * @param str - 参数描述
    * @returns 返回值描述
    */
   export function capitalize(str: string): string {
     if (!str) return str;
     return str.charAt(0).toUpperCase() + str.slice(1);
   }
   ```

## 测试规范

1. **测试文件命名**: `*.test.ts` 或 `*.spec.ts`

2. **测试示例**
   ```typescript
   import { describe, it, expect } from 'vitest';
   import { capitalize } from './capitalize';
   
   describe('capitalize', () => {
     it('should capitalize first letter', () => {
       expect(capitalize('hello')).toBe('Hello');
     });
   });
   ```

## 提交规范

1. **提交命令**
   ```bash
   pnpm commit
   ```

2. **提交类型**
   - feat: 新功能
   - fix: 修复
   - docs: 文档更新
   - style: 代码格式
   - refactor: 重构
   - perf: 性能优化
   - test: 测试
   - chore: 构建/工具
   - revert: 回滚

## 版本发布流程

1. **准备发布**
   ```bash
   # 确保代码最新
   git checkout main
   git pull origin main
   
   # 测试构建
   pnpm test
   pnpm build
   ```

2. **版本更新**
   ```bash
   # 补丁版本
   pnpm release
   
   # 预发布版本
   pnpm release:alpha
   pnpm release:beta
   pnpm release:rc
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

```typescript
// 使用工具函数
import { capitalize } from '@your-company/utils';
console.log(capitalize('hello')); // 输出: Hello

// 使用 Vue 组件
import { Button } from '@your-company/vue3-components';