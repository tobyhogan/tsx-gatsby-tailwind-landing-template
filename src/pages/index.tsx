import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'

import tablescreenshot from '../assets/habitazen.png'







const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="pb-20 h-[81.9vh]">
        <img src={tablescreenshot} className="w-96 border-2 mt-8"></img>
        <h1 className="text-2xl text-center mt-8">Headline Goes Here</h1>
        <div className="flex flex-col mx-auto w-fit mt-8">
          <a className='rounded-md py-2 px-3 text-white bg-slate-450 bg-slate-500 hover:bg-slate-400 hover:cursor-pointer'>Action Button</a>
          <a href="https://habit-tracker-indol-ten.vercel.app/" className="mt-4 underline text-blue-400 mx-auto">Alternate Action</a>
        </div>
        <h1 className="text-center text-xl mt-8">Features:</h1>
        <ul className="mx-auto w-fit mt-3">
          <li>- Feature 1</li>
          <li>- Feature 2</li>
          <li>- Feature 3</li>
        </ul>
      </main>
      <Footer />

    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Landing Page</title>
