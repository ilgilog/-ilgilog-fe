export type TObjetResType = {
    id: number;
    name: string;
    position: number;
    price: number;
    purchase?: 0|1;
    status: 0|1;
    url: string;
}

export type TObjetType = {
    objetId: number;
    objetPosition: number;
    objetName: string;
    objetUrl: string;
    amount: number;
    buy?: boolean;
    use: boolean;
}