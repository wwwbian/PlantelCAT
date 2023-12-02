import React, { createContext, useContext, useState } from "react";
import gallardo from "../imagen/gallardo.jpg";
import lucas from "../imagen/Lucas.jpg"

export const MyContext = createContext();

  function ContextProvider ({ children }) {

  const [modalOn, setModalOn]= useState(false);
  const [newCardData, setNewCardData] = useState({
    title: "",
    content: "",
    img: ""
  });
  const [cardsData, setCardsData ] = useState([
    {
        id: 1,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2021/01/jugadores-web_Herrera_22.png",
        title: "GUIDO GABRIEL HERRERA 22",
    },
    {
        id: 2,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/02/jugadores-web_Martinez_12.png",
        title: "LAUREANO MARTINEZ 12",
    },
    {
        id: 3,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/09/jugadores-web_barbi_33.png",
        title: "SANTINO BARBI 33",
    },
    {
        id: 4,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/09/jugadores-web_Morales_23.png",
        title: "LAUTARO MORALES 23",
    },
    {
        id: 5,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/02/jugadores-web_Suarez_03.png",
        title: "LUCAS SUAREZ 3",
    },
    {
        id: 6,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2022/03/jugadores-web_Benavidez_29.png",
        title: "GASTON BENAVIDEZ 29",
    },
    {
        id: 7,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/02/jugadores-web_Catalan_4.png",
        title: "MATIAS CATALAN 4",
        
    },
    {
        id: 8,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/02/jugadores-web_Rodriguez_6.png",
        title: "JUAN GABRIEL RODRIGUEZ 6",
    },
    {
        id: 9,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/09/jugadores-web_Bersano_27.png",
        title: "FERNANDO BERSANO 27",
    },
    {
        id: 10,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/09/jugadores-web_Mantilla_05.png",
        title: "KEVIN MANTILLA 5",
    },
    {
        id: 11,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/09/jugadores-web_Olmos_41.png",
        title: "TOMAS OLMOS 41",
    },
{
        id: 12,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2022/07/jugadores-web_Ortegoza_30.png",
        title: "ULISES ORTEGOZA 30",
    },
{
        id: 13,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2021/08/jugadores-web_Villagra_18.png",
        title: "RODRIGO VILLAGRA 18",
    },
{
        id: 14,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2022/03/jugadores-web_Garro_16.png",
        title: "RODRIGO GARRO 16",
    },
{
        id: 15,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/02/jugadores-web_Portillo_28.png",
        title: "JUAN CARLOS PORTILLO 28",
    },
{
        id: 16,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/02/jugadores-web_Sequiera_13.png",
        title: "LUIS ALBERTO SEQUEIRA 13",
    },
{
        id: 17,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/09/jugadores-web_Gomez_46.png",
        title: "MATIAS GOMEZ 46",
    },
{
        id: 18,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/09/jugadores-web_angulo_07.png",
        title: "LUIS MIGUEL ANGULO SEVILLANO 7",
    },
{
        id: 19,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/02/jugadores-web_Dipietri_15.png",
        title: "VALENTIN DEPIETRI 15",
    },
{
        id: 20,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2022/03/jugadores-web_Romero_34.png",
        title: "JOSE DAVID ROMERO 34",
    },
{
        id: 21,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/02/jugadores-web_Bustos_10.png",
        title: "LAUTARO NAHUEL BUSTOS 10",
    },
{
        id: 22,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/02/WEB_RAMON-SOSA-1.png",
        title: "RAMON SOSA ACOSTA 24",
    },
{
        id: 22,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/02/jugadores-web_barrera_26.png",
        title: "DIEGO BARRERA 26",
    },
{
        id: 23,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/09/jugadores-web_Barticciotto_14.png",
        title: "BRUNO BARTICCIOTTO DI BARTOLO 14",
    },
{
        id: 24,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/09/jugadores-web_Molina_11.png",
        title: "TOMAS MOLINA 11",
    },
{
        id: 25,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/09/jugadores-web_Pozzo_36.png",
        title: "FRANCISCO JOSÉ POZZO 36",
    },
{
        id: 26,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/09/jugadores-web_Vallejos_20.png",
        title: "JAVIER NICOLAS VALLEJO 20",
    },
  ]);

  const handleDeleteCard = (id) => {
    // Filtrar las tarjetas para eliminar la que coincida con el ID
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
};

return (
<div>
    <Contexto.Provider >
        {children}
    </Contexto.Provider>



</div>
)
}

export default  ContextProvider