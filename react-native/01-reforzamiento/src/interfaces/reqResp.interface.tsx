export interface reqResList {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: user[];
	support: support;
}
export interface user {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}
export interface support {
	url: string;
	text: string;
}