import React from 'react';
import { Input } from 'antd';
import useTodoStore from '../app/store';

const Search = () => {
  const setSearchQuery = useTodoStore((state) => state.setSearchQuery);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Input.Search
      placeholder="Search todos"
      onChange={handleSearch}
      style={{ marginBottom: '16px' }}
    />
  );
};

export default Search;
