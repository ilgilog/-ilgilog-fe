export type TLoginResType = {
    id: number;
    email: string;
    nickname: string;
    firstLogin: 0 | 1;
    access_token: string;
    refresh_token: string;
};

export type TStorageUserInfo = {
    userId: number;
    accessToken: string;
    refreshToken: string;
};