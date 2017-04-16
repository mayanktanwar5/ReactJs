/**
 * Created by Mak on 4/2/17.
 */
import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component{

    render()
    {
        return (
            <h1> It working !</h1>to
        );
    }

}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>,app);