import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
import { SiteChrome } from "./SiteChrome-DNrlerxL.js";
//#region app/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [loader, setLoader] = (0, import_react.useState)(true), [paused, setPaused] = (0, import_react.useState)(false);
	const video = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const seen = localStorage.getItem("vvps-visited");
		const timer = setTimeout(() => {
			setLoader(false);
			localStorage.setItem("vvps-visited", "1");
		}, seen ? 150 : 1100);
		return () => clearTimeout(timer);
	}, []);
	function toggle() {
		if (!video.current) return;
		paused ? video.current.play() : video.current.pause();
		setPaused(!paused);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteChrome, {
		active: "Home",
		children: [
			loader && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "knowledge-loader",
				role: "status",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "loader-book",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "VVPS" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Opening the Door to Knowledge" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ज्ञान के द्वार खुल रहे हैं" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "video-hero",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: video,
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						poster: "/og.png",
						"aria-label": "Demo education video from Pexels",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: "https://www.pexels.com/download/video/5734763/",
							type: "video/mp4"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "video-overlay" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "saraswati-watermark",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ॐ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "home-hero-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "ESTABLISHED IN 2025 · PADHAR, BETUL" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
								"Where knowledge",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "finds character." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Veena Vadini Public School · CBSE Pattern",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"English & Hindi Medium · Nursery to Class 8"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "gold-button",
								href: "/admission",
								children: "Apply for admission →"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "glass-button",
								href: "/about",
								children: "Explore our school"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "video-control",
						onClick: toggle,
						children: paused ? "Play film" : "Pause film"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "scroll-cue",
						href: "#welcome",
						children: ["DISCOVER ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↓" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "prestige-strip",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CBSE PATTERN" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "◆" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ENGLISH & HINDI MEDIUM" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "◆" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NURSERY TO CLASS 8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "◆" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BUS FACILITY AVAILABLE" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "home-welcome",
					id: "welcome",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "year-block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "OUR STORY BEGINS" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
								"20",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"25"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Serving young learners since 2025" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: "WELCOME TO VEENA VADINI"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "A new school with a timeless purpose." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "large-copy",
							children: "To help every child become knowledgeable, capable and kind—through strong academic foundations, attentive teaching and values that travel beyond the classroom."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "home-links",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/about",
								children: "Discover our story →"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/academics",
								children: "Explore academics →"
							})]
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "philosophy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "symbol-panel",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "veena-lines",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "विद्या विनय देती है" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: "OUR PHILOSOPHY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Rooted in values.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Ready for tomorrow."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Inspired by the spirit of Maa Saraswati, our identity honours knowledge, creative expression and disciplined learning with cultural dignity." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "value-list",
							children: [
								["01", "Curiosity"],
								["02", "Character"],
								["03", "Confidence"],
								["04", "Compassion"]
							].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: x[0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: x[1] })] }, x[0]))
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "programme",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: "THE VVPS EXPERIENCE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Every day, a chance",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"to become more."
						] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From first discoveries in Nursery to confident middle-school learning, the experience is active, bilingual and deeply human." })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "programme-grid",
						children: [
							[
								"Academics",
								"Strong concepts, thoughtful assessment and support for every stage.",
								"/academics"
							],
							[
								"Student life",
								"Art, music, clubs, celebrations, leadership and wellbeing.",
								"/student-life"
							],
							[
								"Sports",
								"Movement, teamwork, fitness and the joy of participation.",
								"/sports"
							],
							[
								"Facilities",
								"Safe, welcoming spaces designed around young learners.",
								"/facilities"
							]
						].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: x[2],
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", i + 1] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "abstract-photo",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: x[0] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: x[1] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Explore →" })
							]
						}, x[0]))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "admission-feature",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: "ADMISSIONS 2026–27"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Your child’s journey",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"can begin here."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Applications are open for Nursery to Class 8 in English and Hindi medium. Speak with our team or plan a school visit." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "gold-button",
							href: "/admission",
							children: "Start an application →"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "glass-button",
							href: "https://wa.me/919575851407?text=Hello%20Veena%20Vadini%20Public%20School%2C%20I%20would%20like%20to%20know%20more%20about%20admissions.",
							target: "_blank",
							rel: "noreferrer",
							children: "WhatsApp admissions"
						})] })
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admission-seal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VV" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "ADMISSIONS" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "2026–27" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "public-dashboard",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: "SCHOOL AT A GLANCE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Clear information.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Confident decisions."
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dashboard-cards",
							children: [
								["2025", "Established"],
								["Nursery–8", "Classes"],
								["2", "Learning mediums"],
								["Available", "Bus facility"]
							].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: x[0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: x[1] })] }, x[1]))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/dashboard",
							children: "Open public school dashboard →"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "map-section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: "FIND US IN PADHAR"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Come and meet us." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Chhuri Road, Padhar, District Betul, Madhya Pradesh, India" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.google.com/maps/dir/?api=1&destination=Veena+Vadini+Public+School+Chhuri+Road+Padhar+Betul",
							target: "_blank",
							rel: "noreferrer",
							children: "Get directions →"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+918815091010",
							children: "Call the school →"
						})] })
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Map showing Veena Vadini Public School in Padhar",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						src: "https://www.google.com/maps?q=Veena%20Vadini%20Public%20School%2C%20Chhuri%20Road%2C%20Padhar%2C%20Betul%2C%20Madhya%20Pradesh&output=embed"
					})]
				})
			] })
		]
	});
}
//#endregion
export { Home as default };
