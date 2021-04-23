import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productsApi from 'src/api/productApi';
import HeaderComponent from 'src/components/Header';
import { searchProduct } from './searchAction';

function Header(props) {
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const [search, setSearch] = useState({ _page: 1, _limit: 10, q: '' });
  const [data, setData] = useState(null);
  const totalCartQuantity = carts.totalQuantity;

  useEffect(() => {
    (async () => {
      try {
        const searchResult = await productsApi.getAll(search);
        const action = searchProduct(searchResult);
        dispatch(action);
        setData(searchResult);
      } catch (error) {
        console.log({ error });
      }
    })();
    return () => {
      setData(null);
    };
  }, [search]);

  const handleSearch = (q) => {
    console.log({ q });
    const newData = { ...search, _limit: 10, q: q };
    setSearch(newData);
  };
  return (
    <div>
      <HeaderComponent
        totalQuantity={totalCartQuantity}
        handleSearch={handleSearch}
        searchResult={data}
      />
    </div>
  );
}

export default Header;
