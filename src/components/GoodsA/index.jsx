import React, { memo } from 'react'
import styled from 'styled-components'
import PropsType from 'prop-types'

import globalSty from '@/api/global-style.js'

const GoodsA = (props) => {
  const { clickGoods } = props

  const goGoodsDetail = () => {
    clickGoods && clickGoods()
  }
  return (
    <GoodsAView id="GoodsA_components" type={0} onClick={goGoodsDetail}>
      <div className="flexBox">
        <div className="picBox">
          <img
            src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d92f2e4b00b4005b5f4720d3110e647~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?"
            alt=""
            className="pic"
          />
        </div>
        <div className="typeLine"></div>
        <div className="goodsMsg">
          <div className="name">奥希替尼/奥西替尼（泰瑞沙） | Osinib</div>
          <div className="from">印度贝塔制药</div>
        </div>
        <div className="price">$ 106.23 (约525.26元)</div>
      </div>
    </GoodsAView>
  )
}

GoodsA.defaultProps = {}
GoodsA.propTypes = {
  clickGoods: PropsType.func
}

const GoodsAView = styled.div`
  width: 22.13rem;
  height: 25rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  .flexBox {
    width: 21.25rem;
    height: 23.4rem;
    .picBox {
      height: 14.5rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-items: center;
      .pic {
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto;
        display: block;
      }
    }
    .typeLine {
      background-color: ${(props) => globalSty.drugColor(props.type)};
      height: 0.06rem;
      width: 100%;
      margin-top: 0.5rem;
    }
    .goodsMsg {
      width: 19.44rem;
      height: 5.44rem;
      margin: 0.69rem auto 0;
      display: flex;
      flex-direction: column;

      .name {
        font-size: 1.38rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
        margin-bottom: 0.15rem;
        line-height: 1.88rem;
        ${globalSty.noWraps()}
      }
      .from {
        font-size: 1.25rem;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #9f9f9f;
      }
    }
    .price {
      font-size: 1.63rem;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ff0000;
      line-height: 2.31rem;
      margin-left: 1.56rem;
    }
  }
`
export default memo(GoodsA)
