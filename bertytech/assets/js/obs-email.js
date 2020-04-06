(() => {
document.querySelectorAll('a').forEach(replaceMailTo);
document.querySelectorAll('a').forEach(replaceInnerHtml);
document.querySelectorAll('span').forEach(replaceInnerHtml);
document.querySelectorAll('div').forEach(replaceInnerHtml);
document.querySelectorAll('p').forEach(replaceInnerHtml);
document.querySelectorAll('h1').forEach(replaceInnerHtml);
document.querySelectorAll('h2').forEach(replaceInnerHtml);
document.querySelectorAll('h3').forEach(replaceInnerHtml);
document.querySelectorAll('h4').forEach(replaceInnerHtml);
document.querySelectorAll('h5').forEach(replaceInnerHtml);
document.querySelectorAll('h6').forEach(replaceInnerHtml);

function replaceInnerHtml(el) {
	el.classList.value.split(' ').forEach(c => {
		if (c.startsWith('obsinner-')) {
			const email = c.replace('obsinner-', '');
			el.innerHTML = atob(email);
		}
	})
}

function replaceMailTo(el) {
	let email = '';
	let subject = '';
	el.classList.value.split(' ').forEach(c => {
		if (c.startsWith('sendto-')) {
			email = c.replace('sendto-', '');
		}
		if (c.startsWith('sendsubject-')) {
			subject = c.replace('sendsubject-', '');
		}
	});

	if (email) {
		let mailto = `mailto:${atob(email)}`;
				mailto += subject ? `?subject=${atob(subject)}` : '';
		el.setAttribute('href', mailto);
	}
}
})()