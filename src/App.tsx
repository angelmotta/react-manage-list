import { useState } from "react";
import "./App.css";

interface Item {
    id: string;
    timestamp: number;
    text: string;
}

const LIST_ITEMS: Item[] = [
    {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        text: "Java",
    },
    {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        text: "Node.js",
    },
    {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        text: "SQL",
    },
    {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        text: "React",
    },
];

function App() {
    const [items, setItems] = useState(LIST_ITEMS);
    const [nameItem, setNameItem] = useState("");

    const handleSubmitElement = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`handle submit new element`);
        // // Create object using state variable
        const newElement = {
            id: crypto.randomUUID(),
            timestamp: Date.now(),
            text: nameItem,
        };
        console.log(newElement);
        // Save new object to DS or send to API.
        const copylistItems = [...items]; // make a copy
        copylistItems.push(newElement); // mutate the object
        setItems(copylistItems); // update the state with the new object
        setNameItem("");
    };

    const handleOnChangeNameItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameItem(e.target.value);
    };

    const handleOnClickDelete = (idElement: string) => {
        console.log(`Handle onClick Delete`);
        console.log(`Delete element with id: ` + idElement);
        const newListItems = items.filter((item) => item.id !== idElement);
        setItems(newListItems);
    };

    return (
        <>
            <h1>List App</h1>
            <main>
                <form onSubmit={handleSubmitElement}>
                    <input
                        type="text"
                        name="item"
                        required
                        placeholder="Nuevo elemento"
                        value={nameItem}
                        onChange={handleOnChangeNameItem}
                    />
                    <button>Agregar</button>
                </form>
                {items.length === 0 ? (
                    <p>Lista sin elementos</p>
                ) : (
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                {item.text}
                                <button
                                    onClick={() => handleOnClickDelete(item.id)}
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </main>
        </>
    );
}

export default App;
