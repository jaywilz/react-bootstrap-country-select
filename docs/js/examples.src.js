const { Row, Col, Form } = ReactBootstrap;
const CountrySelect = ReactBootstrapCountrySelect;

const SimpleUsage = () => {

  const [ value, setValue ] = React.useState(null);

  return (
    <CountrySelect
      value={value}
      onChange={setValue}
    />
  );

};

const ValueAs = () => {

  const [ value, setValue ] = React.useState('fr');

  return (
    <CountrySelect
      value={value}
      onChange={setValue}
      valueAs='id'
    />
  );

};

const Flush = () => {

  const [ value, setValue ] = React.useState('fr');

  return (
    <CountrySelect
      value={value}
      onChange={setValue}
      valueAs='id'
      flush={false}
    />
  );

};

const Sort = () => {

  const [ value, setValue ] = React.useState(null);

  return (
    <CountrySelect
      value={value}
      onChange={setValue}
      sort={(c1, c2) => {
        if (c1.name.length > c2.name.length) return 1;
        else if (c1.name.length < c2.name.length) return -1;
        else return 0;
      }}
    />
  );

};

const ListItemFormatter = () => {

  const [ value, setValue ] = React.useState(null);

  return (
    <CountrySelect
      value={value}
      onChange={setValue}
      countryLabelFormatter={country => `${country.name} (${country.alpha2})`}
    />
  );

};

const MatchingOptions = () => {

  const [ value, setValue ] = React.useState(null);

  return (
    <CountrySelect
      value={value}
      onChange={setValue}
      matchNameFromStart={false}
      matchAbbreviations
    />
  );

};

ReactDOM.render(
  <SimpleUsage/>,
  document.getElementById('example-simple-usage')
);

ReactDOM.render(
  <ValueAs/>,
  document.getElementById('example-value-as')
);

ReactDOM.render(
  <Flush/>,
  document.getElementById('example-flush')
);

ReactDOM.render(
  <Sort/>,
  document.getElementById('example-sort')
);

ReactDOM.render(
  <ListItemFormatter/>,
  document.getElementById('example-list-item-formatter')
);

ReactDOM.render(
  <MatchingOptions/>,
  document.getElementById('example-matching-options')
);
