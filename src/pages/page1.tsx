import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'






const Page1: React.FC<PageProps> = () => {
  return (
    <div className="">
      <Header />
      <main className="">
        <h1 className="text-3xl pt-8">Page 1</h1>
      </main>
      <Footer/>

    </div>
  )
}

export default Page1

export const Head: HeadFC = () => <title>Page 1</title>
