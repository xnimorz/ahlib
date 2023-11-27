// Enum in TS wou  ld consume around 100 extra bytes of space
const JUST = 1 as const;
type TJust = typeof JUST;
const NONE = 0 as const;
type TNone = typeof NONE;
type STATE = TJust | TNone;

class CMaybe<TValue, TState extends STATE = STATE> {
  #type: TState;
  #value: TState extends TJust ? TValue : undefined;
  constructor(type: TState, value: TState extends TJust ? TValue : undefined) {
    this.#type = type;
    this.#value = value;
  }

  public get value(): TState extends TJust ? TValue : undefined {
    return this.#value;
  }

  isNone(): this is None {
    return this.#type === NONE;
  }
}

export type Just<T> = CMaybe<T, TJust>;
export type None<T = never> = CMaybe<T, TNone>;

export type Maybe<T> = Just<T> | None;

export function just<T>(value: T): Just<T> {
  return new CMaybe(JUST, value);
}

export function none<T = never>(): None<T> {
  // @ts-expect-error We ignore here as maybe.value will never be accessible at this point
  return new CMaybe(NONE, undefined);
}

export function isNone<T>(maybe: CMaybe<T>): maybe is None {
  return maybe.isNone();
}

export function isJust<T>(maybe: CMaybe<T>): maybe is Just<T> {
  return !maybe.isNone();
}
