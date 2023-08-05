import {
  flowRendererV2,
  flowStyles
} from "./chunk-LRJHTHHW.js";
import "./chunk-XCO5OYFF.js";
import {
  flowDb,
  parser$1
} from "./chunk-HRQ65RTV.js";
import "./chunk-SFNV6EWV.js";
import "./chunk-6WIGNW36.js";
import "./chunk-36VLPDIP.js";
import "./chunk-KFHS3ENT.js";
import "./chunk-DZ2GUJV4.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-XISM45N3.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/mermaid/dist/flowDiagram-v2-d6437390.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-d6437390-3AQN2K7H.js.map
