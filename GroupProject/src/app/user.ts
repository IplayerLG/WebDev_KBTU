export interface User {
    name: string,
    card: string,
    id: number, 
    cvv: number,
    sales: number[],
}
export const USER: User  = {
    name : 'Altynbek',
    card : '312312312312',
    id : 1,
    cvv: 312,
    sales: [
        1,
        2
    ]
}