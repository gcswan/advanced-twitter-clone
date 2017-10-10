class TweetFeed extends React.Component {
    
    
   
    render() {
        
        const tweets = this.props.tweets;
        
        const printTweets = tweets.map((item) => {
            return (
                <div>{item}</div>
            );
        });
            
       
        
        
        return (
            
            <div className="border tweet-feed">
                <div className="tweet-area border-black">
                    {printTweets}
                </div>
            </div>
        );
    }
}
