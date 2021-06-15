import React from 'react'
//componentes
import Header from '../components/header'
import Body from "../components/Body";
import Cambio from "../components/Cambio";

class App extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                <Cambio/>
            </div>
        )
    }
}

export default  App;

/*
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/Home' component={Body}/>
                    </Switch>
                </BrowserRouter>
 */