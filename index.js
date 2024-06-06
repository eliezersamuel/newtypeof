/**
 * Determines if the given argument is an object or array and returns an object containing the type and value.
 *
 * @param {*} arg - The argument to check.
 * @returns {{ type: string, value: * }} An object containing the type ("object" or "array") and value of the argument.
 */
function isObject(arg) {
    let value = arg;
    if (Array.isArray(arg)) return { type: "array", value };
    return { type: "object", value };
}

/**
 * Determines the type of a given argument and returns an object containing the type and value.
 *
 * The possible types are:
 * - "null" for null values
 * - "number" for numeric values or strings that can be converted to numbers
 * - "string" for string values that cannot be converted to numbers or objects
 * - "boolean" for boolean values
 * - "symbol" for symbol values
 * - "undefined" for undefined values
 * - "function" for function values
 * - "object" for objects that are not arrays
 * - "array" for array values
 *
 * @param {*} arg - The argument whose type is to be determined.
 * @returns {{type: string, value: *}} An object containing the type and value of the argument.
 *
 * @example
 * typeOf(null); // { type: "null", value: null }
 * typeOf(123); // { type: "number", value: 123 }
 * typeOf("123"); // { type: "number", value: 123 }
 * typeOf("hello"); // { type: "string", value: "hello" }
 * typeOf([1, 2, 3]); // { type: "array", value: [1, 2, 3] }
 * typeOf({ key: "value" }); // { type: "object", value: { key: "value" } }
 */
export function typeOf(arg) {
    let value = arg;
    const type = typeof arg;

    if (arg === null || arg === "null") return { type: "null", value: null };

    if (type === "object") {
        return isObject(arg);
    }

    if (type === "string") {
        if (!isNaN(arg)) {
            value = +arg;
            return { type: "number", value };
        }

        try {
            if (typeof JSON.parse(arg) === "object") {
                return isObject(JSON.parse(arg));
            }

            return { type: "string", value };
        } catch {
            return { type: "string", value };
        }
    }

    return { type, value };
}
