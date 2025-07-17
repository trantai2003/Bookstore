// src/types/search.ts
export interface FilterCategory {
    id: string;
    name: string;
    count: number;
}

export interface PriceRange {
    min: number;
    max: number;
    count: number;
}

export interface PublisherFilter {
    name: string;
    count: number;
}

export interface AuthorFilter {
    name: string;
    count: number;
}

export interface LanguageFilter {
    code: string;
    name: string;
    count: number;
}

export interface RatingFilter {
    min: number;
    max: number;
    count: number;
}

export interface AvailabilityFilter {
    status: string;
    name: string;
    count: number;
}

export interface SearchFilters {
    categories: FilterCategory[];
    price_ranges: PriceRange[];
    publishers: PublisherFilter[];
    authors: AuthorFilter[];
    languages: LanguageFilter[];
    ratings: RatingFilter[];
    availability: AvailabilityFilter[];
}

export interface AppliedFilters {
    category: string | null;
    price_min: number | null;
    price_max: number | null;
    publisher: string | null;
    author: string | null;
    language: string | null;
    rating_min: number | null;
    availability: string | null;
}

export interface SearchResult {
    book_id: string;
    relevance_score: number;
    match_type: string;
}

export interface SearchResults {
    query: string;
    total_results: number;
    page: number;
    per_page: number;
    total_pages: number;
    filters_applied: AppliedFilters;
    sort_by: string;
    sort_order: string;
    results: SearchResult[];
    suggestions: string[];
    search_time: string;
}
