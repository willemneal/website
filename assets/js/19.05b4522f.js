(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{227:function(t,e,s){"use strict";s.r(e);var n=s(6),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[t._v("#")]),t._v(" Development")]),t._v(" "),s("p",[t._v("Instructions for setting up a development environment.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Please see our "),s("a",{attrs:{href:"https://github.com/AssemblyScript/assemblyscript/blob/master/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("contribution guidelines"),s("OutboundLink")],1),t._v(" before submitting your first pull request.")])]),t._v(" "),s("h2",{attrs:{id:"setting-up-a-development-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-development-environment"}},[t._v("#")]),t._v(" Setting up a development environment")]),t._v(" "),s("p",[t._v("The following sets up a development environment of the compiler where editing the sources applies changes immediately without having to go through a build step:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/AssemblyScript/assemblyscript.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" assemblyscript\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v("\n")])])]),s("p",[t._v("Note that a development environment runs the sources directly by default, but will use distributions files once built. Cleaning the distribution files again with "),s("code",[t._v("npm run clean")]),t._v(" resets this. Whether "),s("code",[t._v("asc")]),t._v(" is running the sources or distribution files can be determined by checking the displayed version number. If it states "),s("code",[t._v("-dev")]),t._v(", it runs the sources directly.")]),t._v(" "),s("h2",{attrs:{id:"building-distribution-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-distribution-files"}},[t._v("#")]),t._v(" Building distribution files")]),t._v(" "),s("p",[t._v("To build an UMD bundle to "),s("code",[t._v("dist/assemblyscript.js")]),t._v(" (depends on "),s("a",{attrs:{href:"https://github.com/AssemblyScript/binaryen.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("binaryen.js"),s("OutboundLink")],1),t._v("), including a browser version of asc to "),s("code",[t._v("dist/asc.js")]),t._v(" (depends on assemblyscript.js):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),s("p",[t._v("Cleaning the distribution files (again):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run clean\n")])])]),s("p",[t._v("Linting potential changes:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run check\n")])])]),s("p",[t._v("Running the "),s("a",{attrs:{href:"https://github.com/AssemblyScript/assemblyscript/blob/master/tests",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),s("p",[t._v("Running everything in order (check, clean, test, build, test):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run all\n")])])]),s("h2",{attrs:{id:"creating-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-tests"}},[t._v("#")]),t._v(" Creating tests")]),t._v(" "),s("p",[t._v("The test suite is composed of a set of tests for each component, like the parser, the compiler and runtime. For each pull request, all the tests are run automatically and the PR only goes green if it passes all of them. Please see the "),s("a",{attrs:{href:"https://github.com/AssemblyScript/assemblyscript/tree/master/tests",target:"_blank",rel:"noopener noreferrer"}},[t._v("instructions within the repository"),s("OutboundLink")],1),t._v(" for all the details.")])])}),[],!1,null,null,null);e.default=a.exports}}]);