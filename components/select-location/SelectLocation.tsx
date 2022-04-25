import { FC, useContext } from "react";
import { IStore, IStoreProvider } from "interfaces/StoreInterface";
import { StoreContext } from "providers/StoreProvider";
import { MdOutlineClose } from "react-icons/md";
import { ILocationItemProps } from "interfaces/Locations";
import StoreOpening from "components/store-opening/StoreOpening";

const SelectLocation: FC = (): JSX.Element => {
    const { stores, activeStore, isSelectLocationShown, setSelectLocationShown, setActiveStore } = useContext<IStoreProvider>(StoreContext);
    
    return (
        <>
            { isSelectLocationShown && (
                <div className="absolute h-full w-full bg-black bg-opacity-90">
                    <div className="block w-80 md:w-80 sm:w-full h-full bg-white" style={{ overflow: 'overlay' }}>
                        <div className="block flex w-80 sm:w-full h-16 items-center pl-3" style={{ backgroundColor: '#e6e6e6'}}>
                            <MdOutlineClose className="cursor-pointer text-3xl" onClick={() => setSelectLocationShown(!isSelectLocationShown)}/>
                            <h1 className="uppercase w-full text-center pr-10 font-bold">Select Location</h1>
                        </div>
                        <div className="block w-80 sm:w-full h-full bg-black-500 p-5">
                            <h1 className="uppercase text-black font-bold">Your Store</h1>
                            <LocationItem 
                                storeData={activeStore} 
                                setActiveStore={setActiveStore} 
                                setSelectLocationShown={setSelectLocationShown} 
                                isSelectLocationShown={isSelectLocationShown}
                            />
                            <h1 className="uppercase text-black font-bold mt-8">All Stores</h1>
                            { stores.map((store: IStore) => (
                                <LocationItem 
                                    key={store.id} 
                                    storeData={store}
                                    setActiveStore={setActiveStore} 
                                    setSelectLocationShown={setSelectLocationShown} 
                                    isSelectLocationShown={isSelectLocationShown}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const LocationItem: FC<ILocationItemProps> = ({ storeData, setActiveStore, isSelectLocationShown, setSelectLocationShown }): JSX.Element => (
    <div 
        className="block w-full bg-cover flex items-end pl-10 pb-10 mt-2 cursor-pointer" 
        style={{ backgroundImage: `url(${storeData?.storefront_image})`, height: '15rem'}}
        onClick={() => {
            setActiveStore(storeData);
            setSelectLocationShown(!isSelectLocationShown);
        }}
    >
        <StoreOpening store={storeData} />
    </div>
);


export default SelectLocation;