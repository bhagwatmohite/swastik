import { Outlet } from "react-router-dom"
import Dashboard from "./Dashboard"


const Dashboardlayout = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Dashboard /> {/* Sidebar */}

        <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
          <Outlet /> {/* Render child routes */}
        </div>
      </div>
    </>
  )
}

export default Dashboardlayout