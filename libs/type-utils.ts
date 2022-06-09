export * from 'type-fest'

/**
 * no-doc - This is a helper for `Nominal` and is not useful on its own
 */
export declare class Tagged<N extends string> {
  protected _nominal_: N
}

/**
 * Constructs a nominal type of type `T`.
 * Useful to prevent any value of type `T` from being used or modified in places it shouldn't (think `id`s).
 * @param T the type of the `Nominal` type (string, number, etc.)
 * @param N the name of the `Nominal` type (id, username, etc.)
 * @returns a type that is equal only to itself, but can be used like its contained type `T`
 */
export type Nominal<T, N extends string> = T & Tagged<N>
