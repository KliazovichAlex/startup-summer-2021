import { useEffect, useState } from 'react';
import ReposItem from '../ReposItem';
import ReactPaginate from 'react-paginate';
import './style.css'
import NoRepos from '../NoRepos';

function ReposList({reposCount,login}) {
    const perPage = 4;
    const [currentPage, setCurrentPage] = useState(1)
    const [currentPageData, setCurrentPageData] = useState(null)

    useEffect(async ()=>{
        const pageData = await fetch(`//api.github.com/users/${login}/repos?page=${currentPage}&per_page=4`)
        .then((r)=>{ return r.json() })
        console.log(pageData);
        if(currentPageData!=pageData ||!currentPageData){
            console.log('OKEY');
            setCurrentPageData(pageData)
        }
    })

       
    console.log(currentPageData);
  if(currentPageData&& currentPageData.length) {
      return( 
        <div className="repos_container">
            <h1 className="repos_title">Repositories({reposCount})</h1>
                {currentPageData&&currentPageData.map((item, i)=> {
                return <ReposItem key={item.name} repository={item}/>
                })}
            <div>
                <div className="pagination_container">
                    <p>{currentPage*4-3}-{currentPage*4} of {reposCount} items</p>
                    <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    pageCount={Math.ceil(reposCount/perPage)}
                    activeClassName={"active"}
                    breakLabel={"..."}
                    onPageChange={(e)=>{setCurrentPage(e.selected +1)}}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    />
                </div>    
            </div>
        </div>
        
      )
    } else {
        return (<NoRepos/>)
    }
}

export default ReposList;