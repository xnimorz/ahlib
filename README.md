# @duorun/Maybe

TypeScript implementation maybe monad.

1. Easy-to-use
2. Small (267 Bytes)!
3. Typed API

## Install:

```shell
npm i @duorun/maybe --save
```

## Playground:

Sandbox: https://codesandbox.io/p/sandbox/nifty-lake-5wpq2y

## Usages

Value is defined:

```js
just("bar"); // Maybe<string>
```

Value is empty:

```js
none(); // Maybe<never>
```

Note: null / undefeind can be valid data:

```js
just(null); // Maybe<null>
```

Check if value is defined:

```js
import { isNone } from "@duorun/maybe";

function test(maybe: Maybe<string>) {
  if (isNone(maybe)) {
    // maybe is None
  } else {
    // maybe is just
    maybe.value; // string
  }
}
```
