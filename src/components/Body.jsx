import Person from "../assets/images/about.png"

const Body = () => {

  return (
    <section className="cont">

        <div className="grid two-col-grid">

            <img src={Person} alt="" className="img" />

            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum adipisci explicabo quisquam distinctio, velit vitae exercitationem labore dolorum nihil aspernatur eaque minus doloremque numquam odit perferendis, ratione eveniet nobis!</p>
            </div>
    
        </div>

    </section>
  )
}

export default Body