export function blog__header__hyop(blog_header:HTMLElementTagNameMap['header']) {
	const blog_header__handle_nav = blog_header.querySelector('#blog_header__handle_nav')!
	const blog_header__handle_nav__button = blog_header__handle_nav.querySelector('button')!
	blog_header__handle_nav__button.addEventListener('click', ()=>{
		blog_header__handle_nav.classList.toggle('is-open')
	})
}
