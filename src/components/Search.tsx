import { FC, useState } from 'react';

type Props = {};

const Search: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        value={searchValue}
        onChange={handleChangeSearchValue}
      />
    </div>
  );
};

export default Search;
