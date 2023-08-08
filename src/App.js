import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import WatchPage from "./components/WatchPage"
import Error from './components/Error';






const appLayout = createBrowserRouter([
 { 
  path:"/",
  element:<Body/>,
  errorElement:<Error/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/watch/:videoId",
      element:<WatchPage/>
    }
  ]
}

])

function App() {
  return (<>
    <Header/>
    <RouterProvider router={appLayout}/>
  </>);
}


export default App;
