let articles = [
    {
        id: 1,
        title: "Coding bootcamp in Northern Ghana",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Tincidunt praesent semper feugiat nibh sed. Ut consequat semper viverra nam libero justo laoreet sit. Consequat nisl vel pretium lectus. Vivamus at augue eget arcu dictum. Nam libero justo laoreet sit amet cursus.",
        image: '../../../images/children.jpg',
        author: 'Mike Ofori',
        date: '13 Jan, 2022',
        comments: []
    },
    {
        id: 2,
        title: "What's new in Reactstrap?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Tincidunt praesent semper feugiat nibh sed. Ut consequat semper viverra nam libero justo laoreet sit. Consequat nisl vel pretium lectus. Vivamus at augue eget arcu dictum. Nam libero justo laoreet sit amet cursus.",
        image: '../../../images/design.jpg',
        author: 'Justine Kwansah',
        date: '16 May, 2021',
        comments: []
    },
    {
        id: 3,
        title: "Young Devs Conference - Takoradi",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Tincidunt praesent semper feugiat nibh sed. Ut consequat semper viverra nam libero justo laoreet sit. Consequat nisl vel pretium lectus. Vivamus at augue eget arcu dictum. Nam libero justo laoreet sit amet cursus.",
        image: '../../../images/conference.jpg',
        author: 'Jake Larbi',
        date: '25 Nov, 2019',
        comments: []
    },
    {
        id: 4,
        title: "Gov't calls for increase in IT investment",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Tincidunt praesent semper feugiat nibh sed. Ut consequat semper viverra nam libero justo laoreet sit. Consequat nisl vel pretium lectus. Vivamus at augue eget arcu dictum. Nam libero justo laoreet sit amet cursus.",
        image: '../../../images/pclab.jpg',
        author: 'Tanisha Tyndale',
        date: '16 Feb, 2022',
        comments: []
    },
    {
        id: 5,
        title: "Ama Aidoo launches new application to solve water problems",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Tincidunt praesent semper feugiat nibh sed. Ut consequat semper viverra nam libero justo laoreet sit. Consequat nisl vel pretium lectus. Vivamus at augue eget arcu dictum. Nam libero justo laoreet sit amet cursus.",
        image: '../../../images/tap.jpg',
        author: 'Lady Humphrey',
        date: '3 March, 2022',
        comments: []
    },
    {
        id: 6,
        title: "Microsoft discounts Premium Subscribers by 8%",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Tincidunt praesent semper feugiat nibh sed. Ut consequat semper viverra nam libero justo laoreet sit. Consequat nisl vel pretium lectus. Vivamus at augue eget arcu dictum. Nam libero justo laoreet sit amet cursus.",
        image: '../../../images/microsoft.jpg',
        author: 'Ike Johnson',
        date: '9 Dec, 2021',
        comments: []
    }
]

export function getArticles(){
    return articles;
}

export function getArticle(id){
    return articles.find(
        (article) => article.id === id
    );
}

export function otherArticles(id){
    return articles.filter(
      (others) => others.id !== id   
    );
}

export function commentArticle(id, comms){
    articles.map(article => {
        return article.id === id ? article.comments.push(comms) : article.comments
    })
   
    
     
}