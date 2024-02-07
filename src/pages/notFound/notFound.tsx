import './404.css'
import { Button } from 'primereact/button';
function NotFoundPage() {
    return (
        <>
            <div className="nf-container">
                <div className="nf-title">
                    <h1><span>4</span>0<span>4</span></h1>
                </div>
                <div className="nf-subtitle">
                    <p>Oops... Esta página não foi encontrada.</p>
                </div>
                <div className="nf-buttons">
                    <Button label="Voltar para o Início" />
                </div>
            </div>
        </>
    )
}

export default NotFoundPage;