import { test, expect } from '@playwright/test';
import { getPostLinkById } from '../constsAPI/consts';
import { fetchPatchResponse, fetchGetResponse } from '../constsAPI/APIFunctions';


test.describe('PATCH Requests', () => {


    test("Редактирование поста через PATCH", async () => {
        const requestBody = {
            body: "TestBodyForPatch"
        };
        const postId = 12;
        const actualLink = getPostLinkById(postId);
        const { status, body } = await fetchPatchResponse(actualLink, requestBody);

        expect(body).toBeInstanceOf(Object);
        expect(status).toBe(200);
        expect(body.id).toBe(12);
        expect(body.body).toBe("TestBodyForPatch");
    });


    test("Редактирование поста через PATCH c пустым body", async () => {
        const requestBody = {};
        const postId = 1;
        const actualLink = getPostLinkById(postId);
        const { status, body } = await fetchPatchResponse(actualLink, requestBody);

        expect(body).toBeInstanceOf(Object);
        expect(status).toBe(200);
        expect(body.id).toBe(1);
        expect(body.userId).toBe(1);
        expect(body.body).not.toBeNull();
        expect(body.title).not.toBeNull();// ничего не изменилось после запроса
    });

    test("Редактирование поста через PATCH добавлением нового поля", async () => {
        const requestBody = {
            "newField": 'Test'
        };
        const postId = 3;
        const actualLinkPatch = getPostLinkById(postId);
        const { status, body } = await fetchPatchResponse(actualLinkPatch, requestBody);

        expect(body).toBeInstanceOf(Object);
        expect(status).toBe(200);
        expect(body.id).toBe(3);
        expect(body.userId).toBe(1);
        expect(body.body).not.toBeNull();
        expect(body.title).not.toBeNull();
        expect(body.newField).toEqual('Test');

        const actualLink = getPostLinkById(postId);
        const { status: getStatus, body: getBody } = await fetchGetResponse(actualLink);

        expect(getStatus).toBe(200);
        expect(getBody).not.toHaveProperty("newField");
    });
})


