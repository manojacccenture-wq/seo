import Link from "next/link"
import Container from "../ui/Container"

export default function Navbar(){
  return(
    <header className="border-b">
      <Container>
        <div className="flex items-center justify-between py-4">

          <div className="text-xl font-bold">
            Logo
          </div>

          <nav className="flex gap-6 text-sm text-gray-600">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/products">Products</Link>
            <Link href="/industrieWeServer" className="text-teal-500 font-medium">Industries we serve</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/framework">Frameworks</Link>
            <Link href="/technology">Technologies</Link>
            <Link href="/career">Career</Link>
            <Link href="/contact">Contact us</Link>
          </nav>

          <a href="https://www.google.com" className="bg-teal-500 text-white px-4 py-2 rounded-full">
            Log in
          </a>

        </div>
      </Container>
    </header>
  )
}