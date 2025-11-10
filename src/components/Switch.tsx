import React from 'react'
import { useTheme } from '../contexts/ThemeContext';

const Switch: React.FC = () => {

    const {isDarkTheme, setIsDarkTheme} = useTheme();

    return (
        <div
            className={`switch-outer ${isDarkTheme ? "on" : ""}`}
            onClick={() => setIsDarkTheme(prev => !prev)}
        >
            <div className="switch-btn"></div>
        </div>
    )
}

export default Switch
