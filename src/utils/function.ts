import { TStorageUserInfo } from "api/typs/login";

export const timestampNow = async () => {
    let date_timestamp = new Date()
    const timestampSeconds = Math.floor(date_timestamp.getTime() / 1000)
    return timestampSeconds;
}

export const getStorageUserInfo = () => {
    const stUserInfo: string | null = localStorage.getItem("igl-user-info");
    const userInfo: TStorageUserInfo = stUserInfo ? JSON.parse(stUserInfo) : null;
    return userInfo;
}