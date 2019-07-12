import React from 'react';

function SauceViewer(props) {
  const [currentSauce, setCurrentSauce] = React.useState([]);
  React.useEffect(() => {
    const { state } = props.location;
    const { id } = props.match.params;
    const selected = state.filter(sauce => sauce.id === parseInt(id));
    setCurrentSauce(selected);
  }, [props.match.params.id]);
  console.log(currentSauce);
  return <div>Sauce Boss </div>;
}

export default SauceViewer;
