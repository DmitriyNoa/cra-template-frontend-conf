import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
interface HomeProps {
    test?: string;
}
const Home = ({history}: RouteComponentProps, props: HomeProps) => {
    return <h1>Hello, Home</h1>;
}


export default withRouter(Home);

