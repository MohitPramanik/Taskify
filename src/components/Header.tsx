import React from 'react'
import Switch from './Switch'

const Header: React.FC = () => {
  
  return (
    <header className="header">
      <div className="logo-area">
        <span className="logo momo-font">Taskify</span>
      </div>
      <div className="switch-area">
        <Switch />
      </div>
    </header>
  )
}

export default Header
