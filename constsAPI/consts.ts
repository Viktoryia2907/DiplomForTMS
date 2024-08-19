
export enum URLS {
    BASE_URL = "https://jsonplaceholder.typicode.com/",
    postLink = `${BASE_URL}posts`,
    todosLink = `${BASE_URL}todos`
}

export function getPostLinkById(postId: number): string {
    return `${URLS.BASE_URL}posts/${postId}`;
}

export function getPostCommentsLinkById(postId: number): string {
    return `${getPostLinkById(postId)}/comments`;
}

