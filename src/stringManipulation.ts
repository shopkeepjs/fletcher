export type CamelCaseKeys<T> = {
	[K in keyof T as K extends string ? CamelCase<K> : K]: T[K];
};
type CamelCase<S extends string> = S extends `${infer A}_${infer B}`
	? `${Lowercase<A>}${Capitalize<CamelCase<B>>}`
	: Lowercase<S>;
