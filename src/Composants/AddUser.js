import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction } from "../Config/actions";
import { useNavigate } from "react-router-dom";

function AddUser() {
    const count = useSelector(data => data.users.length);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [piece, setPiece] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(250);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        switch (piece) {
            case "turbo":
                setPrice(250);
                break;
            case "amortisseur":
                setPrice(450);
                break;
            case "vilebrequin":
                setPrice(1550);
                break;
            case "bougie":
                setPrice(50);
                break;
            default:
                setPrice(0);
        }
    }, [piece]);

    const handleClick = () => {
        dispatch(addUserAction({
            id: count + 1,
            name: name,
            email: email,
            piece: piece,
            quantity: quantity,
            price: price
        }));
        navigate('/');
    };
    return (
        <form>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Pièce</label>
            <select value={piece} onChange={(e) => setPiece(e.target.value)}>
                <option value="turbo">Turbo</option>
                <option value="amortisseur">Amortisseur</option>
                <option value="vilebrequin">Vilebrequin moteur</option>
                <option value="bougie">Bougie d'allumage</option>
            </select>

            <label>Quantité</label>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <label>Prix</label>
            
            <input type="text" value={price} readOnly />
            <button onClick={handleClick}>Enregistrer</button>
        </form>
    );
}

export default AddUser;