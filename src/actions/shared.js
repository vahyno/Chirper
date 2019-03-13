import { getInitialData } from '../utils/api';

import { receiveTweets } from './tweets';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const AuthedUserID = "sarah_edo";

export default function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({tweets, users}) => {
                dispatch(receiveTweets(tweets));
                dispatch(receiveUsers(users));
                dispatch(setAuthedUser(AuthedUserID));
                dispatch(hideLoading());
            });
    }
}

