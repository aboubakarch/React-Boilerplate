import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { useStore } from "../src/store";
import authRouter from "routes/auth";
import Layout from "components/common/Layout";

function App() {
  const { store } = useStore();
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          {authRouter.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
            />
          ))}
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
