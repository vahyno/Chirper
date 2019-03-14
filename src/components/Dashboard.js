import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';

class Dashboard extends Component {
    render(){
        const { tweetIDs } = this.props; 
        return (
            <div>
                <h3 className='center'>Your Timeline</h3>
            <ul className='dashboard-list'>
                {tweetIDs.map((id) => (
                    <li key={id}>
                        <Tweet id={id} />
                    </li>
                ))}
            </ul>

            </div>
        )
    }
}

function mapStateToProps({tweets}) {
    return {
        tweetIDs: tweets 
            ? Object.keys(tweets).sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
            : [],
    }
}

export default connect(mapStateToProps)(Dashboard);