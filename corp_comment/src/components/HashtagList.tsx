import HashtagItem from "./HashtagItem";

type HashtagListProps = {
  selectedCompany: string;
  setSelectedCompany: (company: string) => void;
  companyList: string[];
};

const HashtagList = ({selectedCompany, setSelectedCompany,companyList}:HashtagListProps) => {
  return (
    <ul className="hashtags">
      
      {companyList.map((company) => (
        <HashtagItem selectedCompany={selectedCompany} key={company} setSelectedCompany={setSelectedCompany} company={company} />
      ))}
    </ul>
  );
};

export default HashtagList;
