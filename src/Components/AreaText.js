import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

const AreaText = () => {
    
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  return (
    <Editor
      editorState={editorState}
      onChange={editorState => setEditorState(editorState)}
    />
  );
}

ReactDOM.render(
  <MyEditor />,
  document.getElementById('container')
);