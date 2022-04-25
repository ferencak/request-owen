import { IStore } from "./StoreInterface";

export interface ILocationItemProps {
    storeData: IStore;
    setActiveStore?: Function;
    setSelectLocationShown?: Function;
    isSelectLocationShown?: boolean;
}