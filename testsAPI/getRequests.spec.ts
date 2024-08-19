import { test, expect } from '@playwright/test';
import { URLS, getPostCommentsLinkById } from '../constsAPI/consts';
import { fetchGetResponse } from '../constsAPI/APIFunctions';

test.describe('GET Requests', () => {

    test("Получение всех постов", async () => {
        const { status, body } = await fetchGetResponse(URLS.postLink);

        expect(body).not.toBeNull();
        expect(status).toBe(200);
    });

    test("Получение поста по id", async () => {
        const { status, body } = await fetchGetResponse(URLS.postLink, { id: 20 });
        const post = body[0];

        expect(status).toBe(200);
        expect(body).toBeInstanceOf(Array); // Проверяем, что тело ответа - массив
        expect(body.length).toBe(1); // Объект с данным id - 1 в БД
        expect(post.id).toBe(20);
        expect(post.userId).toBe(2);
        expect(post.title).not.toBeNull();
        expect(post.body).not.toBeNull();
    });

    test("Получение comments для поста", async () => {
        const postId = 12;
        const actualLink = getPostCommentsLinkById(postId);
        const { status, body } = await fetchGetResponse(actualLink);

        expect(body).not.toBeNull();
        expect(status).toBe(200);
        expect(body).toBeInstanceOf(Array);
        body.forEach((item: { postId: number; email: string; body: string; name: string }) => {
            expect(item.postId).toBe(12);
            expect(item.email).not.toBeNull();
            expect(item.body).not.toBeNull();
            expect(item.name).not.toBeNull();
        });
    });

    test("Получение значений по несуществующему id для todos", async () => {
        const { status, body } = await fetchGetResponse(URLS.todosLink, { userId: 10000 });

        expect(body).toBeInstanceOf(Array);
        expect(status).toBe(200);
        expect(body).toEqual([]);
    });
});





