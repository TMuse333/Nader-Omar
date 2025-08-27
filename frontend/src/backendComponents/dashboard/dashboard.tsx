import React from "react"
// import AnalyticsWidget from "../analyticsWidget/anaylticsWidget"
import BlogList from "../blogList/blogList"
import DashboardHelp from "../dashboardHelp/dashboardHelp"
import InternalBot from "../qdrantInput/page"
import QdrantViewer from "../qdrantViewer/qdrantViewer"
import Questionnaire from "../questionForm/questionForm"
// import SearchConsoleDashboard from "../searchConsoleTest/searchConsoleTest"

import Sidebar from "../sidebar/sidebar"

const Dashboard = () => {


  

  return (
    <div className="w-screen">
        <Sidebar
        components={[
          {name:'Help and feedback', element:<DashboardHelp/>},
          {name:'Submit idea', element: <InternalBot/>},
          {name: 'Blog ideas', element: <BlogList/>},
          {name: 'View data', element: <QdrantViewer/>},
          // {name:'Google Search', element:<SearchConsoleDashboard/>},
          // {name: 'Google Analytics', element:<AnalyticsWidget/>},
        
          {name:'Feedback',element:<Questionnaire/>},

        ]}
        />
    </div>
  )
}


export default Dashboard