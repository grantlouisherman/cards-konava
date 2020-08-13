import React from "react";

export const inchesToPixelConverter = (width, height) =>(
  { width: (width*96), height:(height*96)});

  export const CenterContent = {
    'text-align': 'center'
  }

  export const renderAnimatedButton = (id, shapeType, iconType) => (
      <div id={id} class="ui vertical animated button" tabindex="0">
        <div class="hidden content">{shapeType}</div>
        <div class="visible content">
          <i class={`${iconType}`}></i>
        </div>
      </div>
    );
