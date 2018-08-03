webpackJsonp([12],{Qex4:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("u-popper",{attrs:{trigger:"manual",open:s.open},on:{"update:open":function(a){s.open=a}}},[t("u-button",{on:{click:function(a){s.open=!s.open}}},[s._v(s._s(s.open?"隐藏":"弹出"))]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1)},staticRenderFns:[]},v={components:{"c-d71ec140":t("Lw5P")({data:function(){return{open:!1}}},l,!1,null,null,null).exports}},p={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("u-article",[t("h1",[s._v("弹出层 Popper")]),t("p",[s._v("弹出层的设计思路请参阅"),t("u-link",{attrs:{href:"/ui-design/popper"}},[s._v("设计思路——弹出层系列")]),s._v("。")],1),t("h2",[s._v("示例")]),t("h3",[s._v("基本形式")]),t("p",[s._v("可以用一个 popper slot 来设置弹出元素，并用 default slot 来设置触发元素，这个触发元素通常也作为参照元素。由于 Vue 的限制，每个 slot 中只能有一个根节点。")]),t("u-example",[t("div",[t("u-popper",[t("u-button",[s._v("click")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1)],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("click"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n")])])])]),t("h3",[s._v("触发方式")]),t("u-example",[t("div",[t("u-linear-layout",[t("u-popper",{attrs:{trigger:"click"}},[t("u-button",[s._v("click（默认）")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1),t("u-popper",{attrs:{trigger:"hover"}},[t("u-button",[s._v("hover")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1),t("u-popper",{attrs:{trigger:"right-click"}},[t("u-button",[s._v("right-click")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1),t("u-popper",{attrs:{trigger:"double-click"}},[t("u-button",[s._v("double-click")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1)],1)],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("trigger")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"click"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("click（默认）"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("trigger")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("hover"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("trigger")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"right-click"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("right-click"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("trigger")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"double-click"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("double-click"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])])])]),t("h4",[s._v("手动触发")]),t("p",[s._v("也可以手动触发弹出层的弹出/隐藏：")]),t("u-example",[t("div",[t("c-d71ec140")],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("trigger")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"manual"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":open.sync")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"open"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"open = !open"')]),s._v(">")]),s._v("{{ open ? '隐藏' : '弹出' }}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("open")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        };\n    },\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),t("h3",[s._v("弹出位置")]),t("u-example",[t("div",[t("u-linear-layout",{attrs:{direction:"vertical"}},[t("u-linear-layout",[t("u-popper",{attrs:{placement:"top-start"}},[t("u-button",[s._v("top-start")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1),t("u-popper",{attrs:{placement:"top"}},[t("u-button",[s._v("top")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1),t("u-popper",{attrs:{placement:"top-end"}},[t("u-button",[s._v("top-end")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1)],1),t("u-linear-layout",[t("u-popper",{attrs:{placement:"left-start"}},[t("u-button",[s._v("left-start")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1),t("u-popper",{attrs:{placement:"left"}},[t("u-button",[s._v("left")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1),t("u-popper",{attrs:{placement:"left-end"}},[t("u-button",[s._v("left-end")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1)],1),t("u-linear-layout",[t("u-popper",{attrs:{placement:"right-start"}},[t("u-button",[s._v("right-start")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1),t("u-popper",{attrs:{placement:"right"}},[t("u-button",[s._v("right")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1),t("u-popper",{attrs:{placement:"right-end"}},[t("u-button",[s._v("right-end")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1)],1),t("u-linear-layout",[t("u-popper",{attrs:{placement:"bottom-start"}},[t("u-button",[s._v("bottom-start")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1),t("u-popper",{attrs:{placement:"bottom"}},[t("u-button",[s._v("bottom")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1),t("u-popper",{attrs:{placement:"bottom-end"}},[t("u-button",[s._v("bottom-end")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-block",[s._v("popper")])],1)],1)],1)],1)],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("direction")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"vertical"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"top-start"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("top-start"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n                "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"top"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("top"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n                "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"top-end"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("top-end"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n                "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"left-start"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("left-start"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n                "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"left"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("left"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n                "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"left-end"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("left-end"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n                "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"right-start"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("right-start"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n                "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"right"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("right"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n                "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"right-end"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("right-end"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n                "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"bottom-start"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("bottom-start"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n                "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"bottom"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("bottom"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n                "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"bottom-end"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("bottom-end"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n                "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])])])]),t("h3",[s._v("禁用")]),t("u-example",[t("div",[t("u-popper",{attrs:{disabled:""}},[t("u-button",{attrs:{disabled:""}},[s._v("disabled")])],1)],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("disabled"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n")])])])]),t("h2",[s._v("Popper API")]),t("h3",[s._v("Attrs/Props")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Attr/Prop")]),t("th",[s._v("Type")]),t("th",[s._v("Default")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("open.sync")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("弹出/隐藏状态")])]),t("tr",[t("td",[s._v("trigger")]),t("td",[s._v("String")]),t("td",[t("code",{pre:!0},[s._v("'click'")])]),t("td",[s._v("弹出层的触发方式。可选值："),t("code",{pre:!0},[s._v("'click'")]),s._v(", "),t("code",{pre:!0},[s._v("'hover'")]),s._v(", "),t("code",{pre:!0},[s._v("'right-click'")]),s._v(", "),t("code",{pre:!0},[s._v("'double-click'")]),s._v(", "),t("code",{pre:!0},[s._v("'manual'")])])]),t("tr",[t("td",[s._v("placement")]),t("td",[s._v("String")]),t("td",[t("code",{pre:!0},[s._v("'bottom'")])]),t("td",[s._v("弹出层的弹出方向。可选值："),t("code",{pre:!0},[s._v("'top'")]),s._v(", "),t("code",{pre:!0},[s._v("'bottom'")]),s._v(", "),t("code",{pre:!0},[s._v("'left'")]),s._v(", "),t("code",{pre:!0},[s._v("'right'")]),s._v(", "),t("code",{pre:!0},[s._v("'top-start'")]),s._v(", "),t("code",{pre:!0},[s._v("'top-end'")]),s._v(", "),t("code",{pre:!0},[s._v("'bottom-start'")]),s._v(", "),t("code",{pre:!0},[s._v("'bottom-end'")]),s._v(", "),t("code",{pre:!0},[s._v("'left-start")]),s._v("',"),t("code",{pre:!0},[s._v("'left-end'")]),s._v(", "),t("code",{pre:!0},[s._v("'right-start'")]),s._v(", "),t("code",{pre:!0},[s._v("'right-end'")])])]),t("tr",[t("td",[s._v("offset")]),t("td",[s._v("String")]),t("td",[t("code",{pre:!0},[s._v("'0'")])]),t("td",[s._v("弹出层偏移，如：'10', '10px 10px', '10% 10%', 第一个值表示水平偏移，第二个值表示垂直位移, 默认单位是"),t("code",{pre:!0},[s._v("px")])])]),t("tr",[t("td",[s._v("hover-delay")]),t("td",[s._v("Number")]),t("td",[t("code",{pre:!0},[s._v("0")])]),t("td",[s._v("trigger 为 'hover' 时的延迟时间")])]),t("tr",[t("td",[s._v("hide-delay")]),t("td",[s._v("Number")]),t("td",[t("code",{pre:!0},[s._v("0")])]),t("td",[s._v("trigger 为 'hover' 时提示隐藏的延迟时间")])]),t("tr",[t("td",[s._v("append-to")]),t("td",[s._v("String")]),t("td",[t("code",{pre:!0},[s._v("'body'")])]),t("td",[s._v("指示添加到哪个元素")])]),t("tr",[t("td",[s._v("boundaries-element")]),t("td",[s._v("Element, String")]),t("td",[t("code",{pre:!0},[s._v("'window'")])]),t("td",[s._v("弹出层所在的边框元素，定义弹出层的边际，默认为第一个滚动的父级元素")])]),t("tr",[t("td",[s._v("escape-with-reference")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("true")])]),t("td",[s._v("当触发元素离开边际时，弹出层是否跟随离开或保留在边际元素内")])]),t("tr",[t("td",[s._v("options")]),t("td",[s._v("Object")]),t("td",[t("code",{pre:!0},[s._v("{ modifiers: {} }")])]),t("td",[s._v("补充 popper.js 的选项")])]),t("tr",[t("td",[s._v("disabled")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否禁用")])])])]),t("h3",[s._v("Slots")]),t("h4",[s._v("(default)")]),t("p",[s._v("触发节点，该 slot 只能插入一个节点。Popper 除了会给该节点绑定触发事件，不会对它做任何事情。")]),t("h4",[s._v("popper")]),t("p",[s._v("弹出节点，该 slot 只能插入一个节点，作为弹出层的根节点。")]),t("h3",[s._v("Events")]),t("h4",[s._v("@before-toggle")]),t("p",[s._v("弹出/隐藏前触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("open")]),t("td",[s._v("Boolean")]),t("td",[s._v("弹出/隐藏状态")])]),t("tr",[t("td",[s._v("$event.preventDefault")]),t("td",[s._v("Function")]),t("td",[s._v("阻止弹出/隐藏流程")])])])]),t("h4",[s._v("@toggle")]),t("p",[s._v("弹出/隐藏时触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event.open")]),t("td",[s._v("Boolean")]),t("td",[s._v("弹出/隐藏状态")])])])]),t("h3",[s._v("Methods")]),t("h4",[s._v("update")]),t("p",[s._v("更新 popper 实例")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody")]),t("h4",[s._v("toggle")]),t("p",[s._v("切换弹出/隐藏状态")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("open")]),t("td",[s._v("Boolean")]),t("td",[s._v("弹出/隐藏状态")])])])])],1)},staticRenderFns:[]},_=t("Lw5P")(v,p,!1,null,null,null);a.default=_.exports}});