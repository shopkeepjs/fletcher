import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

import { camelToKebabCase, convertKeysToCamelCase } from "./string.ts";

describe("convertKeysToCamelCase", () => {
  it("converts snake case keys to camelCase", () => {
    const example = {
      first_name: "John",
      last_name: "Doe",
      age: 30,
    };

    const expected = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
    };

    const result = convertKeysToCamelCase(example);
    expect(result).toEqual(expected);
  });
  it("convertKeysToCamelCase should handle empty objects", () => {
    const example = {};

    const expected = {};

    const result = convertKeysToCamelCase(example);
    expect(result).toEqual(expected);
  });
});

describe("camelToKebabCase", () => {
  it("converts camel case to kebab case", () => {
    expect(camelToKebabCase("backgroundColor")).toEqual("background-color");
  });
  it("converts camel case with multiple words to kebab case", () => {
    expect(camelToKebabCase("borderTopLeftRadius")).toEqual(
      "border-top-left-radius",
    );
  });
  it("does not convert kebab case", () => {
    expect(camelToKebabCase("bordertopleft")).toEqual("bordertopleft");
  });
});
