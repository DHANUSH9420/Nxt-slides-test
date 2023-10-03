import {Component} from 'react'
import './index.css'
import SliderContext from '../../context/SliderContext'

class SlideDisplayView extends Component {
  state = {headingActive: true, descriptionActive: true}

  onClickHeading = () => {
    this.setState({headingActive: false})
  }

  onClickDescription = () => {
    this.setState({descriptionActive: false})
  }

  render() {
    const {headingActive, descriptionActive} = this.state
    return (
      <SliderContext.Consumer>
        {value => {
          const {
            initialList,
            activeIndex,
            changeHeading,
            changeDescriptions,
          } = value
          const onBlurDescription = event => {
            if (event.target.value === '') {
              changeDescriptions('Description')
            }
            this.setState({descriptionActive: true})
          }

          const onBlurHeading = event => {
            if (event.target.value === '') {
              changeHeading('Heading')
            }
            this.setState({headingActive: true})
          }

          const onChangeHeading = event => {
            changeHeading(event.target.value)
          }

          const onChangeDescription = event => {
            changeDescriptions(event.target.value)
          }

          const tabDetails = initialList[activeIndex]
          const {heading, description} = tabDetails

          return (
            <div className="slide-view-container">
              <div className="slide-container">
                {headingActive ? (
                  <h1 onClick={this.onClickHeading} className="slider-heading">
                    {heading}
                  </h1>
                ) : (
                  <input
                    type="text"
                    value={heading}
                    onChange={onChangeHeading}
                    onBlur={onBlurHeading}
                    className="slider-heading-input"
                  />
                )}
                {descriptionActive ? (
                  <p onClick={this.onClickDescription} className="slider-para">
                    {description}
                  </p>
                ) : (
                  <input
                    type="text"
                    value={description}
                    onChange={onChangeDescription}
                    onBlur={onBlurDescription}
                    className="slider-paragraph-input"
                  />
                )}
              </div>
            </div>
          )
        }}
      </SliderContext.Consumer>
    )
  }
}
export default SlideDisplayView
