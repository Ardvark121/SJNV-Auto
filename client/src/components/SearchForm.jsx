<<<<<<< HEAD
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({onSearch}) => {
  const [searchParams, setSearchParams] = useState({
    make: '',
    model: '',
    fuel_type: '',
    drive: '',
    cylinders: '',
    transmission: '',
    year: '',
    min_city_mpg: '',
    max_city_mpg: '',
    min_hwy_mpg: '',
    max_hwy_mpg: '',
    min_comb_mpg: '',
    max_comb_mpg: '',
    limit: 10, // Default limit
=======
import { useState } from "react";
import PropTypes from "prop-types";

const SearchForm = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    make: "",
    model: "",
    fuel_type: "",
    drive: "",
    transmission: "",
    year: "",
    min_comb_mpg: "",
    max_comb_mpg: "",
>>>>>>> bc48952c30e827588af7fda97b9dcbae7f35b229
  });

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    onSearch(searchParams);
=======
    // Filter out empty strings and convert numbers
    const filteredParams = Object.entries(searchParams).reduce((acc, [key, value]) => {
      if (value) {
        acc[key] = (key === "year" || key === "min_comb_mpg" || key === "max_comb_mpg") ? parseInt(value) : value;
      }
      return acc;
    }, {});

    onSearch(filteredParams);
>>>>>>> bc48952c30e827588af7fda97b9dcbae7f35b229
  };

  return (
    <form onSubmit={handleSubmit}>
<<<<<<< HEAD
      <input name="make" placeholder="Make (e.g., Audi)" onChange={handleChange} />
      <input name="model" placeholder="Model (e.g., A4)" onChange={handleChange} />
      <input name="fuel_type" placeholder="Fuel Type (e.g., gas)" onChange={handleChange} />
      <input name="drive" placeholder="Drive (e.g., fwd)" onChange={handleChange} />
      <input name="cylinders" placeholder="Cylinders (e.g., 4)" onChange={handleChange} type="number" />
      <input name="transmission" placeholder="Transmission (e.g., automatic)" onChange={handleChange} />
      <input name="year" placeholder="Year (e.g., 2020)" onChange={handleChange} type="number" />
      <input name="min_comb_mpg" placeholder="Min Combined MPG" onChange={handleChange} type="number" />
      <input name="max_comb_mpg" placeholder="Max Combined MPG" onChange={handleChange} type="number" />
      <input name="limit" placeholder="Result Limit (1-50)" onChange={handleChange} type="number" />
=======
      <input
        name="make"
        placeholder="Make (e.g., Audi)"
        onChange={handleChange}
      />
      <input
        name="model"
        placeholder="Model (e.g., A4)"
        onChange={handleChange}
      />
      <input
        name="fuel_type"
        placeholder="Fuel Type (e.g., gas)"
        onChange={handleChange}
      />
      <input
        name="drive"
        placeholder="Drive (e.g., fwd)"
        onChange={handleChange}
      />
      <input
        name="transmission"
        placeholder="Transmission (e.g., automatic)"
        onChange={handleChange}
      />
      <input
        name="year"
        placeholder="Year (e.g., 2020)"
        onChange={handleChange}
        type="number"
      />
      <input
        name="min_comb_mpg"
        placeholder="Min Combined MPG"
        onChange={handleChange}
        type="number"
      />
      <input
        name="max_comb_mpg"
        placeholder="Max Combined MPG"
        onChange={handleChange}
        type="number"
      />
>>>>>>> bc48952c30e827588af7fda97b9dcbae7f35b229

      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
<<<<<<< HEAD
    onSearch: PropTypes.func.isRequired,
  };
=======
  onSearch: PropTypes.func.isRequired,
};
>>>>>>> bc48952c30e827588af7fda97b9dcbae7f35b229

export default SearchForm;
