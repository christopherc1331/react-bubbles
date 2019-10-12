import React, { useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth.js";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ editColors, deleteColorList, addColor, colors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    AxiosWithAuth()
      .put(`/colors/${colorToEdit.id}`, colorToEdit)
      .then(res => editColors(res.data))
      .catch(err => console.log(err));
    // getColors();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    AxiosWithAuth()
      .delete(`/colors/${color.id}`)
      .then(res => deleteColorList(res.data.id))
      .catch(err => console.log(err));
  };

  const addNewColor = color => {
    AxiosWithAuth()
      .post(`/colors`)
      .then(res => {
        console.log(res);
        // addColor(res.data);
      })
      .catch(err => console.log(err));
  };

  const [newColor, setNewColor] = useState({
    colorName: ""
  });

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={() => deleteColor(color)}>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      {/* <div className="spacer" /> */}
      {/* stretch - build another form here to add a color */}
      {/* <div>
        <form>
          <input name="colorName" value={newColor.colorName} />
          <p>hi</p>
        </form>
      </div> */}
    </div>
  );
};

export default ColorList;
