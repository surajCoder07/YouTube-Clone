import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { offSlidebar } from '../utils/SlidebarSlice'

const WatchPage = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(offSlidebar())
  },[])
  return (
    <div>WatchPage</div>
  )
}

export default WatchPage