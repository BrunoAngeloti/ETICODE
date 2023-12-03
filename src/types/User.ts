import type { Blog } from "./Blog";

export type User = {
	name: string;
	ocuppation: string;
	photo: string;
	id: string;
	blogs: Blog[];
}
