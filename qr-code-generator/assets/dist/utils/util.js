export function split_into_groups(data, group_size) {
    const groups = [];
    for (let i = 0; i < data.length; i += group_size) {
        groups.push(data.slice(i, i + group_size));
    }
    return groups;
}
export function divide_into_groups(data, group_size) {
    const result = [];
    const blockSize = Math.floor(data.length / group_size);
    const remainder = data.length % group_size;
    for (let i = 0; i < group_size; i++) {
        const end = (i + 1) * blockSize + Math.min(i + 1, remainder);
        const start = i * blockSize + Math.min(i, remainder);
        result.push(data.slice(start, end));
    }
    return result;
}
export function int_array_to_bit_string(arr) {
    return Array.from(arr, byte => byte.toString(2).padStart(8, '0'));
}
export function bit_string_to_int_array(str) {
    return Uint8Array.from(str.split('').map(bit => parseInt(bit, 2)));
}
export async function pretty_print_matrix(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            process.stdout.write(grid[i][j].value + ' ');
        }
        process.stdout.write('\n');
    }
}
export function grid_to_svg(matrix, options = { module_size: 10 }) {
    const scale = options.module_size;
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${matrix.length * scale}" height="${matrix.length * scale}">`;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j].value === 1) {
                svg += `<rect x="${j * scale}" y="${i * scale}" width="${scale}" height="${scale}" fill="black"/>`;
            }
            else if (matrix[i][j].value === 0) {
                svg += `<rect x="${j * scale}" y="${i * scale}" width="${scale}" height="${scale}" fill="transparent"/>`;
            }
        }
    }
    svg += `</svg>`;
    return svg;
}