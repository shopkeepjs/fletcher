/**
 * Transforms the keys of an object type from snake_case to camelCase.
 * 
 * This utility type takes an object type `T` and transforms all its keys from snake_case to camelCase.
 * 
 * @template T - The object type whose keys will be transformed.
 * 
 * @example
 * type Example = {
 *   first_name: string;
 *   last_name: string;
 *   age: number;
 * };
 * 
 * type CamelCasedExample = CamelCaseKeys<Example>;
 * // CamelCasedExample is equivalent to:
 * // {
 * //   firstName: string;
 * //   lastName: string;
 * //   age: number;
 * // }
 */
export type ObjectWithCamelCaseKeys<T> = {
    [K in keyof T as K extends string ? CamelCaseString<K> : K]: T[K];
};

/**
 * Recursively converts a snake_case string to camelCase.
 * 
 * This utility type takes a string type `S` and recursively converts it from snake_case to camelCase.
 * 
 * @template S - The string type to be transformed.
 * 
 * @example
 * type CamelCasedString = CamelCase<'first_name'>;
 * // CamelCasedString is equivalent to 'firstName'
 */
export type CamelCaseString<S extends string> = S extends `${infer A}_${infer B}`
    ? `${Lowercase<A>}${Capitalize<CamelCaseString<B>>}`
    : Lowercase<S>;

/**
 * Converts a camelCase string type to kebab-case string type.
 *
 * @template S - The camelCase string type to be converted.
 *
 * @example
 * type KebabCaseString = CamelToKebabCase<'camelCaseString'>;
 * // KebabCaseString is 'camel-case-string'
 */
export type CamelToKebabCase<S extends string> = S extends `${infer T}${infer U}`
    ? `${T extends Capitalize<T> ? '-' : ''}${Lowercase<T>}${CamelToKebabCase<U>}`
    : S;
