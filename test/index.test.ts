import { expect, test } from "bun:test";
import { Maybe, just, none, isNone, isJust } from "../index";

test("just has defined value", () => {
  const maybeNumber = just(34);
  expect(maybeNumber.value).toBe(34);
});

test("None has no value", () => {
  const maybeNumber = none<number>();

  expect(maybeNumber.value).toBe(undefined);
});

test("isNone checks if maybe is none", () => {
  const justNumber: Maybe<number> = just(42);
  const noneNumber: Maybe<number> = none();

  if (isNone(justNumber)) {
    throw new Error("just number should not be none");
  } else {
    expect(justNumber.value).toBe(42);
  }

  if (isNone(noneNumber)) {
    expect(noneNumber.value).toBe(undefined);
  } else {
    throw new Error("none number should be none");
  }
});

test("isJust checks if maybe is none", () => {
  const justNumber: Maybe<number> = just(42);
  const noneNumber: Maybe<number> = none();

  if (isJust(justNumber)) {
    expect(justNumber.value).toBe(42);
  } else {
    throw new Error("just number should not be none");
  }

  if (isJust(noneNumber)) {
    throw new Error("none number should be none");
  } else {
    expect(noneNumber.value).toBe(undefined);
  }
});
