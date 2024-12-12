import { Link } from "react-router-dom";

import Person from "../assets/images/work_05.jpg"

const Gallery = () => {
  return (
    
    <section className="cont">

        <div className="grid two-col-grid">

            <img src={Person} alt="" className="img" />

            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur quos fugit nulla veritatis asperiores. Dolorum illum dolores tempora magni, porro vero omnis saepe aliquam id minima quidem voluptatibus amet.</p>
            </div>
    
        </div>
<div>
      <h1>This is the Gallery page</h1>
      <Link to="/">Get the fuck out of here</Link>
    </div>
    </section>

  );

};

export default Gallery;
