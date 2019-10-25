import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './index.css';

type Props = {
    itemList: string[];
    setItemList: (item: string[]) => void;
}

function ItemList({ itemList, setItemList }: Props) {

    const list = itemList;
    //delete item by updating state
    const deleteItem = (deleteKey: string) => {
        setItemList(list.filter((element, index) => index !== parseInt(deleteKey, 10)));
    }
    //return unordered list
    return (
        <Container className="item-list">
            <div className="list-unstyled">
                <ul>
                    {list.map((item, index) =>
                        <li key={index}>
                            <Row>
                                <Col>
                                    {item}
                                </Col>
                                <Col lg={1} md={1} sm={1}>
                                    <div className="delete-button" id={index + ''} onClick={(event) => { deleteItem(event.currentTarget.id) }} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z" /></svg>
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                        </li>
                    )}
                </ul>
            </div>
        </Container>
    );
}

export default ItemList;