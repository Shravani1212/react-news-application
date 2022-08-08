import React,{ Fragment,useEffect,useState } from "react"
import Dashboad from "./dashboad/Dashboad"
import Header from "./header/Header"

const NewsManager=props=>{
    const [news,setNews]=useState([]);
    const [newsType,setNewsType]=useState({id:1,result:''});
    let heading='';
    if(newsType.id===1){
        heading='Top-Headlines';
    }
    else if(newsType.id===2){
        heading='SearchResult: ';
    }
    // useEffect(()=>{
    //     console.log('inside topline useEffect');
    //     fetch('https://newsapi.org/v2/top-headlines?country=in&apikey=8a760bc53a8f4fbd888b82b5333142ff&page=1')
    //     .then((response) => response.json())
    //     .then((data) => setNews(()=>{ return {name:'Top-Headlines',news:data.articles}}))
    //     .then(()=>console.log(newsObj))
    //     .catch((err) => console.log(err))
       
    // },[]);
    useEffect(()=>{
         console.log('inside search useEffect');
         let url='';
         if(newsType.id===1){
             url=`https://newsapi.org/v2/top-headlines?country=in&apikey=8a760bc53a8f4fbd888b82b5333142ff&page=1`;
         }
         else if(newsType.id==2){
             url=`https://newsapi.org/v2/everything?q=${newsType.result}&apiKey=8a760bc53a8f4fbd888b82b5333142ff&language=en&page=1`;
         }
         else if(newsType.id==3){
             url=  `
             https://newsapi.org/v2/top-headlines?country=in&category=technology&apikey=8a760bc53a8f4fbd888b82b5333142ff`;
         }
         fetch(url)
         .then((response) => response.json())
         .then((data) => setNews(data.articles))
         .then(()=>console.log(news))
         .catch((err) => console.log(err))  
    },[newsType.id]);
    const searchUpdate=(res)=>{
        setNewsType({id:2,result:res});
    }
    const TopHeadlineupdate=()=>{
        setNewsType({id:1,result:''});
    }
    return <Fragment>
    <Header  searchUpdateHandler={searchUpdate}  topHeadLineHandler={TopHeadlineupdate} />
   <div className="container my-3">
     <h2>{`${heading}${newsType.id!=1?newsType.result:``}`}</h2>
        <Dashboad news={news} />
   </div>
    </Fragment>
}
export default NewsManager;