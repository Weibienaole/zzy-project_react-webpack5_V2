import React, { memo } from 'react'
import styled from 'styled-components'
import PropsType from 'prop-types'

import globalSty from '@/api/global-style'

const HeaderBar = (props) => {
  const { children } = props
  const { title, rigBtnTxt, arrowShow, background } = props
  const { clickArrow, clickRigBtn } = props

  const arrowHandle = () => {
    clickArrow && clickArrow()
  }
  const rigBtnHandle = () => {
    clickRigBtn && clickRigBtn()
  }
  return (
    <HeaderBarContainer id="HeaderBar_component" background={background}>
      {arrowShow && (
        <img
          src={require('@/static/image/lefArrow.svg')}
          alt=""
          className="arrow"
          onClick={arrowHandle}
        />
      )}
      {title ? <span className="title">{title}</span> : <div>{children}</div>}
      <div className="rigBtn" onClick={rigBtnHandle}>
        {rigBtnTxt}
      </div>
    </HeaderBarContainer>
  )
}

HeaderBar.defaultProps = {
  arrowShow: true,
  background: {}
}

HeaderBar.propTypes = {
  history: PropsType.object,
  children: PropsType.func,
  clickArrow: PropsType.func,
  clickRigBtn: PropsType.func,
  rigBtnTxt: PropsType.string,
  title: PropsType.string,
  arrowShow: PropsType.bool,
  background: PropsType.object, // color,img,other
}

const headerBarHei = 5.5
const getBackground = ({type, content}) => {

  if (type === 'color') {
    return `
      background: ${content};
    `
  }else if(type === 'img'){
    return `
      background-image: url(${content});
      ${globalSty.bgFull()};
    `
  }else{
    return content
  }
}
const HeaderBarContainer = styled.div`
  width: 100%;
  height: ${headerBarHei}rem;
  ${props => getBackground(props.background)}
  display: flex;
  align-items: center;
  z-index: 11;
  position: relative;
  .arrow {
    width: 1.25rem;
    height: 2.19rem;
    margin-left: 2rem;
    ${globalSty.extendClick()};
  }
  .title {
    font-size: 2.25rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    ${globalSty.positionCenter()};
  }
  .rigBtn {
    font-size: 1.63rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    position: absolute;
    right: 2.3rem;
    top: 50%;
    transform: translate(0, -50%);
  }
`

export default memo(HeaderBar)
