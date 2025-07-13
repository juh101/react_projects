import './App.css'
import config from './conf/conf';

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  console.log(config.appwiteURL);
  console.log(config.appwriteProjectId);
  
  
  
  return (
    <>
    <h1>A Blog app in appwrite</h1>
    </>
  )
}

export default App
