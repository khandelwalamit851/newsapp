import React from 'react'

function NewsItem({title, description, imageUrl, newsUrl, author, date, source}) {
  return (
    <div className='my-3'>
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
            <span class="badge rounded-pill bg-danger">{source}</span>
          </div>
        <img src={imageUrl ? imageUrl : 'https://cdn.pixabay.com/photo/2016/09/13/14/45/cube-1667473_1280.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
        <p className="card-text"><small className="text-body-secondary">By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>
        </div>
        </div>
    </div>
  )
}

export default NewsItem