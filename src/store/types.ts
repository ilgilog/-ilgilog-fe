export interface StateType {
    userStore: UserState;
    dateStore: DateState;
}

// userSlice.ts
export interface UserState {
    token: string;
}

// dateSlice.ts
export interface DateState {
    clickDate: string;
    clickDateText: string;
}