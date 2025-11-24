
type HashtagItemProps = {
  selectedCompany: string;
  setSelectedCompany: (company: string) => void;
  company: string;
  key: string;
};  

const HashtagItem = ({selectedCompany,setSelectedCompany,company,key}:HashtagItemProps) => {

  const handleSelect = (company: string) => {
    if(selectedCompany === company) {
      setSelectedCompany("");
      return;
    }
    setSelectedCompany(company);
  }

  return (
    <li key={key}>
          <button onClick={() => handleSelect(company)}>#{company}</button>
    </li>
  )
}

export default HashtagItem