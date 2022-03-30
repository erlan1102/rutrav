import React, {useState} from 'react';
import './FifthScreen.css';
import {useForm} from "react-hook-form";
import InputMask from "react-input-mask";
import axios from "axios";

const FifthScreen = () => {
    const [call, setCall] = useState(false);
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm({
        mode: "onBlur",
    });
    const addReview = (e) =>{
        e.preventDefault();
        axios.post('https://formsubmit.co/erlanisakov60@gmail.com', {
            name: e.target[0].value,
            tel: e.target[1].value,
            question: e.target[2].value
        }).then(({data})=> {
            console.log(data);
            e.target[0].value = '';
            e.target[1].value = '';
            e.target[2].value = '';
        });
    };
    return (
        <section className='fifth-screen'>
            <div className="container">
                <p className='fifth-screen__title'>Наш специалист проконсультирует</p>
                <div className='fifth-screen__row'>
                    <div className='fifth-screen__ques'>
                        <button className='fifth-screen__ques-btn' type='button'>
                            <svg width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.8266 49.6198C24.0151 49.6198 22.2047 49.2547 20.528 48.5255L12.5108 45.0403C9.61041 43.7787 6.54367 42.9796 3.39596 42.665L0.76317 42.4017C0.329705 42.3585 0 41.9939 0 41.5585V33.2999C0 33.1166 0.0596378 32.9382 0.169701 32.7918C0.366554 32.5285 5.08521 26.364 12.2931 27.9679C16.3471 28.8687 19.6111 30.5546 21.6354 31.8104C23.105 32.7219 24.8278 33.2034 26.6174 33.2034H34.6345C36.0164 33.2034 37.231 33.9346 37.9103 35.0313L44.8151 27.0762C46.1538 25.2885 48.344 24.1937 50.6369 24.1937H51.1528C51.4393 24.1937 51.706 24.3382 51.8621 24.5777C52.0187 24.8173 52.0434 25.1203 51.9285 25.3821L45.6835 39.575C44.3182 42.679 41.538 45.0238 38.2472 45.8466L37.1485 46.121L30.7571 48.6777C29.1842 49.3066 27.5051 49.6198 25.8266 49.6198ZM1.69507 40.7915L3.56469 40.9786C6.88744 41.3108 10.1249 42.1549 13.1872 43.4863L21.2039 46.9715C24.0229 48.1972 27.2739 48.2452 30.1282 47.1034L36.572 44.5259C36.6079 44.5118 36.6443 44.5002 36.6816 44.4909L37.8361 44.202C40.6226 43.5052 42.9766 41.5202 44.132 38.8923L49.8281 25.947C48.3697 26.1618 47.0276 26.9477 46.1335 28.1395L38.4843 36.9552C38.4853 36.9882 38.4858 37.0207 38.4858 37.0542C38.4858 39.1774 36.7582 40.9049 34.635 40.9049H23.4493C21.9952 40.9049 20.5581 41.1381 19.1786 41.5978L18.8674 40.8075L18.6041 40.0021L18.6472 39.9881C20.1954 39.4722 21.8124 39.2099 23.4493 39.2099H34.635C35.8234 39.2099 36.7912 38.2426 36.7912 37.0537C36.7912 35.8648 35.8239 34.8975 34.635 34.8975H26.6179C24.5121 34.8975 22.4805 34.3278 20.7428 33.2499C18.8305 32.0635 15.7478 30.4717 11.9266 29.6217C6.46804 28.411 2.54018 32.6002 1.69556 33.5995V40.7915H1.69507Z" fill="white"/>
                            <path d="M33.3729 24.0024C32.0696 24.0024 30.6083 23.6 28.9995 22.7956C28.8046 22.6977 28.6543 22.528 28.5806 22.3229C28.5151 22.1391 27.0009 17.7836 29.4073 14.5627C31.1561 12.2213 34.4445 11.1667 39.1864 11.431C39.6189 11.4547 39.9636 11.8014 39.985 12.2349C40.0019 12.5714 40.3515 20.5139 36.3015 23.1583C35.4404 23.7212 34.4619 24.0024 33.3729 24.0024ZM30.0802 21.4356C32.3062 22.4795 34.0857 22.5818 35.3754 21.7396C37.7769 20.1711 38.2962 15.515 38.3088 13.0916C34.5933 13.001 32.0638 13.8383 30.7649 15.5765C29.2191 17.6464 29.8199 20.4935 30.0802 21.4356Z" fill="white"/>
                            <path d="M20.4136 12.8995C18.9111 12.8995 17.1777 12.5775 15.6649 11.4696C13.099 9.58932 11.9199 6.0096 12.1594 0.83032C12.1797 0.39734 12.523 0.04921 12.956 0.0235124C13.3226 0.00266341 21.9986 -0.460378 24.918 3.92179C26.2775 5.9616 26.166 8.63317 24.5878 11.8638C24.4918 12.0602 24.324 12.2119 24.1189 12.2871C24.005 12.3293 22.4142 12.8995 20.4136 12.8995ZM23.8266 11.4919H23.8348H23.8266ZM13.8273 1.69095C13.7541 5.83941 14.7078 8.66712 16.6662 10.1023C19.0109 11.8202 22.2125 11.09 23.219 10.7966C24.3706 8.29765 24.468 6.30245 23.508 4.86145C21.7237 2.18308 16.4911 1.65943 13.8273 1.69095Z" fill="white"/>
                            <path d="M27.0314 34.5999C27.0048 34.5999 26.9781 34.5985 26.9509 34.5961C26.4995 34.5534 26.1616 34.1631 26.1844 33.7097C26.2343 32.7129 26.3196 31.7674 26.4355 30.8714C26.788 24.8746 26.6062 10.9097 17.7769 7.04629C17.3483 6.85865 17.1524 6.35924 17.34 5.93014C17.5272 5.50201 18.0281 5.30661 18.4562 5.49377C23.6592 7.77019 26.9325 13.4377 27.9202 21.8835C28.0089 22.6404 28.0753 23.3866 28.1248 24.1134C30.4502 18.2374 34.0076 16.1612 34.2195 16.0424C34.6268 15.8121 35.1436 15.9585 35.3734 16.3653C35.6018 16.7726 35.4583 17.288 35.0525 17.5178C34.9628 17.5702 29.5076 20.844 28.1384 30.9397C28.0341 32.6668 27.8838 33.7679 27.8697 33.8688C27.8111 34.2916 27.4499 34.5999 27.0314 34.5999Z" fill="white"/>
                        </svg>
                        </button>
                        <p className='fifth-screen__ques-text'>Какие сорта подойдут для вашей местности?</p>
                    </div>
                    <div className='fifth-screen__ques'>
                        <button className='fifth-screen__ques-btn' type='button'>
                            <svg width="65" height="46" viewBox="0 0 65 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M45.9611 45.8831H19.0395C14.8762 45.8831 11.4894 42.5189 11.4894 38.3845V33.3887C11.4894 22.0639 0.744661 16.9596 0.636686 16.9094C0.182186 16.6991 -0.0714292 16.2088 0.0177129 15.7166C0.108111 15.2244 0.519295 14.8553 1.01774 14.8195C11.0349 14.092 16.5241 21.6791 19.2756 27.7778C17.273 15.2891 7.88106 8.92485 7.76806 8.85078C7.38324 8.59528 7.19868 8.12697 7.30666 7.67812C7.41526 7.22864 7.7938 6.89593 8.25332 6.84508C18.0671 5.75842 23.4332 16.6413 25.9656 24.2492C25.8689 11.7372 22.6849 1.5499 22.646 1.43C22.5079 0.993707 22.6548 0.517236 23.0145 0.234743C23.3736 -0.048378 23.8714 -0.0785105 24.2631 0.161294C28.9469 3.02012 31.3167 9.33666 32.5 15.554C33.6833 9.33666 36.0531 3.02012 40.7369 0.161294C41.1292 -0.0766274 41.6264 -0.0477502 41.9855 0.234743C42.3452 0.517236 42.4927 0.993707 42.354 1.43C42.3157 1.55053 39.1317 11.7379 39.0344 24.2504C41.5668 16.6419 46.9511 5.77098 56.7467 6.84508C57.2062 6.89593 57.5835 7.22864 57.6927 7.67686C57.8013 8.12508 57.6174 8.59465 57.2332 8.85015C57.1214 8.92422 47.7439 15.3142 45.7301 27.7671C48.4841 21.6703 53.9651 14.0982 63.9829 14.8195C64.4807 14.8559 64.8913 15.2244 64.9817 15.7154C65.0727 16.2069 64.8184 16.6972 64.3658 16.9087C64.2572 16.9596 53.5118 22.101 53.5118 33.3894V38.3845C53.5118 42.5189 50.1244 45.8831 45.9611 45.8831ZM5.32293 17.2854C8.8861 20.0231 13.6828 25.2247 13.6828 33.3887V38.3845C13.6828 41.3092 16.0865 43.6884 19.0395 43.6884H45.9611C48.9141 43.6884 51.3172 41.3092 51.3172 38.3845V33.3887C51.3172 25.2222 56.117 20.0199 59.6808 17.2829C48.5312 19.7123 45.4827 35.3141 45.4501 35.4899C45.3503 36.0291 44.8688 36.4152 44.3164 36.3838C43.7683 36.3568 43.3245 35.9274 43.2787 35.38C42.1374 21.7984 49.3265 13.0185 53.3831 9.20483C43.1268 11.611 39.3646 31.4672 39.3238 31.6869C39.2252 32.2249 38.76 32.594 38.1976 32.5852C37.6514 32.562 37.2051 32.1389 37.1523 31.5946C36.055 20.1693 38.0155 9.64113 39.2943 4.34031C34.657 10.0253 33.758 21.079 33.5967 26.0879C33.5772 26.6798 33.092 27.15 32.5 27.15C31.908 27.15 31.4228 26.6798 31.4033 26.0879C31.242 21.079 30.3436 10.0253 25.7064 4.34031C26.9845 9.64113 28.945 20.1693 27.8477 31.5946C27.7955 32.1389 27.3498 32.562 26.8024 32.5852C26.2381 32.6022 25.7754 32.2255 25.6769 31.6875C25.636 31.4678 21.8626 11.6198 11.6188 9.20672C15.6754 13.0197 22.8626 21.7996 21.722 35.38C21.6755 35.9274 21.2329 36.3555 20.6843 36.3838C20.1469 36.4202 19.651 36.0297 19.5499 35.4905C19.5166 35.3153 16.4494 19.7249 5.32293 17.2854Z" fill="white"/>
                                <path d="M35.792 41.4947H27.1207C26.5149 41.4947 26.0234 41.0038 26.0234 40.398C26.0234 39.7916 26.5149 39.3007 27.1207 39.3007H35.792C36.3978 39.3007 36.8887 39.7916 36.8887 40.398C36.8887 41.0038 36.3978 41.4947 35.792 41.4947Z" fill="white"/>
                                <path d="M21.3767 41.4947H18.2379C17.6321 41.4947 17.1412 41.0038 17.1412 40.398C17.1412 39.7916 17.6321 39.3007 18.2379 39.3007H21.3767C21.9825 39.3007 22.474 39.7916 22.474 40.398C22.474 41.0038 21.9831 41.4947 21.3767 41.4947Z" fill="white"/>
                            </svg>
                        </button>
                        <p className='fifth-screen__ques-text'>Какие газоны самые неприхотливые?</p>
                    </div>
                    <div className='fifth-screen__ques'>
                        <button className='fifth-screen__ques-btn' type='button'>
                            <svg width="40" height="53" viewBox="0 0 40 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.4356 52.5682H2.2556C1.80083 52.5682 1.41795 52.2245 1.37003 51.7718C-0.456677 34.6717 -0.456677 17.5207 1.37003 0.794309C1.41948 0.342603 1.80083 0 2.2556 0H37.4356C37.8812 0 38.258 0.328328 38.3181 0.769837C40.5604 17.0598 40.5604 34.2256 38.3197 51.7897C38.2631 52.2347 37.8838 52.5682 37.4356 52.5682ZM3.05806 50.7863H36.65C38.7382 33.9243 38.7413 17.4473 36.6571 1.78184H3.05603C1.35677 17.8709 1.35779 34.3475 3.05806 50.7863Z" fill="white"/>
                                <path d="M20.2759 39.195C12.9084 39.195 6.91541 33.2015 6.91541 25.8345C6.91541 18.4675 12.9084 12.474 20.2759 12.474C27.6429 12.474 33.6359 18.467 33.6359 25.834C33.6359 33.2015 27.6429 39.195 20.2759 39.195ZM20.2759 14.2558C13.8909 14.2558 8.69725 19.45 8.69725 25.834C8.69725 32.2185 13.8909 37.4127 20.2759 37.4127C26.6605 37.4127 31.8541 32.2185 31.8541 25.834C31.8541 19.45 26.6605 14.2558 20.2759 14.2558Z" fill="white"/>
                                <path d="M34.0208 7.12791H30.4566C29.9641 7.12791 29.566 6.72923 29.566 6.23674C29.566 5.74475 29.9641 5.34607 30.4566 5.34607H34.0208C34.5133 5.34607 34.9115 5.74475 34.9115 6.23674C34.9115 6.72923 34.5133 7.12791 34.0208 7.12791Z" fill="white"/>
                                <path d="M27.7836 7.12791H2.83629C2.3438 7.12791 1.94511 6.72923 1.94511 6.23674C1.94511 5.74475 2.3438 5.34607 2.83629 5.34607H27.7836C28.2761 5.34607 28.6748 5.74475 28.6748 6.23674C28.6748 6.72923 28.2761 7.12791 27.7836 7.12791Z" fill="white"/>
                                <path d="M34.0208 46.3314H30.4566C29.9641 46.3314 29.566 45.9322 29.566 45.4402C29.566 44.9483 29.9641 44.5491 30.4566 44.5491H34.0208C34.5133 44.5491 34.9115 44.9483 34.9115 45.4402C34.9115 45.9322 34.5133 46.3314 34.0208 46.3314Z" fill="white"/>
                                <path d="M27.7836 46.3314H2.83629C2.3438 46.3314 1.94511 45.9322 1.94511 45.4402C1.94511 44.9483 2.3438 44.5491 2.83629 44.5491H27.7836C28.2761 44.5491 28.6748 44.9483 28.6748 45.4402C28.6748 45.9322 28.2761 46.3314 27.7836 46.3314Z" fill="white"/>
                                <path d="M20.1393 26.2952C18.1938 26.2952 16.6098 24.7122 16.6098 22.7662C16.6098 21.1302 18.9254 17.438 19.3893 16.7146C19.7161 16.2037 20.5619 16.2037 20.8892 16.7146C21.3527 17.438 23.6683 21.1302 23.6683 22.7662C23.6683 24.7122 22.0848 26.2952 20.1393 26.2952ZM20.1393 18.9043C19.2048 20.5066 18.3921 22.1819 18.3921 22.7662C18.3921 23.7293 19.1762 24.5134 20.1393 24.5134C21.1023 24.5134 21.8865 23.7293 21.8865 22.7662C21.8859 22.1809 21.0738 20.5056 20.1393 18.9043Z" fill="white"/>
                                <path d="M19.7651 39.2035C19.4291 39.2035 19.115 39.0128 18.9636 38.7013L15.4249 31.4123C15.2098 30.9698 15.3943 30.4371 15.8374 30.2219C16.2809 30.0073 16.8127 30.1913 17.0278 30.6344L18.8739 34.4366V25.8384C18.8739 25.3464 19.2726 24.9478 19.7651 24.9478C20.2576 24.9478 20.6557 25.3464 20.6557 25.8384V38.3123C20.6557 38.7273 20.3687 39.0873 19.9644 39.1806C19.8981 39.1959 19.8308 39.2035 19.7651 39.2035Z" fill="white"/>
                                <path d="M19.764 39.2035C19.6284 39.2035 19.4903 39.1724 19.3603 39.1061C18.9218 38.8823 18.748 38.346 18.9713 37.9075L22.9163 30.1638C23.1386 29.7254 23.6754 29.5495 24.1149 29.7743C24.5534 29.9981 24.7272 30.5344 24.5034 30.9729L20.5584 38.7166C20.4018 39.0256 20.0888 39.2035 19.764 39.2035Z" fill="white"/>
                                <path d="M15.1012 31.9105C14.8733 31.9105 14.6434 31.8886 14.4155 31.8437C13.4896 31.6622 12.6907 31.132 12.1646 30.3494C11.2525 28.9918 11.1133 24.6368 11.0945 23.7773C11.0883 23.4739 11.2362 23.1879 11.4886 23.0187C11.7399 22.8484 12.0601 22.8208 12.3395 22.9396C13.1276 23.2812 17.1094 25.0534 18.023 26.41C19.1079 28.0257 18.6776 30.223 17.0625 31.3089C16.4741 31.7051 15.7956 31.9105 15.1012 31.9105ZM13.6436 29.3553C13.9036 29.7422 14.2997 30.0053 14.7576 30.0945C15.2164 30.1853 15.6814 30.0899 16.0678 29.8299C16.8682 29.2921 17.0813 28.2041 16.544 27.4042C16.2182 26.9198 14.6087 25.9833 12.939 25.1752C13.0573 27.0269 13.3173 28.8704 13.6436 29.3553Z" fill="white"/>
                                <path d="M25.1769 31.91C24.482 31.91 23.8024 31.7045 23.213 31.3079C22.432 30.7812 21.9012 29.9823 21.7203 29.057C21.5393 28.1317 21.7299 27.1916 22.2561 26.409C23.1692 25.0518 27.1514 23.2817 27.9406 22.9406C28.219 22.8208 28.5392 22.8504 28.7915 23.0196C29.0429 23.1889 29.1907 23.4754 29.1846 23.7783C29.1658 24.6373 29.0255 28.9933 28.113 30.3504C27.5868 31.1325 26.7869 31.6627 25.8611 31.8437C25.6332 31.8881 25.4037 31.91 25.1769 31.91ZM27.3401 25.1757C25.6704 25.9828 24.0598 26.9193 23.7341 27.4036C23.1957 28.2031 23.4088 29.291 24.2087 29.8294C24.5957 30.0894 25.0637 30.1847 25.519 30.0945C25.9773 30.0053 26.3734 29.7427 26.6334 29.3553C26.9597 28.8709 27.2208 27.0269 27.3401 25.1757Z" fill="white"/>
                            </svg>
                        </button>
                        <p className='fifth-screen__ques-text'>Какие удобрения лучше использовать?</p>
                    </div>
                    <div className='fifth-screen__ques'>
                        <button className='fifth-screen__ques-btn' type='button'>
                            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M45.3531 36.2924H22.1728C21.6157 36.2924 21.1647 35.8414 21.1647 35.2849C21.1647 34.7278 21.6157 34.2769 22.1728 34.2769H45.3531C45.9102 34.2769 46.3612 34.7278 46.3612 35.2849C46.3612 35.8414 45.9102 36.2924 45.3531 36.2924Z" fill="white"/>
                                <path d="M44.3456 26.2038H23.1803C22.6232 26.2038 22.1728 25.7529 22.1728 25.1958V19.5269C22.1728 18.9704 22.6232 18.5188 23.1803 18.5188C23.7374 18.5188 24.1883 18.9704 24.1883 19.5269V24.1883H43.3375V19.5955C43.3375 19.039 43.7885 18.588 44.3456 18.588C44.9027 18.588 45.3531 19.039 45.3531 19.5955V25.1958C45.3531 25.7529 44.9027 26.2038 44.3456 26.2038Z" fill="white"/>
                                <path d="M51.8029 39.7718C47.2827 39.7718 43.6063 36.0948 43.6063 31.5752C43.6063 27.0551 47.2833 23.3781 51.8029 23.3781C56.323 23.3781 60 27.0551 60 31.5752C60 36.0948 56.3236 39.7718 51.8029 39.7718ZM51.8029 25.393C48.3946 25.393 45.6218 28.1664 45.6218 31.5746C45.6218 34.9829 48.3946 37.7562 51.8029 37.7562C55.2111 37.7562 57.9845 34.9829 57.9845 31.5746C57.9845 28.1664 55.2111 25.393 51.8029 25.393Z" fill="white"/>
                                <path d="M51.8029 36.0342C49.3438 36.0342 47.3444 34.0337 47.3444 31.5752C47.3444 29.1162 49.3444 27.1162 51.8029 27.1162C54.2613 27.1162 56.2613 29.1168 56.2613 31.5752C56.2613 34.0331 54.2613 36.0342 51.8029 36.0342ZM51.8029 29.1318C50.4551 29.1318 49.36 30.2281 49.36 31.5746C49.36 32.9224 50.4557 34.0181 51.8029 34.0181C53.15 34.0181 54.2457 32.9218 54.2457 31.5746C54.2457 30.2281 53.15 29.1318 51.8029 29.1318Z" fill="white"/>
                                <path d="M15.4347 39.7718C10.914 39.7718 7.23695 36.0948 7.23695 31.5752C7.23695 27.0551 10.914 23.3781 15.4347 23.3781C19.9542 23.3781 23.6313 27.0551 23.6313 31.5752C23.6313 36.0948 19.9542 39.7718 15.4347 39.7718ZM15.4347 25.393C12.0264 25.393 9.25251 28.1664 9.25251 31.5746C9.25251 34.9829 12.0264 37.7562 15.4347 37.7562C18.843 37.7562 21.6151 34.9829 21.6151 31.5746C21.6151 28.1664 18.843 25.393 15.4347 25.393Z" fill="white"/>
                                <path d="M47.3686 20.1567H20.0857C19.5286 20.1567 19.0782 19.7057 19.0782 19.1492C19.0782 14.1475 23.1468 10.0784 28.1485 10.0784H39.3058C44.3075 10.0784 48.3767 14.1475 48.3767 19.1492C48.3767 19.7057 47.9257 20.1567 47.3686 20.1567ZM21.1659 18.1411H46.2891C45.7994 14.7265 42.8543 12.0939 39.3058 12.0939H28.1491C24.6007 12.0939 21.6561 14.7265 21.1659 18.1411Z" fill="white"/>
                                <path d="M26.7425 35.7407C26.4029 35.7407 26.0718 35.5695 25.8821 35.2592L5.51725 2.01555H1.00806C0.450976 2.01555 0 1.564 0 1.00749C0 0.450976 0.450976 0 1.00806 0H6.08241C6.43304 0 6.75887 0.182236 6.94169 0.480964L27.6007 34.2061C27.8919 34.6813 27.7425 35.3019 27.2679 35.5919C27.1035 35.6929 26.9213 35.7407 26.7425 35.7407Z" fill="white"/>
                                <path d="M40.3848 12.0938H34.2667C33.7096 12.0938 33.2592 11.6429 33.2592 11.0864V8.06275C33.2592 7.50624 33.7096 7.05469 34.2667 7.05469H40.3848C40.9419 7.05469 41.3923 7.50624 41.3923 8.06275V11.0864C41.3923 11.6429 40.9419 12.0938 40.3848 12.0938ZM35.2747 10.0783H39.3768V9.07024H35.2747V10.0783Z" fill="white"/>
                                <path d="M15.52 36.0342C13.0616 36.0342 11.0616 34.0337 11.0616 31.5752C11.0616 29.1162 13.0616 27.1162 15.52 27.1162C17.9785 27.1162 19.9785 29.1168 19.9785 31.5752C19.9785 34.0331 17.9785 36.0342 15.52 36.0342ZM15.52 29.1318C14.1729 29.1318 13.0772 30.2281 13.0772 31.5746C13.0772 32.9224 14.1729 34.0181 15.52 34.0181C16.8672 34.0181 17.9629 32.9218 17.9629 31.5746C17.9629 30.2281 16.8678 29.1318 15.52 29.1318Z" fill="white"/>
                            </svg>
                        </button>
                        <p className='fifth-screen__ques-text'>Как ухаживать за натуральным газоном?</p>
                    </div>
                    <div className='fifth-screen__ques'>
                        <button className='fifth-screen__ques-btn' type='button'>
                            <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M54 20.0001H47.786L50.7695 17.0165C50.957 16.8289 51.0625 16.5746 51.0625 16.3094C51.0625 16.0441 50.957 15.7899 50.7695 15.6022L37.4599 2.29284C37.0694 1.90247 36.436 1.90247 36.0458 2.29284L33.9601 4.37855C33.9504 4.37243 33.9425 4.36448 33.9325 4.35868L26.6155 0.134095C26.3858 0.00132115 26.1129 -0.0345577 25.8567 0.0340848C25.6006 0.102727 25.3821 0.270306 25.2495 0.500081L14.134 19.7527C14.0883 19.832 14.0588 19.9154 14.0367 19.9999H0.99999C0.447734 19.9999 0 20.4477 0 20.9999V53C0 53.5522 0.447734 53.9999 0.99999 53.9999H54C54.5523 53.9999 55 53.5522 55 53V41.9999V30.0001V21C55 20.4478 54.5523 20.0001 54 20.0001ZM36.7529 4.41421L48.6483 16.3094L44.9576 20.0001H21.1672L36.7529 4.41421ZM26.4814 2.36611L32.4987 5.84013L18.3387 20.0001H16.3005L26.4814 2.36611ZM53 41H39.9947C38.3436 41 37.0001 39.656 37.0001 38.0041V33.9957C37.0001 32.3439 38.3436 30.9998 39.9947 30.9998H53V41ZM53 29H39.9947C37.2405 29 35.0001 31.2411 35.0001 33.9958V38.0042C35.0001 40.7589 37.2406 43 39.9947 43H53V52.0001H1.99998V22H44.9697C45.0795 22.0397 45.194 22.0624 45.3093 22.0624C45.4245 22.0624 45.5391 22.0398 45.649 22H53V29Z" fill="white"/>
                                <path d="M41 37.9998C42.1046 37.9998 43 37.1044 43 35.9999C43 34.8953 42.1046 33.9999 41 33.9999C39.8955 33.9999 39 34.8953 39 35.9999C39 37.1044 39.8955 37.9998 41 37.9998Z" fill="white"/>
                            </svg>
                        </button>
                        <p className='fifth-screen__ques-text'>Оптовые и розничные цены на травосмеси</p>
                    </div>
                </div>
                <div className='fifth-screen__order'>
                    <button className='fifth-screen__btn' type='button' onClick={()=> setCall(!call)}>Заказать звонок</button>
                    <div className={`${call ? 'active' : ''} header__overlay `}>
                        <div className={'header__middle-form'}>
                            <div className='header__overlay-list'>
                                <p>Запросить оптовый прайс-лист</p>
                                <p className='header__overlay-delete' onClick={()=> setCall(!call)} >
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.4158 8.00409L15.7158 1.71409C15.9041 1.52579 16.0099 1.27039 16.0099 1.00409C16.0099 0.73779 15.9041 0.482395 15.7158 0.294092C15.5275 0.105788 15.2721 0 15.0058 0C14.7395 0 14.4841 0.105788 14.2958 0.294092L8.0058 6.59409L1.7158 0.294092C1.52749 0.105788 1.2721 2.36434e-07 1.0058 2.38419e-07C0.739497 2.40403e-07 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.00170684 0.73779 0.00170684 1.00409C0.00170684 1.27039 0.107495 1.52579 0.295798 1.71409L6.5958 8.00409L0.295798 14.2941C0.20207 14.3871 0.127676 14.4977 0.0769072 14.6195C0.0261385 14.7414 0 14.8721 0 15.0041C0 15.1361 0.0261385 15.2668 0.0769072 15.3887C0.127676 15.5105 0.20207 15.6211 0.295798 15.7141C0.388761 15.8078 0.499362 15.8822 0.621222 15.933C0.743081 15.9838 0.873786 16.0099 1.0058 16.0099C1.13781 16.0099 1.26852 15.9838 1.39038 15.933C1.51223 15.8822 1.62284 15.8078 1.7158 15.7141L8.0058 9.41409L14.2958 15.7141C14.3888 15.8078 14.4994 15.8822 14.6212 15.933C14.7431 15.9838 14.8738 16.0099 15.0058 16.0099C15.1378 16.0099 15.2685 15.9838 15.3904 15.933C15.5122 15.8822 15.6228 15.8078 15.7158 15.7141C15.8095 15.6211 15.8839 15.5105 15.9347 15.3887C15.9855 15.2668 16.0116 15.1361 16.0116 15.0041C16.0116 14.8721 15.9855 14.7414 15.9347 14.6195C15.8839 14.4977 15.8095 14.3871 15.7158 14.2941L9.4158 8.00409Z" fill="white"/>
                                    </svg>
                                </p>
                            </div>
                            <form action="https://formsubmit.co/erlanisakov60@gmail.com" method="POST" onSubmit={()=> handleSubmit(addReview)}>
                                <p className='route__text'>Имя*</p>
                                <input className='header__form-input' type="text" name="name" placeholder='Ваше имя'
                                       {...register('name', {
                                           required: "Поле обязательно к заполнению!",
                                           minLength: {
                                               value: 2,
                                               message: 'Минимум 2 символа!'
                                           }})}/>
                                <div style={{height: 20}}>{errors?.name && <p className='form__error'>{errors?.name?.message || "Error!"}</p>}</div>
                                <p className='route__text'>Телефон*</p>
                                <InputMask id='number' required className='header__form-input' mask="+7 (999) 999-99-99" placeholder='+7 (000) 000-00-00'
                                           {...register('number', {
                                               required: "Поле обязательно к заполнению!",
                                               minLength: {
                                                   value: 2,
                                                   message: 'Минимум 2 символа!'
                                               }})}/>
                                <div style={{height: 20}}>{errors?.number && <p className='form__error'>{errors?.number?.message || "Error!"}</p>}</div>
                                <p className='route__text'>E-mail*</p>
                                <input className='header__form-input' type="email" name="email" placeholder='test@gmail.com'
                                       {...register('mail', {
                                           required: "Необходимо заполнить!",
                                           minLength: {
                                               value: 5,
                                               message: 'Минимум 5 символа!'
                                           }})}/>
                                <div style={{height: 20}}>{errors?.mail && <p className='form__error'>{errors?.mail?.message || "Error!"}</p>}</div>
                                <button className='route__form-btn' type='submit'>Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='fifth-screen__info'>
                    <p className='fifth-screen__info-title'>Выгодные предложения для оптовых покупателей</p>
                    <p className='fifth-screen__info-subtitle'>Агрофирма «Русские травы» предлагает большой выбор недорогих семян газонных трав, которые можно купить оптом.</p>
                    <p className='fifth-screen__info-text'>Мы сотрудничаем с разными категориями клиентов, предлагая каждому из них индивидуальные решения:</p>
                    <ul>
                        <li className='fifth-screen__info-list'>Застройщикам жилых комплексов — предлагаем смеси «для сдачи объекта» с гарантированно быстрой всхожестью.</li>
                        <li className='fifth-screen__info-list'>Муниципальным организациям и организациям по благоустройству городских территорий — качественные травосмеси для озеленения, которые отличаются быстрым ростом, хорошей устойчивостью к агрессивным факторам внешней среды, зимостойкостью и долголетием.</li>
                        <li className='fifth-screen__info-list'>Гринкиперам, а также организациям, занимающимся озеленением спортивных объектов, полей для гольфа, парков и аллей — консультируем и помогаем выбрать травосмесь с учетом того, что газоны для этих территорий должны выдерживать достаточно серьезные нагрузки.</li>
                        <li className='fifth-screen__info-list'>Ландшафтным дизайнерам — помогаем выбрать лучшие сорта газонных трав в соответствии с конкретными требованиями к их проектам.</li>
                        <li className='fifth-screen__info-list'>Дорожно-строительным и дорожно-эксплуатационным компаниям — мы предлагаем универсальные придорожные травосмеси высокого качества. Эти газоны обладают хорошей экопластичностью: устойчивы к засолению, загрязнению и неблагоприятным погодным условиям.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FifthScreen;