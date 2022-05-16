import React, { forwardRef, memo, useEffect, useImperativeHandle, useState } from 'react'
import styled from 'styled-components'
import { preventScroll, recoverScroll } from 'zzy-javascript-devtools'

let nowScrollY = 0

const Toast = forwardRef((props, ref) => {

  const [show, setShow] = useState(false)
  const [contentObj, setContentObj] = useState({
    title: '',
    lefBtn: '',
    rigBtn: ''
  })
  const [btnMethods, setBtnMethods] = useState([])
  // 控制滚动条
  useEffect(() => {
    if (show) {
      fixedScreen()
    } else {
      fixedScreen(false)
    }
  }, [show])
  const fixedScreen = (isFixed = true) => {
    if (isFixed) {
      nowScrollY = window.scrollY
      preventScroll(window.scrollY)
    } else {
      recoverScroll(nowScrollY)
    }
  }

  const lefBtnHandle = () => {
    btnMethods[1] && btnMethods[1]()
    btnMethods[2] && btnMethods[2]()
    setShow(false)
  }

  const rigBtnHandle = () => {
    btnMethods[0] && btnMethods[0]()
    btnMethods[2] && btnMethods[2]()
    setShow(false)
  }

  const warnToast = ({title, cancel, confirm, onSuccess, onFiled, onFinally}) => {
    setShow(true)
    setContentObj({
      title,
      lefBtn: cancel,
      rigBtn: confirm
    })
    setBtnMethods([onSuccess, onFiled, onFinally])
  }

  useImperativeHandle(ref, () => ({
    warnToast
  }))
  return (
    <>
      {show ? (
        <ToastCom id="Toast_component">
          <div className="contentBox">
            <div className="contentTxt">{contentObj.title}</div>
            <div className="btns">
              <div className="btn lef" onClick={lefBtnHandle}>
                {contentObj.lefBtn}
              </div>
              <div className="btn rig" onClick={rigBtnHandle}>
                {contentObj.rigBtn}
              </div>
            </div>
          </div>
        </ToastCom>
      ) : (
        ''
      )}
    </>
  )
})

const ToastCom = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  .contentBox {
    width: 37.5rem;
    height: 15rem;
    background: #ffffff;
    border-radius: 0.5rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .contentTxt {
      font-size: 1.63rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      margin-bottom: 5rem;
      white-space: nowrap;
    }
    .btns {
      width: 26.06rem;
      height: 3.5rem;
      position: absolute;
      left: 50%;
      bottom: 2.06rem;
      transform: translate(-50%, 0);
      display: flex;
      justify-content: space-between;
      .btn {
        height: 100%;
        width: 11.88rem;
        border-radius: 0.13rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.63rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
      .lef {
        border: 0.06rem solid #bbbbbb;
        background: #fff;
        color: #bbbbbb;
      }
      .rig {
        background: #ff0000;
        border: 0.06rem solid #ff0000;
        color: #fff;
      }
    }
  }
`

export default memo(Toast)
