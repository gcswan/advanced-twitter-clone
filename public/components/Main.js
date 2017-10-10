class Main extends React.Component { 
  constructor() {
    super();
    this.state = {
      tweets: ["hello this is a tweet", "this is another tweet", "Hi, yet another tweet"] 
    }
  }
  

  render() {
    return (
      <div>
        <div className="border main">
          <Tweet />
          <TweetFeed tweets={this.state.tweets} />
        </div>
      </div>
    );
  }
}
