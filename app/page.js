"use-client"
import Image from 'next/image'
import { Footer, Banner, Partners, Arrival } from "@/components"
import Header from "@/components/header"


export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Partners />
      <Arrival />
      <Footer />
    </main>
  )
}
