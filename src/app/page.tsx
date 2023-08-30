import NavBody from "@/components/NavBody";
import Navbar from "@/components/Navbar";
import NavButton from "@/components/util/NavButton";

export default function Home() {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <NavBody>
        <div className="w-full h-full flex justify-center items-center gap-4">
          <NavButton href="/download">Download</NavButton>
          <NavButton href="/login">Open Web App</NavButton>
        </div>
      </NavBody>
    </div>
  )
}
