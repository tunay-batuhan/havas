import "../styles/components.scss";
import "bootstrap/dist/css/bootstrap.css";
import "react-calendar/dist/Calendar.css";
import Layout from "../Layout/Layout";
import { store } from "../store/store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
