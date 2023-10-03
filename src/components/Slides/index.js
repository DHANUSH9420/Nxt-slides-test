import {Component} from 'react'
import SlideDisplayView from '../SlideDisplayView'
import SlideListItem from '../SlideListItem'
import SlideContext from '../../context/SliderContext'
import './index.css'

class Slides extends Component {
  render() {
    return (
      <SlideContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-containers">
              <ol className="slides-list">
                {initialList.map((eachSlide, index) => (
                  <SlideListItem
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <SlideDisplayView />
            </div>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}
export default Slides
