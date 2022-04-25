import { Fragment } from 'react';
import type { AppProps } from 'next/app'
import NavContainer from 'components/nav/NavContainer';
import '../styles/globals.css';
import HomeScreen from 'components/home-screen/HomeScreen';
import { StoreProvider } from 'providers/StoreProvider';
import SelectLocation from 'components/select-location/SelectLocation';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StoreProvider>
    <>
      <SelectLocation />
      <NavContainer />
      <HomeScreen />
      <Component {...pageProps} />
    </>
  </StoreProvider>


);

export default MyApp;