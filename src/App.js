import React, { useState } from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';
import Header from './Header';
import MatchCard from './MatchCard';


const GET_MATCH_SCHEDULE = gql`
  query getSchedule ($type: String!, $status: String!, $page: Int!){
  schedule(type: $type, status: $status, page: $page){
    matchID
    seriesName
    playerOfTheMatch
    startDate
    venue
    matchID
    playerOfTheMatch
    startDate
    matchType
    matchNumber
    statusMessage
    homeTeamName
    awayTeamName
    toss
  }
}`

export default function App() {

    const [type, setType] = useState('All');
    const [status, setStatus] = useState('Completed');
    const [page, setPage] = useState(0);


    const { data, fetchMore } = useQuery(GET_MATCH_SCHEDULE, {
        variables: {
            type: type,
            status: status,
            page: page
        }
    });

    // const incrementPageCount = ()=>{
    //     setPage(page+1);
    //     console.log(page);
    //     getMatchDetails(page,"page");
    // }

    // const decrementPageCount = () => {
    //     setPage(page-1);
    //     getMatchDetails(page, "page");
    // }

    const getMatchDetails = (param, head) => {

        let obj = {};

        let fetchQuery = head;
        switch (fetchQuery) {
            case 'type':
                obj = {
                    type: param,
                    status: status,
                    page: page
                }
                setType(param);
                break;
            case 'status':
                obj = {
                    type: param,
                    status: status,
                    page: page
                }
                setStatus(param);
                break;
            case 'page':
                obj = {
                    type: param,
                    status: status,
                    page: page
                }
                setPage(param);
                break;
            default:
                break;
        }

        fetchMore({
            variables: obj,
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    return prev;
                }
                return {
                    ...fetchMoreResult
                }

            },
        });
    }





    return (
        <div className="mainBlock" >
            <Header getGameDetails={getMatchDetails} />
            <div>
                {data ?
                    <div>
                        <MatchCard data={data} getGameDetails={getMatchDetails} />
                    </div> :
                    <div>No Matches Available</div>
                }
            </div>
            <div className="mw8 center">
                <nav className="cf pa3 pa4-ns" data-name="pagination-next-prev">
                    <a className="fl dib link dim black f6 f5-ns b pa2" href="#" title="Previous">&larr; Previous</a>
                    <a className="fr dib link dim black f6 f5-ns b pa2" href="#" title="Next">Next &rarr;</a>
                </nav>
            </div>
        </div>

    );
}