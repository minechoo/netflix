export interface Movie {
	adult: boolean;
	media_type: string;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	origin_contry?: string[];
	original_language: string;
	original_title?: string;
	origin_name?: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title?: string;
	original_title?: string;
	release_date?: string;
	name?: string; //tv
	origin_country?: string[]; //tv
	origin_name?: string; //tv
	first_air_date?: string; //tv
}
