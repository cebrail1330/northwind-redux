import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import {Container} from "reactstrap"
import {Route, Switch} from "react-router-dom"
import CartDetail from "../cart/CartDetail";
function App() {
    return (
        <Container>
            <Navi/>
            <Switch>
                <Route path="/" exact component={Dashboard}></Route>
                <Route path="/product" exact component={Dashboard}></Route>
                <Route path="/cart" exact component={CartDetail}></Route>
            </Switch>
        </Container>
    );
}
export default App;
