import react from 'react'
import { useState, useEffect, useMemo } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function ThemeIcon() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
      const handleToggleClick = () => {
        const element = document.documentElement;
        element.classList.toggle("dark");
        
        const isDark = element.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
      }

      useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }

        handleToggleClick();
      }, [isDarkMode]); 

    return (
        <DarkModeSwitch
            style={{ marginBottom: '2rem' }}
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            size={45}
        />
    );
}