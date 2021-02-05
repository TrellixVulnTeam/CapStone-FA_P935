import styles from '../Styles/styles.css'
import Popup from 'reactjs-popup';

function Register() {
    return (
        <div>
            <h1>This is Register</h1>
            <form>
                <input type="text" name="fname" placeholder="First Name" />
                <input type="text" name="lname" placeholder="Last Name" />
                <input type="text" name="phone" placeholder="Phone Number" />
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="pass" placeholder="Password" />
                <input type="text" name="repass" placeholder="Re-Password" />
                <div>
                    <input
                        type="checkbox"
                        //checked={unchecked}
                        //defaultChecked={false}
                        onChange={" "}
                        value=""
                        name="check"
                        id=""
                    />
                    <Popup trigger={<button> Trigger</button>} position="right center">
                        <div>Popup content here !!</div>
                    </Popup>
                </div>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default Register;