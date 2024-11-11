# @shopkeep/fletcher

**Snippets of arrows in your quiver for quick development**

Fletcher is a collection of utility functions and types aimed at making your
development experience faster and more efficient. Inspired by the idea of having
useful tools ready at your disposal, Fletcher helps you convert between
different naming conventions and work with branded types for better type safety
in TypeScript.

## Installation

To install Fletcher, you can add it directly to your project using
[Deno](https://deno.land/):

```sh
import { convertKeysToCamelCase, camelToKebabCase } from "@shopkeep/fletcher";
```

Or add specific utilities based on your needs:

```sh
import { convertKeysToCamelCase } from "@shopkeep/fletcher/string";
import { Branded } from "@shopkeep/fletcher/types";
```

## Features

### Convert Keys to Camel Case

Converts an object's keys from `snake_case` to `camelCase`, making it easier to
work with various data formats that use different naming conventions.

```typescript
import { convertKeysToCamelCase } from "@shopkeep/fletcher";

const snakeCaseObject = {
  first_name: "Alice",
  last_name: "Johnson",
};

const camelCaseObject = convertKeysToCamelCase(snakeCaseObject);
console.log(camelCaseObject); // { firstName: "Alice", lastName: "Johnson" }
```

### Camel to Kebab Case Conversion

Converts a `camelCase` string to `kebab-case`. Perfect for working with URLs,
CSS classes, and other contexts where `kebab-case` is the standard.

```typescript
import { camelToKebabCase } from "@shopkeep/fletcher";

const camelString = "camelCaseString";
const kebabString = camelToKebabCase(camelString);
console.log(kebabString); // Outputs: "camel-case-string"
```

### Branded Types for Type Safety

Use branded types to add additional type safety to primitive types. This feature
is great for scenarios where you want to avoid accidentally mixing up similar
values (like IDs).

```typescript
import { Branded } from "@shopkeep/fletcher";

type UserId = Branded<number, "UserId">;

function createUserId(id: number): UserId {
  return id as UserId;
}

const userId: UserId = createUserId(123);
```

## Philosophy

Fletcher is your quiver full of arrows – quick, reusable utilities that help
streamline your development. The goal is to give developers well-crafted
snippets that save time and improve consistency in their projects.

## Usage

The utilities in Fletcher are designed to be imported individually to keep your
codebase lightweight and modular. You can import only what you need without
bundling unnecessary functions.

```typescript
import { convertKeysToCamelCase } from "@shopkeep/fletcher/string";
```

## Contributing

We welcome contributions! If you have suggestions for new utility functions or
improvements to existing ones, feel free to open an issue or create a pull
request.

## License

Fletcher is licensed under the MIT License. See the [LICENSE](./LICENSE) file
for more information.

## Acknowledgments

Fletcher is inspired by the concept of having simple, reusable pieces of code to
make software development more efficient and enjoyable. Just as an archer picks
the right arrow for the shot, Fletcher provides you with the right snippet for
the task at hand.
