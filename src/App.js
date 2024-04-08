import './App.css';
import { useState } from 'react';
import AppContext from './AppContext';
import FlowArea from './components/FlowArea';
import SideBar from './components/SideBar';
import './index.css';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [selectedNode, setSelectedNode] = useState({}); // Selected node
  const [nonTargetNodes, setNonTargetNodes] = useState(new Set()); // Nodes which is not having target
  const [nodesAdded, setNodesAdded] = useState([]); // All nodes added to panel

  return (
    <AppContext.Provider
      value={{
        selectedNode,
        setSelectedNode,
        nonTargetNodes,
        setNonTargetNodes,
        nodesAdded,
        setNodesAdded,
      }}
    >
      <ToastContainer />
      <div className="header">
        <Header />
      </div>
      <div className="row" style={{ height: '100vh' }}>
        <div className="col-9 p-0">
          <FlowArea />
        </div>
        <div className="col-3 p-0">
          <SideBar />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
