import React, { memo } from 'react'
import styled from 'styled-components'
import PropsType from 'prop-types'

import globalSty from '../../api/global-style'

const GoodsB = (props) => {
  const { selectShow, delShow, numHandle } = props
  const { clickSelect, clickDel, setGoodsNum, goGoodsDetail, promptCon } = props
  const selectGoods = (e) => {
    e.stopPropagation()
    clickSelect && clickSelect()
  }
  const delGoods = (e) => {
    e.stopPropagation()
    clickDel && clickDel()
  }
  const setNum = (e, type) => {
    e.stopPropagation()
    setGoodsNum && setGoodsNum(type)
  }
  const goDetail = () => {
    goGoodsDetail && goGoodsDetail()
  }
  return (
    <GoodsBView id="GoodsB_component">
      <div className="contentBox" onClick={() => goDetail()}>
        {selectShow && (
          <div className="selectBox">
            <img
              src={require('@/static/image/isSelect.svg')}
              alt=""
              className="icon"
              onClick={(e) => selectGoods(e)}
            />
          </div>
        )}
        <div className="goodsDetail">
          <div className="picBox">
            <img
              src="https://img-blog.csdnimg.cn/5ad664eeb7654f458c9294649c06cc43.gif#pic_center"
              alt=""
              className="pic"
            />
          </div>
          <div className="drugTypeLine" />
          <div className="drugMsg">
            <div className="topLine">
              <div className="name">仑伐替尼/乐伐替尼 | Lenvatinib</div>
              {delShow && (
                <img
                  src={require('@/static/image/del.svg')}
                  alt=""
                  className="del"
                  onClick={(e) => delGoods(e)}
                />
              )}
            </div>
            <div className="sku">0.5mg*7片</div>
            <div className="price">
              $ 106.23 (约525.26元)
              {promptCon && promptCon()}
            </div>
          </div>
          {numHandle !== 'none' ? (
            <div className="drugNumBox" onClick={(e) => e.stopPropagation()}>
              {numHandle === 'handle' ? (
                <>
                  <span
                    className="decr handle"
                    onClick={(e) => setNum(e, 'decr')}
                  >
                    -
                  </span>
                  <div className="num">0</div>
                  <span
                    className="add handle"
                    onClick={(e) => setNum(e, 'add')}
                  >
                    +
                  </span>
                </>
              ) : (
                <div className="num long">✖️0</div>
              )}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </GoodsBView>
  )
}

GoodsB.defaultProps = {
  selectShow: false,
  clickSelect: null,
  delShow: false,
  clickDel: null,
  numHandle: 'none',
  setGoodsNum: null,
  goGoodsDetail: null,
  promptCon: null
}

GoodsB.propTypes = {
  selectShow: PropsType.bool,
  clickSelect: PropsType.func,
  delShow: PropsType.bool,
  clickDel: PropsType.func,
  numHandle: PropsType.oneOf(['handle', 'num', 'none']),
  setGoodsNum: PropsType.func,
  goGoodsDetail: PropsType.func,
  promptCon: PropsType.func
}

const GoodsBView = styled.div`
  width: 100vw;
  height: 13.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.06rem solid rgba(225, 225, 225, 1);
  .contentBox {
    width: 42.5rem;
    height: 10rem;
    ${globalSty.extendClick()};
    display: flex;
    align-items: center;
    .selectBox {
      width: 1.5rem;
      height: 1.5rem;
      padding-right: 1rem;
      .icon {
        width: 100%;
        height: 100%;
      }
    }
    .goodsDetail {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      .picBox {
        width: 11rem;
        height: 9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .pic {
          max-height: 9rem;
          max-width: 10.5rem;
        }
      }
      .drugTypeLine {
        height: 100%;
        width: 0.06rem;
        background-color: ${(props) => globalSty.drugColor(props.type)};
        margin: 0 1rem;
      }
      .drugMsg {
        flex: 1;
        height: 9rem;
        display: flex;
        flex-direction: column;
        position: relative;
        .topLine {
          max-height: 5rem;
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          .name {
            max-width: 23rem;
            font-size: 1.5rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
            line-height: 2.06rem;
            ${globalSty.noWraps()};
          }
          .del {
            width: 1.88rem;
            height: 1.88rem;
          }
        }
        .sku {
          margin-top: 0.2rem;
          font-size: 1.38rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #bbbbbb;
          max-width: 22rem;
          ${globalSty.noWrap()};
        }
        .price {
          font-size: 1.63rem;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #ff0000;
          white-space: nowrap;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
      .drugNumBox {
        width: 5rem;
        height: 1.6rem;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        display: flex;
        align-items: center;
        justify-content: space-between;
        .num {
          width: 2.7rem;
          height: 1.8rem;
          line-height: 1.8rem;
          background: rgba(187, 187, 187, 0.6);
          border-radius: 0.75rem;
          text-align: center;
        }
        .handle,
        .num {
          font-size: 1.3rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #000000;
        }
        .long {
          background: none;
          width: 100%;
          text-align: right;
        }
      }
    }
  }
`

export default memo(GoodsB)
