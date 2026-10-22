import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region components/SiteChrome.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	["Home", "/"],
	["About", "/about"],
	["Academics", "/academics"],
	["Admissions", "/admission"],
	["Student Life", "/student-life"],
	["Sports", "/sports"],
	["Facilities", "/facilities"],
	["Gallery", "/gallery"],
	["Dashboard", "/dashboard"],
	["Contact", "/contact"]
];
function SiteChrome({ children, active = "Home" }) {
	const [hi, setHi] = (0, import_react.useState)(false), [menu, setMenu] = (0, import_react.useState)(false), [scrolled, setScrolled] = (0, import_react.useState)(false), [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const f = () => {
			setScrolled(scrollY > 32);
			setProgress(document.documentElement.scrollHeight - innerHeight ? scrollY / (document.documentElement.scrollHeight - innerHeight) : 0);
		};
		addEventListener("scroll", f, { passive: true });
		f();
		return () => removeEventListener("scroll", f);
	}, []);
	const msg = hi ? "नमस्ते वीणा वादिनी पब्लिक स्कूल, मुझे प्रवेश, पढ़ाई, स्कूल की सुविधाओं और बस सेवा के बारे में जानकारी चाहिए।" : "Hello Veena Vadini Public School, I would like to know more about admissions, academics, school facilities and bus service.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: hi ? "site hindi" : "site",
		lang: hi ? "hi" : "en",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "skip",
				href: "#content",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "topbar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Chhuri Road, Padhar, District Betul, M.P." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+918815091010",
						children: "+91 88150 91010"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.instagram.com/veena_vadini_public_school?igsh=MXh5MHdxbTdyNjlwZA==",
						target: "_blank",
						rel: "noreferrer",
						children: "Instagram"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setHi(!hi),
						children: hi ? "English" : "हिंदी"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/erp",
						children: "ERP Login"
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: scrolled ? "premium-header scrolled" : "premium-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "brand",
						href: "/",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "crest",
							children: "VV"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "VEENA VADINI" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "PUBLIC SCHOOL · EST. 2025" })] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: menu ? "mega-nav open" : "mega-nav",
						children: nav.map(([n, u]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: active === n ? "active" : "",
							href: u,
							onClick: () => setMenu(false),
							children: n
						}, u))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "nav-cta",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/admission",
							children: "Apply Now"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setMenu(!menu),
							"aria-label": "Toggle navigation",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "content",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "premium-footer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-statement",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "crest",
							children: "VV"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: hi ? "ज्ञान, संस्कार और उज्ज्वल भविष्य की ओर।" : "Building Knowledge, Character and a Brighter Future." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-columns",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "VEENA VADINI PUBLIC SCHOOL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"CBSE Pattern · English & Hindi Medium",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Nursery to Class 8 · Established in 2025"
							] })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "EXPLORE" }), nav.slice(1, 6).map(([n, u]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: u,
								children: n
							}, u))] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "VISIT" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Chhuri Road, Padhar",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"District Betul, Madhya Pradesh"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.google.com/maps/dir/?api=1&destination=Veena+Vadini+Public+School+Chhuri+Road+Padhar+Betul",
									target: "_blank",
									rel: "noreferrer",
									children: "Get directions ↗"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "CONTACT" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+919575851407",
									children: "+91 95758 51407"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+919329107251",
									children: "+91 93291 07251"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/contact",
									children: "Send an enquiry →"
								})
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "© 2026 Veena Vadini Public School · Respectful, inclusive education for every child." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "whatsapp",
				href: `https://wa.me/919575851407?text=${encodeURIComponent(msg)}`,
				target: "_blank",
				rel: "noreferrer",
				"aria-label": "WhatsApp admission enquiry",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WA" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: hi ? "पूछें" : "Enquire" })]
			}),
			progress > .12 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "progress-top",
				style: { "--p": `${progress * 360}deg` },
				onClick: () => scrollTo({
					top: 0,
					behavior: "smooth"
				}),
				"aria-label": "Back to top",
				children: "↑"
			})
		]
	});
}
function PageHero({ eyebrow, title, intro, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `page-hero ${accent || ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "orb one" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "orb two" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: eyebrow }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Home" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "/" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: title })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "page-intro",
				children: intro
			})
		]
	});
}
//#endregion
export { PageHero, SiteChrome };
