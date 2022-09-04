import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { hide, show } from '../redux/actionCreator/tabbarAcionCreator.js'
import { connect } from 'react-redux'
// import store from '../redux/store.js'
function Info (props) {
  console.log(props)
  let { show, hide, changeCityItem } = props
  useEffect(() => {
    // store.dispatch(hide())

    hide()
    return () => {
      // store.dispatch(show())
      show()
    }
  }, [show, hide])
  const [list] = useState([
    '山东',
    '河南',
    '北京'
  ])
  const changCity = (item) => {
    // store.dispatch({
    //   type: 'city',
    //   value: list[index]
    // })
    changeCityItem(item)
    // props.change(item)
    // console.log(props.history)
    props.history.push('/index')
  }
  return (
    <div>info --{props.location.query.id}

      <ul>
        {list.map((item, index) => <li onClick={() => {
          changCity(item)
        }} key={index}>{item}</li>)}
      </ul>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    a: 1
  }
}
// const mapDispathToProps = (dispatch) => {
//   return {
//     changeCityItem: (item) => dispatch({
//       type: 'city',
//       value: item
//     })
//   }
// }

const mapDispathToProps = {
  changeCityItem (item) {
    return {
      type: 'city',
      value: item
    }
  },
  show,
  hide
}



export default connect(mapStateToProps, mapDispathToProps)(Info)
