export type EventsListProps = {
  params: {
    city: string;
  }
};

export type EventsPageProps = EventsListProps & {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  }
};
