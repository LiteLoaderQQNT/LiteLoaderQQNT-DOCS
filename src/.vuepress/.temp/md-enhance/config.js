import { defineClientConfig } from "@vuepress/client";
import ChartJS from "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "H:/项目/LiteLoaderQQNT/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "H:/项目/LiteLoaderQQNT/node_modules/reveal.js/dist/reveal.css";
import Presentation from "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import { injectRevealConfig } from "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Playground from "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "H:/项目/LiteLoaderQQNT/node_modules/katex/dist/katex.min.css";
import "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";
import { injectVuePlaygroundConfig } from "H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    injectRevealConfig(app);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    injectVuePlaygroundConfig(app);
    app.component("VuePlayground", defineAsyncComponent(() => import("H:/项目/LiteLoaderQQNT/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
  },
  setup: () => {

  }
});
