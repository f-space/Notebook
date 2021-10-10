const OLD_THEME_SEGMENT = "/blog_style/";
const NEW_THEME_URL = "http://localhost:8080/theme.css";

document.addEventListener("DOMContentLoaded", function () {
	const elements = document.getElementsByTagName('link')
	for (const element of elements) {
		if (element.rel === 'stylesheet') {
			const url = new URL(element.href);
			if (url.pathname.includes(OLD_THEME_SEGMENT)) {
				const link = document.createElement("link");
				link.rel = "stylesheet";
				link.href = NEW_THEME_URL;

				element.parentElement.replaceChild(link, element);
			}
		}
	}
});