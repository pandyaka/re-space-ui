export const idrFormatter = (price: number): string => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    });

    return formatter.format(price);
};
