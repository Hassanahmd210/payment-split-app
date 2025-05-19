import { useState } from 'react';

function AddFriend() {
  const [name, setName] = useState('');

  const handleAdd = () => {
    console.log(`Friend added: ${name}`);
    setName('');
  };

  return (
    <div>
      <h2 className="text-xl mb-2">Add Friend</h2>
      <input
        type="text"
        className="border p-2 mr-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter friend name"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-3 py-1 rounded">
        Add
      </button>
    </div>
  );
}

export default AddFriend;
