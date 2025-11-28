import { useEffect, useState } from "react";
import { TJobDetails, TJobItem } from "../types/types";
import { useQuery } from "@tanstack/react-query";


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
const actualFetch = async (activeId:number | null) : Promise<{public: boolean, jobItem:TJobDetails}> => {
      //here we need to actually fetch the data. React-Query is only managing caching and retry
      const response = await fetch(`https://bytegrad.com/course-assets/projects/rmtdev/api/data/${activeId}`);
      const data = await response.json();
      return data
}

export function useJobItem(activeId: number | null) {

  const {data, isLoading } = useQuery(
    //query key
    ['job-item', activeId], 
    //actual fetch
    () => (activeId ? actualFetch(activeId) : null),
    //cache and error behaviour
    {
      staleTime: 1000*60*60, //an hour
      refetchOnWindowFocus: false,
      enabled: !!activeId, //if id is present -> true else false. Could've use Boolean(activeId)
      onError: (e) => {
        console.error("ReactQuery Error -",e)
      }
    }
  )
  const jobItem = data?.jobItem;
  return { jobItem, isLoading  } as const
}

export function useJobItems(searchText: string) {
  const apiUrl = "https://bytegrad.com/course-assets/projects/rmtdev/api/data";
  const [jobItems, setJobItems] = useState<TJobItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const jobItemsSliced = jobItems.slice(0, 7);

  //not really recommended to use useEffect for this case
  useEffect(() => {
    setIsLoading(true);
    if (searchText === "") return;

    const fetchData = async () => {
      const response = await fetch(`${apiUrl}?search=${searchText}`);
      const data = await response.json();
      console.log("Search Jobs Response:", data);
      setIsLoading(false);
      setJobItems(data.jobItems);
    };

    fetchData();


  }, [searchText]);
  //better to use onCHange in the input to make the api call

  return { jobItems, jobItemsSliced, isLoading } as const
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