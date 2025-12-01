
export type TJobItem = {
    id: number;
    badgeLetters: string;
    title: string;
    company: string;
    daysAgo: number;
    date: string;
    relevanceScore: number;

}

export type TJobDetails = TJobItem & {
    reviews: string[];
    qualifications: string[];

    description: string;
    duration: string;
    salary: string;
    location: string;


    coverImgURL: string
    companyURL: string
}

export type TSortBy = "relevance" | "recent"

export type TPageDirection = "next" | "previous"

export type TBookmarksContext = {
    bookmarkedIds: number[],
    handleToggleBookmark: (id: number) => void,
    bookmarkedJobItems: TJobDetails[],
    isLoading: boolean
}

export type TActiveIdContext = {
    activeId : number | null
}