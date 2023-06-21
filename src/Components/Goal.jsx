import {
  TextField,
  InputLabel,
  Button,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../Styles/Goal.css';
function Goal() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    name,
    vision,
    mission,
    core,
    exp,
    target,
    nclients,
    clients,
    key,
    oview,
    collab,
    finperf,
    statprof,
    profit,
  } = location.state || {};
  const [sgoal, setSgoal] = useState("");
  const [lgoal, setLgoal] = useState("");
  const [newMarket, setNewmarket] = useState("");
  const [expan, setExpan] = useState("");
  const [inno, setInno] = useState("");
  const [ideas, setIdeas] = useState("");
  const [confirm, setConfirm] = useState(false);
  const handleNext = (e) => {
    e.preventDefault();
    if (
      sgoal.trim() === "" ||
      lgoal.trim() === "" ||
      newMarket.trim() === "" ||
      (newMarket === "Yes" && expan.trim() === "") ||
      inno.trim() === "" ||
      (inno === "Yes" && ideas.trim() === "")
    ) {
      return;
    }

    navigate("/Profile", {
      state: {
        ...location.state,
        sgoal,
        lgoal,
        newMarket,
        expan,
        inno,
        ideas,
      },
    });
  };

  return (
    <div className="form-container-goal">
      <div className="form-wrapper-goal">
        <form className="row g-3" onSubmit={handleNext}>
          <div className="col-md-4">
            <InputLabel htmlFor="validationServer01" className="form-label">
              What is your Short-term Goal?
            </InputLabel>
            <TextField
              type="text"
              className="form-control is-valid"
              id="validationServer01"
              label="Short-term Goal"
              value={sgoal}
              onChange={(e) => setSgoal(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <InputLabel htmlFor="validationServer02" className="form-label">
              What is your Long-term Goal?
            </InputLabel>
            <TextField
              type="text"
              className="form-control is-valid"
              id="validationServer02"
              label="Long-term Goal"
              value={lgoal}
              onChange={(e) => setLgoal(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3">
            <InputLabel id="form-label">
              Are there any expansion plans or new markets you're targeting?
            </InputLabel>
            <FormControl>
              <InputLabel id="form-label">Choose</InputLabel>
              <Select
                required
                labelId="form-label"
                id="validationServer03"
                className="form-select is-invalid"
                value={newMarket}
                label="Notable Clients"
                onChange={(e) => setNewmarket(e.target.value)}
                style={{ minWidth: "225px" }}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </div>
          {newMarket === "Yes" && (
            <div className="col-md-4">
              <InputLabel htmlFor="validationServerNew" className="form-label">
                Mention them:
              </InputLabel>
              <TextField
                required
                id="validationServerNew"
                className="form-control is-valid"
                label="New Markets"
                value={expan}
                onChange={(e) => setExpan(e.target.value)}
              />
            </div>
          )}
          <div className="col-md-3">
            <InputLabel id="form-label">
              Are there any upcoming product launches or innovations?
            </InputLabel>
            <FormControl>
              <InputLabel id="form-label">Choose</InputLabel>
              <Select
                required
                labelId="form-label"
                id="validationServer04"
                className="form-select is-invalid"
                value={inno}
                label="Notable Clients"
                onChange={(e) => setInno(e.target.value)}
                style={{ minWidth: "225px" }}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </div>
          {inno === "Yes" && (
            <div className="col-md-4">
              <InputLabel htmlFor="validationServerNew" className="form-label">
                Mention your Ideas:
              </InputLabel>
              <TextField
                required
                id="validationServer03"
                className="form-control is-valid"
                label="Innovations"
                value={ideas}
                onChange={(e) => setIdeas(e.target.value)}
              />
            </div>
          )}
          <Button type="submit" className="button-container" color="secondary">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default Goal;
