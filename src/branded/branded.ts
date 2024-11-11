/**
 * A unique symbol used to create branded types.
 *
 * This symbol is used to create a unique property on branded types to ensure type safety.
 */
declare const __brand: unique symbol;

/**
 * A type that represents a brand.
 *
 * This type is used to create a unique brand for a type. The brand is represented by a unique symbol.
 *
 * @template B - The brand type.
 */
type Brand<B> = { [__brand]: B };

/**
 * A type that combines a base type with a brand.
 *
 * This type is used to create a branded type by combining a base type `T` with a brand `B`.
 *
 * @template T - The base type.
 * @template B - The brand type.
 *
 * @example
 * ```typescript
 * type UserId = Branded<number, 'UserId'>;
 *
 * function createUserId(id: number): UserId {
 *   return id as UserId;
 * }
 *
 * const userId: UserId = createUserId(123);
 * ```
 */
export type Branded<T, B> = T & Brand<B>;
