import { useState } from "react";
import styled from 'styled-components';
import { BarChart } from '@mui/x-charts/BarChart';


const CheckDiv = styled.div`

    margin: 2% 2%;
    border: 5px black !important;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2% 2%;
  margin-right: 500px;

`;


function App() {

  const series = [
    {
      data: [2, 5, 3],
      barStyle: {
        // This will turn the middle bar red
        color: "red",
        // This will make the middle bar thicker
        stroke: 3,
      },
    },
  ];

  return (
   <>
   
   
   <CheckDiv> <h2>PTO hours for DGunner: </h2> </CheckDiv>
  
   <Container>
   <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: ["PTO", "PTO Taken", "UTO Taken"],
          scaleType: "band",
        },
      ]}
      series={series}
      width={1000}
      height={600}
    />
   <div>
   <h2> Stats </h2>
   <h4>PTO Available:</h4>
   <h4>PTO Used:</h4>
   <h4>UTO Used:</h4>

</div>
   </Container>
   
   
   
   
   
   
   
   </>
  );
}

export default App;
