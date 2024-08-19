import superagent from 'superagent';

export const fetchGetResponse = async (url: string, query: object = {}) => {
    try {
        const response = await superagent.get(url).query(query);
        return {
            status: response.status,
            body: response.body,
        };
    } catch (error) {
        console.error(`Error fetching from ${url}`, error);
        throw error;
    }
};

export const fetchDeleteResponse = async (url: string, query: object = {}) => {
    try {
        const response = await superagent.delete(url).query(query);
        return {
            status: response.status,
            body: response.body,
        };
    } catch (error) {
        console.error(`Error fetching from ${url}`, error);
        throw error;
    }
};

interface RequestBody {
    userId?: number;
    id?: number;
    title?: string;
    body?: string;
    newField?: string
}

export const fetchPostResponse = async (url: string, requestBody: RequestBody) => {
    try {
        const response = await superagent
            .post(url)
            .send(requestBody);

        return {
            status: response.status,
            body: response.body,
        };
    } catch (error) {
        console.error(`Error fetching from ${url}`, error);
        throw error;
    }
};

export const fetchPatchResponse = async (url: string, requestBody: RequestBody) => {
    try {
        const response = await superagent
            .patch(url)
            .send(requestBody);

        return {
            status: response.status,
            body: response.body,
        };
    } catch (error) {
        console.error(`Error fetching from ${url}`, error);
        throw error;
    }
};


export const fetchPutResponse = async (url: string, requestBody: RequestBody) => {
    try {
        const response = await superagent
            .put(url)
            .send(requestBody);

        return {
            status: response.status,
            body: response.body,
        };
    } catch (error) {
        console.error(`Error fetching from ${url}`, error);
        throw error;
    }
};
