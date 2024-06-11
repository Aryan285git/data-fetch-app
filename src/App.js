import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  font-family: 'Arial', sans-serif;
  background: #f0f4f8;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #007bff;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
`;

const Box = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  flex: 1;
  max-width: 30%;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #007bff, #00d4ff);
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: linear-gradient(135deg, #0056b3, #0098d1);
    transform: scale(1.05);
  }
`;

const DataContent = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const DataTitle = styled.h2`
  font-size: 1.5em;
  color: #666;
`;

const DataBody = styled.p`
  font-size: 1em;
  color: #666;
  line-height: 1.5;
`;

const App = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  const fetchData = async (setData) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=1'); // Example API
      setData(response.data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <AppContainer>
      <Title>Data Fetching App</Title>
      <Container>
        <Box>
          <Button onClick={() => fetchData(setData1)}>Fetch Data 1</Button>
          {data1 && (
            <DataContent>
              <DataTitle>{data1.title}</DataTitle>
              <DataBody>{data1.body}</DataBody>
            </DataContent>
          )}
        </Box>
        <Box>
          <Button onClick={() => fetchData(setData2)}>Fetch Data 2</Button>
          {data2 && (
            <DataContent>
              <DataTitle>{data2.title}</DataTitle>
              <DataBody>{data2.body}</DataBody>
            </DataContent>
          )}
        </Box>
        <Box>
          <Button onClick={() => fetchData(setData3)}>Fetch Data 3</Button>
          {data3 && (
            <DataContent>
              <DataTitle>{data3.title}</DataTitle>
              <DataBody>{data3.body}</DataBody>
            </DataContent>
          )}
        </Box>
      </Container>
    </AppContainer>
  );
};

export default App;
