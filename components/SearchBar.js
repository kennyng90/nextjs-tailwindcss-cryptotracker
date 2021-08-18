const SearchBar = ({ ...rest }) => {
  return (
    <div className="flex items-center w-[300px] mb-16">
      <input
        className="bg-gray-800 border-none p-4 rounded outline-none h-full w-full placeholder-gray-50"
        {...rest}
      />
    </div>
  );
};

export default SearchBar;
