import React, { useState, useEffect } from 'react';
import { useDrop, useDrag, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { EventEmitter } from 'events';
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
      },
      {
        id: 101,
        name: 'Continue Coding',
        stars: 'five stars',
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

const CardDeck = () => {
  const [stateData, setStateData] = useState(data);

  const mutateData = (id, value, currentType, type) => {
    data = data.map((obj) => {
      let rObj = obj;
      if (rObj.type === currentType) {
        rObj.content = rObj.content.filter((obj) => obj.id !== id);
      }
      if (rObj.type === type) {
        rObj.content.push({
          id,
          name: value,
        });
      }
      return rObj;
    });
    listener.emit('moved');
  };

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
          <CardDrop type={obj.type} mutateData={mutateData}>
            {obj.content.map((val, idx) => (
              <Card
                key={val.id}
                pos={idx}
                id={val.id}
                value={val.name}
                newItem={val.id === newId}
                type={obj.type}
                stars={val.stars}
              />
            ))}
          </CardDrop>
        </div>
      ))}
    </div>
  );
};

const CardDrop = ({ type, children, mutateData }) => {
  const [, drop] = useDrop({
    accept: 'card',
    drop: (props, monitor) => {
      const items = monitor.getItem();
      const { type: currentType, value, id } = items;
      // Mutate data
      console.log('Item: ', value, id);
      mutateData(id, value, currentType, type);
    },
  });

  return <div ref={drop} className="drop-area">{children}</div>;
};

const Card = ({ value, newItem, pos, id, type, stars }) => {
  const [, drag] = useDrag({
    type: 'card',
    item: { id, value, pos, type, stars },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = newItem ? 0.7 : 1;

  return (
    <div ref={drag} style={{ opacity }}>
      <div className="label-wrapper">
        <div className="label">{value}</div>
        <div className="stars">{stars}</div>
      </div>
    </div>
  );
};

const Container4 = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <CardDeck />
    </DndProvider>
  );
};

export default Container4;
