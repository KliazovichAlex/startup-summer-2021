import React, { useState, useEffect } from "react";
import ReposList from "../../components/ReposList";
import UserNotFound from '../UserNotFount'
import UserInfo from "../../components/UserInfo";
import "./style.css";

function UserPage({userData}) {

  const apiUrl = "https://api.github.com/users";
  const [reposCount, setReposCount] = useState(0)
  useEffect(()=> {
    Promise.all(Array.from(Array(Math.ceil(5)).keys()).map(p =>
      fetch(`${apiUrl}/${userData.login}/repos?page=${p+1}&per_page=100`).then(r => r.json())
    )).then(all => {
      const allRepos = [].concat(...all);
      if(!reposCount|| reposCount!=allRepos) {
        setReposCount(allRepos.length)
      }
    })
  })
  if(reposCount) {
    return (
      <div className="user_page">
        <UserInfo  userInfo={userData}/>
        <ReposList reposCount={reposCount} login={userData.login}/>
      </div>
      );
  } else {
   return (<div>
      <UserNotFound/>
    </div>)
  }
  
}

export default UserPage;
 