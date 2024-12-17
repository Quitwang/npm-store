# 代码风格指南

## TypeScript 规范

1. **类型定义**
   ```typescript
   // 好的实践
   interface ButtonProps {
     type: 'primary' | 'secondary' | 'danger';
     disabled?: boolean;
   }
   
   // 避免使用 any
   function process(data: unknown): void {
     if (typeof data === 'string') {
       // ...
     }
   }
   ```

2. **命名规范**
   - 接口名: PascalCase (IButtonProps 或 ButtonProps)
   - 类型名: PascalCase (ButtonType)
   - 变量名: camelCase (buttonState)
   - 常量名: UPPER_CASE (DEFAULT_TIMEOUT)

## Vue 组件规范

1. **组件命名**
   - 文件名: PascalCase (Button.vue)
   - 组件名: PascalCase (CompanyButton)

2. **Props 定义**
   ```typescript
   // Vue 3
   interface Props {
     type?: 'primary' | 'secondary' | 'danger';
     disabled?: boolean;
   }
   
   const props = withDefaults(defineProps<Props>(), {
     type: 'primary',
     disabled: false,
   });
   
   // Vue 2
   export default {
     props: {
       type: {
         type: String,
         default: 'primary',
         validator: (value) => ['primary', 'secondary', 'danger'].includes(value),
       },
     },
   };
   ```

3. **事件命名**
   - 使用 kebab-case
   - 语义化命名: click, change, update, input

4. **模板规范**
   ```vue
   <template>
     <!-- 好的实践 -->
     <div
       class="component"
       :class="{ 'is-active': isActive }"
       @click="handleClick"
     >
       <slot name="default"></slot>
     </div>
   </template>
   ```

## CSS 规范

1. **命名规范 (BEM)**
   ```css
   /* Block */
   .button { }
   
   /* Element */
   .button__icon { }
   
   /* Modifier */
   .button--primary { }
   ```

2. **样式作用域**
   - 使用 scoped 样式
   - 避免全局样式污染
   ```vue
   <style scoped>
   .component { }
   </style>
   ```

## 工具函数规范

1. **函数命名**
   - 动词开头: getData, formatDate
   - 布尔值函数: isValid, hasPermission

2. **注释规范**
   ```typescript
   /**
    * 函数描述
    * @param {string} str - 参数描述
    * @returns {string} 返回值描述
    * @throws {Error} 错误描述
    */
   ```

## Git 提交规范

1. **提交信息格式**
   ```
   <type>(<scope>): <subject>
   
   <body>
   
   <footer>
   ```

2. **Type 类型**
   - feat: 新功能
   - fix: Bug修复
   - docs: 文档更新
   - style: 代码格式
   - refactor: 重构
   - perf: 性能优化
   - test: 测试
   - chore: 构建/工具
   - revert: 回滚

3. **示例**
   ```
   feat(button): add size prop to Button component
   
   - Add small, medium, and large size options
   - Update documentation
   - Add tests for new feature
   
   Closes #123
   ```