// import DashboardLayout from "@/components/DashboardLayout";
import Head from "next/head"

const App = ({ Component, pageProps })  =>{
  <Head>
    <title>Book-R</title>
  </Head>
  return (
    <div>
      <Component {...pageProps} />
      {/* <BookForm /> */}
      {/* <BookTable /> */}
    </div>
  )
}

export default App
