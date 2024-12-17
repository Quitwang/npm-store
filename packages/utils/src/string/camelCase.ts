/**
 * 转换为驼峰命名
 * @param str 输入字符串
 * @returns 驼峰命名的字符串
 */
export function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}