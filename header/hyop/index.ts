let blog__header__handle__nav:HTMLElement
export function blog__header__handle__nav__hyop(_blog__header__handle__nav:HTMLElement) {
	blog__header__handle__nav = _blog__header__handle__nav
}
export function blog__header__handle__nav__button__hyop(blog__header__handle__nav__button:HTMLButtonElement) {
	blog__header__handle__nav__button.addEventListener('click', ()=>{
		blog__header__handle__nav.classList.toggle('is-open')
	})
}
