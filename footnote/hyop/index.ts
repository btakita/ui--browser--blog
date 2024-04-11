export function footnote_list__div__a__hyop(footnote_list__div__a:HTMLAnchorElement) {
	footnote_list__div__a.addEventListener('click', evt=>{
		const { hash } = window.location
		if (hash && !hash.endsWith('-ref')) {
			evt.preventDefault()
			window.history.back()
		}
	})
}
