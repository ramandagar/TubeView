import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Head from "./components/Head";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Error from "./components/Error";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Head/>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement : <Error />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);


export default App;