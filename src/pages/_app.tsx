import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import NavBar from "@/component/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../app/globals.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NavBar/>
      <Component {...pageProps} />
      <ToastContainer /> 
    </Provider>
  );
}

export default MyApp;