/**
 * 转换字符串首字母为大写
 * @param str 输入字符串
 * @returns 首字母大写的字符串
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}