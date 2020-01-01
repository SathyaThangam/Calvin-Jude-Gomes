import React, { Component } from "react";
import Landingpage from "./../Utils/Landingpage/Landingpage";
import Usagepage from "./../Utils/Usagepage/Usagepage";
import Parameterspage from "./../Utils/Parameterspage/Parameterspage";
import Changelogpage from "./../Utils/Changelogpage/Changelogpage";
import Examples from "./../Utils/Examplespage/Examplespage";

class Homepage extends Component {
    render() {
        return (
            <div>
                <Landingpage />
                <Usagepage />
                <Parameterspage />
                <Examples />
                <Changelogpage />
            </div>
        );
    }
}

export default Homepage;
