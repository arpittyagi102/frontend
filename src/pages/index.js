import Features from "@/components/Features"
import Navbar from "@/components/Navbar" 
import Usercard from "@/components/Usercard"
import CreatePosts from "@/components/CreatePosts"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="flex mx-24 gap-8">
        <Usercard/>
        <CreatePosts/>
        <Features/>
      </div>
    </main>
  )
}
