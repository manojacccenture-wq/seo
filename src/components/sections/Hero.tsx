import Container from "../ui/Container"

export default function Hero(){
  return(
    <section className="py-20 bg-gradient-to-b from-teal-50 to-white">

      <Container>

        <div className="text-center max-w-2xl mx-auto">

          <p className="text-sm tracking-widest text-teal-500 uppercase">
            From concept to scalable code
          </p>

          <h1 className="text-4xl font-bold mt-4">
            Industries We Serve
          </h1>

          <p className="text-gray-500 mt-4">
            Domain depth, not breadth. We deliver in environments
            where operational failure is not an option.
          </p>

          <button className="mt-6 bg-teal-500 text-white px-6 py-3 rounded-full">
            Get started
          </button>

        </div>

      </Container>

    </section>
  )
}