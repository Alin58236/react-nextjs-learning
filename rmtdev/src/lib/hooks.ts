import { useContext, useEffect, useState } from "react";
import { TJobDetails, TJobItem } from "../types/types";
import { useQueries, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BookmarksContext } from "../contexts/BookmarksContextProvider";


//funtion with standard fetchAPI ()
{/*export function useJobItem(activeId: number | null) {

  const [jobItem, setJobItem] = useState<TJobDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    setIsLoading(true)

    if (!activeId) {
      setIsLoading(false);
      return;
    }

    const fetchJob = async () => {
      console.log(activeId);
      const response = await fetch(`https://bytegrad.com/course-assets/projects/rmtdev/api/data/${activeId}`);
      const data = await response.json();
      const jobDetails = data.jobItem
      setIsLoading(false);
      setJobItem(jobDetails)

    };

    fetchJob();

    console.log("state ", jobItem)
  }, [activeId]);

  return { isLoading, jobItem } as const
}

hook with react-query*/}

//the actual fetch function to be passed to reactquery
//!!! We need to type the return type of the fetcher function!!!
const actualFetchOneItem = async (activeId: number | null): Promise<{ public: boolean, jobItem: TJobDetails }> => {
  //here we need to actually fetch the data. React-Query is only managing caching and retry
  const response = await fetch(`https://bytegrad.com/course-assets/projects/rmtdev/api/data/${activeId}`);

  //4xx or 5xx
  if (!response.ok) {

    const errorDetails = await response.json();

    throw new Error(errorDetails.description)

  }

  const data = await response.json();
  return data
}

export function useJobItem(activeId: number | null) {

  const { data, isInitialLoading } = useQuery(
    //query key
    ['job-item', activeId],
    //actual fetch
    () => (activeId ? actualFetchOneItem(activeId) : null),
    //cache and error behaviour
    {
      staleTime: 1000 * 60 * 60, //an hour
      refetchOnWindowFocus: false,
      retry: false,
      enabled: !!activeId, //if id is present -> true else false. Could've use Boolean(activeId)
      onError: (e) => {
        console.log(e)
      }
    }
  )
  const jobItem = data?.jobItem;
  const isLoading = isInitialLoading;
  return { jobItem, isLoading } as const
}


const actualFetchAllItems = async (searchText: string): Promise<{ public: boolean, sorted: boolean, jobItems: TJobItem[] }> => {

  const apiUrl = "https://bytegrad.com/course-assets/projects/rmtdev/api/data";
  const response = await fetch(`${apiUrl}?search=${searchText}`);

  //4xx or 5xx
  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(errorDetails.description)
  }

  const data = await response.json();
  return data;
}

export function useSearchQuery(searchText: string) {
  const { data, isInitialLoading } = useQuery(
    //query key
    ['job-items', searchText],
    //actual fetch
    () => (searchText ? actualFetchAllItems(searchText) : null),
    //cache and error behaviour
    {
      staleTime: 1000 * 60 * 60, //an hour
      refetchOnWindowFocus: false,
      retry: false,
      enabled: !!searchText, //if id is present -> true else false. Could've use Boolean(activeId)
      onError: (e: unknown) => {

        let message;
        if (e instanceof Error) {
          message = e.message;
        } else if (typeof e === "string") {
          message = e;
        } else {
          message = "An error occurred";
        }

        toast.error(message);
      }
    }
  )


  return { jobItems: data?.jobItems, isLoading: isInitialLoading } as const

}

export function useActiveId() {
  const [activeId, setActiveId] = useState<number | null>(null);

  //read the id from the url
  useEffect(() => {
    //"log the endpoint" event
    const handleChangeHash = () => {
      const id = +window.location.hash.slice(1); // punem + in fata ca sa transformam din string in number
      setActiveId(id) //without the starting #
    };
    handleChangeHash();

    //get endpoint
    window.addEventListener("hashchange", handleChangeHash);

    return () => {
      window.removeEventListener("hashchange", handleChangeHash);
    };
  }, []);

  return activeId;
}


export function useDebounce(searchText: string) {
  const [debouncedText, setDebouncedText] = useState("");
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(searchText);
    }, 500);

    return () => clearTimeout(timerId) //clear timeout 
  }, [searchText]);

  return debouncedText
}

export function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {

  //get from localStorage
  const [value, setValue] = useState(JSON.parse(
    localStorage.getItem(key) || JSON.stringify(initialValue)
  ));

  //save to localstorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const

}

export function useBookmarksContext() {
  const context = useContext(BookmarksContext);

  if (!context) {
    throw new Error(
      "useBookmarksContext must be used within a BookamrksContextProvider!"
    );
  }

  return context;
}

//used to betch by multiple ids
export function useJobItems(ids: number[]) {

  //used from react Query to query for multiple strings (eg. our use case with multiple ids)
  const results = useQueries({

    queries: ids.map(id => ({
      queryKey: ['job-item', id],
      //uses the already existing fetch method
      queryFn: () => actualFetchOneItem(id),
      staleTime: 1000 * 60 * 60, //an hour
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id), //if id is present -> true else false. Could've use Boolean(activeId)
      onError: (e: undefined) => {
        console.log(e)
      }
    })),


  });



  const jobItems = results.map(result => result.data?.jobItem).filter(jobItem => jobItem !== undefined);

  //if at least one has isLoading true, then isLoading is true
  const isLoading = results.some(result => result.isLoading)

  return {jobItems,isLoading}


}


export function useOnClickOutside(refs, handler) {
    useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      //daca nu ma dat click pe buton, sa nu ruleze asta
      // am refactorizat in customHook
      if (
        e.target instanceof HTMLElement &&
        refs.every((ref)=> !ref.current?.contains(e.target))
      ) {
        
        handler();

      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [refs, handler]);

}