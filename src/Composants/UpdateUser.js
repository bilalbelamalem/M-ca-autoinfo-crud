import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../Config/actions";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function UpdateUser() {
    const { id } = useParams();
    const user = useSelector((data) => data.users.find((u) => u.id === parseInt(id)));
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [piece, setPiece] = useState(user.piece);
    const [quantity, setQuantity] = useState(user.quantity);
    const [price, setPrice] = useState(user.price);
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
        dispatch(updateUserAction({
            id: id,
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

export default UpdateUser;