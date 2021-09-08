/**
 * Функция разбивает число по разрядам и возвращает объект с разрядами чисел
 * @param {int} num Диапазон [0, 999] разбить на разряды
 * @returns{object} Разряды числа или пустой объект
 */
function getNumber(num) {
    if (!Number.isInteger(num || num < 0 || num > 999) {
        console.log('Значение - целое число в диапазоне [0 - 999]');
        return {};
    }
    return {
        units: num % 10,
        hundreds: Math.floor(num / 100),
        tens: Math.floor(num / 10) % 10,
    }
}
console.log(getNumber(521));