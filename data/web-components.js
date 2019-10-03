export const webcomponentsCollection = {
	name: "Web Components",
	areas: [
		{
			skills: [
				{
					name: "Custom Elements",
					description: {
						text: "Learn how to create new HTML tags with custom elements.",
						links: [
							["Chrome Devs - Custom Elements", "https://developers.google.com/web/fundamentals/web-components/customelements"],
							["Mozilla - Using Custom Elements", "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"],
							["CSS Tricks - Creating a Custom Element from Scratch", "https://css-tricks.com/creating-a-custom-element-from-scratch/"],
							["Javascript.info - Custom Elements", "https://javascript.info/custom-elements"],
							["dev.to - An introduction to Custom Elements", "https://dev.to/jamesrweb/an-introduction-to-custom-elements-5327"],
							["itnext - Introduction to Web Components", "https://itnext.io/introduction-to-web-components-part-i-custom-elements-4de6713cef9d"]
						]
					}
				},
				{
					name: "Shadow DOM",
					description: {
						text: "Learn how to encapsulate your CSS using shadow dom.",
						links: [
							["Chrome Devs - Shadow DOM", "https://developers.google.com/web/fundamentals/web-components/shadowdom"],
							["Mozilla - Using Shadow DOM", "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"],
							["Mozilla - Shadow Tree", "https://developer.mozilla.org/en-US/docs/Glossary/Shadow_tree"],
							["CSS Tricks - Encapsulating Style and Structure", "https://css-tricks.com/encapsulating-style-and-structure-with-shadow-dom/"],
							["itnext - Introduction to Web Components", "https://itnext.io/introduction-to-web-components-part-ii-shadow-dom-8d1d8e126332"],
							["Monica - Shadow DOM: fast and encapsulated styles", "https://meowni.ca/posts/shadow-dom/"]

						]
					},
					skills: [
						{
							name: "Shadow Parts",
							description: {
								text: "Learn how to style the inside of a shadow tree from outside of that shadow tree by using shadow parts.",
								links: [
									["Fergald - CSS Shadow ::part and ::theme", "https://github.com/fergald/docs/blob/master/explainers/css-shadow-parts-1.md"],
									["Mozilla - ::part", "https://developer.mozilla.org/en-US/docs/Web/CSS/::part"],
									["W3C - CSS Shadow Parts", "https://www.w3.org/TR/css-shadow-parts-1/"],
									["Monica - ::part and ::theme, an explainer", "https://meowni.ca/posts/part-theme-explainer/"],
									["Youtube - CSS Shadow Parts", "https://www.youtube.com/watch?v=yVrvOueeb3s"],
									["Chrome Status - ::part and ::theme", "https://www.chromestatus.com/features/5763933658939392"]
								]
							}
						}
					]
				},
				{
					name: "HTML Templates",
					description: {
						text: "Learn how to use HTML templates to create a flexible template that can then be used to populate the shadow DOM.",
						links: [
							["Mozilla - Using Templates & Slots", "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots"],
							["Javascript.info - Template Element", "https://javascript.info/template-element"],
							["Mozilla - The Content Template element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template"]
						]
					},
					skills: [
						{
							name: "Slots",
							description: {
								text: "Learn how to compose custom elements by using slots.",
								links: [
									["Alligator.io - Composing Custom Elements", "https://alligator.io/web-components/composing-slots-named-slots/"],
									["Javascript.info - Slots Composition", "https://javascript.info/slots-composition"],
									["Mozilla - HTML <slot> element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot"],
									["Component.kitchen - A history of the HTML slot element", "https://component.kitchen/blog/posts/a-history-of-the-html-slot-element"],
								]
							}
						}
					]
				},
				{
					name: "Constructible Stylesheets",
					description: {
						text: "Learn how to use constructible stylesheets to create reusable styles when using shadow dom.",
						links: [
							["Chrome Devs - Constructable Stylesheets", "https://developers.google.com/web/updates/2019/02/constructable-stylesheets"],
							["W3C - Constructable Stylesheet Objects", "https://wicg.github.io/construct-stylesheets/"],
							["dev.to - Why Would Anyone Use Constructible Stylesheets", "https://dev.to/westbrook/why-would-anyone-use-constructible-stylesheets-anyways-19ng"],
							["Benjamin Farrel - Adopt a Design System", "https://medium.com/swlh/adopt-a-design-system-inside-your-web-components-with-constructable-stylesheets-dd24649261e"],
							["WICG - Constructable Stylesheet Objects", "https://github.com/WICG/construct-stylesheets/blob/gh-pages/explainer.md"],
							["Chrome Status - Constructible Stylesheets", "https://www.chromestatus.com/feature/5394843094220800"]
						]
					}
				},
				{
					name: "Best practices",
					description: {
						text: "Get familiar with best practices when it comes to building web components.",
						links: [
							["Chrome Devs - Custom Element Best Practices", "https://developers.google.com/web/fundamentals/web-components/best-practices"],
							["Webcomponents.org - Web Components Best Practices", "https://www.webcomponents.org/community/articles/web-components-best-practices"],
							["mateusortiz - Web Components the Right Way", "https://github.com/mateusortiz/webcomponents-the-right-way"]
						]
					}
				},
				{
					name: "Form Participation",
					description: {
						text: "Learn how the form participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.",
						links: [
							["Form Participation API Explained", "https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit"],
							["Chrome Status - Form-associated custom elements", "https://www.chromestatus.com/features/4708990554472448"],
							["web-platform-tests - Form Participation", "https://github.com/web-platform-tests/wpt/tree/master/custom-elements/form-associated"],
							["Chrome Devs - Form-associated custom elements", "https://developers.google.com/web/updates/2019/09/nic77#form-associated_custom_elements"]
						]
					}
				}
			]
		}
	]
}