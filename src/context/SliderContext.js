import React from 'react'

const SliderContext = React.createContext({
  initialList: [],
  activeIndex: 0,
  changeActiveTab: () => {},
  addNewTabItems: () => {},
  changeHeading: () => {},
  changeDescriptions: () => {},
})
export default SliderContext
