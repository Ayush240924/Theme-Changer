import React from 'react'
import { toggleTheme } from '../../features/theme/ThemeSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const ThemeChanger = () => {
    const dispatch=useDispatch()
   const theme= useSelector(state=>state.theme.theme)
  return (
    <div className={theme==='light'? 'bg-white text-black': "bg-black text-white h-screen" }>

<button onClick={()=>dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  )
}

export default ThemeChanger