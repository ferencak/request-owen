import { IStoreProvider } from 'interfaces/StoreInterface';
import type { NextPage } from 'next'
import { StoreContext } from 'providers/StoreProvider';
import { useContext } from 'react';

const Home: NextPage = (): JSX.Element => {
  const { stores, setActiveStore } = useContext<IStoreProvider>(StoreContext);

  return (
    <div>
      
    </div>
  );
};

export default Home;