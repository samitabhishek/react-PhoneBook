import React from 'react'
import Menu from './menu'
import AppRouter from './app.router'

export default function Layout() {
    return(
        <>
            <div className="container my-2">
            <Menu />
            <div className="container bg-light">
                <AppRouter/>

            </div>
            </div>
        </>
    )
    
};
