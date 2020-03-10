import React from 'react';


export default function MatchCard(props) {
    return (
        <div>
            {
                props.data.schedule.map(row => {
                    return <div className="cards match-card bg-white">
                        <span className="series-name dib w-100 pa3 pr0 pl0">
                            <span className="f7 lh-copy measure">{row.seriesName}</span>
                            <div className="chevron right dib fr"></div>
                        </span>

                        <div className="match-details">
                            <p className="f7 lh-copy measure">{row.matchNumber} <span className="dot"></span> {row.venue}</p>
                            <div>
                                <div className="inline-country-details">
                                    <img src="https://image.flaticon.com/icons/svg/206/206626.svg" className="br2 h3 w3 dib image-size" alt="Team image"></img>
                                    <span className="f7 lh-copy measure">{row.homeTeamName}</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src="https://image.flaticon.com/icons/svg/206/206758.svg" className="br2 h3 w3 dib image-size" alt="Team Image"></img>
                                    <span className="f7 lh-copy measure">{row.awayTeamName}</span>
                                </div>
                            </div>
                            {
                                row.toss ?
                                    <div className="mt2 mb2">
                                        <div className="dib w-10 bt redline"></div>
                                        <div className="time w-80 dib">
                                            <p className="f7 ma0 toss-time">{row.toss}</p>
                                        </div>
                                        <div className="dib w-10 bt redline"></div>

                                    </div>
                                    : ""
                            }

                        </div>
                    </div>


                })
            }
        </div>


    );
}