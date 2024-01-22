import {Outlet} from 'react-router-dom'
import Header from '../Header/Header.tsx'

export default function Layout () {
    return (
        <>
            <Header/>
            <main>
                <Outlet />
            </main>
        </>
    )
}
