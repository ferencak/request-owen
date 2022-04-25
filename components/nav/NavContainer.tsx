import { IStoreProvider } from "interfaces/StoreInterface";
import { StoreContext } from "providers/StoreProvider";
import { FC, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const NavContainer: FC<{}> = (): JSX.Element => {
    const { activeStore, isSelectLocationShown, setSelectLocationShown } = useContext<IStoreProvider>(StoreContext);


    return (
        <nav className="flex items-center justify-between flex-wrap bg-black p-2 pr-5 pl-5">
            <div className="block" onClick={() => setSelectLocationShown(!isSelectLocationShown)}>
                <button className="flex items-center px-3 py-2 rounded text-white hover:text-white">
                    <svg className="fill-current h-5 w-5" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                        <title>
                            Menu
                        </title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="w-auto flex flex-row-reverse">
                <div className="text-center">
                    <h1 className="text-white font-bold text-xl pb-0 mb-0 block leading-4">
                        REQUEST
                    </h1>
                    <span className="text-white font-thin text-xs pt-0 mt-0 block">
                        { activeStore?.name }
                    </span>
                </div>
            </div>
            <div className="w-auto block flex items-right w-auto justify-end">
                <div className="flex">
                    <a href="#" className="text-white text-2xl">
                        <AiOutlineSearch />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavContainer;