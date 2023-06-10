/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import RefSlider from "../partners/slider";
import "../assets/style/about.css";

export default function index() {
  return (
    <div className="w-full min-h-screen  mx-auto flex justify-between flex-col content-center items-center bg-slate-300 mt-5 overflow-hidden">
      <div className="h-1">{/*  */}</div>
      <div className="max-w-7xl h-full flex justify-between flex-col gap-5 bg-about">
        <h1 className="text-3xl font-bold text-center text-slate-900 about-title">
          Hakkımızda
        </h1>
        <div className="about-text">
          <p>
            <a
              href="https://www.cigdemsogutma.com/"
              className="text-sky-800"
              target="_blank"
            >
              ÇİĞDEM SOĞUTMA ISITMA LTD.ŞTİ
            </a>
            , 1981 yılından bu yana işimizde her zaman dürüstlüğü ve müşteri
            memnuniyetini öncelikli tutan bir kuruluş olmuştur. Müşterilerimize
            her zaman ürün kalitesi ve fiyatı konusunda yardımcı olmayı
            amaçladık ve birçok markaya ev sahipliği yaparak müşterilerimizin
            alım gücünü güçlendirdik. 41 yıllık deneyimimizle işimizi temiz ve
            güvenilir bir şekilde ilerletmek için çabaladık. Müşteri
            memnuniyeti, kalite, uygun fiyatlar ve ödeme kolaylıklarıyla her
            konuda müşterilerimize destek olmayı hedefledik.
          </p>
          <br />
          <p>
            <span className="hover:scale-105 transition-all duration-200">
              INTERCOOL
            </span>
            , öncü olduğumuz izolasyonlu bakır borularımızı sizlere sunmaktan
            gurur duyar. 41 yıllık tecrübemizi bu borulara yansıtarak yüksek
            kaliteli bir ürün elde ettik.{" "}
            <span className="hover:scale-105 transition-all duration-200">
              INTERCOOL
            </span>{" "}
            izolasyonlu bakır boruları, en uygun fiyatlarla sizlere
            sunulmaktadır. Türkiye genelinde teslimat yapmakta ve bayilikler
            dağıtmaktayız.
          </p>
          <br />
          <p>
            Sizlere daha profesyonel hizmet sunabilmek amacıyla,{" "}
            <span className="hover:scale-105 transition-all duration-200">
              INTERCOOL{" "}
            </span>
            izolasyonlu bakır boruları hakkında daha fazla bilgi almak,
            ürünlerimizi incelemek veya bayilik başvurusu yapmak için bizi
            ziyaret edebilir veya iletişim bilgilerimizi kullanabilirsiniz.
            Ekibimiz, uzun yıllara dayanan deneyim ve müşteri odaklı
            yaklaşımıyla sizlere yardımcı olmaktan memnuniyet duyacaktır.
          </p>
          {/* <img
            className="w-1/2 h-1/2"
            src="https://i.hizliresim.com/bu8ne3m.png"
            alt="about"
          /> */}
        </div>
      </div>

      <div className="referance mb-5 flex flex-col justify-center text-center">
        <h1 className="text-4xl font-semibold mb-4">İş Ortaklarımız</h1>
        <RefSlider />
      </div>
    </div>
  );
}
