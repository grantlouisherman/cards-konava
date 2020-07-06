import React, { useState } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

import TransformerComponent from './TransformerComponent';
import ShapeMenu from './ShapeMenu';
import CardComponentText  from './CardComponentText';
import CardComponentImage from './CardComponentImage';
const Canvas = () => {
  const [ componentsToRender, setComponentsToRender ] = useState([]);
  const [ selectedShape, setSelectedShape ] = useState("");
  const id = componentsToRender.length+1;
  const setCurrentShape = (e) => {
    setSelectedShape(e.target.name());
  };
  const handleMenuClick = (e, type) => {
    let componentToAdd = type === 'text' ?
    <CardComponentText key={`${id}-${type}`}  /> :
    <CardComponentImage key={`${id}-${type}`} />;


    setComponentsToRender([componentToAdd, ...componentsToRender])
  };

  return ([
    <ShapeMenu onClick={handleMenuClick.bind(this)} />,
    <Stage
       width={window.innerWidth}
       height={window.innerHeight}
       onClick={setCurrentShape}
       >
      <Layer>
      { componentsToRender.map(componentToRender => componentToRender)}
      <TransformerComponent
            selectedShapeName={selectedShape}
          />
      </Layer>
    </Stage>
  ]
 );
}

// const Canvas = () => {
//   const [ componentsToRender, setComponentsToRender ] = useState([]);
//   const [ selectedShape, setSelectedShape ] = useState("");
//   const handleStageClick = e => {
//     setSelectedShape(e.target.name());
//     const id = componentsToRender.length+1;
//     setComponentsToRender([<CardComponent name={`${id}-rect`} />])
// };
//   return ([
//     <ShapeMenu />,
//     <Stage
//        width={window.innerWidth}
//        height={window.innerHeight}
//        onClick={handleStageClick}
//        >
//       <Layer>
//       { componentsToRender.map(componentToRender => componentToRender)}
//       <TransformerComponent
//             selectedShapeName={selectedShape}
//           />
//       </Layer>
//     </Stage>
//   ]
//
//  );
// }
export default Canvas;
