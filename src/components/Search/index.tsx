import { SyntheticEvent } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";

import countries, { CountryType } from "../../constants/countries";
import { ICountriesData, IFilters } from "../../api/hooks/useGetCountries";
import { LazyQueryExecFunction } from "@apollo/client";

type SearchProps = {
  loadCountry: LazyQueryExecFunction<
    ICountriesData,
    {
      filter: IFilters;
    }
  >;
  isLoading: boolean;
};

const Search = ({ loadCountry, isLoading }: SearchProps) => {
  const handleCountryChange = (
    _: SyntheticEvent,
    value: CountryType | null,
  ) => {
    if (value) {
      console.log("type", typeof loadCountry);
      loadCountry({
        variables: {
          filter: {
            code: {
              in: [value.code],
            },
          },
        },
      });
    }
  };

  return (
    <Autocomplete
      fullWidth
      id="country-select-demo"
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      loading={isLoading}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
      onChange={handleCountryChange}
    />
  );
};

export default Search;
