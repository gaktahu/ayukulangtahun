import Head from 'next/head'
import Image from 'next/image'
import nabeel from '../assets/nabeel.jpeg'
import ayuk from '../assets/ayuk.jpeg'
import ayuk1 from '../assets/ayuk1.jpeg'
import mama from '../assets/mama.jpeg'
import Confetti from 'react-confetti'
import {Howl, Howler} from 'howler';
import { useEffect } from 'react';
import React from "react";
function useWindowSize() {
  const isSSR = typeof window == "undefined";
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}

var sound = new Howl({
  src: ['hbd.mp3'],
  loop: true
});

export default function Home() {
  const { width, height } = useWindowSize();
  useEffect(()=>{
    sound.play();
  })
  return (
    <>
    <Confetti
       width={width}
       height={height+1000}
     />
    <section className="h-auto bg-white">
        <div className="px-10 py-24 mx-auto max-w-7xl">
            <div className="w-full mx-auto text-left md:text-center">
                <h1 data-aos="fade-up" data-aos-delay="100" className="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight"><span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">Happy Birthday</span> for<br className="lg:block hidden"/>Nabila Piranti Salsabila</h1>
                <p data-aos="fade-up" data-aos-delay="100" className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">Selamat datang yuk! di Website yang Nabeel buat khusus untuk ayuk di hari ulang tahun ayuk ini! Jelajahi semua konten nya yuk!</p>
            </div>
        </div>
    </section>
    <section className="px-2 pt-32 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center" data-aos="fade-left" data-aos-delay="150">
                <span className="block"><span className="block mt-1 text-indigo-500 lg:inline lg:mt-0">ْبَارَكَ اللَّهُ فِي عُمْرِك</span></span>
            </h1>
            <p className="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center" data-aos="fade-right" data-aos-delay="150">
                "Semoga Allah memberkahi usiamu"
            </p>
        </div>
        <div data-aos="flip-right" data-aos-delay="200" className="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
            <Image src={ayuk1} width={720} height={1280} />
        </div>
    </section>
    <section className="py-20 bg-gray-50">
      <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
            <div className="w-full lg:max-w-md">
              <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading" data-aos="fade-up" data-aos-delay="50">Semoga ayuk menjadi orang yang baik, sholeha dan menjadi orang yang selalu menebar senyuman kepada orang lain</h2>
              <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6" data-aos="fade-down" data-aos-delay="150">Semoga ayuk :</p>
              <ul>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  <span className="font-medium text-gray-500" data-aos="fade-right" data-aos-delay="200">Sehat selalu</span>
                </li>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  <span className="font-medium text-gray-500" data-aos="fade-right" data-aos-delay="300">Dilindungi Allah</span>
                </li>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  <span className="font-medium text-gray-500" data-aos="fade-right" data-aos-delay="400">Tambah sholeha</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><Image className="mx-auto sm:max-w-sm lg:max-w-full" src={ayuk} width={3273} height={2059} alt="feature image"/></div>
        </div>
      </div>
    </section>
    <section className="relative w-full bg-white">
        <div className="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white"></div>
        <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">

            <h1 className="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3"><a href="#_">Semoga Ayuk</a></h1>
            <div data-aos="zoom-in" data-aos-delay="100" className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
                <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                    <a href="#_" className="bg3 block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110">
                    </a>
                    <div className="relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
                        <a href="#_" className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white">Solaria</a>
                        <h2 className="mb-5 text-5xl font-bold"><a href="#_">Bertambah Sholeha</a></h2>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-delay="150" className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                    <a href="#_" className="bg2 block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110">
                    </a>
                    <div className="relative z-20 w-full h-auto py-8 text-white bg-blue-400 border-t-0 border-yellow-200 px-7">
                        <a href="#_" className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-blue-500 bg-white">Kantor</a>
                        <h2 className="mb-5 text-5xl font-bold"><a href="#_">Panjang Umur</a></h2>
                        <p className="mb-2 text-lg font-normal text-blue-100 opacity-100"></p>

                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-delay="200" className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
                    <a href="#_" className=" bg1  block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"></a>
                    <div className="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-yellow-400 border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7">
                        <a href="#_" className="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-yellow-400 bg-white">Kampung durian</a>
                        <h2 className="mb-5 text-5xl font-bold"><a href="#_">Sehat</a></h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="w-full py-12 bg-white lg:py-24">
        <div className="max-w-6xl px-12 mx-auto text-center">
            <div className="space-y-12 md:text-center">
                <div className="max-w-3xl mb-20 space-y-5 sm:mx-auto sm:space-y-4">
                    <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">Tim pembuat website</h2>
                    <p className="text-xl text-gray-500">Kami bangga kepada para teman teman yang telah membantu kami membuat web ini</p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div className="w-full border border-gray-200 rounded-lg shadow-sm">

                    <div className="flex flex-col items-center justify-center p-10">
                        <Image className="w-32 h-32 mb-6 rounded-full" src={nabeel} width={901} height={1600}/>
                        <h2 className="text-lg font-medium">Nabeel Adriansyah</h2>
                        <p className="font-medium text-blue-500">Web publisher</p>
                        <p className="text-gray-400">Adik ayuk
                    </p></div>

                    <div className="flex border-t border-gray-200 divide-x divide-gray-200">
                        <a href="#_" className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a href="#_" className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                        </a>
                        <a href="#_" className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                        </a>
                    </div>
                </div>

                <div className="w-full border border-gray-200 rounded-lg shadow-sm">

                      <div className="flex flex-col items-center justify-center p-10">
                          <Image className="w-32 h-32 mb-6 rounded-full" src={nabeel} width={901} height={1600}/>
                          <h2 className="text-lg font-medium">Nabeel Adriansyah</h2>
                          <p className="font-medium text-blue-500">Pemrogram web</p>
                          <p className="text-gray-400">Adik ayuk
                      </p></div>

                    <div className="flex border-t border-gray-200 divide-x divide-gray-200">
                        <a href="#_" className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a href="#_" className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                        </a>
                        <a href="#_" className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                        </a>
                    </div>
                </div>

                <div className="w-full border border-gray-200 rounded-lg shadow-sm">

                    <div className="flex flex-col items-center justify-center p-10">
                        <Image className="w-32 h-32 mb-6 rounded-full" src={nabeel} width={901} height={1600}/>
                        <h2 className="text-lg font-medium">Nabeel Adriansyah</h2>
                        <p className="font-medium text-blue-500">Pendesain web</p>
                        <p className="text-gray-400">Adik ayuk
                    </p></div>

                    <div className="flex border-t border-gray-200 divide-x divide-gray-200">
                        <a href="#_" className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a href="#_" className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                        </a>
                        <a href="#_" className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    </section>
    <section className="flex items-center justify-center py-20 bg-gray-100 min-w-screen">
        <div className="px-16 bg-gray-100">
            <div className="container flex flex-col items-start mx-auto lg:items-center">
                <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">Ucapan Selamat ulang tahun</p>


                <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                    </path>
                </svg>
                    See what others are saying</h2>
                    <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

                <div data-aos="flip-left" data-aos-delay="100" className="items-center justify-center w-full mt-12 mb-4 lg:flex">
                    <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                        <div className="flex items-center justify-center">
                            <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                <Image src={nabeel} width={901} height={1600} className="object-cover w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <h4 className="font-bold text-gray-800">Nabeel Adriansyah</h4>
                            </div>
                        </div>
                        <blockquote className="mt-8 text-lg text-gray-500">"Happybirthday ayuq! Ucapan nya udah ada di web yuk wkwkwk. Sehad selalu yuk!"</blockquote>
                    </div>
                    <div data-aos="flip-right" data-aos-delay="100" className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                        <div className="flex items-center justify-center">
                            <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                <Image src={mama} width={901} height={1600} className="object-cover w-full h-full"/>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <h4 className="font-bold text-gray-800">Mama</h4>
                            </div>
                        </div>
                        <blockquote className="mt-8 text-lg text-gray-500">"barakallah fii umrik yuk! Semoga ayuk Sehat selalu, dilindungi Allah, bertambah sholeha"</blockquote>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}
