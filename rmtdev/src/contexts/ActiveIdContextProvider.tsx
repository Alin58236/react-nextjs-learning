import { createContext } from "react";
import { TActiveIdContext } from "../types/types";
import { useActiveId } from "../lib/hooks";

export const ActiveIdContext = createContext<TActiveIdContext | null>(null);

const ActiveIdContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const activeId = useActiveId();
  
  return (
    <ActiveIdContext.Provider
      value={{
        activeId,
      }}
    >
      {children}
    </ActiveIdContext.Provider>
  );
};

export default ActiveIdContextProvider;
