import { Document } from 'mongoose';

export interface blog extends Document {
	id: string,
	code:string
	title: string,
	caption: string,
	url: string,
	meta:string,
	featured: boolean,
	exclusive: boolean,
	sport: string,
	timeago: string,
	picture: string,
	trending: boolean,
	content: string,
	credit:string,
	author:string,
	category:string,
	// comments: comment[]
}
export interface IPageData extends Document {
    // id: string;
    page: string;
    name: string;
    title: string;
    meta: string;
    header_1: string;
    // header_2: string;
    // code: string;
    // footer: string;
    content: string;
    // used: boolean;

}