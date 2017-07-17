function Container() {
  return (
    <div className="row ">
      <div className="col-lg-3 no-right-gutter">
        <Profile />
        <Trends />
      </div>
      <div className="col-lg-6 no-gutter">
        <Main />
      </div>
      <div className="col-lg-3 no-left-gutter">
        <Follow />
        <Video />
      </div>
    </div>
  )
}
