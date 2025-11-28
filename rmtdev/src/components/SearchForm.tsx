export default function SearchForm({
  setCurrentPage,
  searchText,
  setSearchText,
}: {
  setCurrentPage: (number:number) =>void;
  searchText: string;
  setSearchText: (text: string) => void;
}) {
  const validateText = (text: string) => {
    // Example validation: limit to 
    const maxLength = 30;
    return text.slice(0, maxLength);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      action="#"
      className="search"
    >
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        onChange={(e) => {
          const validated = validateText(e.target.value);
          setSearchText(validated);
          setCurrentPage(1);
        }}
        value={searchText}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
