import React from 'react';

const Header = (props) => {
    const { getGameDetails } = props;

    function addClass(e) {
        var i, tabcontent;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].className = tabcontent[i].className.replace(" active", "");
        }
        e.currentTarget.className += " active";
        var element = document.getElementById(e.target.id);
        element.classList.add("active-link");
    }


    function addTypeClass(e) {
        var i, tabcontent;
        tabcontent = document.getElementsByClassName("typecontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].className = tabcontent[i].className.replace(" active", "");
        }
        e.currentTarget.className += " active";
        var element = document.getElementById(e.target.id);
        element.classList.add("active-tab");
    }

    return (
        <div className="scheduleHeaderBlock">
            <h2>Schedule</h2>
            <div className="tc bg-white pt3">
                <button id="upcomingBtn" className="tabcontent  f6 f5-l fw6 bg-white gray hover-bg-white hover-light-red pa3 bt bl bb br-0 " onClick={(e) => { getGameDetails("Upcoming", "status"); addClass(e); }} >UPCOMING</button>
                <button id="runBtn" className="tabcontent  f6 f5-l fw6 bg-white gray hover-bg-white hover-light-red pa3 br bt bb bl" onClick={(e) => { getGameDetails("Running", "status"); addClass(e); }}>RUNNING</button>
                <button id="completedBtn" className="tabcontent  f6 f5-l fw6 bg-white hover-bg-white hover-light-red pa3 br bt bb bl-0 active-link" onClick={(e) => { getGameDetails("Completed", "status"); addClass(e); }}>COMPLETED</button>
            </div>
            <div className="bg-white-90 typeBlock">
                <button id="allBtn" className="typecontent  f6 f5-l bn-ns bg-white-90 black-80 w-30 hover-bg-light-grey dib pa3 tc active-tab" onClick={(e) => { getGameDetails("All", "type"); addTypeClass(e); }}>All</button>
                <button id="intBtn" className="typecontent  f6 f5-l bn-ns bg-white-90 black-80 w-30 hover-bg-light-grey dib pa3 tc" onClick={(e) => { getGameDetails("International", "type"); addTypeClass(e); }}>International</button>
                <button id="domBtn" className="typecontent  f6 f5-l bn-ns bg-white-90 black-80 w-30 hover-bg-light-grey dib pa3 tc" onClick={(e) => { getGameDetails("Domestic", "type"); addTypeClass(e); }} >Domestic</button>
            </div>
        </div>
    );
}

export default Header;