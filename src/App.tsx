import { useState } from 'react';
import AddFriend from './components/AddFriend';
import AddExpense from './components/AddExpense';
import Summary from './components/Summary';

function App() {
  const [activeTab, setActiveTab] = useState('friends');

  return (
    <div className="p-4 font-sans max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">💸 Split Expense App</h1>

      <div className="flex justify-around mb-4">
        <button onClick={() => setActiveTab('friends')}>Add Friends</button>
        <button onClick={() => setActiveTab('expenses')}>Add Expenses</button>
        <button onClick={() => setActiveTab('summary')}>Summary</button>
      </div>

      {activeTab === 'friends' && <AddFriend />}
      {activeTab === 'expenses' && <AddExpense />}
      {activeTab === 'summary' && <Summary />}
    </div>
  );
}

export default App;
