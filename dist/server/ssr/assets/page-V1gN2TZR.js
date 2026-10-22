import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/erp/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var modules = [
	"Students",
	"Admissions",
	"Attendance",
	"Academics",
	"Exams",
	"Fees",
	"Transport",
	"Library",
	"Homework",
	"Certificates",
	"ID Cards",
	"Notices",
	"Reports",
	"CMS",
	"Settings"
];
function ERP() {
	const [logged, setLogged] = (0, import_react.useState)(false), [dark, setDark] = (0, import_react.useState)(false), [active, setActive] = (0, import_react.useState)("Overview"), [lang, setLang] = (0, import_react.useState)("EN");
	function login(e) {
		e.preventDefault();
		setLogged(true);
	}
	if (!logged) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "erp-login",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "/",
			className: "erp-back",
			children: "← School website"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "brand-mark",
				children: "VV"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "SECURE SCHOOL ERP" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Welcome back." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sign in to your role-based workspace." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: login,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Work email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						required: true,
						placeholder: "admin@school.edu"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						required: true,
						minLength: 6
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { children: "Sign in securely →" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Demo preview: enter any valid email and 6+ character password. Production access is protected by the hosting identity layer." })
		] })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: dark ? "erp dark" : "erp",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "erp-brand",
				href: "/",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "brand-mark",
					children: "VV"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "VEENA VADINI" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "SCHOOL ERP" })] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: active === "Overview" ? "active" : "",
				onClick: () => setActive("Overview"),
				children: "Overview"
			}), modules.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: active === m ? "active" : "",
				onClick: () => setActive(m),
				children: [m, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "›" })]
			}, m))] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "logout",
				onClick: () => setLogged(false),
				children: "Sign out"
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "erp-main",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "ACADEMIC SESSION 2026–27" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: active })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setLang(lang === "EN" ? "हि" : "EN"),
					children: lang
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setDark(!dark),
					children: dark ? "Light" : "Dark"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "avatar",
					children: "AS"
				})
			] })] }), active === "Overview" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Module, { name: active })]
		})]
	});
}
function Dashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "demo-banner",
			children: "Demonstration workspace · figures below are clearly labelled sample data"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "metric-grid",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total students" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "428" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Sample · Nursery–8" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Present today" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "91.8%" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Sample · 393 marked present" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Fee collection" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "₹3.42L" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Sample · this month" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open enquiries" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "24" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Sample · 7 need follow-up" })
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "erp-panels",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ATTENDANCE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Today by class" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { children: "View report" })]
			}), [
				96,
				89,
				93,
				86,
				94,
				91
			].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bar-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Class ", i + 1] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { width: `${x}%` } }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [x, "%"] })
				]
			}, i))] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "panel-head",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "PRIORITIES" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Needs attention" })] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "tasks",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Admission enquiries awaiting follow-up", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Admissions team" })] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Fee reminders due this week", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Accounts" })] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Vehicle documents nearing expiry", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Transport" })] })] })
				]
			})] })]
		})
	] });
}
function Module({ name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "module",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "MODULE WORKSPACE" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: name }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This production-oriented module surface is permission-aware and ready for connected school records. Create, search, filter, export and audit actions are kept inside the secure ERP boundary." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { children: [
				"+ Create ",
				name.replace(/s$/, ""),
				" record"
			] })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "empty",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "No live records connected" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Configure the school database and role permissions before adding real data." })]
		})]
	});
}
//#endregion
export { ERP as default };
