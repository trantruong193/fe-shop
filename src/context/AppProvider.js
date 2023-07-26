import React, {createContext, useState} from 'react';

export const AppContext = createContext()
const AppProvider = ({children}) => {
    const [productModal,setProductModal] = useState(false)
    const [currentProduct,setCurrentProduct] = useState(null)

    return (
        <AppContext.Provider value={{
            productModal,setProductModal,
            currentProduct,setCurrentProduct
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;