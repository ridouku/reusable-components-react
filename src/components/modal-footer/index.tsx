/**
 * Modal Footer Component
 */
import * as React from "react";
import "./ModalFooter.css";
import Button from "@material-ui/core/Button";
import { ReactNode } from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export interface IModalFooterProps {
  primaryButtonVariant?: "text" | "outlined" | "contained";
  primaryButtonColor?: buttonColors;
  primaryLabelButton: string;
  primaryActionButton(): void;
  primaryActionIcon?: ReactNode;
  secondaryLabelButton?: string;
  secondaryActionButton?(): void;
  secondaryActionIcon?: ReactNode;
  secondaryButtonColor?: buttonColors;
}

type buttonColors = "inherit" | "primary" | "secondary" | "default";

const useStyles = makeStyles(() => ({
  boxBackground: {
    background: "#F7FAFC",
  },
}));

export const ModalFooter: React.FC<IModalFooterProps> = (
  props: IModalFooterProps
) => {
  const classes = useStyles(props);

  return (
    <div className={classes.boxBackground}>
      <Box margin={2}>
        <Grid container>
          <Grid
            item
            container
            alignItems="center"
            justify="flex-start"
            direction="row"
          >
            <Button
              size="small"
              variant={props.primaryButtonVariant}
              color={props.primaryButtonColor}
              startIcon={props.primaryActionIcon}
              onClick={props.primaryActionButton}
            >
              {props.primaryLabelButton}
            </Button>

            <Box marginLeft={2}>
              {props.secondaryLabelButton && props.secondaryActionButton ? (
                <Button
                  size="small"
                  startIcon={props.secondaryActionIcon}
                  onClick={props.secondaryActionButton}
                  color={props.secondaryButtonColor}
                >
                  {props.secondaryLabelButton}
                </Button>
              ) : null}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
