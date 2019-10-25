import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap';
import SelectList from './select';
import ItemList from './item';

function App() {
  const [selectValue, setSelectValue] = useState<string>('');
  const [itemList, setItemList] = useState<string[]>([]);

  const handleItem = () => {
    if (selectValue !== '') {
      setItemList([...itemList, selectValue]);
    }
  }

  return (
    <>
      <Container>
        <div className="section" />
        <Row>
          <Col lg={8}>
            <SelectList selectValue={selectValue} setSelectValue={setSelectValue} />
          </Col>
        </Row>

        <Row className="component-space">
          <Col>
            <Button outline color="secondary" onClick={() => handleItem()} disabled={(selectValue === '') ? true : false}> Add to List </Button>
          </Col>
        </Row>

        <Row>
          <Col lg={8}>
            <ItemList itemList={itemList} setItemList={setItemList} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
