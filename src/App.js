import React, { Fragment, useState, useEffect } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';


export default function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [filterCountries, setFilterCountries] = useState([]);
  const [population, setPopulation] = useState(0);

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
    newFilter = newFilter.toLowerCase();
    const filterCountries = allCountries.filter(country => country.filterName.includes(newFilter));
    const population = calcPopulation(filterCountries);
    setFilterCountries(filterCountries);
    setPopulation(population);
  }

  const calcPopulation = (countries) => {
    const pop = countries.reduce((acc, curr) => {
      return acc + curr.population
    }, 0)
    return pop;
  }

  useEffect(() => {
    const fetchAllCountries = async () => {
      const url = 'https://restcountries.eu/rest/v2/all';
      const res = await fetch(url);
      const json = await res.json();
      const allCountries = json.map(({ name, numericCode, flag, population }) => {
        return {
          id: numericCode,
          name,
          filterName: name.toLowerCase(),
          flag,
          population
        };
      })
      const population = calcPopulation(allCountries);
      setAllCountries(allCountries);
      setFilterCountries(Object.assign([], allCountries));
      setPopulation(population);
    }
    fetchAllCountries();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <h1 style={styles.centeredTitle}>Países! 3 - hooks</h1>
        <Header
          filter={filter}
          countryCount={filterCountries.length}
          population={population}
          onChangeFilter={handleFilter} />
        <Countries countries={filterCountries} />
      </div>
    </Fragment>
  );
}

const styles = {
  centeredTitle: {
    textAlign: 'center',
  }
}
