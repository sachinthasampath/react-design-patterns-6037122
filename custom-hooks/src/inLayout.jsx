const inLayout = (Component) => {
  return (props) => (
    <div className="sectio">
      <div className="center-align">
        <div className="highlight">
          <Component {...props} />
        </div>
      </div>
    </div>
  )
}

export default inLayout;