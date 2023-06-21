import React, { useState } from "react";
import '../Styles/Target.css';
import { useNavigate, useLocation } from "react-router-dom";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
const Target = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, vision, mission, core, exp } = location.state || {};
  const [target, setTarget] = useState("");
  const [nclients, setNclients] = useState("");
  const [clients, setClients] = useState("");
  const [key, setKey] = useState("");
  const [oview, setOview] = useState("");
  const [collab, setCollab] = useState("");
  const [finperf, setFinperf] = useState("");
  const [statprof, setStatprof] = useState("");
  const [profit, setProfit] = useState();
  const handleNext = (e) => {
    e.preventDefault();
    if (
      target.trim() === "" ||
      nclients.trim() === "" ||
      (nclients === "Yes" && clients.trim() === "") ||
      key.trim() === "" ||
      oview.trim() === "" ||
      collab.trim() === "" ||
      finperf.trim() === "" ||
      statprof.trim() === "" ||
      (statprof === "Yes" && profit.trim() === "")
    ) {
      return;
    }
    navigate("/Goal", {
      state: {
        ...location.state,
        target,
        nclients,
        clients,
        key,
        oview,
        collab,
        finperf,
        statprof,
        profit,
      },
    });
  };

  return (
    <div className="form-container-target">
      <div className="form-wrapper-target">
        <form className="row g-3" onSubmit={handleNext}>
          <div className="col-md-4">
            <InputLabel id="form-label">
              Who are your Target Customers?
            </InputLabel>
            <TextField
              required
              id="validationServer01"
              className="form-control is-valid"
              label="Target Customers"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <InputLabel id="form-label">
              Do you have any notable clients?
            </InputLabel>
            <FormControl>
              <InputLabel id="form-label">Choose</InputLabel>
              <Select
                required
                labelId="form-label"
                id="validationServer04"
                className="form-select is-invalid"
                value={nclients}
                label="Notable Clients"
                onChange={(e) => setNclients(e.target.value)}
                style={{ minWidth: "225px" }}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </div>
          
          <div className="col-md-4">
            <InputLabel htmlFor="validationServer05" className="form-label">
              What are your key strengths and expertises?
            </InputLabel>
            <TextField
              autoWidth
              required
              label="Keys"
              className="form-control is-valid"
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <InputLabel htmlFor="validationServer06" className="form-label">
              Provide us an overview of your team.
            </InputLabel>
            <TextField
              required
              label="Overviews"
              className="form-control is-valid"
              value={oview}
              onChange={(e) => setOview(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <InputLabel htmlFor="validationServer07" className="form-label">
              Share your experience on Collaborations.
            </InputLabel>
            <TextField
              required
              label="Collaborations"
              className="form-control is-valid"
              value={collab}
              onChange={(e) => setCollab(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <InputLabel htmlFor="validationServer07" className="form-label">
              How is your company financially performing?
            </InputLabel>
            <TextField
              className="form-control is-valid"
              id="validationServer07"
              label="Financial Performance"
              value={finperf}
              onChange={(e) => setFinperf(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3">
            <InputLabel id="form-label">
              Are you profitable or experiencing growth?
            </InputLabel>
            <FormControl>
              <InputLabel id="form-label">Choose</InputLabel>
              <Select
                required
                labelId="form-label"
                id="validationServer08"
                className="form-select is-invalid"
                value={statprof}
                label="Profit Status"
                onChange={(e) => setStatprof(e.target.value)}
                style={{ minWidth: "225px" }}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </div>
          {nclients === "Yes" && (
            <div className="col-md-4">
              <InputLabel htmlFor="validationServerNew" className="form-label">
                Mention your Clients
              </InputLabel>
              <TextField
                required
                id="validationServer03"
                className="form-control is-valid"
                label="Clients"
                value={clients}
                onChange={(e) => setClients(e.target.value)}
              />
            </div>
          )}
          {statprof === "Yes" && (
            <div className="col-md-4">
              <InputLabel htmlFor="validationServerNew" className="form-label">
                What's your Net Profit?
              </InputLabel>
              <TextField
                required
                type="number"
                id="validationServer03"
                className="form-control is-valid"
                label="Profit amount"
                value={profit}
                onChange={(e) => setProfit(e.target.value)}
              />
            </div>
          )}
          <Button type="submit" className="button-container" color="secondary">Next</Button>
        </form>
      </div>
    </div>
  );
};

export default Target;
