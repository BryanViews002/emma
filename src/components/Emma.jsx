import { Link } from "react-router-dom";

import Person from "../assets/images/avatar_1.jpg"

const Emma = () => {
  return (

    <section className="cont">

        <div className="grid two-col-grid">

            <img src={Person} alt="" className="img" />

            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum adipisci explicabo quisquam distinctio, velit vitae exercitationem labore dolorum nihil aspernatur eaque minus doloremque numquam odit perferendis, ratione eveniet nobis!</p>
            </div>
    
        </div>
<div>
      <h1>This is Emma's page</h1>
      <Link to="/">Get the fuck out of here</Link>
    </div>
    </section>
    
  );
};

export default Emma;
