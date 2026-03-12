import Container from "../ui/Container"

export default function Footer(){
return(

<footer className="bg-gray-100 py-16">

<Container>

<div className="grid md:grid-cols-4 gap-10 text-sm">

<div>
<h4 className="font-semibold mb-4">Product</h4>
<ul className="space-y-2 text-gray-600">
<li>Features</li>
<li>Pricing</li>
<li>Case studies</li>
<li>Reviews</li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-gray-600">
<li>About</li>
<li>Contact</li>
<li>Careers</li>
<li>Blog</li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4">Support</h4>
<ul className="space-y-2 text-gray-600">
<li>Help center</li>
<li>Server status</li>
<li>Chat support</li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4">Contact Us</h4>

<input
placeholder="Enter your email"
className="border p-2 rounded w-full"
/>

<button className="mt-3 bg-teal-500 text-white px-4 py-2 rounded">
Submit
</button>

</div>

</div>

</Container>

</footer>

)
}