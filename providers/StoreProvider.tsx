import { IStore, IStoreProvider } from "interfaces/StoreInterface";
import { createContext, FC, useState } from "react";
import useApi from "services/useApi";

const StoreContextDefaultValue: IStoreProvider = {
    stores: [],
    activeStore: null,
    isSelectLocationShown: false,
    setSelectLocationShown: () => {},
    setActiveStore: () => {}
};

export const StoreContext = createContext<IStoreProvider>(StoreContextDefaultValue);

export const StoreProvider: FC<{ children: JSX.Element }> = ({ children }): JSX.Element => {
    const [activeStore, setActiveStore] = useState<IStore>();
    const [stores, setStores] = useState<IStore[]>([]);
    const [isSelectLocationShown, setSelectLocationShown] = useState<boolean>(false);
    useApi({
        url: "/api/locations",
        method: "GET",
        autoFetch: true,
        onSuccess: (data: IStore[]) => {
            const storesWithId = data.map((store: IStore, index: number) => {
                return { ...store, id: index + 1 };
            });
            setStores(storesWithId);
            setActiveStore(storesWithId[0]);
        }
    });

    return (
        <StoreContext.Provider value={{ stores, activeStore, isSelectLocationShown, setSelectLocationShown, setActiveStore }}>
            {children}
        </StoreContext.Provider>
    );
};