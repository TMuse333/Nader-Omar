import React from "react"
import { Home, Brain, Mail, MessageSquare, FileText } from "lucide-react"
import BlogList from "../blogList/blogList"
import SystemOverview from "../systemOverview/systemOverview"
import ObjectionCounters from "../objectionCounters/objectionCounters"
import KnowledgeBrain from "../knowledgeBrain/knowledgeBrain"
import KnowledgeRequests from "../knowledgeRequests/knowledgeRequests"

import Sidebar from "../sidebar/sidebar"

const Dashboard = () => {
  return (
    <div className="w-screen">
        <Sidebar
        components={[
          {name: 'Overview', icon: Home, element: <SystemOverview/>},
          {name: 'Knowledge Brain', icon: Brain, element: <KnowledgeBrain/>},
          {name: 'Knowledge Requests', icon: Mail, element: <KnowledgeRequests/>},
          {name: 'Objection Counters', icon: MessageSquare, element: <ObjectionCounters/>},
          {name: 'Blog Ideas', icon: FileText, element: <BlogList/>},
        ]}
        />
    </div>
  )
}


export default Dashboard