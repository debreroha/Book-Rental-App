import Head from "next/head";
import { AuthProvider, BookTable } from "@/components/AuthProvider";
import DashboardLayout from "@/components/DashboardLayout";
import LoginPage from "./LoginPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Book-R</title>
      </Head>
      <h1>welcome</h1>
      {/* <DashboardPage /> */}
      
    </>
  );
}
