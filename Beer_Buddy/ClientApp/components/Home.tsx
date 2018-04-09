import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            
            <h1>Beer Buddy</h1>
            <img src="..\..\Views\Image\kittenwithbeer.jpg" frameBorder="0.5" />
            <br /><br /><br />
            <div>
            <form method="GET|POST">
                Username: <input type="text" name="user_id" />
                <br /> <br />
                Password: <input type="password" name= "password"/>
                </form>
            </div>
            <br />
            <button>Login</button>
            <br /><br />
            <p>Not a member? Sign up <a>here</a>!</p>
        </div>;
    }
}
