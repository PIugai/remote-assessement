import Counter from "../../counter/counter";
import {Link} from 'react-router-dom';
import "./second-page.scss"


function SecondPage() {
    return (
        <div className="second-page">
            <header className="second-page__title">
                <Link className="second-page__return-btn" to="/" >&#x2190; Go back</Link>
            </header>
            <div className="second-page__wrapper">
                {Array(20).fill(<Counter />)}
            </div>
        </div>
    );
}

export default SecondPage;
