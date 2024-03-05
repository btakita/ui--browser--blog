/** @see {https://github.com/satnaing/astro-paper/blob/main/src/layouts/PostDetails.astro} */
export function progress_bar__hyop(progress_bar:HTMLElement) {
	document.addEventListener('scroll', document__onscroll)
	/** Update the progress bar
	 *  when user scrolls */
	function document__onscroll() {
		const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight
		const scroll_pct = (scrollTop / height) * 100
		progress_bar.style.width = scroll_pct + '%'
	}
}
