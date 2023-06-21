import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Intro.css";
import {
  Button,
  Select,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
function Intro() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState("");
  const [core, setCore] = useState("");
  const [exp, setExp] = useState();
  const handleNext = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      vision.trim() === "" ||
      mission.trim() === "" ||
      core.trim() === "" ||
      exp.trim() === ""
    ) {
      return;
    }

    navigate("/Target", {
      state: {
        name,
        vision,
        mission,
        core,
        exp,
      },
    });
  };
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form className="row g-3" onSubmit={handleNext}>
          <div className="col-md-4">
            <InputLabel id="form-label">Name of your Company</InputLabel>
            <TextField
              required
              id="validationServer01"
              className="form-control is-valid"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <InputLabel id="form-label">Vision of your Company</InputLabel>
            <TextField
              required
              id="validationServerUsername"
              className="form-control is-invalid"
              label="Vision"
              value={vision}
              onChange={(e) => setVision(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <InputLabel id="form-label">Mission of your Company</InputLabel>
            <TextField
              required
              id="validationServerUsername"
              className="form-control is-invalid"
              label="Mission"
              value={mission}
              onChange={(e) => setMission(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <InputLabel id="form-label">
              What is your Domain all about?
            </InputLabel>
            <FormControl>
              <InputLabel id="form-label">Core Service</InputLabel>
              <Select
                labelId="form-label"
                id="validationServer04"
                className="form-select is-invalid"
                value={core}
                label="Core Service"
                onChange={(e) => setCore(e.target.value)}
                style={{ minWidth: "225px" }}
              >
                <MenuItem value="Physical products">Physical products</MenuItem>
                <MenuItem value="Software and Technology">
                  Software and Technology
                </MenuItem>
                <MenuItem value="Professional Services">
                  Professional Services
                </MenuItem>
                <MenuItem value="Healthcare and Pharmaceuticals">
                  Healthcare and Pharmaceuticals
                </MenuItem>
                <MenuItem value="Hospitality and Tourism">
                  Hospitality and Tourism
                </MenuItem>
                <MenuItem value="Manufacturing and Construction">
                  Manufacturing and Construction
                </MenuItem>
                <MenuItem value="Education and Training">
                  Education and Training
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-md-3">
            <InputLabel id="form-label">
              Year of Experience in Business Field
            </InputLabel>
            <TextField
              type="number"
              required
              id="validationServer05"
              className="form-control is-invalid"
              label="Experienced for..."
              value={exp}
              onChange={(e) => setExp(e.target.value)}
            />
          </div>
          <Button type="submit" className="button-container" color="secondary">Next</Button>
        </form>
      </div>
    </div>
  );
}

export default Intro;
