let icon__template:HTMLTemplateElement
export function code_copy_icon__template__hyop(_icon__template:HTMLTemplateElement) {
	icon__template = _icon__template
}
export function code_copy_button__hyop(parent:HTMLElement) {
	// Allow code_copy_icon__template__hyop to be called after code_copy_button__hyop
	queueMicrotask(()=>{
		let pre_a1 = Array.from(parent.querySelectorAll('pre'))
		for (let pre of pre_a1) {
			let wrapper = document.createElement('div')
			wrapper.style.position = 'relative'
			let button = document.createElement('button')
			button.className =
				'copy-code absolute right-3 -top-3 rounded bg-skin-card px-2 py-1 text-xs leading-4 text-skin-base font-medium'
			button.appendChild(icon__template.content.cloneNode(true))
			pre.setAttribute('tabindex', '0')
			pre.appendChild(button)
			// wrap codebock with relative parent element
			pre?.parentNode?.insertBefore(wrapper, pre)
			wrapper.appendChild(pre)
			console.debug('code_copy_button__hyop|debug|1', {
				pre
			})
			button.addEventListener('click', ()=>code__copy(pre, button))
		}
	})
	function code__copy(pre:HTMLPreElement, button:HTMLButtonElement) {
		let code = pre.querySelector('code')
		let text = code?.innerText
		navigator.clipboard.writeText(text ?? '')
			.then(()=>{
				// visual feedback that task is completed
				button.innerText = 'Copied'
				setTimeout(()=>{
					button.innerText = ''
					button.appendChild(icon__template.content.cloneNode(true))
				}, 700)
			})
			.catch(err=>console.error(err))
	}
}
