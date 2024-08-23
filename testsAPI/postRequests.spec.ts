import { test, expect } from '@playwright/test';
import { URLS, getPostLinkById } from '../constsAPI/consts';
import { fetchPostResponse, fetchGetResponse } from '../constsAPI/APIClient';

test.describe('POST Requests', () => {

    test("Добавление нового поста по userId", async () => {
        const requestBody = {
            userId: 500,
            id: 200,
            title: "Test",
            body: "TestBody"
        };

        const { status: postStatus, body: postBody } = await fetchPostResponse(URLS.postLink, requestBody);

        expect(postStatus).toBe(201);
        expect(postBody).toBeInstanceOf(Object);
        expect(postBody.userId).toBe(500);
        expect(postBody.id).toBe(101); // id присваивается 101 вне зависимости от реквеста
        expect(postBody.title).toBe("Test");
        expect(postBody.body).toBe("TestBody");

        const postUserIdCreated = postBody.userId
        const actualLink = getPostLinkById(postUserIdCreated);
        const { status: getStatus } = await fetchGetResponse(actualLink);

        expect(getStatus).toBe(404);
    });

    test("Добавление нового поста с пустым requestBody", async () => {
        const requestBody = {};

        const { status, body } = await fetchPostResponse(URLS.postLink, requestBody);

        expect(status).toBe(201);
        expect(body.id).toBe(101); // id присваивается 101 вне зависимости от реквеста
    });


    test("Добавление нового поста с отрицательным значением userId", async () => {
        const requestBody = {
            userId: -20,
            id: 200,
            title: "Test",
            body: "TestBody"
        };

        const { status, body } = await fetchPostResponse(URLS.postLink, requestBody);

        expect(status).toBe(201);
        expect(body).toBeInstanceOf(Object);
        expect(body.userId).toBe(-20);// принимает отрицательное значение
        expect(body.id).toBe(101); // id присваивается 101 вне зависимости от реквеста
        expect(body.title).toBe("Test");
        expect(body.body).toBe("TestBody");
    });
})


