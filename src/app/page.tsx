import IndustryBlock from "../components/sections/IndustryBlock"
import IndustryCircle from "../components/sections/IndustryCircle"
import Hero from "../components/sections/Hero"
import { generateSEO } from "../lib/seo/generateMetadata"




export const metadata = generateSEO({
  title: "Home",
  description:
    "Explore enterprise IT solutions across steel manufacturing, utilities infrastructure, and commercial food courts with integrated platforms and executive dashboards.",
  path: "/"
})


export default function Home() {

  return (

    <>


      <Hero />

      <IndustryCircle />

      <IndustryBlock
        title="Steel & Manufacturing"
        description="High volume production environments"
        image="/og-image.png"
        items={[
          "SAP integrated MIS",
          "production monitoring platforms",
          "procurement intelligence",
          "IT manpower under SLA governance",
          "executive dashboards"
        ]}
      />

      <IndustryBlock
        reverse
        title="Utilities & Infrastructure"
        description="Operational continuity is mandatory"
        image="/og-image.png"
        items={[
          "IoT device integration",
          "field asset monitoring",
          "infrastructure IT manpower",
          "SLA governance",
          "executive dashboards"
        ]}
      />

      <IndustryBlock
        title="Commercial Food Courts"
        description="Multi vendor food environment"
        image="/og-image.png"
        items={[
          "POS platform",
          "inventory management",
          "franchise management",
          "mobile app ecosystem",
          "executive dashboards"
        ]}
      />



    </>

  )
}