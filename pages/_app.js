// import DashboardLayout from "@/components/DashboardLayout";
import DashboardPage from "./dashboard/index"
import { AuthProvider } from "@/components/AuthProvider";
import LoginPage from "./LoginPage";

const App = ({ Component, pageProps })  =>{
  return (
    <div>
    <AuthProvider>
      <DashboardPage />
      <LoginPage />
      <Component {...pageProps} />
    </AuthProvider>
    
    </div>
  )
}

export default App
