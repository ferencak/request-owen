import { FC, useContext } from "react";
import { IStore, IStoreProvider } from "interfaces/StoreInterface";
import { IStoreTimes } from "interfaces/StoreTimes";
import { StoreContext } from "providers/StoreProvider";

interface IStoreOpeningProps {
    store?: IStore;
}
const StoreOpening: FC<IStoreOpeningProps> = ({ store }): JSX.Element => {
    const { activeStore } = useContext<IStoreProvider>(StoreContext);
    if(!store) store = activeStore;

    const openingTime: IStoreTimes = store?.hours?.find((hour: any) => {
        return hour.dayOfWeek.find((day: any) => day === new Date().toLocaleString("en-us", { weekday: "long" }));
    });

    return (
        <div className="block lg:w-80 md:w-80 sm:w-40 h-50 bg-black p-10 sm:p-3 bg-opacity-90">
            <h1 className="text-white text-6xl md:text-3xl md:text-3xl sm:text-lg font-bold">{ store?.name }</h1>
            <p className="text-white lg:text-2xl md:text-xl sm:text-sm">
                { `${openingTime?.opens?.substring(0, 2)}:${openingTime?.opens?.substring(2)}` }AM - { `${openingTime?.closes?.substring(0, 2)}:${openingTime?.closes?.substring(2)}`}PM
            </p>
        </div>
    );
}

export default StoreOpening;