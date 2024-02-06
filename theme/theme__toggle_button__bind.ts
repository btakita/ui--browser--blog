/// <reference lib="dom" />
import { browser_ctx } from '@rappstack/domain--browser--blog/ctx'
import { theme_, theme__toggle } from '@rappstack/domain--any--blog'
import { type circular_memo_T, memo_ } from 'rmemo'
export function theme__toggle_button__bind(
	theme_toggle_button:HTMLButtonElement&{
		_aria_label$?:circular_memo_T
	}
) {
	theme_toggle_button.addEventListener('click', theme_toggle_button__onclick)
	theme_toggle_button._aria_label$ = memo_(memo=>{
		theme_toggle_button.setAttribute('aria-label', theme_(browser_ctx))
		return memo
	})
	function theme_toggle_button__onclick(evt:Event) {
		evt.preventDefault()
		theme__toggle(browser_ctx)
	}
}
