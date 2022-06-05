import React, { useState, useContext, useEffect } from "react";
import { stateContext } from "../../App";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import WatchlistCards from "./WatchlistCards";
import CompanyOverview from "./CompanyOverview";

function Watchlist() {
  const [state, setState] = useContext(stateContext);
  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(null);
  useEffect(() => {
    state.likedList.length === 0 ? setDisable(true) : setDisable(false);
  }, [state.likedList]);

  return (
    <div className="bodyContent">
      <h1>My Watchlist</h1>
      <div style={{ display: "flex", gap: "2%", alignItems: "flex-start" }}>
        <div style={{ display: "flex", gap: "10px", flexBasis: "40%", flexDirection: "column" }} id="cards">
          {state.likedList.map((ticker, index) => (
            <WatchlistCards key={index} state={state} setState={setState} ticker={ticker} />
          ))}

          <Button variant="outlined" onClick={() => setOpen(true)} style={{ marginTop: "10px" }} disabled={disable}>
            Clear Memory
          </Button>
        </div>
        <CompanyOverview ticker={state.selectedTicker} setTicker={""} />
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>{"Clear local storage?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>By selecting 'OK', local storage will be cleared. All companies on the watchlist will be removed.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              onClick={() => {
                setOpen(false);
                localStorage.clear();
                window.location.reload();
              }}
              autoFocus
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Watchlist;
