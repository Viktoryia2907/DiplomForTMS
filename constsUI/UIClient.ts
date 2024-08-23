export function getRandomString(length: any) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Функция генерации случайного email
export function getRandomEmail() {
    const randomString = getRandomString(10);
    return `${randomString}@example.com`;
}
