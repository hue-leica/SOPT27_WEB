import React from 'react'
import styled from 'styled-components';

const CardTemplate = styled.div`
  background-color: #2c3035;
  border-radius: 20px;
  box-shadow: rgba(23, 25, 29, 0.3) 0 2px 20px;
  display: flex;
  padding: 3rem;
  max-width: 800px;
`;
const Avatar = styled.img`
  border: 10px solid #646568;
  border-radius: 50%;
  height: 180px;
  width: 180px;
`;
const UserInfo = styled.div`
  color: #e5e6e7;
  margin-left: 2rem;
`;
const FollowTemplate = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  max-width: 400px;
`;
const Follow = styled.li`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;
const Repo = styled.a`
  background-color: #393c42;
  border-radius: 5px;
  display: inline-block;
  color: #a0a0a2;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
`;
const Loading = styled.div`
    font-size: 3rem;
    font-weight: bolder;
`;
function SearchResult({userInfo, reposInfo, loading}) {
    return (
        <>
            {
                userInfo && 
                    <CardTemplate>
                        <Avatar src={userInfo.avatar_url}/>
                        <UserInfo>
                            <h2>{userInfo.name}</h2>
                            <p>{userInfo.bio}</p>
                            <FollowTemplate>
                                <Follow><strong>Followers</strong> {userInfo.followers}</Follow>
                                <Follow><strong>Following</strong> {userInfo.following}</Follow>
                                <Follow><strong>Repos</strong> {userInfo.public_repos}</Follow>
                            </FollowTemplate>
                            <div>
                            {
                                reposInfo ? 
                                        reposInfo.slice(0,10).map((repo, idx)=>(
                                            <Repo key={idx} href={repo.html_url} target="_blank">{repo.name}</Repo>
                                        ))
                                        : (loading == true? <Loading>LOADING</Loading>:null)
                                    
                            }
                            </div>
                        </UserInfo>
                    </CardTemplate>
            }
        </>
    );
}
export default SearchResult