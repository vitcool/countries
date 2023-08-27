import { Grid } from "@mui/material";

import useGetCountries from "../../api/hooks/useGetCountries";
import CountryCard from "../CountryCard";
import Search from "../Search";

const SearchPage = () => {
  const [loadCountry, { loading, data, called }] = useGetCountries({
    variables: { filter: { code: { in: [] } } },
  });

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ p: 2 }}>
      <Grid item xs={8}>
        <Search isLoading={loading} loadCountry={loadCountry} />
        {called && <CountryCard data={data || undefined} isLoading={loading} />}
      </Grid>
    </Grid>
  );
};

export default SearchPage;
