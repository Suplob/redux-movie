import Noty from "noty";
import "../../node_modules/noty/lib/noty.css";
import "../../node_modules/noty/lib/themes/mint.css";

export default function NotyAlert(text) {
  new Noty({
    type: "success",
    layout: "topRight",
    timeout: 3000,
    text: text,
  }).show();
}
