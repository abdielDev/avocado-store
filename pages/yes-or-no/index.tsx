import React, { useState } from 'react';
import Layout from '@components/Layout/Layout';
import { Button } from 'semantic-ui-react';

const YesOrNo = () => {
  const [randomAnswer, setRandomAnswer] = useState(Math.floor(Math.random() * 2))

  const handleClick = () => {
    setRandomAnswer(Math.floor(Math.random() * 2))
  }

  return (
    <Layout>
      <div className="container-yesOrNo">
        <h1>¿Debería comer aguacate hoy?</h1>
        <h2>{randomAnswer ? 'Yes' : 'No'}</h2>
        <Button onClick={handleClick} color="green">Try again</Button>
      </div>
    </Layout>
  );
};

export default YesOrNo;