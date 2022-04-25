export interface IStore {
    id: number;
    name: string;
    location_id: string;
    google_map_url: string;
    storefront_image: string;
    hours: [];
};

export interface IStoreProvider {
    stores: IStore[];
    activeStore: IStore;
    isSelectLocationShown?: boolean;
    setSelectLocationShown(show: boolean): void;
    setActiveStore: (store: IStore) => void;
};