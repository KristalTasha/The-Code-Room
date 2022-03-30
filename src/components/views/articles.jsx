import React from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../../article_data';
import '../styles/articles.css';

export default function Articles() {
  let articles = getArticles();
  return (
    <div className='articles-page'>
    <h3 className='art-title'>Latest Articles</h3>
    <div className='article-grid'>
    {articles.map((article) => (
    
      <div className='article-card'>
      <img className="card-img" src={article.image}></img>
      <Link to={`/articles/${article.id}`} className='card-title' key={article.id}>{article.title}</Link>
      <p className='card-text'>{article.text.slice(0, 70)}...</p>
      </div>
    
    ))}
    </div>
    </div>
  )
}