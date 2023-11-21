import React, { useState, useEffect } from 'react';
import { useDrop, useDrag, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import classnames from 'classnames';
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

const createNewData = () => {
  newId = Math.floor(Math.random() * 100000000000);
  data[0].content.push({
    id: newId,
    name: '',
  });
  console.log('Modified data', data);
  listener.emit('moved');
};

const editData = (itemType, id, idx, editedText) => {
  data = data.map((obj) => {
    let rObj = { ...obj };
    if (rObj.type === itemType) {
      rObj.content = rObj.content.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name: editedText,
          };
        }
        return item;
      });
    }
    return rObj;
  });
  console.log(data);
  listener.emit('moved');
};

let mutateData = (id, value, currentType, type) => {
    data = data.map((obj) => {
      let rObj = obj;
      if (rObj.type === currentType) {
        // We have to remove the element
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
  
const itemTypes = {
  CARD: 'card',
};

const CardDrop = ({ type, children }) => {
  const [, drop] = useDrop({
    accept: itemTypes.CARD,
    drop: (props, monitor) => {
      const items = monitor.getItem();
      let { type: currentType, value, id } = items;
      // Mutate data
      console.log('Item: ', value, id);
      mutateData(id, value, currentType, type);
    },
  });

  return <div ref={drop} className="drop-area">{children}</div>;
};

// ...

const Card = ({ value, newItem, pos, id, type, stars }) => {
  const [focus, setFocus] = useState(false);
  const [, drag] = useDrag({
    type: itemTypes.CARD,
    item: { id, value, pos, type, stars },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      dropResult: monitor.getDropResult(),
    }),
  });

  const loseFocus = () => {
    setFocus(false);
    newId = 0;
  };

  const handleKeyUp = () => {};

  const edit = () => {
    console.log('Edited');
    setFocus(true);
  };

  const onFocus = () => {
    console.log('Preparing to focus');
  };

  const onChange = (e) => {
    console.log('Value preparing to change', e.target.value);
    editData(type, id, pos, e.target.value);
  };

  useEffect(() => {
    if (newItem) {
      // Focus on the textarea when it's a new item
      document.getElementById(`textarea-${id}`).focus();
    }
  }, [newItem, id]);

  const opacity = newItem ? 0.7 : 1;

  return (
    <div ref={drag} style={{ opacity }}>
      <div className="label-wrapper">
        <textarea
          onKeyUp={handleKeyUp}
          onFocus={onFocus}
          onChange={onChange}
          autoFocus={focus}
          id={`textarea-${id}`}
          onBlur={loseFocus}
          className="label"
          type="text"
          value={value}
          placeholder="Placeholder"
          disabled={!focus && !newItem}
        />
        <div className="stars">{stars}</div>
        <a className="btn" onClick={edit}>
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

// ...

const CardDeck = () => {
  const [stateData, setStateData] = useState(data);

  const addItem = () => {
    console.log('We have added items');
    createNewData();
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
            {/* <h4>{obj.stars}</h4> */}
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
            />
            
            ))}
            {obj.icebox && (
              <button onClick={addItem} className="plus" type="button">
                +
              </button>
            )}
          </CardDrop>
        </div>
      ))}
    </div>
  );
};

const Container2 = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <CardDeck />
    </DndProvider>
  );
};

export default Container2;
