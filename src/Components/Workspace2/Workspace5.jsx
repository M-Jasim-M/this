import React, { useState, useEffect } from 'react';
import { useDrop, useDrag, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { EventEmitter } from 'events';
import Card2 from '../Dashboard/Card';
import './Dnd.css';

let data = [
  {
    icebox: true,
    type: 'First Icebox',
    content: [
      {
        id: 100,
        name: 'Build application server',
        stars: 'five stars',
        fname: 'ashfjkhf',
        bname: 'afhdjfh',
        class: 'sfjhsjhf',
      },
      {
        id: 101,
        name: 'Continue Coding',
        stars: 'five stars',
        fname: 'ashfjkhf',
        bname: 'afhdjfh',
        class: 'sfjhsjhf',
      },
      {
        id: 102,
        name: 'Continue Coding',
        stars: 'five stars',
        fname: 'ashfjkhf',
        bname: 'afhdjfh',
        class: 'sfjhsjhf',
      },
    ],
  },
  {
    type: 'Icebox',
    content: [
      {
        id: 104,
        name: 'Programming',
        stars: 'five stars',
        fname: 'ashfjkhf',
        bname: 'afhdjfh',
        class: 'sfjhsjhf',
      },
    ],
  },
  {
    type: 'Doing',
    content: [],
  },
  {
    type: 'Done',
    content: [],
  },
];

let newId = 0;
let listener = new EventEmitter();

const mutateData = (id, value, stars, fname, bname, currentType, type) => {
  data = data.map((obj) => {
    let rObj = obj;
    if (rObj.type === currentType) {
      rObj.content = rObj.content.filter((obj) => obj.id !== id);
    }
    if (rObj.type === type) {
      rObj.content.push({
        id,
        name: value,
        stars,
        fname,
        bname,
        class: 'default class', // You may set a default value for class if needed
      });
    }
    return rObj;
  });
  listener.emit('moved');
};

const itemTypes = {
  CARD: 'card',
};

const CardDrop = ({ type, children }) => {
  const [, drop] = useDrop({
    accept: itemTypes.CARD,
    drop: (props, monitor) => {
      const items = monitor.getItem();
      let { type: currentType, value, id, stars, fname, bname } = items;
      console.log('Item dropped: ', value, id);
      mutateData(id, value, stars, fname, bname, currentType, type);
    },
  });

  return <div ref={drop} className="drop-area">{children}</div>;
};

const Card = ({ value, newItem, pos, id, type, stars, fname, bname, className }) => {
  const [, drag] = useDrag({
    type: itemTypes.CARD,
    item: { id, value, pos, type, stars, fname, bname, className },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      dropResult: monitor.getDropResult(),
    }),
  });

  const opacity = newItem ? 0.7 : 1;

  return (
    <div ref={drag} style={{ opacity }} className="draggable-card">
      <div>
        {/* <div>Name: {value}</div>
        <div>Stars: {stars}</div>
        <div>F Name: {fname}</div>
        <div>B Name: {bname}</div>
        <div>Class: {className}</div> */}
        <Card2/>
      </div>
    </div>
  );
};

const CardDeck = () => {
  const [stateData, setStateData] = useState(data);

  useEffect(() => {
    listener.on('moved', () => {
      console.log(data);
      setStateData([...data]);
    });
  }, []);

  return (
    <div className="tag-wrapper">
      {stateData.map((obj) => (
        <div key={obj.type} className="label-container">
          <div className="panel">
            <h3 className="panel-label">{obj.type}</h3>
          </div>
          <CardDrop type={obj.type}>
            {obj.content.map((val, idx) => (
              <Card
                key={val.id}
                pos={idx}
                id={val.id}
                value={val.name}
                newItem={val.id === newId}
                type={obj.type}
                stars={val.stars}
                fname={val.fname}
                bname={val.bname}
                className={val.class}
              />
            ))}
          </CardDrop>
        </div>
      ))}
    </div>
  );
};

const Container5 = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <CardDeck />
    </DndProvider>
  );
};

export default Container5;
