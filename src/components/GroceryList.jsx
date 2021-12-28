import "./Grocery.css";

export const GroceryList = ({ title, status, id, handleDelete }) => {

    return (
        <div className="rounded-3 p-3 text-center shadow">
            <p className="fs-5">{title}</p>
            <button onClick={() => handleDelete(id)} className="btn btn-outline-danger btn-sm">Delete</button>
        </div>
    );
};