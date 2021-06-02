import React, { useState, useEffect } from "react";
import ReposList from "../../components/ReposList";
import UserInfo from "../../components/UserInfo";
import "./style.css";

function UserPage(props) {

  const apiUrl = "https://api.github.com/users";
  const [reposCount, setReposCount] = useState(0)
  const [repos, setRepos] = useState(null)
  useEffect(()=> {
    Promise.all(Array.from(Array(Math.ceil(1+184/60)).keys()).map(p =>
      p?fetch(`//api.github.com/users/${props.userData.login}/repos?page=${p?p:1}&per_page=100`).then(r => r.json()):0
    )).then(all => {
      console.log(all);
      const allRepos = [].concat(...all);
      console.log(reposCount);
      if(!reposCount|| reposCount!==allRepos.length) {
        console.log("1");  
        setReposCount(allRepos.length)
        setRepos(allRepos)
      }
    })
  })

  if(reposCount&&repos) {
    return (
      <div className="user_page">
        <UserInfo reposCount={reposCount} userInfo={props.userData}/>
        <ReposList repos={repos}/>
      </div>
     );
  } else {
    return (<h1>No data</h1>)
  }
}

export default UserPage;
 