import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setUsername, setPassword, setConfirmPassword, setIsStrong
} from "../store/slice/RegistrationSlice";

export default function Password() {
  const { password, confirmPassword, isStrong } = useSelector((state) => state.registration);
  const dispatch = useDispatch();

  
    function StrongPass(str) {
        let CapAlpha = false;
        let SmallAlpha = false;
        let num = false;
        let SpeChar = false;

        let strarr = [...str];

        for (let i = 0; i < strarr.length; i++) {
            const char = strarr[i];
            if (char >= "A" && char <= "Z")     CapAlpha = true;
            else if (char >= "a" && char <= "z") SmallAlpha = true;
            else if (char >= "0" && char <= "9") num = true;
            else if (char>="!" && char<="/")     SpeChar = true; 
        }

        return CapAlpha && SmallAlpha && num && SpeChar;
    }

  function handlePasswordChange(e) {
    const val = e.target.value;
    dispatch(setPassword(val));
    dispatch(setIsStrong(StrongPass(val)));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Your information is submitted");
  }

  return (
    <section className="row">
      <div className="col-md-4 m-auto">
        <form className="form card mt-4 border-2" onSubmit={handleSubmit}>
          <div className="card-header">
            <h2 className="text-center">Step 2</h2>
          </div>
          <div className="card-body">
            <div> 
              <input
                type="password"
                className="form-control"
                placeholder="enter password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <input
                type="password"
                className="form-control"
                placeholder="confirm password"
                value={confirmPassword}
                onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
              />
            </div>
            <div className="mt-1">
              <input
                type="text"
                className={isStrong ? "form-control bg-success" : "form-control bg-danger"}
                value={isStrong ? "Strong Password" : "Weak Password"}
                readOnly
              />
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <Link to="/home" className="btn btn-blue">Prev</Link>
           {isStrong && <Link to="/gender" disabled={!isStrong}>
              <button className="btn btn-success" >Next</button>
            </Link>}
          </div>
        </form>
      </div>
    </section>
  );
}