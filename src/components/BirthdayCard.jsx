
import { useState } from 'react';
import yuyiImage from '../assets/img/ImageYuyi.webp';
import cakeImage from '../assets/img/ImageBirthday.webp';


const BirthdayCard = ({ onShowMessage }) => {
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        setShowMessage(!showMessage);
        if (!showMessage) {
            onShowMessage(); // cuando se va a mostrar, dispara la música
        }
    };

    return (
        <div className="card">
            <h1>✨ ¡Feliz Cumpleaños, Yuliana! ✨</h1>
            <p>No sé qué desea alguien tan especial como tú, pero sé que mereces
                lo más bonito de este mundo.
            </p>

            <div className="images-container">
                <img
                    src={yuyiImage}
                    alt="Yuliana sonriendo"
                    className="birthday-img"
                />
                <img
                    src={cakeImage}
                    alt="Torta de cumpleaños"
                    className="birthday-img"
                />
            </div>

            <div className="button-container">
                <button
                    onClick={handleClick}
                    className="message-button"
                >
                    {showMessage ? 'Ocultar Mensaje Especial' : 'Ver Mensaje Especial'}
                </button>
            </div>

            {showMessage && (
                <div className="surprise-message">
                    <p>
                        ¡Sorpresa! 🎉 Hoy no es un día cualquiera... Hoy el mundo celebra la llegada de alguien increíble como tú. 🌟<br /><br />

                        Un día como hoy, 23 de mayo, nació una persona capaz de regalar alegría con solo una mirada y de iluminarlo todo con su sonrisa. 🎇<br /><br />

                        Me siento afortunado de conocerte y de poder desearte un cumpleaños lleno de momentos mágicos, risas sinceras y sueños que empiecen a hacerse realidad.
                        Que la vida te devuelva en felicidad todo lo bonito que tú le regalas a quienes te rodean. ✨<br /><br />

                        En este día tan especial, pásala genial al lado de tus seres queridos. Disfruta cada momento de la vida de la mano del Señor, sirviéndole con amor y guardando su palabra,
                        confiando siempre en que Él concederá las peticiones de tu corazón y te dará todo aquello que tanto anhelas. Recuerda que Él es tu amigo fiel
                        y estará contigo en cada paso de tu vida. 🙏<br /><br />

                        Ojalá este sea solo el comienzo de un año inolvidable para ti, lleno de amor, nuevas aventuras y muchísima felicidad.
                        Nunca dejes de sonreír, porque tu sonrisa tiene el poder de hacer de este mundo un lugar mucho más bonito. 🎈🎉<br /><br />

                        ¡Feliz cumpleaños, hermosa! 🎂🌷<br /><br />

                        Con mucho cariño, para esa personita tan especial: <strong>Yuyi - Yuli - Yuliita - Yulianita = Yuliana ✨😊</strong>
                    </p>
                    {/* Aca debe de quedar el audio */}
                    
                </div>
            )}
        </div>
    );
};

export default BirthdayCard;
