import { useState } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import styles from "./editor.module.scss";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt } from "@fortawesome/free-solid-svg-icons";
import { faExpandAlt } from "@fortawesome/free-solid-svg-icons/faExpandAlt";

interface IProps {
  displayName: string;
  language: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Editor = (props: IProps) => {
  const { displayName, language, value, onChange } = props;
  const [open, setOpen] = useState(true);

  const handleChange = (_editor: any, _data: any, value: string) => {
    onChange(value);
  };

  return (
    <div
      className={`${styles.editorContainer} ${open ? "" : styles.collapsed}`}
    >
      <div className={styles.editorTitle}>
        {displayName}
        <button
          className={styles.expandCollapseBtn}
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>

      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className={styles.codeMirrorWrapper}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;
