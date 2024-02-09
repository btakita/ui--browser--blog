/// <reference lib="dom" />
import { browser_ctx__ensure } from '@rappstack/domain--browser/ctx'
import { dehydrated_post_meta_a1__set, type dehydrated_post_meta_T } from '@rappstack/domain--any--blog/post'
import { attach } from 'relementjs'
import { blog_search__div_ } from './blog_search__div.js'
export function blog_search__main__bind(blog_search__main:HTMLElement) {
	const browser_ctx = browser_ctx__ensure()
	const dehydrated_post_meta_a1 = JSON.parse(
		decodeURIComponent(
			blog_search__main.dataset.dehydrated_post_meta_a1!)
	) as dehydrated_post_meta_T[]
	dehydrated_post_meta_a1__set(browser_ctx, dehydrated_post_meta_a1)
	attach(blog_search__main, blog_search__div_<'browser'>({
		ctx: browser_ctx
	}))
}
