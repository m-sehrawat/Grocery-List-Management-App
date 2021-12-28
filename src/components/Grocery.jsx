import { nanoid } from "nanoid";

import { useState } from "react";

import { GroceryInput } from "./GroceryInput";

import { GroceryList } from "./GroceryList";

export const Grocery = () => {

    const [list, setList] = useState([]);

    const handleAdd = (data) => {
        const payload = {
            title: data,
            status: false,
            id: nanoid(9)
        }
        setList([...list, payload]);
    };

    const handleDelete = (id) => {
        setList((prev) => prev.filter((element) => element.id !== id));
    };

    return (
        <>
            <GroceryInput getData={handleAdd} />

            <div className="gridBox">
                {list.map((item) => {
                    return <GroceryList {...item} key={item.id} handleDelete={handleDelete} />
                })}
            </div>
        </>
    )
}