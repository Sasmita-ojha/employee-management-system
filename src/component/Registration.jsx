import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFname, setLname, setEmail } from "../store/slice/RegistrationSlice";

export default function Registration() {
  const { fname, lname, email } = useSelector((state) => state.registration);
  const dispatch = useDispatch();

  return (
    <section>
      <div className="row mt-4">
        <div className="col-md-4 m-auto">
          <form className="card border-2">
            <div className="card-header">
            <h2 className="text-center">Step 1</h2>
          </div>
            <div className="card-body">
              <div>
              <h4>F name:-</h4>
              <input
                type="text"
                placeholder="Enter First name"
                className="form-control"
                value={fname}
                onChange={(e) => dispatch(setFname(e.target.value))}
              />
            </div>
            <div>
              <h4>L name:-</h4>
              <input
                type="text"
                placeholder="Enter Last name"
                className="form-control"
                value={lname}
                onChange={(e) => dispatch(setLname(e.target.value))}
              />
            </div>
            <div>
              <h4>Email:-</h4>
              <input
                type="text"
                placeholder="Enter Email"
                className="form-control"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </div>
            <div className=" card-footer d-flex justify-content-between">
              {/* <Link to={"/"} className="btn btn-blue">Prev</Link> */}
              <Link to={"/password"} className="btn btn-success">Next</Link>
            </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}