import { Link } from "react-router-dom"

import Person from "../assets/images/work_01.jpg"

const About = () => {
  return (

    <section className="cont">

        <div className="grid two-col-grid">

            <img src={Person} alt="" className="img" />

            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nam amet unde aliquid accusantium voluptatem ipsum aut, magnam consequuntur blanditiis hic modi vitae illum ex, consectetur, dolorum libero et praesentium?</p>
            </div>
    
        </div>
<div>
      <h1>This is About page</h1>
      <Link to="/">Get the fuck out of here</Link>
    </div>
    </section>

  );

};

export default About