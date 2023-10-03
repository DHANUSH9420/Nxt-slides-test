import {v4 as uuidv4} from 'uuid'
import './index.css'
import SliderContext from '../../context/SliderContext'

const NewTab = () => (
  <SliderContext.Consumer>
    {value => {
      const {addNewTabItems, activeIndex, changeActiveTab} = value
      const onClickAddButton = () => {
        const item = {
          id: uuidv4(),
          heading: 'Heading',
          description: 'Description',
        }
        addNewTabItems(item)
        changeActiveTab(activeIndex + 1)
      }
      const onDoubleClick = () => {
        console.log('Hi')
      }

      return (
        <div>
          <button
            type="button"
            onClick={onClickAddButton}
            className="icon-container"
            onDoubleClick={onDoubleClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="icon"
            />
            <p className="PText">New</p>
          </button>
        </div>
      )
    }}
  </SliderContext.Consumer>
)
export default NewTab
