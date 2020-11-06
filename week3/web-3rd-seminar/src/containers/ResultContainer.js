import React from 'react'
import ResultComponent from '../components/ResultComponent';
import { useDispatch, useSelector } from "react-redux";

function ResultContainer() {

    const {userInfo, reposInfo, loading} = useSelector(({user, loading})=>({
        userInfo: user.userInfo,
        reposInfo: user.reposInfo,
        loading: loading["user/GET_REPOS"],
    }));

    return (
        <>
            <ResultComponent loading={loading} userInfo={userInfo} reposInfo={reposInfo}>
            </ResultComponent>  
        </>
    )
}

export default ResultContainer
