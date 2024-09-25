import { useState } from "react";
import "./App.css";

const LIST_ITEMS = [
    {
        id: crypto.randomUUID(),
        timestamp: new Date(),
        text: "Java",
    },
    {
        id: crypto.randomUUID(),
        timestamp: new Date(),
        text: "Node.js",
    },
    {
        id: crypto.randomUUID(),
        timestamp: new Date(),
        text: "SQL",
    },
    {
        id: crypto.randomUUID(),
        timestamp: new Date(),
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
            timestamp: new Date(),
            text: nameItem,
        };
        console.log(newElement);
        // Save new object to DS or send to API.
        const copylistItems = [...items]; // make a copy
        copylistItems.push(newElement); // mutate the object
        setItems(copylistItems); // update the state with the new object
    };

    const handleOnChangeNameItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameItem(e.target.value);
    };

    const handleOnClickDelete = (idElement: string) => {
        console.log(`Handle onClick Delete`);
        console.log(`Delete element with id: ` + idElement);
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
            </main>
        </>
    );
}

export default App;
