export type TLoginResType = {
    id: number;
    email: string;
    nickname: string;
    firstLogin: 0 | 1;
    accessToken: string;
    refreshToken: string;
};

export type TStorageUserInfo = {
    userId: number;
    accessToken: string;
    refreshToken: string;
};