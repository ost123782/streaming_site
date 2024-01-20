import { Link } from 'react-router-dom'
import {JSX} from 'react'

export default function NavLink ({linkAddr, children}: {linkAddr : string, children: JSX.Element}) {
    return (
        <Link to={linkAddr}>{children}</Link>
    )
}