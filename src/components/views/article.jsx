import { useParams, Link } from "react-router-dom";
import { getArticle, otherArticles } from "../../article_data";
import '../styles/article.css'

export default function Article(){
    let params = useParams();
    let others = otherArticles(parseInt(params.articleId, 10));
    let article = getArticle(parseInt(params.articleId, 10));
    return(
        <div className="article-page">
       
        <div className="art-cont">
         <div className="the-article">
         <h2 className="article-title">{article.title}</h2>
        <p className="article-text">{article.text}</p> 
        </div> 
        <img className="art-img" src={article.image}></img>
        </div> 
       
        <Link to="/articles" className="browse">Browse All Articles</Link>
      
        <div className="others-grid">
            {others.map(list => 
                <div className="article-card">
                 <img className="card-img" src={list.image}></img>
                <Link to={`/articles/${list.id}`} className='card-title' key={list.id}>{list.title}</Link>
                <p className='card-text'>{list.text.slice(0, 70)}...</p>
                </div>
                )}
        </div>
           
        </div>

    )
}