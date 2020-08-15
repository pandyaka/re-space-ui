interface Rent {
    id: string;
    user_id: string;
    space: any;
    price: number;
    interval: number;
    next_payment: Date;
}

export default Rent;
