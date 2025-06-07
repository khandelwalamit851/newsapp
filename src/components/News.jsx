import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

function News(props) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitaliseFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    
    const updateNews = async() => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json()
        props.setProgress(70)
        setLoading(false)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        props.setProgress(100)
    }
    
    useEffect(() => {
        document.title = `${capitaliseFirstLetter(props.category)} - NewsMonkey`;
        updateNews()
    }, [])

    const fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }

  return (
        <>
            <h1 className='text-center' style={{margin: '35px 0px', marginTop: '90px'}}>NewsMonkey - Top Headlines on {capitaliseFirstLetter(props.category)}</h1>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== articles.totalResults}
                loader={<Spinner/>}
            >
            <div className="container">
            <div className="row">
            {!loading && articles.map((article, index) => {
                return <div className="col-md-4" key={article.url + index}>
                <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} newsUrl={article.url} author={article.author} date={article.publishedAt} source={article.source.name}/>
            </div>
                })}
            </div>
            </div>
            </InfiniteScroll>
        </>
  )
}

export default News