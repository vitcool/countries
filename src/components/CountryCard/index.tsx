import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";

import { ICountriesData } from "../../api/hooks/useGetCountries";

type CountryCardProps = {
  data: ICountriesData | undefined;
  isLoading: boolean;
};

const CountryCard = ({ data, isLoading }: CountryCardProps) => {
  if (isLoading) {
    return <CircularProgress />
  }
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data?.countries[0]?.emoji}
          </Typography>
          <Typography variant="h5" component="div">
            {data?.countries[0]?.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data?.countries[0]?.capital}
          </Typography>
          <Typography variant="body2">{data?.countries[0]?.phone}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CountryCard;
