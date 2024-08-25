"use client";
/* eslint-disable */
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Head from "next/head";

mapboxgl.accessToken =
  "";

export default function World() {
  const idStyle = [
    "marker-orange",
    "marker-blue",
    "marker-green",
    "marker-purple",
    "marker-red",
    "marker-white",
    "marker-yellow",
  ];

  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/ivanmedeiros/clr2ygbsu00vh01p5gftw3j4j",
      center: [-56.9, -13.35],
      zoom: 1,
    });

    const el = document.createElement("div");

    el.className = `marker`;
    el.id = "marker-red";

    new mapboxgl.Marker(el)
      .setLngLat([-56.9, -13.33])
      .addTo(map.current);
  });

  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <script src="https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.js"></script>
      </Head>
      <main className="bg-he-background h-screen">
        <Header />
        <div>
          <div className="top-0 left-0 z-10 absolute pt-20 text-white w-full text-center flex justify-center flex-col bg-transparent backdrop-blur-sm space-y-3">
            <p className="text-lg md:text-2xl font-semibold font-inter">
              World
            </p>
            <p className="text-sm md:text-base text-low-text-black ">
              The places I've been - I will travel the world, that's my dream
            </p>
          </div>
          <div ref={mapContainer} className="w-screen h-screen" />
        </div>
      </main>
    </>
  );
}
/* eslint-enable */
