import { Outlet } from "react-router-dom"

export const MovieDetails = () => {
    return (
        <div>
            <h2>Detail</h2>
            <Outlet/>
        </div>
    )
}