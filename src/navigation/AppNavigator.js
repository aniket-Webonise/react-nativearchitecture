import { createAppContainer, createSwitchNavigator } from "react-navigation";
import WalkThroughScreen from "./../features/walkthroughScreens/WalkthroughScreen";

export default createAppContainer(
  createSwitchNavigator({
    Main: WalkThroughScreen
  })
);
