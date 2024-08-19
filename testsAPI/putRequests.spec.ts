import { test, expect } from '@playwright/test';
import { getPostLinkById } from '../constsAPI/consts';
import { fetchPutResponse, fetchGetResponse } from '../constsAPI/APIFunctions';


test.describe('PUT Requests', () => {

    test("Редактирование поста через PUT", async () => {
        const requestBody = {
            userId: 10,
            id: 1,
            title: "TestForPut",
            body: "TestForPut"
        };
        const postId = 12;
        const actualLink = getPostLinkById(postId);
        const { status, body } = await fetchPutResponse(actualLink, requestBody);

        expect(body).toBeInstanceOf(Object);
        expect(status).toBe(200);
        expect(body.id).toBe(12); // возвращается всегда PostId
        expect(body.userId).toBe(10);
        expect(body.body).toBe("TestForPut");
        expect(body.title).toBe("TestForPut");
    });


    test("Редактирование поста через PUT c пустым body", async () => {
        const requestBody = {};
        const postId = 1;
        const actualLinkPut = getPostLinkById(postId);
        const { status, body } = await fetchPutResponse(actualLinkPut, requestBody);

        expect(body).toBeInstanceOf(Object);
        expect(status).toBe(200);
        expect(body.id).toBe(1);// возвращается только id
        expect(body).not.toHaveProperty("userId");
        expect(body).not.toHaveProperty("body");
        expect(body).not.toHaveProperty("title");

        const actualLink = getPostLinkById(postId);
        const { status: getStatus, body: getBody } = await fetchGetResponse(actualLink);

        expect(getStatus).toBe(200);
        expect(body.id).toBe(1);
        expect(getBody).toMatchObject({
            userId: expect.anything(),
            title: expect.anything(),
            body: expect.anything()
        });
    })

    test("Редактирование поста через PUT добавлением нового поля", async () => {
        const requestBody = {
            "userId": 10,
            "id": 1,
            "title": "TestForPut",
            "body": "TestForPut",
            "newField": "Test"
        };
        const postId = 3;
        const actualLinkPut = getPostLinkById(postId);
        const { status, body } = await fetchPutResponse(actualLinkPut, requestBody);

        expect(body).toBeInstanceOf(Object);
        expect(status).toBe(200);
        expect(body.id).toBe(3);
        expect(body.userId).toBe(10);
        expect(body.body).toEqual("TestForPut");
        expect(body.title).toEqual("TestForPut");
        expect(body.newField).toEqual('Test');

        const actualLink = getPostLinkById(postId);
        const { status: getStatus, body: getBody } = await fetchGetResponse(actualLink);

        expect(getStatus).toBe(200);
        expect(getBody).not.toHaveProperty("newField");
    });
});








