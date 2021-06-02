import { useEffect } from 'react';
import ReposItem from '../ReposItem';
import './style.css'

function ReposList(props) {
    useEffect(()=> {
        console.log(props);
    })
  if(props) {
      return( 
          <div>
            <h1>{props.reposCount}</h1>
            <div> 
                {props.repos.map((item)=> {
                return <ReposItem repository={item}/>
                })}
            </div>
            <div> </div>
          </div>
        
      )
    } else {
        return (<h1>netu</h1>)
    }
}

export default ReposList;