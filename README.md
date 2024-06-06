# typeOf

A utility function to determine the type of a given argument and return an object containing the type and value.

## Installation

To install the package, run:

```bash
npm install newtypeof
```

## Usage

The typeOf function can be used to determine the type of various values. The function returns an object with the type and the value.

```javascript
import { typeOf } from "newtypeof";

console.log(typeOf(null)); // { type: "null", value: null }
console.log(typeOf(123)); // { type: "number", value: 123 }
console.log(typeOf("123")); // { type: "number", value: 123 }
console.log(typeOf("hello")); // { type: "string", value: "hello" }
console.log(typeOf([1, 2, 3])); // { type: "array", value: [1, 2, 3] }
console.log(typeOf({ key: "value" })); // { type: "object", value: { key: "value" } }
```

## API

typeOf(arg)
Determines the type of a given argument and returns an object containing the type and value.

Parameters

-   arg (\*): The argument whose type is to be determined.

Returns

-   { type: string, value: \*}: An object containing the type and value of the argument.

Example

```javascript
typeOf(null); // { type: "null", value: null }
typeOf(123); // { type: "number", value: 123 }
typeOf("123"); // { type: "number", value: 123 }
typeOf("hello"); // { type: "string", value: "hello" }
typeOf([1, 2, 3]); // { type: "array", value: [1, 2, 3] }
typeOf({ key: "value" }); // { type: "object", value: { key: "value" } }
```

## License

This project is licensed under the MIT License.
