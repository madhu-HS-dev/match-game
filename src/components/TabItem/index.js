import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, isTabActive} = props
  const {tabId, displayText} = tabDetails

  const activeClassName = isTabActive ? 'active' : ''

  const onclickTab = () => {
    onClickTabItem(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`button ${activeClassName}`}
        onClick={onclickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
