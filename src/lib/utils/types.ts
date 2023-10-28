//import type { ComponentType, SvelteComponent } from 'svelte';

export type blocks = 'image' | 'video' | 'code' | 'quote' | 'paragraph' | 'header' | 'list';

export type dataBlock =
	| { type: 'image'; id: string; data: { href: string; alt: string } }
	| { type: 'video'; id: string; data: { href: string; alt: string } }
	| { type: 'code'; id: string; data: { text: string; lang: string } }
	| { type: 'quote'; id: string; data: { text: string } }
	| { type: 'paragraph'; id: string; data: { text: string } }
	| { type: 'header'; id: string; data: { text: string; level: 1 | 2 | 3 | 4 } }
	| { type: 'list'; id: string; data: { items: string[]; type: 'ordered' | 'unordered' } };
