
import Image from "next/image"
import Container from "../ui/Container"

const avatars=[
"/avatar1.jpg",
"/avatar2.jpg",
"/avatar3.jpg",
"/avatar4.jpg",
"/avatar5.jpg",
"/avatar6.jpg"
]

export default function IndustryCircle(){

return(

<section className="py-16">

<Container>

<div className="flex justify-center gap-10">

{avatars.map((img,i)=>(
<div key={i} className="w-14 h-14 rounded-full overflow-hidden border">

<Image
src={img}
alt="avatar"
width={56}
height={56}
/>

</div>
))}

</div>

</Container>

</section>

)
}