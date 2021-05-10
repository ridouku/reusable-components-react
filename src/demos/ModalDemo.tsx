/* istanbul ignore file */
import React from "react";
import { ModalHeader } from "../components/modal-header";
import { ModalBody } from "../components/modal-body";
import { ModalFooter } from "../components/modal-footer";
import Button from "@material-ui/core/Button";
import { Info, Save } from "react-feather";
import { ModalLayout } from "../components/modal";
import { Grid } from "@material-ui/core";
export default class ModalDemoLayout extends React.Component {
  state = {
    show: false,
  };

  changeModal = () => {
    this.setState({
      show: true,
    });
  };

  primaryActionButton = () => {
    window.alert("Primary action triggered");
  };

  secondaryActionButton = () => {
    window.alert("Secondary action triggered");
  };

  closeModal = () => {
    this.setState({
      show: false,
    });
  };

  header = (
    <ModalHeader
      highlightValue={"Highlight Text"}
      tittle={"Custom Title"}
      secondaryValue={"Secondary Text"}
    ></ModalHeader>
  );

  footer = (
    <ModalFooter
      primaryActionIcon={<Info size={14} />}
      secondaryActionIcon={<Save size={14} />}
      primaryLabelButton={"Primary action"}
      primaryActionButton={this.primaryActionButton}
      secondaryActionButton={this.secondaryActionButton}
      secondaryLabelButton={"Secondary action"}
    ></ModalFooter>
  );

  body = (
    <ModalBody>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          fermentum mi ut tincidunt tempor. Fusce convallis magna in elit
          ultricies dictum. Proin semper nec magna quis iaculis. Aliquam erat
          volutpat. Praesent quam ipsum, aliquam vitae sagittis vel, efficitur
          vitae massa. Aliquam ac lacinia purus, malesuada placerat diam. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Sed feugiat nunc risus. Mauris cursus a dui quis
          cursus. Integer bibendum nulla ut commodo fringilla. Maecenas vel
          malesuada risus. Sed sollicitudin commodo urna facilisis elementum.
          Donec sed mi aliquet augue placerat pretium vel suscipit nunc. Aenean
          posuere maximus magna eu cursus. Vivamus eleifend elit tortor, id
          suscipit ex consequat ac. Cras vehicula dignissim convallis. Nullam
          interdum, nisi at aliquam varius, ligula odio lacinia dolor, non
          tempus ante ante quis libero. Quisque pharetra pellentesque odio, ut
          commodo elit blandit in. Vivamus vitae sollicitudin mi. Nunc pharetra
          augue ut pulvinar venenatis. Aenean eleifend finibus odio, et eleifend
          arcu tincidunt in. Donec consequat neque orci, sit amet pharetra orci
          condimentum eu. Cras lacinia vitae ipsum ut blandit. Mauris tincidunt
          purus in aliquet tempor. Donec rutrum ultrices pretium. Quisque vel
          auctor arcu, ut bibendum ligula. Aenean tristique orci sit amet
          maximus molestie. Phasellus faucibus, risus vel ornare iaculis, nunc
          enim convallis nisl, vel ullamcorper nisi sapien vitae urna. Quisque
          ullamcorper efficitur est. Phasellus quam tortor, fringilla
          sollicitudin nunc placerat, efficitur hendrerit lorem. Aliquam erat
          volutpat. Aliquam rhoncus mi nisi, et gravida est iaculis id. Fusce
          lectus nisi, luctus mollis euismod in, eleifend vehicula nisl. Proin
          vel odio ac tortor aliquam pellentesque nec ac dolor. Integer
          condimentum nunc eu aliquet facilisis. Nulla nec sem sit amet ante
          mollis imperdiet. Etiam non purus semper, finibus purus eu, pretium
          urna. Aenean congue, lorem eget scelerisque congue, leo lacus luctus
          est, at mattis nisl dolor id enim. Cras ut lectus turpis. Vivamus
          sagittis mollis felis, vitae tempus nisi condimentum vel. In id
          venenatis dolor. Nam ligula lorem, imperdiet in arcu in, efficitur
          bibendum eros. Donec iaculis ac quam sit amet aliquet. Integer eu
          dolor sit amet quam tincidunt bibendum. Integer pulvinar metus sit
          amet feugiat viverra. Vivamus ex augue, ultrices a bibendum facilisis,
          pharetra ut libero.
        </p>
      </div>
    </ModalBody>
  );

  render() {
    return (
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ paddingTop: 50 }}
      >
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={this.changeModal}
          >
            show modal
          </Button>
        </Grid>
        <ModalLayout
          header={this.header}
          body={this.body}
          footer={this.footer}
          onCloseModal={this.closeModal}
          openModal={this.state.show}
          overlay={false}
          backdrop={false}
          transition={"left"}
        ></ModalLayout>
      </Grid>
    );
  }
}
