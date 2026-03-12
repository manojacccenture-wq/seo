import Container from "../ui/Container"
import Image from "next/image"

interface Props{
title:string
description:string
image:string
items:string[]
reverse?:boolean
}

export default function IndustryBlock({
title,
description,
image,
items,
reverse
}:Props){

return(

<section className="py-24">

<Container>

<div className={`grid md:grid-cols-2 gap-16 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>

<div>

<Image
src={image}
alt={title}
width={500}
height={400}
/>

<h3 className="text-teal-500 mt-6 font-semibold">
{title}
</h3>

<p className="text-gray-500 mt-2">
{description}
</p>

</div>

<div>

<p className="text-xs text-gray-400 uppercase">
Improve Productivity
</p>

<h2 className="text-3xl font-bold mt-2">
Less paper work, more <span className="text-teal-500">people work!</span>
</h2>

<ul className="mt-6 space-y-3">

{items.map((item,i)=>(
<li key={i} className="flex gap-4">

<span className="text-teal-500 font-bold">
{String(i+1).padStart(2,"0")}
</span>

<p className="text-gray-600">
{item}
</p>

</li>
))}

</ul>

</div>

</div>

</Container>

</section>

)
}