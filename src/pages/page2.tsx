import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'






const Page2: React.FC<PageProps> = () => {
  return (
    <div className="">
      <Header />
      <main className="flex flex-col">
        <h1 className="text-3xl pt-16 mb-[71vh]">Page 2</h1>
      </main>
      <Footer />

    </div>
  )
}

export default Page2

export const Head: HeadFC = () => <title>Page 2</title>
