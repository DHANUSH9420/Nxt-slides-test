import {Component} from 'react'
import './index.css'
import SliderContext from '../../context/SliderContext'

class SlideListItem extends Component {
  render() {
    const {details, serialNumber} = this.props
    const {heading, description} = details
    return (
      <SliderContext.Consumer>
        {value => {
          const {changeActiveTab, activeIndex} = value
          const isActive = activeIndex === serialNumber - 1
          const activeStyling = isActive ? 'active-styling' : ''

          const onClickSlideTab = () => {
            changeActiveTab(serialNumber - 1)
          }

          return (
            <li
              className={`slider-list-item ${activeStyling}`}
              onClick={onClickSlideTab}
              testid={`slideTab${serialNumber}`}
            >
              <p className="slider-number">{serialNumber}</p>
              <div className="slider-bg-container">
                <h1 className="slide-he">{heading}</h1>
                <p className="slide-para">{description}</p>
              </div>
            </li>
          )
        }}
      </SliderContext.Consumer>
    )
  }
}
export default SlideListItem
