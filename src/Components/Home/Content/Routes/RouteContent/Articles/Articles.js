import React from 'react';
import {Link} from 'react-router-dom';
import './Articles.css'
import img1 from '../../../../../../Assets/Grasses/img.png'
import img2 from '../../../../../../Assets/Grasses/img (1).png'
import img3 from '../../../../../../Assets/Grasses/img (2).png'
import img4 from '../../../../../../Assets/Grasses/img (3).png'
import img5 from '../../../../../../Assets/Grasses/img (4).png'
import img6 from '../../../../../../Assets/Grasses/img (5).png'
import img7 from '../../../../../../Assets/Grasses/img (6).png'
import img8 from '../../../../../../Assets/Grasses/img (7).png'
import img9 from '../../../../../../Assets/Grasses/img (8).png'
import img10 from '../../../../../../Assets/Grasses/img (9).png'

const Articles = () => {
    return (
        <div className='articles'>
            <div className="container">
                <div className='route__nav'>
                    <Link className='route__link' to='/'>Главная </Link>
                    <span className='route__link-arrow'> </span>
                    <span className='route__nav-text'>Полезные статьи</span>
                </div>
                <div className="articles__info">
                    <img src={img1} alt="grass"/>
                    <div>
                        <p className='articles__title'>Инструкция по созданию газона</p>
                        <span className='articles__date'>08.10.2021</span>
                        <p className='articles__subtitle'>После строительства собственного дома на загородном участке, появляется естественное желание благоустроить приусадебный участок. Обустройство садовых дорожек, высаживание цветов и строительство беседки или террасы – это не полный список того, что можно реализовать в данном случае. Чтобы территория выглядела завершенной, целесообразно высеять полноценное газонное покрытие, которое будет радовать великолепным внешним видом.</p>
                    </div>
                </div>
                <div className="articles__info">
                    <img src={img2} alt="grass"/>
                    <div>
                        <p className='articles__title'>Как подготовить газон к зимовке</p>
                        <span className='articles__date'>12.10.2021</span>
                        <p className='articles__subtitle'>Стандартный уход за газоном включает в себя ряд простых действий: периодическая стрижка, аэрация, а также внесение удобрений. Этих процедур хватает, чтобы получить ровный и зеленый газон, который станет украшением вашего участка. Но учитывая климатические особенности большинства регионов нашей страны, где зима достаточно сурова, важно правильным образом подготовить газонное покрытие к зимовке.</p>
                    </div>
                </div>
                <div className="articles__info">
                    <img src={img3} alt="grass"/>
                    <div>
                        <p className='articles__title'>Склерофиты</p>
                        <span className='articles__date'>03.06.2021</span>
                        <p className='articles__subtitle'>Склерофиты относятся к числу засухоустойчивых растений (ксерофитов), которые приспособлены к произрастанию в засушливых местностях. Обладают жесткими побегами, поэтому при дефиците влаги не проявляют внешних признаков увядания (могут потерять до 25% влаги, которая в них содержится). Отличаются сильно развитыми механическими тканями листа, что и позволяет им хорошо переносить засуху.</p>
                    </div>
                </div>
                <div className="articles__info">
                    <img src={img4} alt="grass"/>
                    <div>
                        <p className='articles__title'>Ксерофиты</p>
                        <span className='articles__date'>03.06.2021</span>
                        <p className='articles__subtitle'>В природе существуют группы растений, которые адаптированы к непростым условиям произрастания. Они хорошо переносят засуху, поэтому могут расти в местностях с засушливым климатом.
                            К такой группе относятся ксерофиты – это растения сухих мест обитания, которые могут переносить продолжительный период засухи и воздействие высоких температур. Их можно встретить в сухих субтропиках, пустынях, песчаных дюнах, сухих степях и т.д.</p>
                    </div>
                </div>
                <div className="articles__info">
                    <img src={img5} alt="grass"/>
                    <div>
                        <p className='articles__title'>Мезофиты</p>
                        <span className='articles__date'>01.06.2021</span>
                        <p className='articles__subtitle'>Влага обеспечивает жизнедеятельность всего живого на планете, потому что без нее невозможна жизнь растительного и животного мира. В зависимости от потребности в уровне влажности, растения классифицируются по нескольким видам. Одной из этих групп являются мезофиты – это наземные растения, которые приспособлены к обитанию с более или менее достаточным увлажнением почвы.</p>
                    </div>
                </div>
                <div className="articles__info">
                    <img src={img6} alt="grass"/>
                    <div>
                        <p className='articles__title'>Большие клумбы на газоне</p>
                        <span className='articles__date'>08.10.2021</span>
                        <p className='articles__subtitle'>Клумба отличается от цветника тем что цветниками называют любой участок, на котором посажены разные виды декоративной растительности. Особенности клумбы - правильная геометрическая форма, четкость линий и замкнутость контура. Растения высаживают с соблюдением симметрии в определенной последовательности.
                            Традиционно клумбы создаются прямоугольными или круглыми, но можно пофантазировать и выбрать более...</p>
                    </div>
                </div>
                <div className="articles__info">
                    <img src={img7} alt="grass"/>
                    <div>
                        <p className='articles__title'>Лучшие медоносы для пчел</p>
                        <span className='articles__date'>11.02.2020</span>
                        <p className='articles__subtitle'>К группе медоносных культур специалисты относят ряд покрытосеменных растений, цветы которых снабжены специфическими железами (нектарниками), вырабатывающими сахаристую жидкость. Внешне они выглядят как приплюснутые возвышенности, бугорки либо желобки, расположенные у основания бутона, на стеблях, черешках, прилистниках, прицветниках. Процессы синтеза нектара направлены на создание условий для перекрестного...</p>
                    </div>
                </div>
                <div className="articles__info">
                    <img src={img8} alt="grass"/>
                    <div>
                        <p className='articles__title'>Известковая почва</p>
                        <span className='articles__date'>11.02.2020</span>
                        <p className='articles__subtitle'>Далеко не каждому садоводу в России достается участок с качественным, плодородным грунтом. Большинство огородников вынуждены проводить серьезные мероприятия по улучшению земли. Известковая почва содержит минимум 50% извести, остальная часть в разных соотношениях приходится на песок и глину. Если знать основные особенности грунта, а также методы повышения качества известняка, можно получить достойный урожай любых ...</p>
                    </div>
                </div>
                <div className="articles__info">
                    <img src={img9} alt="grass"/>
                    <div>
                        <p className='articles__title'>Виды газонокосилок</p>
                        <span className='articles__date'>11.02.2020</span>
                        <p className='articles__subtitle'>В уходе за газоном одним из обязательных мероприятий является регулярная стрижка. Чтобы поддерживать декоративность травостоя, лишнюю растительность необходимо убирать. Ручными косами редко кто пользуется. Это очень трудоемкий процесс, требующий определенного мастерства. Более надежный и безопасный вариант - газонокосилка. С помощью практичных устройств у садоводов и дачников есть возможность облегчить себе труд...</p>
                    </div>
                </div>
                <div className="articles__info">
                    <img src={img10} alt="grass"/>
                    <div>
                        <p className='articles__title'>Как выбрать семена для газона</p>
                        <span className='articles__date'>11.02.2020</span>
                        <p className='articles__subtitle'>Универсальных видов газонных трав не существует. Пока не выведено таких растений, которые одинаково хорошо растут на всех видах грунтов и в разных уголках России. Семена подбираются индивидуально для каждого участка с учетом почвенно-климатических условий. Чтобы не ошибиться в выборе, важно разбираться в видах газонных трав и внимательно изучать заявленные производителем характеристики растительных культур.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;