

export default function Counter(props) {
    return (
        <>  
        <button className="utilStyles.counter">
            <i className="bi bi-hand-thumbs-up"></i>
            {props.upvote}
        </button>
        
        <button className="utilStyles.counter">
            <i className="bi bi-hand-thumbs-down"></i>
            {props.downvote}
        </button>
        </>
    );
}