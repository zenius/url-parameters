import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Account from "./Account";

const Accounts = () => {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>

        <Route path={`/:id`} component={Account} />
      </div>
    </Router>
  );
};

export default Accounts;
