import React,{useState,useEffect} from 'react';
import './ThirdScreen.css'
import Grass from "../../../../../../Assets/Third-screen/grass.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Navigation } from "swiper";
import SwiperCore, {Autoplay} from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import {Link} from "react-router-dom";

const ThirdScreen = () => {
    SwiperCore.use([Autoplay]);
    const [search, setSearch] = useState([]);
    useEffect(()=> {
        axios('http://localhost:8080/branded')
            .then(({data}) => setSearch(data));
    },[]);
    return (
        <section className='third-screen'>
            <div className="container">
                <div className='third-screen__top'>
                    <img className='third-screen__top-img' src={Grass} alt="grass"/>
                    <div className='third-screen__row'>
                        <p className='third-screen__top-title'>Наши преимущества</p>
                        <div className='third-screen__top-item'>
                            <div className='third-screen__info'>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.2187 20.1465C39.2187 12.2949 32.8516 5.92773 25 5.92773C17.1484 5.92773 10.7812 12.2949 10.7812 20.1465C10.7812 27.998 17.1484 34.3652 25 34.3652C32.8516 34.3652 39.2187 27.998 39.2187 20.1465ZM25 32.998C17.8906 32.998 12.1484 27.2559 12.1484 20.1465C12.1484 13.0371 17.8906 7.29492 25 7.29492C32.1094 7.29492 37.8516 13.0371 37.8516 20.1465C37.8516 27.2559 32.1094 32.998 25 32.998Z" fill="#2BA84A"/>
                                    <path d="M49.8828 43.0371L42.2656 29.873L42.3828 25.8105L46.0156 20.5371C46.1719 20.3027 46.1719 19.9902 46.0156 19.7559L42.3828 14.4824L42.2266 8.07617C42.2266 7.80273 42.0313 7.5293 41.7578 7.45117L35.7422 5.3418L31.875 0.263672C31.7188 0.0292969 31.4063 -0.0488281 31.1328 0.0292969L25 1.86523L18.8672 0.0292969C18.5938 -0.0488281 18.3203 0.0292969 18.125 0.263672L14.2578 5.3418L8.24219 7.45117C7.96875 7.5293 7.8125 7.80273 7.77344 8.07617L7.61719 14.4824L3.98438 19.7559C3.82813 19.9902 3.82813 20.3027 3.98438 20.5371L7.61719 25.8105L7.73438 29.873L0.117189 43.0371C-0.156248 43.5059 0.195314 44.0918 0.742189 44.0527C1.40625 44.0137 -1.71875 44.209 7.38281 43.6621L10.3516 49.5996C10.5859 50.0684 11.2891 50.1074 11.5625 49.6387L17.5781 39.248L18.1641 40.0293C18.3203 40.2637 18.6328 40.3418 18.9063 40.2637L25 38.4277L31.1328 40.2637C31.4063 40.3418 31.6797 40.2637 31.875 40.0293L32.4609 39.248L38.4766 49.6387C38.75 50.1074 39.4531 50.1074 39.6875 49.5996L42.6563 43.6621C42.8125 43.6621 49.0625 44.0527 49.2969 44.0527C49.8047 44.0918 50.1563 43.5059 49.8828 43.0371ZM42.2656 42.2559C41.9922 42.2559 41.7188 42.373 41.6016 42.6465L41.1328 43.584L36.0547 34.7949C36.0938 34.7949 38.6328 33.8965 38.4766 33.9355L43.3203 42.2949L42.2656 42.2559ZM7.8125 32.4121C7.89063 32.6074 8.04688 32.7246 8.24219 32.8027L10.1953 33.5059L5.03906 42.4121L1.91406 42.6074L7.8125 32.4121ZM13.9453 34.834L8.86719 43.623L8.39844 42.6855C8.28125 42.4512 8.08594 42.2949 7.73438 42.2949L6.67969 42.373L11.5234 33.9746L13.9453 34.834ZM11.0156 47.8418L9.60938 45.0684L14.9219 35.8496L16.6406 38.0762L11.0156 47.8418ZM31.0547 38.8184L25.1953 37.0605C25.0781 37.0215 24.9219 37.0215 24.8047 37.0605L18.9453 38.8184L15.2344 33.9355C15.1563 33.8184 15.0391 33.7402 14.9219 33.7012L9.14063 31.6699L8.98438 25.5762C8.98438 25.459 8.94531 25.3027 8.86719 25.2246L5.39063 20.1855L8.86719 15.1465C8.94531 15.0293 8.98438 14.9121 8.98438 14.7949L9.14063 8.66211L14.9219 6.63086C15.0391 6.5918 15.1563 6.51367 15.2344 6.39648L18.9453 1.51367L24.8047 3.27148C24.9219 3.31055 25.0781 3.31055 25.1953 3.27148L31.0547 1.51367L34.7656 6.35742C34.8438 6.47461 34.9609 6.55273 35.0781 6.5918L40.8594 8.62305L41.0156 14.7559C41.0156 14.873 41.0547 15.0293 41.1328 15.1074L44.6094 20.1465L41.1328 25.1855C41.0547 25.3027 41.0156 25.4199 41.0156 25.5371C40.9766 26.5527 40.9766 26.709 40.8594 31.6699C40.8594 31.6699 34.8438 33.7793 35.0781 33.7012C34.9609 33.7402 34.8438 33.8184 34.7656 33.9355C34.6094 34.1699 31.0547 38.8184 31.0547 38.8184ZM38.9844 47.8418L33.3203 38.0762C33.3594 38.0371 35.1563 35.6934 35.0391 35.8496L40.3516 45.0684L38.9844 47.8418ZM44.9609 42.4121L39.8047 33.5059L41.7578 32.8027C41.9531 32.7246 42.1094 32.5684 42.1875 32.4121L48.0859 42.6074L44.9609 42.4121Z" fill="#2BA84A"/>
                                    <path d="M31.3672 17.959H29.2578L29.7266 14.7949C29.8438 14.0137 29.4922 13.1934 28.8281 12.7637L27.8516 12.1387C27.5 11.9043 26.9922 12.0606 26.8359 12.4512L26.0156 14.5996C25.3516 16.2793 23.9062 17.5293 22.1094 17.9199H21.4844V16.8262C21.4844 16.4356 21.1719 16.1621 20.8203 16.1621H17.7344C17.3438 16.1621 17.0703 16.4746 17.0703 16.8262V27.5293C17.0703 27.9199 17.3828 28.1934 17.7344 28.1934H20.8203C21.2109 28.1934 21.4844 27.8809 21.4844 27.5293V26.4356H21.8359C22.1484 26.4356 22.4219 26.5918 22.6172 26.8262C23.0469 27.4512 23.75 27.8027 24.4922 27.8027H30.4297C31.3281 27.8027 32.0703 27.0606 32.0703 26.1621C32.0703 25.8887 31.9922 25.6152 31.875 25.3809C32.1094 25.1465 32.2656 24.834 32.3047 24.4824L32.3438 24.0527C32.3828 23.7012 32.3438 23.3496 32.1484 23.0762C32.3828 22.8418 32.5391 22.5293 32.5781 22.1777L32.6172 21.7481C32.6563 21.3965 32.6172 21.0449 32.4219 20.7715C33.4766 19.7949 32.8516 17.959 31.3672 17.959ZM20.1172 26.8652H18.3984V17.5293H20.1172V26.8652ZM31.6016 19.6387V19.7168C31.6016 19.834 31.4844 19.9512 31.3281 19.9512H30.7031C30.3125 19.9512 30.0391 20.2637 30.0391 20.6152C30.0391 20.9668 30.3516 21.2793 30.7031 21.2793H31.0547C31.2109 21.2793 31.3281 21.4356 31.3281 21.5918L31.2891 22.0215C31.2891 22.1387 31.1719 22.2559 31.0156 22.2559H30.5078C30.1172 22.2559 29.8438 22.5684 29.8438 22.9199C29.8438 23.3106 30.1563 23.584 30.5078 23.584H30.7422C30.8984 23.584 31.0156 23.7402 31.0156 23.8965L30.9766 24.3262C30.9766 24.4434 30.8594 24.5606 30.7031 24.5606H30.3125C29.9219 24.5606 29.6484 24.8731 29.6484 25.2246C29.6484 25.6152 29.9609 25.8887 30.3125 25.8887H30.4297C30.5859 25.8887 30.7031 26.0059 30.7031 26.1621C30.7031 26.3184 30.5859 26.4356 30.4297 26.4356H24.4922C24.1797 26.4356 23.9063 26.2793 23.7109 26.0449C23.2813 25.4199 22.5781 25.0684 21.8359 25.0684H21.4844V19.3262H22.1875H22.3047C24.5703 18.8965 26.4453 17.2949 27.2656 15.1465L27.8125 13.7793L28.0859 13.9356C28.3203 14.0918 28.4375 14.3262 28.3984 14.5996L27.8125 18.5449C27.7344 18.9746 28.0859 19.3262 28.4766 19.3262H31.3672C31.5234 19.3262 31.6406 19.4824 31.6016 19.6387Z" fill="#2BA84A"/>
                                </svg>
                                <p className='third-screen__info-title'>Высокое качество</p>
                                <p className='third-screen__info-subtitle'>Производитель травосмесей по методикам специалистов в газоноведении</p>
                            </div>
                            <div className='third-screen__info'>
                                <svg width="36" height="51" viewBox="0 0 36 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.7461 4.89844H32.1113V3.23516C32.1103 2.63988 31.8733 2.0693 31.4522 1.64848C31.0312 1.22767 30.4605 0.990957 29.8652 0.990234L29.5723 0.990234C28.9768 0.990958 28.4059 1.22783 27.9848 1.6489C27.5638 2.06997 27.3269 2.64085 27.3262 3.23633V4.89961H24.2988V3.23516C24.2978 2.63988 24.0608 2.0693 23.6397 1.64848C23.2187 1.22767 22.648 0.990957 22.0527 0.990234H21.7598C21.1643 0.990958 20.5934 1.22783 20.1723 1.6489C19.7513 2.06997 19.5144 2.64085 19.5137 3.23633V4.89961H16.4863V3.23516C16.4853 2.63988 16.2483 2.0693 15.8272 1.64848C15.4062 1.22767 14.8355 0.990957 14.2402 0.990234L13.9473 0.990234C13.3518 0.990958 12.7809 1.22783 12.3598 1.6489C11.9388 2.06997 11.7019 2.64085 11.7012 3.23633V4.89961H8.67383V3.23516C8.67279 2.63988 8.43578 2.0693 8.01475 1.64848C7.59372 1.22767 7.02301 0.990957 6.42773 0.990234L6.13477 0.990234C5.53929 0.990958 4.9684 1.22783 4.54734 1.6489C4.12627 2.06997 3.8894 2.64085 3.88867 3.23633V4.89961H3.25391C2.45129 4.90054 1.68181 5.21979 1.11428 5.78733C0.546743 6.35486 0.227493 7.12434 0.226562 7.92695V50.3098C0.227389 50.4905 0.299775 50.6636 0.427884 50.7911C0.555993 50.9186 0.729396 50.9902 0.910156 50.9902H35.0898C35.2711 50.9902 35.445 50.9182 35.5732 50.79C35.7014 50.6618 35.7734 50.4879 35.7734 50.3066V7.92578C35.7725 7.12317 35.4533 6.35369 34.8857 5.78615C34.3182 5.21862 33.5487 4.89937 32.7461 4.89844ZM28.6934 3.23516C28.6937 3.00215 28.7864 2.77878 28.9511 2.61402C29.1159 2.44926 29.3393 2.35656 29.5723 2.35625H29.8652C30.0982 2.35656 30.3216 2.44926 30.4864 2.61402C30.6511 2.77878 30.7438 3.00215 30.7441 3.23516V8.86641H28.6934V3.23516ZM20.8809 3.23516C20.8812 3.00215 20.9739 2.77878 21.1386 2.61402C21.3034 2.44926 21.5268 2.35656 21.7598 2.35625H22.0527C22.2857 2.35656 22.5091 2.44926 22.6739 2.61402C22.8386 2.77878 22.9313 3.00215 22.9316 3.23516V8.86641H20.8809V3.23516ZM13.0684 3.23516C13.0687 3.00215 13.1614 2.77878 13.3261 2.61402C13.4909 2.44926 13.7143 2.35656 13.9473 2.35625H14.2402C14.4732 2.35656 14.6966 2.44926 14.8614 2.61402C15.0261 2.77878 15.1188 3.00215 15.1191 3.23516V8.86641H13.0684V3.23516ZM5.25586 3.23516C5.25617 3.00215 5.34887 2.77878 5.51363 2.61402C5.67839 2.44926 5.90176 2.35656 6.13477 2.35625H6.42773C6.66074 2.35656 6.88411 2.44926 7.04887 2.61402C7.21363 2.77878 7.30633 3.00215 7.30664 3.23516V8.86641H5.25586V3.23516ZM1.59375 7.92578C1.59427 7.48564 1.76934 7.06367 2.08057 6.75244C2.3918 6.44122 2.81376 6.26614 3.25391 6.26562H3.88867V9.55C3.88867 9.7313 3.96069 9.90518 4.08889 10.0334C4.21709 10.1616 4.39097 10.2336 4.57227 10.2336H7.99023C8.17153 10.2336 8.34541 10.1616 8.47361 10.0334C8.60181 9.90518 8.67383 9.7313 8.67383 9.55V6.26562H11.7012V9.55C11.7012 9.7313 11.7732 9.90518 11.9014 10.0334C12.0296 10.1616 12.2035 10.2336 12.3848 10.2336H15.8027C15.984 10.2336 16.1579 10.1616 16.2861 10.0334C16.4143 9.90518 16.4863 9.7313 16.4863 9.55V6.26562H19.5137V9.55C19.5137 9.7313 19.5857 9.90518 19.7139 10.0334C19.8421 10.1616 20.016 10.2336 20.1973 10.2336H23.6152C23.7965 10.2336 23.9704 10.1616 24.0986 10.0334C24.2268 9.90518 24.2988 9.7313 24.2988 9.55V6.26562H27.3262V9.55C27.3262 9.7313 27.3982 9.90518 27.5264 10.0334C27.6546 10.1616 27.8285 10.2336 28.0098 10.2336H31.4277C31.609 10.2336 31.7829 10.1616 31.9111 10.0334C32.0393 9.90518 32.1113 9.7313 32.1113 9.55V6.26562H32.7461C33.1862 6.26614 33.6082 6.44122 33.9194 6.75244C34.2307 7.06367 34.4057 7.48564 34.4062 7.92578V12.834H1.59375V7.92578ZM34.4062 49.623H1.59375V14.2012H34.4062V49.623Z" fill="#2BA84A"/>
                                    <path d="M6.30352 20.8703L5.97657 22.7769C5.955 22.9027 5.96903 23.0319 6.01708 23.1501C6.06513 23.2682 6.14528 23.3706 6.24846 23.4456C6.35165 23.5205 6.47376 23.5652 6.60098 23.5744C6.7282 23.5836 6.85546 23.557 6.96836 23.4976L8.68126 22.5992L10.3938 23.4976C10.5067 23.557 10.6339 23.5836 10.7611 23.5744C10.8884 23.5652 11.0105 23.5205 11.1137 23.4456C11.2168 23.3706 11.297 23.2682 11.345 23.1501C11.3931 23.0319 11.4071 22.9027 11.3856 22.7769L11.0586 20.8703L12.4441 19.5195C12.5355 19.4305 12.6001 19.3177 12.6307 19.1938C12.6612 19.07 12.6565 18.9401 12.6171 18.8187C12.5777 18.6974 12.5051 18.5896 12.4076 18.5074C12.3101 18.4251 12.1915 18.3718 12.0652 18.3535L10.1512 18.075L9.29415 16.3418C9.23771 16.2274 9.15038 16.131 9.04203 16.0636C8.93369 15.9963 8.80865 15.9606 8.68106 15.9606C8.55347 15.9606 8.42843 15.9963 8.32009 16.0636C8.21174 16.131 8.12441 16.2274 8.06797 16.3418L7.21172 18.0766L5.29766 18.3551C5.17143 18.3734 5.05284 18.4267 4.95531 18.5089C4.85778 18.5911 4.7852 18.699 4.74578 18.8203C4.70635 18.9416 4.70166 19.0715 4.73223 19.1954C4.7628 19.3192 4.82741 19.4321 4.91875 19.5211L6.30352 20.8703ZM7.76563 19.3762C7.87537 19.3604 7.9796 19.3181 8.06931 19.253C8.15902 19.1878 8.2315 19.1018 8.28047 19.0023L8.68321 18.1871L9.08516 19.0023C9.13416 19.1018 9.20665 19.1878 9.29635 19.2529C9.38606 19.3181 9.49028 19.3604 9.6 19.3762L10.4984 19.507L9.84727 20.1418C9.76822 20.2193 9.70915 20.3149 9.67513 20.4203C9.64111 20.5257 9.63316 20.6377 9.65196 20.7469L9.80586 21.643L9.00118 21.2199C8.90299 21.1685 8.79382 21.1417 8.68301 21.1417C8.5722 21.1417 8.46303 21.1685 8.36485 21.2199L7.56016 21.643L7.71368 20.7469C7.73257 20.6377 7.72467 20.5256 7.69065 20.4202C7.65663 20.3148 7.5975 20.2193 7.51836 20.1418L6.86407 19.5059L7.76563 19.3762Z" fill="#2BA84A"/>
                                    <path d="M15.6227 20.8703L15.2957 22.7769C15.2741 22.9026 15.2882 23.0319 15.3362 23.15C15.3843 23.2682 15.4644 23.3706 15.5676 23.4455C15.6708 23.5205 15.7929 23.5651 15.9201 23.5743C16.0474 23.5835 16.1746 23.557 16.2875 23.4976L18 22.5976L19.7125 23.4961C19.8254 23.5554 19.9527 23.582 20.0799 23.5728C20.2071 23.5636 20.3292 23.519 20.4324 23.444C20.5356 23.369 20.6158 23.2666 20.6638 23.1485C20.7119 23.0303 20.7259 22.9011 20.7043 22.7754L20.3774 20.8687L21.7629 19.5179C21.8543 19.4289 21.9189 19.3161 21.9494 19.1922C21.98 19.0684 21.9753 18.9385 21.9359 18.8172C21.8965 18.6958 21.8239 18.588 21.7264 18.5058C21.6288 18.4235 21.5102 18.3703 21.384 18.3519L19.4699 18.0734L18.6129 16.3418C18.5565 16.2273 18.4693 16.131 18.3609 16.0636C18.2526 15.9962 18.1276 15.9604 18 15.9604C17.8724 15.9604 17.7474 15.9962 17.6391 16.0636C17.5308 16.131 17.4435 16.2273 17.3871 16.3418L16.5309 18.0765L14.6168 18.3551C14.4906 18.3734 14.372 18.4267 14.2745 18.5089C14.1769 18.5911 14.1044 18.699 14.0649 18.8203C14.0255 18.9416 14.0208 19.0715 14.0514 19.1954C14.082 19.3192 14.1466 19.432 14.2379 19.5211L15.6227 20.8703ZM17.0828 19.3761C17.1926 19.3604 17.2968 19.3181 17.3865 19.2529C17.4762 19.1878 17.5487 19.1018 17.5977 19.0023L18 18.1871L18.4024 19.0023C18.4513 19.1018 18.5238 19.1878 18.6135 19.2529C18.7032 19.3181 18.8075 19.3604 18.9172 19.3761L19.8156 19.507L19.1645 20.1418C19.0854 20.2193 19.0263 20.3149 18.9923 20.4203C18.9583 20.5257 18.9504 20.6377 18.9692 20.7468L19.1227 21.6429L18.3184 21.2199C18.2202 21.1683 18.1109 21.1414 18 21.1414C17.8891 21.1414 17.7799 21.1683 17.6817 21.2199L16.8774 21.6429L17.0309 20.7468C17.0497 20.6377 17.0417 20.5257 17.0077 20.4203C16.9737 20.3149 16.9146 20.2193 16.8356 20.1418L16.1832 19.5058L17.0828 19.3761Z" fill="#2BA84A"/>
                                    <path d="M24.9414 20.8703L24.6144 22.7769C24.5928 22.9027 24.6069 23.0319 24.6549 23.1501C24.703 23.2682 24.7831 23.3706 24.8863 23.4456C24.9895 23.5205 25.1116 23.5652 25.2388 23.5744C25.366 23.5836 25.4933 23.557 25.6062 23.4976L27.3187 22.5992L29.0316 23.4976C29.1445 23.557 29.2718 23.5836 29.399 23.5744C29.5262 23.5652 29.6483 23.5205 29.7515 23.4456C29.8547 23.3706 29.9348 23.2682 29.9829 23.1501C30.0309 23.0319 30.045 22.9027 30.0234 22.7769L29.6964 20.8703L31.082 19.5195C31.1733 19.4305 31.2379 19.3177 31.2685 19.1938C31.2991 19.07 31.2944 18.9401 31.255 18.8187C31.2155 18.6974 31.143 18.5896 31.0454 18.5074C30.9479 18.4251 30.8293 18.3718 30.7031 18.3535L28.789 18.075L27.932 16.3418C27.8756 16.2274 27.7882 16.131 27.6799 16.0636C27.5715 15.9963 27.4465 15.9606 27.3189 15.9606C27.1913 15.9606 27.0663 15.9963 26.9579 16.0636C26.8496 16.131 26.7623 16.2274 26.7058 16.3418L25.8515 18.075L23.9375 18.3535C23.8112 18.3718 23.6926 18.4251 23.5951 18.5074C23.4976 18.5896 23.425 18.6974 23.3856 18.8187C23.3462 18.9401 23.3415 19.07 23.372 19.1938C23.4026 19.3177 23.4672 19.4305 23.5586 19.5195L24.9414 20.8703ZM26.4019 19.3762C26.5116 19.3604 26.6159 19.3181 26.7056 19.2529C26.7953 19.1878 26.8678 19.1018 26.9168 19.0023L27.3187 18.1871L27.7214 19.0023C27.7704 19.1018 27.8429 19.1878 27.9326 19.253C28.0223 19.3181 28.1266 19.3604 28.2363 19.3762L29.1347 19.507L28.4836 20.1418C28.4044 20.2193 28.3453 20.3148 28.3113 20.4202C28.2772 20.5256 28.2693 20.6377 28.2882 20.7469L28.4418 21.643L27.6371 21.2199C27.5389 21.1684 27.4298 21.1414 27.3189 21.1414C27.2081 21.1414 27.0989 21.1684 27.0007 21.2199L26.1961 21.643L26.35 20.7469C26.3688 20.6377 26.3608 20.5257 26.3268 20.4203C26.2928 20.3149 26.2337 20.2193 26.1546 20.1418L25.5023 19.5059L26.4019 19.3762Z" fill="#2BA84A"/>
                                    <path d="M5.27228 27.8449H30.7277C30.909 27.8449 31.0829 27.7729 31.2111 27.6447C31.3393 27.5165 31.4113 27.3426 31.4113 27.1613C31.4113 26.98 31.3393 26.8061 31.2111 26.6779C31.0829 26.5497 30.909 26.4777 30.7277 26.4777H5.27228C5.09098 26.4777 4.9171 26.5497 4.7889 26.6779C4.66071 26.8061 4.58868 26.98 4.58868 27.1613C4.58868 27.3426 4.66071 27.5165 4.7889 27.6447C4.9171 27.7729 5.09098 27.8449 5.27228 27.8449Z" fill="#2BA84A"/>
                                    <path d="M7.99023 30.7469C7.80893 30.7469 7.63506 30.8189 7.50686 30.9471C7.37866 31.0753 7.30664 31.2492 7.30664 31.4305C7.30664 31.6118 7.37866 31.7857 7.50686 31.9139C7.63506 32.0421 7.80893 32.1141 7.99023 32.1141H28.0098C28.1911 32.1141 28.3649 32.0421 28.4931 31.9139C28.6213 31.7857 28.6934 31.6118 28.6934 31.4305C28.6934 31.2492 28.6213 31.0753 28.4931 30.9471C28.3649 30.8189 28.1911 30.7469 28.0098 30.7469H7.99023Z" fill="#2BA84A"/>
                                    <path d="M5.27228 36.3809H30.7277C30.909 36.3809 31.0829 36.3088 31.2111 36.1806C31.3393 36.0524 31.4113 35.8786 31.4113 35.6973C31.4113 35.516 31.3393 35.3421 31.2111 35.2139C31.0829 35.0857 30.909 35.0137 30.7277 35.0137H5.27228C5.09098 35.0137 4.9171 35.0857 4.7889 35.2139C4.66071 35.3421 4.58868 35.516 4.58868 35.6973C4.58868 35.8786 4.66071 36.0524 4.7889 36.1806C4.9171 36.3088 5.09098 36.3809 5.27228 36.3809Z" fill="#2BA84A"/>
                                    <path d="M7.99023 39.284C7.80893 39.284 7.63506 39.356 7.50686 39.4842C7.37866 39.6124 7.30664 39.7863 7.30664 39.9676C7.30664 40.1489 7.37866 40.3228 7.50686 40.451C7.63506 40.5792 7.80893 40.6512 7.99023 40.6512H28.0098C28.1911 40.6512 28.3649 40.5792 28.4931 40.451C28.6213 40.3228 28.6934 40.1489 28.6934 39.9676C28.6934 39.7863 28.6213 39.6124 28.4931 39.4842C28.3649 39.356 28.1911 39.284 28.0098 39.284H7.99023Z" fill="#2BA84A"/>
                                    <path d="M5.27228 44.9203H30.7277C30.909 44.9203 31.0829 44.8483 31.2111 44.7201C31.3393 44.5919 31.4113 44.418 31.4113 44.2367C31.4113 44.0554 31.3393 43.8815 31.2111 43.7533C31.0829 43.6251 30.909 43.5531 30.7277 43.5531H5.27228C5.18251 43.5531 5.09361 43.5708 5.01068 43.6051C4.92774 43.6395 4.85238 43.6898 4.7889 43.7533C4.72543 43.8168 4.67507 43.8922 4.64072 43.9751C4.60637 44.058 4.58868 44.1469 4.58868 44.2367C4.58868 44.3265 4.60637 44.4154 4.64072 44.4983C4.67507 44.5812 4.72543 44.6566 4.7889 44.7201C4.85238 44.7835 4.92774 44.8339 5.01068 44.8683C5.09361 44.9026 5.18251 44.9203 5.27228 44.9203Z" fill="#2BA84A"/>
                                </svg>
                                <p className='third-screen__info-title'>Индивидуальный подход</p>
                                <p className='third-screen__info-subtitle'>Изготавливаем смеси по вашему составу</p>
                            </div>
                            <div className='third-screen__info'>
                                <svg width="50" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M49.8793 23.6027L45.5469 17.3129L45.3555 9.67849C45.3521 9.53997 45.3066 9.40575 45.2251 9.29369C45.1436 9.18163 45.03 9.09703 44.8992 9.05115L37.6953 6.51365L33.0594 0.443337C32.975 0.333161 32.8592 0.251201 32.7272 0.208303C32.5952 0.165405 32.4533 0.163592 32.3203 0.203103L25 2.3906L17.6797 0.203103C17.5467 0.163592 17.4048 0.165405 17.2728 0.208303C17.1408 0.251201 17.025 0.333161 16.9406 0.443337L12.3047 6.51365L5.1 9.05076C4.96925 9.09664 4.85557 9.18124 4.77407 9.2933C4.69257 9.40536 4.64712 9.53958 4.64375 9.6781L4.45313 17.3133L0.120705 23.6027C0.042107 23.7167 1.52588e-05 23.8518 1.52588e-05 23.9902C1.52588e-05 24.1286 0.042107 24.2638 0.120705 24.3777L4.45313 30.6676L4.64492 38.3019C4.64829 38.4405 4.69374 38.5747 4.77524 38.6867C4.85674 38.7988 4.97043 38.8834 5.10117 38.9293L12.3055 41.4683L16.9418 47.5386C17.0261 47.649 17.1419 47.731 17.2739 47.7739C17.4059 47.8168 17.5478 47.8186 17.6809 47.7789L25 45.5918L32.3203 47.7793C32.4533 47.819 32.5953 47.8172 32.7273 47.7743C32.8593 47.7314 32.9751 47.6493 33.0594 47.539L37.6953 41.4668L44.8996 38.9297C45.0304 38.8838 45.144 38.7992 45.2255 38.6871C45.307 38.5751 45.3525 38.4408 45.3559 38.3023L45.5473 30.6672L49.8789 24.3781C49.9575 24.2641 49.9996 24.1289 49.9997 23.9905C49.9997 23.852 49.9578 23.7168 49.8793 23.6027V23.6027ZM44.3066 30.059C44.2313 30.168 44.1894 30.2967 44.1863 30.4293L44.0016 37.7969L37.0484 40.2449C36.9229 40.2892 36.813 40.369 36.732 40.4746L32.2594 46.334L25.1957 44.2246C25.0682 44.1867 24.9325 44.1867 24.8051 44.2246L17.7414 46.334L13.2672 40.4746C13.1862 40.369 13.0763 40.2892 12.9508 40.2449L5.99766 37.7965L5.81328 30.4297C5.8101 30.2971 5.76829 30.1684 5.69297 30.0594L1.51367 23.9902L5.69336 17.9215C5.76874 17.8124 5.81056 17.6837 5.81367 17.5512L5.99805 10.1836L12.9512 7.73553C13.0767 7.69122 13.1866 7.61142 13.2676 7.50584L17.7406 1.64842L24.8043 3.75779C24.9317 3.79592 25.0675 3.79592 25.1949 3.75779L32.2586 1.64842L36.732 7.50779C36.813 7.61338 36.9229 7.69317 37.0484 7.73748L44.0016 10.1859L44.1863 17.5527C44.1895 17.6852 44.2313 17.8139 44.3066 17.923L48.4863 23.9902L44.3066 30.059Z" fill="#2BA84A"/>
                                    <path d="M25 7.21561C21.6823 7.21561 18.4391 8.19942 15.6805 10.0426C12.922 11.8859 10.7719 14.5057 9.50229 17.5709C8.23266 20.636 7.90046 24.0088 8.54771 27.2628C9.19497 30.5167 10.7926 33.5057 13.1386 35.8517C15.4845 38.1976 18.4735 39.7953 21.7274 40.4425C24.9814 41.0898 28.3542 40.7576 31.4194 39.4879C34.4845 38.2183 37.1044 36.0683 38.9476 33.3097C40.7908 30.5511 41.7746 27.3079 41.7746 23.9902C41.7696 19.5428 40.0007 15.279 36.856 12.1343C33.7112 8.98948 29.4474 7.22057 25 7.21561V7.21561ZM25 39.3976C21.9527 39.3976 18.9738 38.494 16.4401 36.801C13.9064 35.108 11.9316 32.7017 10.7654 29.8864C9.59925 27.071 9.29413 23.9731 9.88863 20.9844C10.4831 17.9956 11.9505 15.2503 14.1053 13.0955C16.2601 10.9408 19.0054 9.47334 21.9942 8.87884C24.9829 8.28434 28.0808 8.58946 30.8962 9.75561C33.7115 10.9218 36.1178 12.8966 37.8108 15.4303C39.5038 17.964 40.4074 20.9429 40.4074 23.9902C40.4028 28.0751 38.778 31.9913 35.8895 34.8798C33.0011 37.7682 29.0849 39.393 25 39.3976V39.3976Z" fill="#2BA84A"/>
                                    <path d="M25 10.3406C22.3004 10.3406 19.6614 11.1411 17.4167 12.641C15.172 14.1408 13.4225 16.2726 12.3894 18.7667C11.3563 21.2609 11.086 24.0054 11.6127 26.6531C12.1393 29.3009 13.4393 31.733 15.3483 33.642C17.2572 35.5509 19.6893 36.8509 22.3371 37.3776C24.9849 37.9042 27.7293 37.6339 30.2235 36.6008C32.7176 35.5677 34.8494 33.8182 36.3492 31.5735C37.8491 29.3289 38.6496 26.6899 38.6496 23.9902C38.6456 20.3714 37.2062 16.9019 34.6473 14.3429C32.0884 11.784 28.6189 10.3446 25 10.3406V10.3406ZM25 36.2726C22.5708 36.2726 20.1961 35.5523 18.1763 34.2027C16.1564 32.8531 14.5822 30.9348 13.6525 28.6905C12.7229 26.4462 12.4797 23.9766 12.9536 21.594C13.4275 19.2115 14.5973 17.023 16.315 15.3052C18.0327 13.5875 20.2213 12.4177 22.6038 11.9438C24.9864 11.4699 27.456 11.7131 29.7003 12.6427C31.9446 13.5724 33.8629 15.1466 35.2125 17.1665C36.5621 19.1863 37.2824 21.561 37.2824 23.9902C37.2788 27.2466 35.9836 30.3686 33.681 32.6712C31.3784 34.9738 28.2564 36.269 25 36.2726Z" fill="#2BA84A"/>
                                    <path d="M31.0277 17.0785L23.6449 24.4613L20.1992 21.016C20.1358 20.9525 20.0604 20.9021 19.9775 20.8677C19.8945 20.8333 19.8056 20.8156 19.7158 20.8156C19.626 20.8156 19.5371 20.8333 19.4542 20.8677C19.3712 20.9021 19.2959 20.9525 19.2324 21.016L16.4707 23.7777C16.4072 23.8412 16.3568 23.9165 16.3224 23.9995C16.288 24.0824 16.2703 24.1713 16.2703 24.2611C16.2703 24.3509 16.288 24.4398 16.3224 24.5228C16.3568 24.6057 16.4072 24.6811 16.4707 24.7445L23.1617 31.4359C23.29 31.5639 23.4639 31.6358 23.6451 31.6358C23.8264 31.6358 24.0002 31.5639 24.1285 31.4359L34.7563 20.807C34.8844 20.6788 34.9563 20.5049 34.9563 20.3236C34.9563 20.1423 34.8844 19.9685 34.7563 19.8402L31.9941 17.0785C31.9307 17.015 31.8554 16.9646 31.7725 16.9302C31.6896 16.8958 31.6007 16.8781 31.5109 16.8781C31.4212 16.8781 31.3323 16.8958 31.2494 16.9302C31.1665 16.9646 31.0912 17.015 31.0277 17.0785V17.0785ZM23.6449 29.9851L17.9207 24.2601L19.7176 22.4633L23.1633 25.9086C23.2267 25.9721 23.3021 26.0225 23.385 26.0569C23.468 26.0913 23.5569 26.109 23.6467 26.109C23.7365 26.109 23.8254 26.0913 23.9083 26.0569C23.9913 26.0225 24.0666 25.9721 24.1301 25.9086L31.5129 18.5258L33.3098 20.3207L23.6449 29.9851Z" fill="#2BA84A"/>
                                </svg>
                                <p className='third-screen__info-title'>Адаптация к климату</p>
                                <p className='third-screen__info-subtitle'>Посевной материал адаптирован к российскому климату</p>
                            </div>
                            <div className='third-screen__info'>
                                <svg width="40" height="45" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.1031 19.1746H20.7906C21.1344 19.1746 21.375 18.8996 21.375 18.5902C21.375 18.2808 21.1 18.0058 20.7906 18.0058L20.1375 18.0402L20.3781 16.4246C20.4125 16.0808 20.2062 15.8058 19.8625 15.7371C19.5531 15.7027 19.2437 15.9089 19.175 16.2183L18.9344 17.8339C18.7969 18.5215 19.3469 19.1746 20.1031 19.1746Z" fill="#2BA84A"/>
                                    <path d="M23.8156 16.1496C24.613 16.1496 25.2594 15.5032 25.2594 14.7058C25.2594 13.9085 24.613 13.2621 23.8156 13.2621C23.0183 13.2621 22.3719 13.9085 22.3719 14.7058C22.3719 15.5032 23.0183 16.1496 23.8156 16.1496Z" fill="#2BA84A"/>
                                    <path d="M17.25 20.6871C17.0094 20.8933 16.9407 21.2715 17.1813 21.5465C17.9032 22.3027 18.9 22.7496 19.9657 22.7152C21.0313 22.7496 22.0282 22.3371 22.75 21.5465C22.9563 21.3058 22.9219 20.9277 22.6813 20.6871C22.4063 20.4808 22.0282 20.5152 21.8219 20.7558C21.3407 21.2371 20.6532 21.5121 19.9657 21.4777C19.2782 21.5121 18.5907 21.2371 18.1094 20.7558C17.9032 20.5152 17.525 20.4808 17.25 20.6871Z" fill="#2BA84A"/>
                                    <path d="M16.1844 16.1496C16.975 16.1496 17.6281 15.4965 17.6281 14.7058C17.6281 13.9152 16.975 13.2621 16.1844 13.2621C15.3938 13.2621 14.7406 13.9152 14.7406 14.7058C14.775 15.4965 15.3938 16.1496 16.1844 16.1496Z" fill="#2BA84A"/>
                                    <path d="M33.6469 30.9996C31.55 30.484 30.3469 30.6215 27.5969 30.3121C26.4969 30.209 25.6031 29.7621 25.4656 28.6621L25.1219 26.0496C26.1875 25.1902 27.0469 24.0558 27.5625 22.7496C27.9063 21.7871 28.1813 20.7902 28.3531 19.7933H29.7281V23.884L27.9406 24.709C27.6313 24.8465 27.4938 25.1902 27.6313 25.4996C27.7688 25.809 28.1125 25.9465 28.4219 25.809L30.5531 24.8121C30.7594 24.709 30.8969 24.5027 30.8969 24.2621V19.7933H31.0688C32.3406 19.7933 33.3719 18.7621 33.3719 17.4902V15.1527C33.3719 13.8808 32.3406 12.8496 31.0688 12.8496H29.2125V10.4777C29.2469 5.28709 25.0875 0.921462 19.8281 0.990212C14.8094 1.12771 10.7531 5.21834 10.7531 10.2715V12.8152H8.89689C7.62501 12.8152 6.59376 13.8465 6.59376 15.1183V17.4558C6.59376 18.7277 7.62501 19.759 8.89689 19.759H11.6469C11.8188 20.7558 12.0594 21.7527 12.4375 22.7152C12.9531 23.9871 13.8125 25.1215 14.8781 26.0152C14.8781 26.0152 14.6375 27.9402 14.5344 28.5933C14.4656 29.0058 14.225 29.4183 13.8813 29.7277C13.5031 30.1058 12.9531 30.209 12.4031 30.2777C10.9938 30.4496 9.06876 30.3121 6.35314 30.9652C2.74376 31.9965 0.200012 35.2965 0.200012 39.0433V44.3715C0.200012 44.7152 0.475012 44.9558 0.818762 44.9558H39.2156C39.5594 44.9558 39.8 44.6808 39.8 44.3715V39.0433C39.8 35.2965 37.2563 31.9965 33.6469 30.9996ZM27.6656 31.5152L25.5688 36.809L21.1 34.4371L25.6719 30.9308C26.3938 31.309 26.9781 31.4465 27.6656 31.5152ZM32.2375 15.1183V17.4558C32.2375 18.0746 31.7219 18.5558 31.1375 18.5558H28.6281L29.075 16.459C29.2125 15.8746 29.2469 15.2902 29.2469 14.7058V13.984H31.1031C31.7219 14.0183 32.2375 14.534 32.2375 15.1183ZM19.8625 2.19334C24.4344 2.12459 28.0438 5.94021 28.0781 10.4433V12.8152H27.5625C27.0469 12.8152 26.6 12.4715 26.4969 11.9902L25.2594 7.31521C25.1219 6.86834 24.5719 6.73084 24.2625 7.04021C24.2625 7.04021 23.025 8.24334 20.0344 8.24334C17.0438 8.24334 15.8406 7.07459 15.8406 7.04021C15.5313 6.69646 14.9813 6.83396 14.8438 7.28084L13.3313 12.059C13.1938 12.5058 12.7469 12.8496 12.2656 12.8496H12.025V10.2715C11.9563 5.87146 15.4625 2.29646 19.8625 2.19334ZM7.76251 17.4558V15.1183C7.76251 14.4996 8.27814 14.0183 8.86251 14.0183H10.7188V14.7402C10.7188 15.3246 10.7875 15.909 10.8906 16.4933L11.3375 18.5902H8.82814C8.27814 18.5902 7.76251 18.0746 7.76251 17.4558ZM13.5375 22.3027C13.0563 20.9621 13.2281 21.3058 12.0938 16.2527C11.9906 15.7715 11.9219 15.2558 11.9219 14.7746V14.0527H12.1625C13.1594 14.0527 14.0531 13.3996 14.3625 12.4371L15.6344 8.44959C16.3906 8.89646 17.8 9.44646 19.9656 9.44646C22.0969 9.44646 23.4719 8.89646 24.2281 8.44959L25.225 12.2996C25.5 13.3308 26.4281 14.0183 27.4594 14.0183H27.975V14.7402C27.975 15.2558 27.9063 15.7371 27.8031 16.2183C26.8063 20.6871 26.9094 20.7902 26.3594 22.2683C24.1938 27.9402 15.9438 28.1808 13.5375 22.3027ZM20 27.8371C21.4094 27.8371 22.7844 27.4933 24.0219 26.7715L24.2625 28.7652C24.3313 29.2808 24.6063 29.8652 24.7781 30.1058L20 33.784C13.9156 29.1433 15.6688 30.4496 15.1875 30.1058C15.4969 29.6246 15.7031 29.0746 15.7375 28.7996L15.9781 26.8058C17.2156 27.4933 18.5906 27.8371 20 27.8371ZM14.3281 30.9652L18.9 34.4715L14.4313 36.8433L12.3344 31.5496C12.5406 31.4808 13.4 31.5496 14.3281 30.9652ZM38.5969 43.7871H1.40314V39.0433C1.40314 35.8121 3.56876 32.9933 6.66251 32.134C8.65626 31.6527 9.82501 31.6871 11.0625 31.584L13.5375 37.8402C13.675 38.184 14.0531 38.3215 14.3625 38.1496L19.3813 35.5027V37.909C19.3813 38.2527 19.6563 38.4933 19.9656 38.4933C20.3094 38.4933 20.55 38.2183 20.55 37.909V35.5027L25.5688 38.1496C25.8781 38.3215 26.2906 38.184 26.3938 37.8402L28.9375 31.6183C30.3813 31.7558 31.9625 31.7902 33.3375 32.134C36.4313 32.9933 38.5969 35.8121 38.5969 39.0433V43.7871Z" fill="#2BA84A"/>
                                    <path d="M20 39.6965C19.6563 39.6965 19.4156 39.9715 19.4156 40.2808V41.8965C19.4156 42.2402 19.6906 42.4808 20 42.4808C20.3438 42.4808 20.5844 42.2058 20.5844 41.8965V40.2808C20.6188 39.9715 20.3438 39.6965 20 39.6965Z" fill="#2BA84A"/>
                                </svg>
                                <p className='third-screen__info-title'>Консультация специалиста</p>
                                <p className='third-screen__info-subtitle'>Бесплатная консультация агронома</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third-screen__bottom">
                    <p className='third-screen__bottom-pop'>Популярные товары</p>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={40}
                        slidesPerGroup={1}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false
                        }}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            search.map((item,idx)=> (
                                <SwiperSlide key={idx}>
                                    <div className='third-screen__bottom-row'>
                                        <img src={item.imageUrl} alt="Lawn"/>
                                        <Link to={`/product/${item.title}`}><p className='route__box-title'>{item.title}</p></Link>
                                        <p className='third-screen__bottom-subtitle'>от {item.price}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ThirdScreen;