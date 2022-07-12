import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { payment } from "../../redux/Actions/Action";
import "./SportCard.css";
import { useState } from "react";

export default function SportCard({sport}) {

  console.log(sport)

	const dispatch = useDispatch();

	const [input, setInput] = useState({
		payer_email: localStorage.getItem("data")
			? JSON.parse(localStorage.getItem("data")).email
			: "",
		items: [
			{
				//id del usuario loggeado
				id: "",
				//id de la actividad
				category_id: "",
				//titulo de la actividad
				title: "",
				//descripción de la actividad
				description: "",
				//Cantidad a comprar (siempre 1 por ser inscripción)
				quantity: 1,
				//Precio de la inscripción
				unit_price: 0,
			},
		],
	});

	useEffect(() => {
		input.items[0].id &&
			dispatch(payment(input)).then((url) => window.open(url, "_blank"));
	}, [input]);

	const handleClick = (e) => {
		e.preventDefault();
		// const item = view[e.target.value];
		// setInput({
		// 	...input,
		// 	items: [
		// 		{
		// 			id: JSON.parse(localStorage.getItem("data")).id,
		// 			category_id: item.id,
		// 			title: item.description,
		// 			description: item.description,
		// 			quantity: 1,
		// 			unit_price: item.fee,
		// 		},
		// 	],
		// });
    console.log("Hola :3")
	};

	return (
		<div className="card">
			{
				<ContenedorModal>
					<div>
						<h2>Categoria: {sport.category.name}</h2>
						<p>Descripción: {sport.description} </p>
						<p>
							Horarios: De {sport.start} a {sport.finish}
						</p>
						<p>Comienza: {sport.day}</p>
						<p>Profesor: {sport.user.name}</p>
						<p>${sport.fee}</p>
					</div>
					<button onClick={handleClick}>
						Inscribete
					</button>
				</ContenedorModal>
			}
		</div>
	);
}

const ContenedorModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    position: relative;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px
    align-items: center,
`;
