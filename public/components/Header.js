function Header() {
  return (
    <div>
      <div className="header row">
        <div className="header col-lg-4 no-right-gutter">
          <Icons />
        </div>
        <div className="header col-lg-4 no-gutter">
          <Bird />
        </div>
        <div className="header col-lg-4 no-left-gutter">
          <Search />
        </div>
      </div>
    </div>
  )
}
