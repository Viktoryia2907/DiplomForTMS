import { test, expect } from '@playwright/test';
import { getPostLinkById } from '../constsAPI/consts';
import { fetchDeleteResponse, fetchGetResponse } from '../constsAPI/APIClient';


test.describe('Delete Requests', () => {

    test("Удаление поста", async () => {
        const postId = 20;
        const postLink = getPostLinkById(postId);

        const { status: deleteStatus, body: deleteBody } = await fetchDeleteResponse(postLink);

        expect(deleteBody).toBeInstanceOf(Object);
        expect(deleteStatus).toBe(200);
        expect(deleteBody).toEqual({});

        const actualLink = getPostLinkById(postId);
        const { status: getStatus } = await fetchGetResponse(actualLink);

        expect(getStatus).toBe(200);
    });
})



