
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

