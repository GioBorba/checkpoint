type CardProps = {
    imagem : string;
    nome : string;
    idade : number;

}


const Card : React.FC<CardProps> = ({imagem, nome, idade}) => {
    return (
        <div className="card">
            <img src = {imagem} className="foto" alt="imagem do usuário"></img>
            <p className="infos">{nome}</p>
            <p className="infos">{idade} anos</p>
        </div>
    )
}

export default Card;