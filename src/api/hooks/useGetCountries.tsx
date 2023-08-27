import { gql, useLazyQuery } from "@apollo/client";

const GET_COUNTRIES = gql`
  query ($filter: CountryFilterInput!) {
    countries(filter: $filter) {
      capital
      name
      emoji
      phone
      name
      languages {
        code
      }
    }
  }
`;

interface Language {
  code: string;
}

export interface ICountry {
  capital: string;
  name: string;
  emoji: string;
  phone: string;
  languages: Language[];
}

export interface ICountriesData {
  countries: ICountry[];
}

export interface IFilters {
  code?: { in: string[] };
}

export type UseGetCountriesProps = {
  variables: { filter: IFilters };
  skip?: boolean;
};

const useGetCountries = ({
  variables,
}: UseGetCountriesProps) => {
  const query = useLazyQuery<ICountriesData, { filter: IFilters }>(
    GET_COUNTRIES,
    {
      variables,
    },
  );

  return query;
};

export default useGetCountries;
