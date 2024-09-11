import '../css/landing.css';
import main from '../assets/hand.jpg';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();
    return(
        <div className="landing">
                <span className="left">
                    <div className="caption1">
                        <hr />
                        <h4>SOKO GLOBAL FOUNDATION</h4>
                    </div>
                    <div className="titles">
                        <div className="caption2">
                            <p>At <span>Soko Global Foundation</span>  <span></span> </p>
                        </div>
                        <div className="caption3">
                            <p>INC is a non-profit charity organization dedicated to providing assistance and support to those in need around the world. Our mission is to empower and uplift communities through compassion, giving hope to the most vulnerable individuals and fostering sustainable development.</p>
                        </div>
                        <div className="btns">
                            <button onClick={() => window.open("#", "_blank", "noopener noreferrer")} type="button" className="btn btn-outline-info">Know More</button>
                            <button type="button" className="btn btn-success" onClick={()=>navigate("/donate")}>DONATE</button>
                        </div>
                    </div>

                </span>
                <span className="right">
                    <img src={main} alt="Smiling Faces" />
                </span>
            </div>
    );
}