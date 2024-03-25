/// <reference lib="dom" />
import { theme_, theme__toggle } from '@rappstack/domain--any--blog/theme'
import { browser_ctx__ensure } from '@rappstack/domain--browser/ctx'
import { calling, memo_, memo_T } from 'rmemo'
export function theme__toggle_button__hyop(
	theme_toggle_button:HTMLButtonElement&{ $?:memo_T<unknown> }
) {
	const ctx = browser_ctx__ensure()
	theme_toggle_button.addEventListener('click', theme_toggle_button__onclick)
	theme_toggle_button.$ = calling(memo_(()=>{
		theme_toggle_button.setAttribute('aria-label', theme_(ctx))
	}))
	function theme_toggle_button__onclick(evt:Event) {
		evt.preventDefault()
		theme__toggle(ctx)
	}
}
