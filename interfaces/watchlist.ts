interface Watchlist {
    id: string;
    space_id: string;
    user_id: string;
    reference_price: number;
    current_price: number;
    changes: string;
}

export default Watchlist;
