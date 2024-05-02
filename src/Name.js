import "./Name.css"

function Name({ id, name, size, update, remove }) {
  return (
    <div>
      <div className="name-field">
        <textarea
          onChange={(e) => update(id, e.currentTarget.value, size)}
          value={name}
        ></textarea>
      </div>
      <div className="name-size">
        Størrelse: <input
          type="number"
          value={size}
          min={0}
          max={99}
          step={5}
          onChange={(e) => update(id, name, e.currentTarget.value)}
        />
      </div>
    </div>
  );
}

export default Name;
