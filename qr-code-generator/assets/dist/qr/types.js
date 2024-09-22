import { ALPHANUMERIC_COL, BYTE_COL, KANJI_COL, NUMERIC_COL } from "./qr_table.js";
export const NUMERIC = {
    name: "NUMERIC",
    regex: /^\d*$/,
    table_column: NUMERIC_COL,
    encoding_mode: 0b0001
};
export const ALPHANUMERIC = {
    name: "ALPHANUMERIC",
    regex: /^[\dA-Z $%*+\-./:]*$/,
    table_column: ALPHANUMERIC_COL,
    encoding_mode: 0b0010
};
export const BYTE = {
    name: "BYTE",
    // eslint-disable-next-line no-control-regex
    regex: /^[\x00-\xff]*$/,
    table_column: BYTE_COL,
    encoding_mode: 0b0100
};
export const KANJI = {
    name: "KANJI",
    regex: /^[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}]*$/u,
    table_column: KANJI_COL,
    encoding_mode: 0b1000
};
export const ECI = {
    name: "ECI",
    regex: /^.*$/,
    table_column: BYTE_COL, // ECI is encoded as byte data? Needs work
    encoding_mode: 0b0111
};
