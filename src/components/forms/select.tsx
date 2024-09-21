export function Select({ collection,value, onChange }: any ) {
    return (
      <div>
        <select id="collection" 
          onChange={(e)=> onChange(e.target.value)} 
          value={value}
          className="form-select">
          {collection.map((c: any)=> (
            <option value={c.id} key={"prod"+c.id}>{c.nom}</option>
          ))}
        </select>
      </div>
    );
  }