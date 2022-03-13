import { productActions } from './product-slice'

export const fetchProductData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://newequicustom-default-rtdb.europe-west1.firebasedatabase.app//products.json'
            );

            if (!response.ok) {
                throw new Error("Could not fetch data")
            }

            const data = await response.json();
            return data
        };

        try {
            const productData = await fetchData();
            dispatch(
                productActions.replaceData({
                    listing: productData || []
                })
            );
        } catch (error) {
            console.log(error);
        }
    }
}