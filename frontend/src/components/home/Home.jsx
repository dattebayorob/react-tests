import React from 'react';
import Main from '../template/Main';

export default props =>
        <Main icon="home" title="Home" 
        subtitle="React Project">
            <div className="display-4">Welcome!</div>
            <hr/>
            <p className="mb-0">FrontEnd for a crud app: Create, Return, Update and Delete Users of the Api!</p>
        </Main>