import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/car/operation';
import { getCars, getIsLoading, getError } from '../redux/car/selectors';
import { List, Button,ListDiv} from './CardPageStyled';
import { CardItem } from 'components/card/Card';

export const CardList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <ListDiv>
        <List>
          {cars.map(car => (
            <CardItem
              key={car.id}
              car={car}
            />
          ))}
        </List>
      </ListDiv>
    </>
  );
};
