
import './Home.css';
import Card from '../Card/Card';



export default function Home() {
    return (
        <main className="main">
            <div className="container">

                <div className="content-wrapper">

                    <div className="content-list">
                        <div className="content-list__item">
                            <h3 className="title-2">Выбери технику изучения</h3>
                            <p className="content-list__text">Выбери свой уровень и технику, которую будешь сегодня изучать. </p>
                        </div>

                        {/* вынести кнопки в отдельный компонент и назвать одинаково стили*/}
                        <div className="content-levels">
                            <button className="content-levels__btn">Начинающий</button>
                            <button className="content-levels__btn">Средний</button>
                            <button className="content-levels__btn">Продвинутый</button>
                        </div>

                        {/* вынести карточки в отдельный компонент pages/Vocab, не забыть про импорты*/}
                        <Card />

                    </div>

                    <div>

                    </div>


                </div>
            </div>
        </main>
    )
}
