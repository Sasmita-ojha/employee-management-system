import { useSelector, useDispatch } from "react-redux";
import { setDob, setGender, setConfirmDetails } from "../store/slice/RegistrationSlice";
import { Link } from "react-router-dom";


export default function Gender() {
  const { dob, gender, confirmDetails } = useSelector((state) => state.registration);
  const dispatch = useDispatch();

  return (
    <section>
      <div className="row mt-4">
        <div className="col-md-4 m-auto">
          <div className="card border-2">
            <div className="card-header">
            <h2 className="text-center">Page 3</h2>
          </div>
            <div className="card-body">
              <div>
                <h4>Dob:-</h4>
                <input
                  type="date"
                  className="form-control"
                  value={dob}
                  onChange={(e) => dispatch(setDob(e.target.value))}
                />
              </div>
              <div>
                <h4>Gender:-</h4>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => dispatch(setGender(e.target.value))}
                /> Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => dispatch(setGender(e.target.value))}
                /> Female
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={confirmDetails}
                  onChange={(e) => dispatch(setConfirmDetails(e.target.checked))}
                /> I confirm my details
              </div>
            <div className="card-footer d-flex justify-content-between">
               <Link to="/password" className="btn btn-blue">Prev</Link>
            <Link to="/">
              <button type="button" className="btn btn-success">submit</button>
            </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}