import StoreOpening from "components/store-opening/StoreOpening";
import { IStoreProvider } from "interfaces/StoreInterface";
import { StoreContext } from "providers/StoreProvider";
import { FC, useContext } from "react";

const HomeScreen: FC = (): JSX.Element => {
    const { activeStore } = useContext<IStoreProvider>(StoreContext);

    return (
        <div className="block w-full bg-cover flex items-end pl-10 pb-10" style={{ backgroundImage: `url(${activeStore?.storefront_image})`, height: '25rem'}}>
            <StoreOpening /> 
        </div>
    );
};

export default HomeScreen;