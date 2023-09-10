import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom';
import PureCompo from '../PureCompo/PureCompo';
import HOCcompo from '../HOCcompo/HOCcompo';
import HOCData from '../HOCcompo/HOCData';
import NormalCompo from '../PureCompo/NormalCompo';
function RouteCompo() {
    return (
        <div>
            <div>
                <h1>Welcome, Handson 5!</h1>
                <div className='flex'>
                    <NavLink className="link" style={({ isActive }) => ({ backgroundColor: isActive ? "white" : "black" })} to="/HOC"><h2 className='h2hoc'>HOC</h2></NavLink>
                    <NavLink className="link" style={({ isActive }) => ({ backgroundColor: isActive ? "white" : "black" })} to="/Pure"><h2 className='h2pure'>Pure Component</h2></NavLink>
                </div>

            </div>
            <Routes>
                <Route path='/HOC' element={<HOCcompo value={HOCData} />}></Route>
                <Route path="/Pure" element={<PureCompo value={NormalCompo} />}></Route>
            </Routes>
        </div>
    )
}

export default RouteCompo