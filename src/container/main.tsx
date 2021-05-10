/* istanbul ignore file */
import React from "react";
import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import logo from "../logo.svg";
import "../App.css";

export const MainSection: React.FC = () => {
  const handleComponentSelected = (component: string) => {
    window.location.href = `/demo/${component}`;
  };

  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/components</code> and publish them.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reusable React Components
          </a>
          <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ paddingTop: 50 }}
          >
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <List component="nav" aria-label="secondary mailbox folder">
                    <ListItem
                      button
                      onClick={() => handleComponentSelected("modal")}
                    >
                      <ListItemText primary="Modal Component" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </header>
      </div>
    </React.Fragment>
  );
};
