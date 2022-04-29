import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { getArticle, otherArticles, commentArticle } from "../../article_data";
import Block from '../app_components';
import '../styles/article.css'

export default function Article() {
    let params = useParams();
    let others = otherArticles(parseInt(params.articleId, 10));
    let article = getArticle(parseInt(params.articleId, 10));
   

    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [reviews, setReviews] = useState([])

    // function addReviews() {
    //     const newReview = {
    //         id: reviews.length + 1,
    //         userName: name,
    //         userComment: comment
    //     }
    //     setReviews([...reviews, newReview]);
    //     setName('');
    //     setComment('');       
    // }

    const formSubmit = (event) => {
        event.preventDefault();

        const newReview = {
            id: reviews.length + 1,
            userName: name,
            userComment: comment
        }
        setReviews([...reviews, newReview]);
        setName('');
        setComment(''); 

    }

    let artComms = commentArticle(parseInt(params.articleId, 10), reviews);
    console.log(artComms)
    

    return (
        <div className="article-page">

            <div className="art-cont">
                <div className="main-art">
                    <div className="the-article">
                        <h2 className="article-title">{article.title}</h2>
                        <p className="article-text">{article.text}</p>
                        <div className="art-author">
                            <p className="author">{article.author}</p>
                            <p className="date">{article.date}</p>
                        </div>
                    </div>
                    <img className="art-img" src={article.image}></img>

                </div>

                <div className="comment-section">
                    <Block.Comments reviews={reviews} artComms={artComms} />

                    <div className='add-comment-cont'>
                        <form className='comment-form'>
                            <p className='addtext'>Add a comment</p>
                            <input className='user-name' type='text' placeholder='Full name' value={name} onChange={(e) => setName(e.target.value)} />
                            <textarea className='user-comment' type='text' placeholder='Comment' value={comment} onChange={(e) => setComment(e.target.value)} />
                            <button className='submit' type='button' value='submit' onClick={formSubmit} disabled={!name || !comment} >Submit</button>
                        </form>
                    </div>

                </div>





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