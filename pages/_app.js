// import DashboardLayout from "@/components/DashboardLayout";
import Head from "next/head"
import BookForm from "@/components/BookForm"
import { BookTable } from "@/components/BookTable"

const App = ({ Component, pageProps })  =>{
  <Head>
    <title>Book-R</title>
  </Head>
  return (
    <div>
      <Component {...pageProps} />
      <BookForm />
      {/* <BookTable /> */}
    </div>
  )
}

export default App
