export type TLoginResType = {
    id: number;
    email: string;
    nickName: string;
    firstLogin: 0 | 1;
    access_token: string;
    refresh_token: string;
};

export type TStorageUserInfo = {
    userId: number;
    nickName: string;
    accessToken: string;
    refreshToken: string;
};