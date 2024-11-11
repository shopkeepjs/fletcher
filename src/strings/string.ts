import type { CamelToKebabCase, ObjectWithCamelCaseKeys } from "./types.ts";

/**
 * Converts an object's keys from snake_case to camelCase.
 *
 * @param obj - The object with snake_case keys.
 * @returns A new object with camelCase keys.
 */
export function convertKeysToCamelCase<T>(obj: T): ObjectWithCamelCaseKeys<T> {
  const result = {} as ObjectWithCamelCaseKeys<T>;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const camelCaseKey = key.replace(
        /_([a-z])/g,
        (_, letter) => letter.toUpperCase(),
      ) as keyof ObjectWithCamelCaseKeys<T>;
      result[camelCaseKey] = obj[key] as unknown as ObjectWithCamelCaseKeys<
        T
      >[keyof ObjectWithCamelCaseKeys<T>];
    }
  }

  return result;
}

/**
 * Converts a camelCase string to kebab-case.
 *
 * @param str - The camelCase string to be converted.
 * @returns The converted kebab-case string.
 *
 * @example
 * ```typescript
 * const result = camelToKebabCase('camelCaseString');
 * console.log(result); // Outputs: 'camel-case-string'
 * ```
 */
export function camelToKebabCase<S extends string>(
  str: S,
): CamelToKebabCase<S> {
  return str.replace(
    /[A-Z]/g,
    (letter) => `-${letter.toLowerCase()}`,
  ) as CamelToKebabCase<S>;
}
