import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {
  const { repos } = React.useContext(GithubContext);
  console.log(repos);

  //chartData
  const ChartData = [
    {
      label: "HTML",
      value: "28"
    },
    {
      label: "CSS",
      value: "33"
    },
    {
      label: "JavaScript",
      value: "90"
    },
    {
      label: "C++",
      value: "120"
    },
    {
      label: "C#",
      value: "130"
    }
  ];

  return (

    <section className='section'>
      <Wrapper className="section-center">
        <ExampleChart data={ChartData} />
        <Pie3D data={ChartData} />
        <Doughnut2D data={ChartData} />
        <Column3D data={ChartData}/>
        <Bar3D data={ChartData}/>
      </Wrapper>

    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos
