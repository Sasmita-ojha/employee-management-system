import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import Registration from './component/Registration';
import Password from './component/Password';
import Gender from './component/Gender';
import Navbar from './component/Navbar';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Registration />} />
          <Route path="/password" element={<Password />} />
          <Route path="/gender" element={<Gender />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}