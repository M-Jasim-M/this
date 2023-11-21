// // import React, { useState, useEffect } from 'react';
// // import { useDrop, useDrag, DndProvider } from 'react-dnd';
// // import { HTML5Backend } from 'react-dnd-html5-backend';

// // const itemTypes = {
// //   CARD: 'card',
// // };

// // let data = [{
// //     icebox: true,
// //     type: 'First Icebox',
// //     content: [{
// //       id: 100,
// //       name: 'Build application server'
// //     }, {
// //       id: 101,
// //       name: 'Continue Coding'
// //     }]
// //   }, {
// //     type: 'Icebox',
// //     content: [{
// //       id: 104,
// //       name: 'Programming'
// //     }]
// //   }, {
// //     type: 'Doing',
// //     content: [
// //     ]
// //   }, {
// //     type: 'Done',
// //     content: [
      
// //     ]
// //   }]
// // let newId = 0;

// // const listener = new EventEmitter();

// // let mutateData = (id, value, currentType, type) => {
// //   data = data.map((obj) => {
// //     let rObj = obj;
// //     if (rObj.type === currentType) {
// //       // We have to remove the element
// //       rObj.content = rObj.content.filter((obj) => obj.id !== id);
// //     }
// //     if (rObj.type === type) {
// //       rObj.content.push({
// //         id,
// //         name: value,
// //       });
// //     }
// //     return rObj;
// //   });
// //   listener.emit('moved');
// // };

// // let editData = (itemType, id, idx, editedText) => {
// //   data = data.map((obj) => {
// //     let rObj = obj;
// //     if (rObj.type === itemType) {
// //       rObj.content = rObj.content.map((obj) => {
// //         if (obj.id === id) {
// //           return {
// //             ...obj,
// //             name: editedText,
// //           };
// //         }
// //         return obj;
// //       });
// //     }
// //     return rObj;
// //   });
// //   listener.emit('moved');
// // };

// // let createNewData = () => {
// //   newId = Math.floor(Math.random() * 100000000000);
// //   data[0].content.push({
// //     id: newId,
// //     name: '',
// //   });
// //   console.log('Modified data', data);
// //   listener.emit('moved');
// // };

// // const CardDrop = ({ type, children }) => {
// //   const [, drop] = useDrop({
// //     accept: itemTypes.CARD,
// //     drop: (props, monitor) => {
// //       const items = monitor.getItem();
// //       const { currentType, value, id } = items;
// //       mutateData(id, value, currentType, type);
// //     },
// //   });

// //   return <div ref={drop} className="drop-area">{children}</div>;
// // };

// // const Card = ({ value, connectDragSource, newItem, pos, id }) => {
// //   const [focus, setFocus] = useState(false);

// //   const loseFocus = () => {
// //     setFocus(false);
// //   };

// //   const handleKeyUp = () => {
// //     // Handle key up if needed
// //   };

// //   const edit = () => {
// //     setFocus(true);
// //   };

// //   const onFocus = () => {
// //     console.log('Preparing to focus');
// //   };

// //   const onChange = (e) => {
// //     console.log('Value preparing to change', e.target.value);
// //     editData('CARD', id, pos, e.target.value);
// //   };

// //   useEffect(() => {
// //     if (newItem) {
// //       // Focus the textarea when a new item is created
// //       textareaRef.current.focus();
// //     }
// //   }, [newItem]);

// //   const textareaRef = React.createRef();

// //   return connectDragSource(
// //     <div>
// //       <div className="label-wrapper">
// //         <textarea
// //           onKeyUp={handleKeyUp}
// //           onFocus={onFocus}
// //           onChange={onChange}
// //           autoFocus={focus}
// //           ref={textareaRef}
// //           onBlur={loseFocus}
// //           className="label"
// //           type="text"
// //           value={value}
// //           placeholder="Placeholder"
// //           disabled={!focus && !newItem}
// //         />
// //         <a className="btn" onClick={edit}>
// //           <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // const CardDeck = () => {
// //   const [stateData, setStateData] = useState(data);

// //   const addItem = () => {
// //     console.log('We have added items');
// //     createNewData();
// //   };

// //   const renderCards = () => {
// //     return stateData.map((obj) => {
// //       return (
// //         <div key={obj.type} className="label-container">
// //           <div className="panel">
// //             <h3 className="panel-label">{obj.type}</h3>
// //           </div>
// //           <CardDrop type={obj.type}>
// //             {obj.content.map((val, idx) => (
// //               <Card
// //                 key={val.id}
// //                 pos={idx}
// //                 id={val.id}
// //                 value={val.name}
// //                 newItem={val.id === newId}
// //               />
// //             ))}
// //             {obj.icebox && (
// //               <button onClick={addItem} className="plus" type="button">
// //                 +
// //               </button>
// //             )}
// //           </CardDrop>
// //         </div>
// //       );
// //     });
// //   };

// //   useEffect(() => {
// //     listener.on('moved', () => {
// //       console.log(data);
// //       setStateData([...data]); // Ensure state is updated when data changes
// //     });
// //   }, []);

// //   return (
// //     <div className="tag-wrapper">
// //       {renderCards()}
// //     </div>
// //   );
// // };

// // const Container = () => {
// //   return (
// //     <DndProvider backend={HTML5Backend}>
// //       <CardDeck />
// //     </DndProvider>
// //   );
// // };

// // export default Container;
// import React, { useState, useEffect } from 'react';
// import { useDrop, useDrag, DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { EventEmitter } from 'events'; // Import EventEmitter from the events module

// const itemTypes = {
//   CARD: 'card',
// };

// let data = [
//   {
//     icebox: true,
//     type: 'First Icebox',
//     content: [
//       {
//         id: 100,
//         name: 'Build application server',
//       },
//       {
//         id: 101,
//         name: 'Continue Coding',
//       },
//     ],
//   },
//   {
//     type: 'Icebox',
//     content: [
//       {
//         id: 104,
//         name: 'Programming',
//       },
//     ],
//   },
//   {
//     type: 'Doing',
//     content: [],
//   },
//   {
//     type: 'Done',
//     content: [],
//   },
// ];
// let newId = 0;

// const listener = new EventEmitter();

// let mutateData = (id, value, currentType, type) => {
//   data = data.map((obj) => {
//     let rObj = obj;
//     if (rObj.type === currentType) {
//       // We have to remove the element
//       rObj.content = rObj.content.filter((obj) => obj.id !== id);
//     }
//     if (rObj.type === type) {
//       rObj.content.push({
//         id,
//         name: value,
//       });
//     }
//     return rObj;
//   });
//   listener.emit('moved');
// };

// let editData = (itemType, id, idx, editedText) => {
//   data = data.map((obj) => {
//     let rObj = obj;
//     if (rObj.type === itemType) {
//       rObj.content = rObj.content.map((obj) => {
//         if (obj.id === id) {
//           return {
//             ...obj,
//             name: editedText,
//           };
//         }
//         return obj;
//       });
//     }
//     return rObj;
//   });
//   listener.emit('moved');
// };

// let createNewData = () => {
//   newId = Math.floor(Math.random() * 100000000000);
//   data[0].content.push({
//     id: newId,
//     name: '',
//   });
//   console.log('Modified data', data);
//   listener.emit('moved');
// };

// const CardDrop = ({ type, children }) => {
//   const [, drop] = useDrop({
//     accept: itemTypes.CARD,
//     drop: (props, monitor) => {
//       const items = monitor.getItem();
//       const { currentType, value, id } = items;
//       mutateData(id, value, currentType, type);
//     },
//   });

//   return <div ref={drop} className="drop-area">{children}</div>;
// };

// const Card = ({ value, connectDragSource, newItem, pos, id }) => {
//   const [focus, setFocus] = useState(false);

//   const loseFocus = () => {
//     setFocus(false);
//   };

//   const handleKeyUp = () => {
//     // Handle key up if needed
//   };

//   const edit = () => {
//     setFocus(true);
//   };

//   const onFocus = () => {
//     console.log('Preparing to focus');
//   };

//   const onChange = (e) => {
//     console.log('Value preparing to change', e.target.value);
//     editData('CARD', id, pos, e.target.value);
//   };

//   useEffect(() => {
//     if (newItem) {
//       // Focus the textarea when a new item is created
//       textareaRef.current.focus();
//     }
//   }, [newItem]);

//   const textareaRef = React.createRef();

//   return connectDragSource(
//     <div>
//       <div className="label-wrapper">
//         <textarea
//           onKeyUp={handleKeyUp}
//           onFocus={onFocus}
//           onChange={onChange}
//           autoFocus={focus}
//           ref={textareaRef}
//           onBlur={loseFocus}
//           className="label"
//           type="text"
//           value={value}
//           placeholder="Placeholder"
//           disabled={!focus && !newItem}
//         />
//         <a className="btn" onClick={edit}>
//           <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
//         </a>
//       </div>
//     </div>
//   );
// };

// const CardDeck = () => {
//   const [stateData, setStateData] = useState(data);

//   const addItem = () => {
//     console.log('We have added items');
//     createNewData();
//   };

//   const renderCards = () => {
//     return stateData.map((obj) => {
//       return (
//         <div key={obj.type} className="label-container">
//           <div className="panel">
//             <h3 className="panel-label">{obj.type}</h3>
//           </div>
//           <CardDrop type={obj.type}>
//             {obj.content.map((val, idx) => (
//               <Card
//                 key={val.id}
//                 pos={idx}
//                 id={val.id}
//                 value={val.name}
//                 newItem={val.id === newId}
//               />
//             ))}
//             {obj.icebox && (
//               <button onClick={addItem} className="plus" type="button">
//                 +
//               </button>
//             )}
//           </CardDrop>
//         </div>
//       );
//     });
//   };

//   useEffect(() => {
//     listener.on('moved', () => {
//       console.log(data);
//       setStateData([...data]); // Ensure state is updated when data changes
//     });
//   }, []);

//   return (
//     <div className="tag-wrapper">
//       {renderCards()}
//     </div>
//   );
// };

// const Container = () => {
//   return (
//     <DndProvider backend={HTML5Backend}>
//       <CardDeck />
//     </DndProvider>
//   );
// };

// export default Container;
import React, { useState, useEffect } from 'react';
import { useDrop, useDrag, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { EventEmitter } from 'events'; // Import EventEmitter from the events module
import './Dnd.css'

const itemTypes = {
  CARD: 'card',
};

let data = [
  {
    icebox: true,
    type: 'First Icebox',
    content: [
      {
        id: 100,
        name: 'Build application server',
      },
      {
        id: 101,
        name: 'Continue Coding',
      },
    ],
  },
  {
    type: 'Icebox',
    content: [
      {
        id: 104,
        name: 'Programming',
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

const listener = new EventEmitter();

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

let editData = (itemType, id, idx, editedText) => {
  data = data.map((obj) => {
    let rObj = obj;
    if (rObj.type === itemType) {
      rObj.content = rObj.content.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            name: editedText,
          };
        }
        return obj;
      });
    }
    return rObj;
  });
  listener.emit('moved');
};

let createNewData = () => {
  newId = Math.floor(Math.random() * 100000000000);
  data[0].content.push({
    id: newId,
    name: '',
  });
  console.log('Modified data', data);
  listener.emit('moved');
};

const CardDrop = ({ type, children }) => {
  const [, drop] = useDrop({
    accept: itemTypes.CARD,
    drop: (props, monitor) => {
      const items = monitor.getItem();
      const { currentType, value, id } = items;
      mutateData(id, value, currentType, type);
    },
  });

  return <div ref={drop} className="drop-area">{children}</div>;
};

const Card = ({ value, newItem, pos, id }) => {
    const [focus, setFocus] = useState(false);
  
    const loseFocus = () => {
      setFocus(false);
    };
  
    const handleKeyUp = () => {
      // Handle key up if needed
    };
  
    const edit = () => {
      setFocus(true);
    };
  
    const onFocus = () => {
      console.log('Preparing to focus');
    };
  
    const onChange = (e) => {
      console.log('Value preparing to change', e.target.value);
      editData('CARD', id, pos, e.target.value);
    };
  
    useEffect(() => {
      if (newItem) {
        // Focus the textarea when a new item is created
        textareaRef.current.focus();
      }
    }, [newItem]);
  
    const textareaRef = React.createRef();
  
    const [{ isDragging }, drag] = useDrag({
      type: itemTypes.CARD, // Set the type property here
      item: { id, value },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    const opacity = isDragging ? 0.4 : 1;
  
    return (
      <div ref={drag} style={{ opacity }}>
        <div className="label-wrapper">
          <textarea
            onKeyUp={handleKeyUp}
            onFocus={onFocus}
            onChange={onChange}
            autoFocus={focus}
            ref={textareaRef}
            onBlur={loseFocus}
            className="label"
            type="text"
            value={value}
            placeholder="Placeholder"
            disabled={!focus && !newItem}
          />
          <a className="btn" onClick={edit}>
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  };
  
const CardDeck = () => {
  const [stateData, setStateData] = useState(data);

  const addItem = () => {
    console.log('We have added items');
    createNewData();
  };

  const renderCards = () => {
    return stateData.map((obj) => {
      return (
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
              />
            ))}
            {obj.icebox && (
              <button onClick={addItem} className="plus" type="button">
                +
              </button>
            )}
          </CardDrop>
        </div>
      );
    });
  };

  useEffect(() => {
    listener.on('moved', () => {
      console.log(data);
      setStateData([...data]); // Ensure state is updated when data changes
    });
  }, []);

  return (
    <div className="tag-wrapper">
      {renderCards()}
    </div>
  );
};

const Container = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <CardDeck />
    </DndProvider>
  );
};

export default Container;