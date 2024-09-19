import '../styles/style.css'; 

interface CheckBoxComponent {
    filepath: string;
    text1: string;
    text2: string;
}

function CheckBoxComponent({ filepath, text1, text2 }: CheckBoxComponent) {
    return (
        <div id='checkbox-component'>
            <img src={filepath} alt="Yellow Check" /><p>{text1}</p>
            <img src={filepath} alt="Yellow Check" /><p>{text2}</p>
        </div>
    );
}

export default CheckBoxComponent;