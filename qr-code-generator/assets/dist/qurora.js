import { Matrix } from "./qr/matrix.js";
import { generate_data_codewords, get_qr_context } from "./qr/qr.js";
import { bit_string_to_int_array, grid_to_svg } from "./utils/util.js";
export * as QRTypes from "./qr/types.js";
export function generate(data, error_correction_level) {
    const context = get_qr_context(data, error_correction_level);
    const codewords = generate_data_codewords(context);
    // TODO: make it so that generate_data_codewords returns a uint8array instead of a string
    const codewords_bits = bit_string_to_int_array(codewords);
    // TODO: make it so that Matrix accepts the context object and not individual properties
    const matrix = new Matrix(context.version, context.error_correction_level);
    matrix.add_data(codewords_bits);
    return matrix.grid;
}
/**
 * Function which generates a QR code as an SVG image
 * SVG image is returned as a string
 *
 * @param data data to encode as QR code
 * @param error_correction_level error correction level (L, M, Q, H)
 * @returns SVG image as a string
 */
export function sync_svg(data, error_correction_level, options) {
    const grid = generate(data, error_correction_level);
    const svg = grid_to_svg(grid, options);
    return svg;
}
