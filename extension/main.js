const OLD_THEME_HOST = "blog.hatena.ne.jp";
const OLD_THEME_PATH_PREFIX = "/-/blog_style/";
const NEW_THEME_URL = "http://localhost:8080/theme.css";

document.addEventListener("DOMContentLoaded", function () {
	const elements = document.getElementsByTagName('link')
	for (const element of elements) {
		if (element.rel === 'stylesheet') {
			const url = new URL(element.href);
			if (url.hostname === OLD_THEME_HOST && url.pathname.startsWith(OLD_THEME_PATH_PREFIX)) {
				const link = document.createElement("link");
				link.rel = "stylesheet";
				link.href = NEW_THEME_URL;

				element.parentElement.replaceChild(link, element);
			}
		}
	}
});