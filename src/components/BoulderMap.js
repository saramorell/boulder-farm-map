import React, { Component } from 'react';
import '../css/farms.css'

class TestMap extends Component {

    render() {

      let isActive = this.props.isActive


      return (
        <div className='map'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 524 798">
          <defs>
          <style>{`.cls-1,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6{fill:none;stroke:#b3b3b3;}.cls-1,.cls-10,.cls-14,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7{stroke-miterlimit:10;}.cls-1{stroke-width:4px;}.cls-3,.cls-6{stroke-width:1px;}.cls-4,.cls-6{stroke-linecap:square;}.cls-4{stroke-width:0.96px;}.cls-5{stroke-width:1.01px;}.cls-16,.cls-7,.cls-8{fill:#1a1a1a;}.cls-10,.cls-14,.cls-7{stroke:#fff;}.cls-14,.cls-7{stroke-width:3px;}.cls-8{font-size:17px;}.cls-11,.cls-15,.cls-16,.cls-18,.cls-25,.cls-8{font-family:NunitoSans-Regular, Nunito Sans;}.cls-9{letter-spacing:-0.01em;}.cls-10{stroke-width:2.71px;}.cls-11{font-size:16.24px;}.cls-12{letter-spacing:-0.04em;}.cls-13{letter-spacing:-0.01em;}.cls-15,.cls-16{font-size:22px;}.cls-16,.cls-23{letter-spacing:0em;}.cls-17{letter-spacing:0em;}.cls-18,.cls-29{font-size:18px;}.cls-19{letter-spacing:0em;}.cls-20{letter-spacing:-0.01em;}.cls-21{letter-spacing:0em;}.cls-22{letter-spacing:0em;}.cls-24{letter-spacing:-0.01em;}.cls-25{font-size:16px;}.cls-26{fill:#17b5c1;}.cls-27,.cls-28,.cls-29,.cls-30,.cls-31{fill:#fff;}.cls-28,.cls-30{font-size:15px;}.cls-28,.cls-29,.cls-30,.cls-31{font-family:NunitoSans-Bold, Nunito Sans;font-weight:700;}.cls-30{letter-spacing:-0.05em;}.cls-31{font-size:14px;}`}</style>
          </defs>
          <title>Artboard 1</title>
          <g id="roads">
        <path className="cls-1" d="M64-2s1,0,5.5,5.5l4,5,5,7v19l-2,4-8,10-8,8-13,2-7,2-4,6-6,4h-7c-2,23-19,5-19,5C-4,75-25,92-4,75M78.5,15.5l4,2,6,4a19.19,19.19,0,0,1,8,5c4,4,26,28,33,28h21s21.5,7.5,27,13h36l35,10h272c9.5,0,9.5-.5,9.5-.5M431-5s.5,1,.5,8.5v625l-1,13v3l11,16v18s-1,13,12,13,7,26,7,26l-2,15v61c0,6.5-.5,6.5-.5,6.5m71-606s0,.5-9.5.5h-5l-34,22h-78l-101,110-164,191v55l8,13v11l1,7,17,29-1,34m-33-612-2,36-8,48-11.58,15.3L91.5,175.5l-8,13-5,11-19,19s0,6.46.1,17c.23,40.15.69,139.45-.1,164-1,31-5,9-6,24s8,31,8,31,21,22,35,29,12,33,12,33v108a9.39,9.39,0,0,0,6,9l58,41,137,75,53,44L369,799m-268,1,11.5-6.5,11-3,33-28,10-10s-5-12-9-15-6-14-4-20-4-14-4-14l-9-13s-9-14-20-24-12-20-12-20-14-27-23-31a35,35,0,0,1-14-12l-8-20s2-25-2-30-2-70-2-70l-1-20,3-9m105,298s2-5,5-4,1,0,7,4,29-11,29-11l62.35-13.71M527,696s0,1-7.5,4.5c-10.95,5.11-21,16-30,27s-22,15-22,15h-28s-26,6-40,14a45.83,45.83,0,0,0-19,21v16c0,7.5-.5,7.5-.5,7.5m50.5-210.5h-204l-81-.32h-37l-42.6-.68s-19.4-3-23.4,0a16.7,16.7,0,0,1-9,3h-15l-5,5h-9C-5,597.5-5,597-5,597m376.5-6.5,1,40,10,11v61h79.28M249.5,386.5s4,7,12,7h258c9.5,0,9.5-.5,9.5-.5"/><polyline className="cls-2" points="60 235 122 235 154 214 158 218 394 217 402 217"/>


        <path className="cls-2" d="M60,347.22l-.5.28,9-3h30v-20h8v-11h51v-18h9s4,1,7-5l3-6-4-3,4-5c1-9,0-42,0-42s1.37-16.14-2.32-16.57"/><polyline className="cls-2" points="108 154 123 154 265 155 268 151 277 151"/>
        <path className="cls-2" d="M157.5,217.5s2-20,0-21-5,0-5,0h-5V154.17"/><polyline className="cls-2" points="277 77.5 276 217.5 276.5 272.5 265.5 282.5 265.5 353.5 277 353.5 371.5 353.5 431.5 353.5"/><line className="cls-2" x1="294.5" y1="353.5" x2="294.5" y2="430.5"/><polyline className="cls-3" points="196.5 490.79 196.5 464.66 214.47 438.53 226.45 431.5 372.21 431.5 490.01 431.5 490.01 589.26 490.01 629.45 491.01 634.47 491.01 638.49 497 647.54 497 719.55 497 744"/><path className="cls-4" d="M277,518l23.62-6.61s24.59-3.78,26.56-2.83,32.47,2.83,32.47,2.83L430.5,492.5"/><path className="cls-2" d="M123,117.59l249.51-.09h140l8,2,8,4"/><polyline className="cls-2" points="215.85 217.93 217.5 373.5 216.5 451.5 216.5 509.5 205.5 509.5 205.5 564.5 217.5 575.5 216.42 590.46"/><polyline className="cls-5" points="104.72 492.52 258.15 490.52 269.27 485.5 278.36 486.5 278.36 591.54 278.36 629.99 435.05 632 524 632"/><line className="cls-2" x1="121.5" y1="666.5" x2="497.5" y2="666.5"/><path className="cls-2" d="M372.5,614.13V3.5c0-7,9-12,9-12"/><path className="cls-2" d="M527,744c2,1-48,0-48,0s-4.88.33-6.94-3.33"/><path className="cls-3" d="M371.5,521.4l-45,.1-5.31,9.73a2.16,2.16,0,0,1-2.12,1.11c-4.27-.47-18.28,0-22.41.12a2.24,2.24,0,0,0-1.75,1A10.25,10.25,0,0,1,291,537c-2.1.89-3.41.28-7.47.47a43.54,43.54,0,0,0-7,1c-5.22,1-7.59,2.33-10,3-10.29,2.88-15.31-7.27-27-5-5,1-4,2.8-10,4-8.39,1.68-11.28-1.72-18,1-2.66,1.07-4.33,2.47-8,3a20.51,20.51,0,0,0-5,1c-1.83.67-1.66,1-4,2a42,42,0,0,1-6,2h0a15.31,15.31,0,0,0-6,1c-2.09.81-2.66,1.6-7,5-2.57,2-1.64,1.17-8,6-3.23,2.46-3.25,2.51-4,3a41.72,41.72,0,0,1-8,4c-4.2,1.59-6.3,2.39-9,2-2.26-.32-3.77-1.87-5-2a103.66,103.66,0,0,0-34,2l-44,13"/><path className="cls-6" d="M371.5,521.4l-44.21.1a1.34,1.34,0,0,0-1.17.69l-4.93,9"/><path className="cls-3" d="M154.87,491.87l-.37-59a1.33,1.33,0,0,0-.17-.64l-5.39-9.89a1.36,1.36,0,0,1,.14-1.52l8.12-9.92a1.45,1.45,0,0,0,.31-.85l.14-10.44a1.4,1.4,0,0,1,.42-1l5.19-4.92a4.26,4.26,0,0,1,3-1.18h8.91a1.37,1.37,0,0,0,1.37-1.37V375.87a1.37,1.37,0,0,1,1.37-1.37H217.5"/></g>

        <g id="towns"><path className="cls-7" d="M251.94,110.41h1.38v12h-1.38v-5.49h-7.17v5.49h-1.38v-12h1.38v5.31h7.17Z"/><path className="cls-7" d="M262,114.14h1.38l-4.9,11.32h-1.41l1.4-3.16L255,114.14h1.47l2.77,6.76Z"/><path className="cls-7" d="M272.12,114.12v7.72a3.79,3.79,0,0,1-.95,2.79,3.87,3.87,0,0,1-2.83,1,5.9,5.9,0,0,1-3.65-1.12l.46-1a6.67,6.67,0,0,0,1.56.78,5.22,5.22,0,0,0,1.63.24,2.42,2.42,0,0,0,1.81-.64,2.64,2.64,0,0,0,.61-1.86v-1.47a2.59,2.59,0,0,1-1.1,1.23,3.45,3.45,0,0,1-1.74.42,3.64,3.64,0,0,1-1.93-.51,3.45,3.45,0,0,1-1.31-1.44,5.2,5.2,0,0,1,0-4.32,3.45,3.45,0,0,1,1.31-1.44,3.64,3.64,0,0,1,1.93-.51,3.4,3.4,0,0,1,1.72.42,2.75,2.75,0,0,1,1.1,1.21v-1.43Zm-2.06,6.09a3.84,3.84,0,0,0,0-4.35,2.32,2.32,0,0,0-1.88-.79,2.39,2.39,0,0,0-1.9.79,3.82,3.82,0,0,0,0,4.35,2.39,2.39,0,0,0,1.9.79A2.33,2.33,0,0,0,270.06,120.21Z"/><path className="cls-7" d="M274.53,110.53h1.67v1.55h-1.67Zm.14,11.87v-8.28H276v8.28Z"/><path className="cls-7" d="M285.55,118.47H279.5a3.23,3.23,0,0,0,.78,2.19,2.68,2.68,0,0,0,2,.74,4.08,4.08,0,0,0,2.65-1l.46,1a3.93,3.93,0,0,1-1.39.81,5.22,5.22,0,0,1-1.74.3,4.07,4.07,0,0,1-3-1.14,4.32,4.32,0,0,1-1.11-3.15,4.9,4.9,0,0,1,.49-2.25,3.65,3.65,0,0,1,1.39-1.52,3.83,3.83,0,0,1,2-.54,3.22,3.22,0,0,1,2.58,1.08,4.31,4.31,0,0,1,.94,3Zm-5.25-2.8a3.13,3.13,0,0,0-.77,1.92h4.81a2.92,2.92,0,0,0-.63-1.93,2.08,2.08,0,0,0-1.66-.67A2.3,2.3,0,0,0,280.3,115.67Z"/><path className="cls-7" d="M294.71,117.2v5.2h-1.38v-5.12a2.56,2.56,0,0,0-.45-1.68,1.79,1.79,0,0,0-1.43-.53,2.4,2.4,0,0,0-1.82.7,2.55,2.55,0,0,0-.68,1.89v4.74h-1.38v-8.28h1.36v1.36a2.8,2.8,0,0,1,1.14-1.17,3.49,3.49,0,0,1,1.67-.39Q294.71,113.92,294.71,117.2Z"/><path className="cls-7" d="M304.16,118.47h-6.05a3.33,3.33,0,0,0,.78,2.19,2.7,2.7,0,0,0,2,.74,4.1,4.1,0,0,0,2.65-1l.46,1a4,4,0,0,1-1.4.81,5.12,5.12,0,0,1-1.73.3,4.07,4.07,0,0,1-3-1.14,4.33,4.33,0,0,1-1.12-3.15,4.91,4.91,0,0,1,.5-2.25,3.7,3.7,0,0,1,1.38-1.52,3.85,3.85,0,0,1,2-.54,3.26,3.26,0,0,1,2.59,1.08,4.36,4.36,0,0,1,.93,3Zm-5.24-2.8a3,3,0,0,0-.77,1.92H303a3,3,0,0,0-.63-1.93,2.11,2.11,0,0,0-1.67-.67A2.28,2.28,0,0,0,298.92,115.67Z"/><text className="cls-8" transform="translate(241.91 122.4)">H<tspan className="cls-9" x="12.89" y="0">y</tspan><tspan x="21.52" y="0">giene</tspan></text><path className="cls-10" d="M61,25.58V14.13h1.33V24.45H68v1.13Z"/><path className="cls-10" d="M74.6,17.69h1.32L71.24,28.51H69.89l1.34-3-3.35-7.8h1.4l2.64,6.46Z"/><path className="cls-10" d="M78.49,25.19a3.31,3.31,0,0,1-1.31-1.43,5.24,5.24,0,0,1,0-4.34A3.39,3.39,0,0,1,78.49,18a3.88,3.88,0,0,1,2-.5,3.94,3.94,0,0,1,2,.5,3.41,3.41,0,0,1,1.32,1.44,4.81,4.81,0,0,1,.46,2.17,4.84,4.84,0,0,1-.46,2.17,3.33,3.33,0,0,1-1.32,1.43,3.84,3.84,0,0,1-2,.51A3.79,3.79,0,0,1,78.49,25.19Zm3.77-1.35a3.51,3.51,0,0,0,.63-2.25,3.43,3.43,0,0,0-.64-2.23,2.41,2.41,0,0,0-3.57,0,3.48,3.48,0,0,0-.63,2.23,3.49,3.49,0,0,0,.62,2.24,2.47,2.47,0,0,0,3.59,0Z"/><path className="cls-10" d="M93,20.61v5H91.7V20.7a2.42,2.42,0,0,0-.43-1.61,1.68,1.68,0,0,0-1.37-.51,2.36,2.36,0,0,0-1.74.67,2.48,2.48,0,0,0-.65,1.8v4.53H86.2v-7.9h1.3V19a2.71,2.71,0,0,1,1.09-1.11,3.28,3.28,0,0,1,1.59-.38C92.07,17.48,93,18.53,93,20.61Z"/><path className="cls-10" d="M94.94,24.67l.43-1a4.12,4.12,0,0,0,1.3.72,4.52,4.52,0,0,0,1.48.22,2.46,2.46,0,0,0,1.34-.3,1,1,0,0,0,.46-.87,1,1,0,0,0-.3-.74,2.31,2.31,0,0,0-1-.44L97.29,22a3,3,0,0,1-1.54-.78,1.87,1.87,0,0,1-.54-1.36A2.07,2.07,0,0,1,96,18.13a3.5,3.5,0,0,1,2.21-.65,4.54,4.54,0,0,1,1.57.27,3.23,3.23,0,0,1,1.25.77l-.43,1a3.62,3.62,0,0,0-2.39-.93,2.28,2.28,0,0,0-1.29.32,1,1,0,0,0-.46.88,1,1,0,0,0,.28.76,1.88,1.88,0,0,0,.92.43l1.34.32a3.44,3.44,0,0,1,1.64.79,1.83,1.83,0,0,1,.54,1.37,2,2,0,0,1-.84,1.66,3.74,3.74,0,0,1-2.28.62A4.59,4.59,0,0,1,94.94,24.67Z"/><text className="cls-11" transform="translate(59.53 25.58)"><tspan className="cls-12">L</tspan><tspan className="cls-13" x="8.19" y="0">y</tspan><tspan x="16.43" y="0">ons</tspan></text><path className="cls-14" d="M61.87,596.76a3.89,3.89,0,0,1,.74,2.42,3.82,3.82,0,0,1-1.34,3.14,6,6,0,0,1-3.81,1.09H51V587.9h6.23A5.86,5.86,0,0,1,60.94,589a4,4,0,0,1,.67,5.15,3.85,3.85,0,0,1-1.82,1.34A3.73,3.73,0,0,1,61.87,596.76Zm-9.1-2H57a4.17,4.17,0,0,0,2.63-.7,2.44,2.44,0,0,0,.89-2.05q0-2.64-3.52-2.64H52.77ZM60,601.24a2.49,2.49,0,0,0,.87-2.1q0-2.86-3.57-2.86H52.77v5.63h4.51A4.4,4.4,0,0,0,60,601.24Z"/><path className="cls-14" d="M67.33,602.88a4.57,4.57,0,0,1-1.79-2,7.26,7.26,0,0,1,0-5.87,4.57,4.57,0,0,1,1.79-1.95,5.6,5.6,0,0,1,5.35,0,4.54,4.54,0,0,1,1.8,1.95,7.26,7.26,0,0,1,0,5.87,4.54,4.54,0,0,1-1.8,2,5.6,5.6,0,0,1-5.35,0Zm5.1-1.84a5.81,5.81,0,0,0,0-6.07,3.27,3.27,0,0,0-4.84,0,5.8,5.8,0,0,0,0,6.06,3.33,3.33,0,0,0,4.86,0Z"/><path className="cls-14" d="M86.79,592.69v10.72H85.05v-1.83a3.5,3.5,0,0,1-1.42,1.48,4.27,4.27,0,0,1-2.06.5,3.65,3.65,0,0,1-2.88-1.07,4.52,4.52,0,0,1-1-3.15v-6.65H79.5v6.6a3.12,3.12,0,0,0,.58,2.1,2.23,2.23,0,0,0,1.8.68,3,3,0,0,0,2.27-.92,3.38,3.38,0,0,0,.85-2.41v-6Z"/><path className="cls-14" d="M90.11,603.41V587.9h1.78v15.51Z"/><path className="cls-14" d="M104.71,587.9v15.51h-1.78v-2a3.52,3.52,0,0,1-1.42,1.56,4.19,4.19,0,0,1-2.19.55,4.44,4.44,0,0,1-2.48-.7,4.62,4.62,0,0,1-1.67-2,6.8,6.8,0,0,1-.6-2.94,6.62,6.62,0,0,1,.6-2.9,4.48,4.48,0,0,1,1.67-1.94,4.59,4.59,0,0,1,2.48-.68,4.19,4.19,0,0,1,2.19.55,3.52,3.52,0,0,1,1.42,1.56V587.9ZM102.09,601a5.85,5.85,0,0,0,0-6,2.94,2.94,0,0,0-2.41-1.06A3,3,0,0,0,97.25,595a4.55,4.55,0,0,0-.87,3,4.77,4.77,0,0,0,.87,3,3.25,3.25,0,0,0,4.84,0Z"/><path className="cls-14" d="M117,598.33h-7.83a4.2,4.2,0,0,0,1,2.82,3.47,3.47,0,0,0,2.62,1,5.3,5.3,0,0,0,3.43-1.28l.59,1.3a5.09,5.09,0,0,1-1.8,1,6.89,6.89,0,0,1-2.24.38,5.27,5.27,0,0,1-4-1.47,5.59,5.59,0,0,1-1.44-4.07,6.5,6.5,0,0,1,.63-2.92,4.83,4.83,0,0,1,1.8-2,4.93,4.93,0,0,1,2.63-.7,4.17,4.17,0,0,1,3.34,1.4,5.65,5.65,0,0,1,1.21,3.84Zm-6.79-3.63a4,4,0,0,0-1,2.48h6.23a3.8,3.8,0,0,0-.82-2.5,2.74,2.74,0,0,0-2.15-.86A3,3,0,0,0,110.2,594.7Z"/><path className="cls-14" d="M125.68,594l-1.17.11a3.38,3.38,0,0,0-2.38,1,3.31,3.31,0,0,0-.74,2.18v6.12h-1.78V592.69h1.74v1.87a4,4,0,0,1,3.54-2.09l.64,0Z"/><text className="cls-15" transform="translate(49.08 603.41)">Boulder</text><path className="cls-7" d="M388.82,193.4V177.89h1.81v14h7.76v1.54Z"/><path className="cls-7" d="M402.19,192.87a4.44,4.44,0,0,1-1.78-2,7.15,7.15,0,0,1,0-5.87,4.55,4.55,0,0,1,1.78-2,5.2,5.2,0,0,1,2.67-.68,5.3,5.3,0,0,1,2.69.68,4.63,4.63,0,0,1,1.79,2,7.15,7.15,0,0,1,0,5.87,4.52,4.52,0,0,1-1.79,2,5.2,5.2,0,0,1-2.69.68A5.1,5.1,0,0,1,402.19,192.87Zm5.1-1.84a5.81,5.81,0,0,0,0-6.07,3.27,3.27,0,0,0-4.84,0,5.8,5.8,0,0,0,0,6.06,3.33,3.33,0,0,0,4.86,0Z"/><path className="cls-7" d="M421.87,186.67v6.73h-1.79v-6.62a3.31,3.31,0,0,0-.58-2.18,2.3,2.3,0,0,0-1.86-.68,3.14,3.14,0,0,0-2.35.9,3.32,3.32,0,0,0-.88,2.44v6.14h-1.78V182.68h1.76v1.76a3.55,3.55,0,0,1,1.47-1.5,4.37,4.37,0,0,1,2.16-.52C420.58,182.42,421.87,183.84,421.87,186.67Z"/><path className="cls-7" d="M434.71,182.68v10a4.88,4.88,0,0,1-1.23,3.62,5,5,0,0,1-3.65,1.22,7.59,7.59,0,0,1-4.73-1.45l.59-1.32a8.5,8.5,0,0,0,2,1,6.64,6.64,0,0,0,2.11.31,3.08,3.08,0,0,0,2.33-.82,3.35,3.35,0,0,0,.8-2.41v-1.9a3.44,3.44,0,0,1-1.42,1.59,4.43,4.43,0,0,1-2.26.55,4.74,4.74,0,0,1-2.5-.66,4.45,4.45,0,0,1-1.69-1.87,6.71,6.71,0,0,1,0-5.59,4.45,4.45,0,0,1,1.69-1.87,4.74,4.74,0,0,1,2.5-.66,4.3,4.3,0,0,1,2.22.55,3.54,3.54,0,0,1,1.43,1.56v-1.85Zm-2.66,7.89a5,5,0,0,0,0-5.63,3,3,0,0,0-2.43-1,3.08,3.08,0,0,0-2.45,1,4.9,4.9,0,0,0,0,5.63,3.08,3.08,0,0,0,2.45,1A3,3,0,0,0,432.05,190.57Z"/><path className="cls-7" d="M453.5,186.67v6.73h-1.78v-6.65a3.52,3.52,0,0,0-.52-2.15,1.92,1.92,0,0,0-1.66-.68,2.63,2.63,0,0,0-2.11.9,3.68,3.68,0,0,0-.77,2.46v6.12h-1.78v-6.65a3.53,3.53,0,0,0-.53-2.16,2,2,0,0,0-1.67-.67,2.62,2.62,0,0,0-2.11.9,3.63,3.63,0,0,0-.77,2.46v6.12H438V182.68h1.76v1.7a3.37,3.37,0,0,1,1.34-1.45,3.79,3.79,0,0,1,2-.51,3.16,3.16,0,0,1,3.28,2.11,3.44,3.44,0,0,1,1.4-1.55,4.19,4.19,0,0,1,2.16-.56C452.32,182.42,453.5,183.84,453.5,186.67Z"/><path className="cls-7" d="M458.53,192.87a4.5,4.5,0,0,1-1.78-2,7.15,7.15,0,0,1,0-5.87,4.61,4.61,0,0,1,1.78-2,5.2,5.2,0,0,1,2.67-.68,5.3,5.3,0,0,1,2.69.68,4.63,4.63,0,0,1,1.79,2,7.15,7.15,0,0,1,0,5.87,4.52,4.52,0,0,1-1.79,2,5.2,5.2,0,0,1-2.69.68A5.1,5.1,0,0,1,458.53,192.87Zm5.1-1.84a5.81,5.81,0,0,0,0-6.07,3.27,3.27,0,0,0-4.84,0,5.8,5.8,0,0,0,0,6.06,3.33,3.33,0,0,0,4.86,0Z"/><path className="cls-7" d="M478.21,186.67v6.73h-1.78v-6.62a3.3,3.3,0,0,0-.59-2.18,2.3,2.3,0,0,0-1.86-.68,3.14,3.14,0,0,0-2.35.9,3.32,3.32,0,0,0-.88,2.44v6.14H469V182.68h1.76v1.76a3.55,3.55,0,0,1,1.47-1.5,4.37,4.37,0,0,1,2.16-.52C476.92,182.42,478.21,183.84,478.21,186.67Z"/><path className="cls-7" d="M487.14,192.06l-.09,1.4a6.28,6.28,0,0,1-1.1.09,3.48,3.48,0,0,1-3.89-3.83v-5.63H480v-1.41h2.09v-3.25h1.78v3.25h3v1.41h-3v5.5c0,1.69.78,2.53,2.33,2.53A7.77,7.77,0,0,0,487.14,192.06Z"/><text className="cls-16" transform="translate(386.91 193.4)">L<tspan className="cls-17" x="11.86" y="0">ongmont</tspan></text><path className="cls-14" d="M414.83,631.47V618.79h1.47v11.42h6.36v1.26Z"/><path className="cls-14" d="M430.39,623.35a3.67,3.67,0,0,1,.82,2.6v5.52h-1.43V630a2.49,2.49,0,0,1-1,1.2,3.1,3.1,0,0,1-1.62.42,3.56,3.56,0,0,1-1.56-.34,2.77,2.77,0,0,1-1.12-1A2.29,2.29,0,0,1,424,629a2.15,2.15,0,0,1,.51-1.54,3.07,3.07,0,0,1,1.65-.8,16.63,16.63,0,0,1,3.21-.24h.39v-.59a2.34,2.34,0,0,0-.45-1.6,1.87,1.87,0,0,0-1.45-.49,5.66,5.66,0,0,0-3,.93l-.49-1.06a6,6,0,0,1,1.65-.78,6.22,6.22,0,0,1,1.86-.3A3.32,3.32,0,0,1,430.39,623.35Zm-1.3,6.37a2.63,2.63,0,0,0,.69-1.88v-.52h-.32a16.16,16.16,0,0,0-2.41.13,2.34,2.34,0,0,0-1.18.45,1.2,1.2,0,0,0-.35.93A1.5,1.5,0,0,0,426,630a1.84,1.84,0,0,0,1.29.46A2.32,2.32,0,0,0,429.09,629.72Z"/><path className="cls-14" d="M435.81,622.71h2.49v1.15h-2.49v7.61h-1.45v-7.61h-1.71v-1.15h1.71v-.29a3.65,3.65,0,0,1,.87-2.64,3.93,3.93,0,0,1,2.69-1l.72,0,.11,1.14-.83,0a2.27,2.27,0,0,0-1.6.62,2.41,2.41,0,0,0-.51,1.68Z"/><path className="cls-14" d="M445.74,623.35a3.62,3.62,0,0,1,.82,2.6v5.52h-1.42V630a2.57,2.57,0,0,1-1.05,1.2,3.05,3.05,0,0,1-1.62.42,3.49,3.49,0,0,1-1.55-.34,2.8,2.8,0,0,1-1.13-1,2.35,2.35,0,0,1-.41-1.34,2.19,2.19,0,0,1,.5-1.54,3.11,3.11,0,0,1,1.66-.8,16.59,16.59,0,0,1,3.2-.24h.4v-.59a2.34,2.34,0,0,0-.45-1.6,1.89,1.89,0,0,0-1.46-.49,5.66,5.66,0,0,0-3,.93l-.48-1.06a5.87,5.87,0,0,1,1.65-.78,6.22,6.22,0,0,1,1.86-.3A3.28,3.28,0,0,1,445.74,623.35Zm-1.29,6.37a2.63,2.63,0,0,0,.69-1.88v-.52h-.32a16.41,16.41,0,0,0-2.42.13,2.38,2.38,0,0,0-1.18.45,1.2,1.2,0,0,0-.35.93,1.47,1.47,0,0,0,.52,1.16,1.83,1.83,0,0,0,1.28.46A2.35,2.35,0,0,0,444.45,629.72Z"/><path className="cls-14" d="M455.51,622.73H457l-5.18,12h-1.49l1.47-3.34-3.71-8.64h1.55l2.94,7.16Z"/><path className="cls-14" d="M465.71,627.32H459.3a3.47,3.47,0,0,0,.83,2.31,2.86,2.86,0,0,0,2.14.78,4.31,4.31,0,0,0,2.81-1l.49,1.06a4.19,4.19,0,0,1-1.48.86,5.5,5.5,0,0,1-1.83.31,4.28,4.28,0,0,1-3.23-1.21,4.53,4.53,0,0,1-1.18-3.33,5.21,5.21,0,0,1,.52-2.38,3.89,3.89,0,0,1,1.47-1.61,4.07,4.07,0,0,1,2.15-.58,3.4,3.4,0,0,1,2.73,1.15,4.64,4.64,0,0,1,1,3.14Zm-5.55-3a3.28,3.28,0,0,0-.82,2h5.09a3.07,3.07,0,0,0-.66-2,2.22,2.22,0,0,0-1.77-.71A2.44,2.44,0,0,0,460.16,624.35Z"/><path className="cls-14" d="M472.44,630.38l-.07,1.15a5,5,0,0,1-.9.07,2.85,2.85,0,0,1-3.18-3.13v-4.61h-1.71v-1.15h1.71V620h1.45v2.67h2.49v1.15h-2.49v4.5c0,1.38.64,2.07,1.91,2.07A6.84,6.84,0,0,0,472.44,630.38Z"/><path className="cls-14" d="M478.62,630.38l-.07,1.15a5.14,5.14,0,0,1-.9.07,3.14,3.14,0,0,1-2.39-.83,3.19,3.19,0,0,1-.8-2.3v-4.61h-1.71v-1.15h1.71V620h1.46v2.67h2.48v1.15h-2.48v4.5c0,1.38.63,2.07,1.91,2.07A7.13,7.13,0,0,0,478.62,630.38Z"/><path className="cls-14" d="M487.44,627.32H481a3.42,3.42,0,0,0,.83,2.31,2.84,2.84,0,0,0,2.14.78,4.31,4.31,0,0,0,2.81-1l.48,1.06a4.05,4.05,0,0,1-1.47.86,5.51,5.51,0,0,1-1.84.31,4.29,4.29,0,0,1-3.23-1.21,4.53,4.53,0,0,1-1.18-3.33,5.34,5.34,0,0,1,.52-2.38,3.89,3.89,0,0,1,1.47-1.61,4.1,4.1,0,0,1,2.15-.58,3.41,3.41,0,0,1,2.74,1.15,4.64,4.64,0,0,1,1,3.14Zm-5.56-3a3.28,3.28,0,0,0-.81,2h5.09a3.08,3.08,0,0,0-.67-2,2.2,2.2,0,0,0-1.76-.71A2.46,2.46,0,0,0,481.88,624.35Z"/><text className="cls-18" transform="translate(413.26 631.48)">La<tspan className="cls-19" x="19.26" y="0">f</tspan><tspan x="25.07" y="0">a</tspan><tspan className="cls-20" x="34.61" y="0">y</tspan><tspan className="cls-21" x="43.76" y="0">e</tspan><tspan className="cls-22" x="53.19" y="0">t</tspan><tspan x="59.36" y="0">te</tspan></text><path className="cls-14" d="M336.83,696.47V683.79h1.47v11.42h6.36v1.26Z"/><path className="cls-14" d="M347.76,696a3.75,3.75,0,0,1-1.46-1.59,5.93,5.93,0,0,1,0-4.81,3.75,3.75,0,0,1,1.46-1.59,4.56,4.56,0,0,1,4.38,0,3.65,3.65,0,0,1,1.47,1.59,5.93,5.93,0,0,1,0,4.81,3.65,3.65,0,0,1-1.47,1.59,4.56,4.56,0,0,1-4.38,0Zm4.18-1.5a4.79,4.79,0,0,0,0-5,2.69,2.69,0,0,0-4,0,4.77,4.77,0,0,0,0,5,2.38,2.38,0,0,0,2,.86A2.41,2.41,0,0,0,351.94,694.54Z"/><path className="cls-14" d="M363.68,687.71v8.76h-1.42V695a2.83,2.83,0,0,1-1.16,1.21,3.48,3.48,0,0,1-1.68.41,3,3,0,0,1-2.36-.87,3.72,3.72,0,0,1-.79-2.59v-5.43h1.46v5.4a2.64,2.64,0,0,0,.46,1.72,1.87,1.87,0,0,0,1.48.55,2.41,2.41,0,0,0,1.85-.75,2.77,2.77,0,0,0,.71-2v-4.95Z"/><path className="cls-14" d="M366.26,683.91H368v1.64h-1.76Zm.14,12.56v-8.76h1.46v8.76Z"/><path className="cls-14" d="M370,695.47l.48-1.08a4.78,4.78,0,0,0,1.43.8,5.3,5.3,0,0,0,1.65.24,2.79,2.79,0,0,0,1.49-.33,1.09,1.09,0,0,0,.51-1,1.07,1.07,0,0,0-.34-.82,2.54,2.54,0,0,0-1.14-.49l-1.47-.34a3.37,3.37,0,0,1-1.71-.86,2.1,2.1,0,0,1-.6-1.52,2.29,2.29,0,0,1,.92-1.89,3.86,3.86,0,0,1,2.45-.72,5.05,5.05,0,0,1,1.74.3,3.67,3.67,0,0,1,1.39.85l-.49,1.07a4,4,0,0,0-2.64-1,2.54,2.54,0,0,0-1.43.35,1.22,1.22,0,0,0-.2,1.82,2.11,2.11,0,0,0,1,.48l1.49.36a3.78,3.78,0,0,1,1.82.87,2.07,2.07,0,0,1,.59,1.52,2.19,2.19,0,0,1-.92,1.84,4.24,4.24,0,0,1-2.53.68A5.16,5.16,0,0,1,370,695.47Z"/><path className="cls-14" d="M385.34,687.73h1.45L383,696.47h-1.36l-3.77-8.74h1.55l2.94,7.16Z"/><path className="cls-14" d="M388.16,683.91h1.77v1.64h-1.77Zm.15,12.56v-8.76h1.45v8.76Z"/><path className="cls-14" d="M392.48,696.47V683.79h1.46v12.68Z"/><path className="cls-14" d="M396.66,696.47V683.79h1.46v12.68Z"/><path className="cls-14" d="M408.18,692.32h-6.41a3.42,3.42,0,0,0,.83,2.31,2.84,2.84,0,0,0,2.14.78,4.31,4.31,0,0,0,2.81-1l.48,1.06a4.05,4.05,0,0,1-1.47.86,5.51,5.51,0,0,1-1.84.31,4.29,4.29,0,0,1-3.23-1.21,4.57,4.57,0,0,1-1.18-3.33,5.34,5.34,0,0,1,.52-2.38,3.89,3.89,0,0,1,1.47-1.61,4.1,4.1,0,0,1,2.15-.58,3.41,3.41,0,0,1,2.74,1.15,4.64,4.64,0,0,1,1,3.14Zm-5.56-3a3.28,3.28,0,0,0-.81,2h5.09a3.08,3.08,0,0,0-.67-2,2.2,2.2,0,0,0-1.76-.71A2.46,2.46,0,0,0,402.62,689.35Z"/><text className="cls-18" transform="translate(335.26 696.48)"><tspan className="cls-23">L</tspan><tspan x="9.7" y="0">oui</tspan><tspan className="cls-24" x="33.97" y="0">s</tspan><tspan x="42.44" y="0">ville</tspan></text><path className="cls-14" d="M264,761.18l.51-1a5.45,5.45,0,0,0,1.71,1,6.18,6.18,0,0,0,2,.3,3.58,3.58,0,0,0,2.1-.52,1.73,1.73,0,0,0,.73-1.49,1.23,1.23,0,0,0-.35-.92,2.35,2.35,0,0,0-.93-.55,13.31,13.31,0,0,0-1.55-.44,14.2,14.2,0,0,1-2.15-.64,3.3,3.3,0,0,1-1.36-1,2.43,2.43,0,0,1-.52-1.63,3,3,0,0,1,.5-1.7,3.32,3.32,0,0,1,1.45-1.16,5.37,5.37,0,0,1,2.16-.4,6.3,6.3,0,0,1,2.19.37,4.69,4.69,0,0,1,1.72,1l-.5,1a5.44,5.44,0,0,0-1.62-1,5,5,0,0,0-1.79-.31,3.35,3.35,0,0,0-2.05.55,1.8,1.8,0,0,0-.75,1.54,1.42,1.42,0,0,0,.66,1.28,6.18,6.18,0,0,0,2,.74,21.65,21.65,0,0,1,2.29.65,3.28,3.28,0,0,1,1.38.88,2.25,2.25,0,0,1,.56,1.59,2.83,2.83,0,0,1-.51,1.68,3.17,3.17,0,0,1-1.45,1.11,5.69,5.69,0,0,1-2.2.39A6.1,6.1,0,0,1,264,761.18Z"/><path className="cls-14" d="M280.89,754.68v7.79h-1.26v-1.32a2.59,2.59,0,0,1-1,1.07,3.11,3.11,0,0,1-1.5.37,2.69,2.69,0,0,1-2.1-.78,3.35,3.35,0,0,1-.7-2.29v-4.84h1.3v4.8A2.35,2.35,0,0,0,276,761a1.64,1.64,0,0,0,1.32.49,2.11,2.11,0,0,0,1.64-.67,2.42,2.42,0,0,0,.63-1.75v-4.4Z"/><path className="cls-14" d="M289,755a3.37,3.37,0,0,1,1.21,1.44,4.91,4.91,0,0,1,.43,2.13,4.83,4.83,0,0,1-.43,2.12,3.32,3.32,0,0,1-1.21,1.4,3.28,3.28,0,0,1-1.81.5,3.13,3.13,0,0,1-1.59-.4,2.61,2.61,0,0,1-1-1.14v4.31h-1.29V754.68h1.29V756a2.61,2.61,0,0,1,1-1.14,3,3,0,0,1,1.59-.4A3.27,3.27,0,0,1,289,755Zm-.31,5.75a3.37,3.37,0,0,0,.63-2.18,3.45,3.45,0,0,0-.63-2.2,2.36,2.36,0,0,0-3.51,0,3.42,3.42,0,0,0-.62,2.19,3.47,3.47,0,0,0,.62,2.2,2.09,2.09,0,0,0,1.75.78A2.14,2.14,0,0,0,288.73,760.75Z"/><path className="cls-14" d="M299.15,758.78h-5.7a3,3,0,0,0,.74,2.05,2.5,2.5,0,0,0,1.9.7,3.86,3.86,0,0,0,2.5-.93l.43.95a3.71,3.71,0,0,1-1.31.76,5.12,5.12,0,0,1-1.63.28,3.86,3.86,0,0,1-2.88-1.07,4.07,4.07,0,0,1-1-3,4.58,4.58,0,0,1,.46-2.11,3.43,3.43,0,0,1,1.3-1.44,3.63,3.63,0,0,1,1.92-.51,3,3,0,0,1,2.43,1,4.15,4.15,0,0,1,.88,2.79Zm-4.94-2.64a3,3,0,0,0-.73,1.81H298a2.79,2.79,0,0,0-.59-1.82,2,2,0,0,0-1.57-.63A2.16,2.16,0,0,0,294.21,756.14Z"/><path className="cls-14" d="M305.47,755.61l-.85.08a2.53,2.53,0,0,0-1.74.75,2.44,2.44,0,0,0-.53,1.59v4.44h-1.3v-7.79h1.27V756a2.86,2.86,0,0,1,2.57-1.52l.47,0Z"/><path className="cls-14" d="M306.57,751.31h1.57v1.45h-1.57Zm.13,11.16v-7.79H308v7.79Z"/><path className="cls-14" d="M311.7,762.09a3.35,3.35,0,0,1-1.3-1.41,5.31,5.31,0,0,1,0-4.28,3.35,3.35,0,0,1,1.3-1.41,3.76,3.76,0,0,1,1.94-.5,3.83,3.83,0,0,1,2,.5,3.29,3.29,0,0,1,1.3,1.41,5.21,5.21,0,0,1,0,4.28,3.29,3.29,0,0,1-1.3,1.41,3.83,3.83,0,0,1-2,.5A3.76,3.76,0,0,1,311.7,762.09Zm3.71-1.34a4.2,4.2,0,0,0,0-4.41,2.11,2.11,0,0,0-1.76-.78,2.14,2.14,0,0,0-1.76.78,3.47,3.47,0,0,0-.62,2.2,3.42,3.42,0,0,0,.62,2.21,2.41,2.41,0,0,0,3.53,0Z"/><path className="cls-14" d="M323.71,755.61l-.85.08a2.53,2.53,0,0,0-1.74.75,2.44,2.44,0,0,0-.53,1.59v4.44h-1.3v-7.79h1.27V756a2.86,2.86,0,0,1,2.57-1.52l.47,0Z"/><text className="cls-25" transform="translate(263.26 762.48)">Superior</text>
        </g>



        <g id="markers">
          <path id="marker" className="cls-26" d="M249.42,520.52c-.24-.19-.48-.41-.72-.63l-.87-.76.09,0a12.54,12.54,0,0,1-2.38-3.85,12.83,12.83,0,1,1,24.76-5l.05,0-.05.87-1.76,26Z"/>

          <path id="marker" className={` cls-28 ${isActive === 6 ? 'grow active' : ''}`} d="M257.47,498.2a12.31,12.31,0,0,1,12.32,12.85h0l-1.69,25-18.36-15.94c-.24-.2-.48-.4-.71-.61l-.22-.2h0l-.11-.09a12.34,12.34,0,0,1,8.75-21m0-1a13.35,13.35,0,0,0-12.4,18.23,13.43,13.43,0,0,0,2,3.5l-.18.07,1.23,1.08.23.2a9.53,9.53,0,0,0,.73.64l18.34,15.92,1.52,1.31.13-2,1.69-25,.1-1.58-.13.05a13.1,13.1,0,0,0-.89-3.94,13.25,13.25,0,0,0-12.41-8.44Z"/>
          <text className={`cls-28 ${isActive === 6 ? 'grow active' : ''}`} transform="matrix(0.93, -0.37, 0.37, 0.93, 255.99, 518.78)">6</text>

          <path className="cls-26" d="M306.62,83A12.33,12.33,0,1,0,282,83a12.15,12.15,0,0,0,1,4.87L283,88h0l.13.27c.14.28.28.56.44.83l11.23,21.57L305.57,88h0A12.28,12.28,0,0,0,306.62,83Z"/><text className="cls-29" transform="translate(288.88 91.12)">2</text>
          <path className="cls-26" d="M390.62,167A12.33,12.33,0,1,0,366,167a12.15,12.15,0,0,0,1,4.87l.06.13h0l.13.27c.14.28.28.56.44.83l11.23,21.57L389.57,172h0A12.28,12.28,0,0,0,390.62,167Z"/><text className="cls-29" transform="translate(372.88 175.12)">5</text>
          <path className="cls-26" d="M119.62,284A12.33,12.33,0,0,0,95,284a12.15,12.15,0,0,0,1,4.87L96,289h0l.13.27c.14.28.28.56.44.83l11.23,21.57L118.57,289h0A12.28,12.28,0,0,0,119.62,284Z"/><text className="cls-28" transform="translate(102.88 291.12)">7</text>
          <path className="cls-26" d="M194.13,464.33c-.15-.27-.3-.56-.44-.85l-.51-1h.09a12.83,12.83,0,1,1,24,0h0l-.33.71-11.19,23.58Z"/>
          <path className="cls-27" d="M205.29,445.67A12.33,12.33,0,0,1,216.56,463h0l-10.76,22.67L194.58,464.1c-.16-.27-.3-.55-.44-.83L194,463h0l-.06-.13a12.15,12.15,0,0,1-1-4.87,12.33,12.33,0,0,1,12.33-12.33m0-1A13.35,13.35,0,0,0,192,458a13.15,13.15,0,0,0,.61,4h-.2l.75,1.46.14.27c.13.27.28.57.45.86l11.21,21.54.93,1.78.86-1.81,10.76-22.67.68-1.43H218a13.15,13.15,0,0,0,.61-4,13.35,13.35,0,0,0-13.33-13.33Z"/><text className="cls-28" transform="translate(200.88 465.12)">9</text>
          <path className="cls-26" d="M263.25,510.58c-.13-.28-.26-.58-.38-.88l-.42-1h.08a12.47,12.47,0,0,1-.52-4.59,12.86,12.86,0,0,1,12.79-12l.88,0a12.85,12.85,0,0,1,10.84,18.06h.05l-.41.74L273.4,533.78Z"/>
          <path className="cls-27" d="M274.8,492.68l.85,0a12.31,12.31,0,0,1,10.06,18.06h0l-12.27,21.89-9.74-22.29c-.14-.28-.26-.56-.38-.85l-.12-.28h0a.69.69,0,0,0-.05-.13,12.36,12.36,0,0,1,11.63-16.43m0-1a13.36,13.36,0,0,0-13.29,12.43,13,13,0,0,0,.34,4h-.2l.65,1.51.12.28c.11.28.24.59.39.89l9.72,22.25.81,1.84,1-1.76,12.27-21.88.78-1.38h-.14a13.35,13.35,0,0,0-11.52-18.16c-.3,0-.61,0-.91,0Z"/><text className="cls-28" transform="matrix(1, 0.07, -0.07, 1, 265.01, 510.49)">14</text>
          <path className="cls-26" d="M360.13,576.33c-.15-.27-.3-.56-.44-.85l-.51-1h.09a12.83,12.83,0,1,1,24,0h0l-.33.71-11.19,23.58Z"/>
          <path className="cls-27" d="M371.29,557.67A12.33,12.33,0,0,1,382.56,575h0l-10.76,22.67L360.58,576.1c-.16-.27-.3-.55-.44-.83L360,575h0l-.06-.13a12.15,12.15,0,0,1-1-4.87,12.33,12.33,0,0,1,12.33-12.33m0-1A13.35,13.35,0,0,0,358,570a13.15,13.15,0,0,0,.61,4h-.2l.75,1.46.14.27c.13.27.28.57.45.86l11.21,21.54.93,1.78.86-1.81,10.76-22.67.68-1.43H384a13.15,13.15,0,0,0,.61-4,13.35,13.35,0,0,0-13.33-13.33Z"/><text className="cls-28" transform="translate(361.86 575.08) rotate(0.3)">20</text>
          <path className="cls-26" d="M439.13,660.33c-.15-.27-.3-.56-.44-.85l-.51-1h.09a12.83,12.83,0,1,1,24,0h0l-.33.71-11.19,23.58Z"/>
          <path className="cls-27" d="M450.29,641.67A12.33,12.33,0,0,1,461.56,659h0l-10.76,22.67L439.58,660.1c-.16-.27-.3-.55-.44-.83L439,659h0l-.06-.13a12.15,12.15,0,0,1-1-4.87,12.33,12.33,0,0,1,12.33-12.33m0-1A13.35,13.35,0,0,0,437,654a13.15,13.15,0,0,0,.61,4h-.2l.75,1.46.14.27c.13.27.28.57.45.86l11.21,21.54.93,1.78.86-1.81,10.76-22.67.68-1.43H463a13.15,13.15,0,0,0,.61-4,13.35,13.35,0,0,0-13.33-13.33Z"/><text className="cls-28" transform="translate(441.88 659.12)">21</text>
          <path className="cls-26" d="M441.13,739.33c-.15-.27-.3-.56-.44-.85l-.51-1h.09a12.83,12.83,0,1,1,24,0h0l-.33.71-11.19,23.58Z"/>
          <path className="cls-27" d="M452.29,720.67A12.33,12.33,0,0,1,463.56,738h0l-10.76,22.67L441.58,739.1c-.16-.27-.3-.55-.44-.83L441,738h0l-.06-.13a12.15,12.15,0,0,1-1-4.87,12.33,12.33,0,0,1,12.33-12.33m0-1A13.35,13.35,0,0,0,439,733a13.15,13.15,0,0,0,.61,4h-.2l.75,1.46.14.27c.13.27.28.57.45.86l11.21,21.54.93,1.78.86-1.81,10.76-22.67.68-1.43H465a13.15,13.15,0,0,0,.61-4,13.35,13.35,0,0,0-13.33-13.33Z"/><text className="cls-28" transform="translate(442.88 738.12)">19</text>
          <path className="cls-26" d="M73.24,512c0-.3,0-.63,0-.95l0-1.16.08.05a12.66,12.66,0,0,1,1.5-4.27,12.84,12.84,0,0,1,22.35,12.63,12.62,12.62,0,0,1-2.92,3.5l0,0-.65.46-21.35,15Z"/>
          <path className="cls-27" d="M86.08,499.66a12.18,12.18,0,0,1,6,1.6,12.32,12.32,0,0,1,1.28,20.63h0L72.9,536.33l.84-24.3c0-.31,0-.63,0-.94v-.3h0a.76.76,0,0,1,0-.15,12.45,12.45,0,0,1,1.53-4.73,12.31,12.31,0,0,1,10.75-6.26m0-1a13.35,13.35,0,0,0-11.62,6.77A13.17,13.17,0,0,0,73,509.21l-.17-.1-.07,1.65v.3c0,.3,0,.64,0,1L71.9,536.3l-.07,2,1.64-1.16L94,522.71l1.31-.92-.13-.06a13.33,13.33,0,0,0-9.09-23.07Z"/>
          <text className="cls-28" transform="matrix(0.87, 0.49, -0.49, 0.87, 78.72, 516.02)">8</text>
          <path className="cls-26" d="M56.43,510.8a7.94,7.94,0,0,1-.32-.9l-.38-1h.09a12.84,12.84,0,0,1,12.51-15.62,13.34,13.34,0,0,1,1.79.12,12.84,12.84,0,0,1,9.5,18.85h0l-.42.65-14.33,21.8Z"/>
          <path className="cls-27" d="M68.33,493.74a12.54,12.54,0,0,1,1.72.12,12.33,12.33,0,0,1,8.77,18.72h0L65,533.55,56.9,510.63c-.12-.29-.22-.58-.32-.88l-.1-.28h0c0-.05,0-.09,0-.14a12.33,12.33,0,0,1,11.88-15.59m0-1a13.39,13.39,0,0,0-13.19,11.49,13.09,13.09,0,0,0,.06,4l-.2,0,.54,1.55.1.29c.09.28.2.6.33.91l8.13,22.88.67,1.9,1.11-1.68,13.78-21,.87-1.32-.14,0a13,13,0,0,0,1.17-3.88,13.35,13.35,0,0,0-11.37-15,12.92,12.92,0,0,0-1.86-.13Z"/><text className="cls-28" transform="translate(58.18 510.84) rotate(7.93)">13</text>
          <path className="cls-26" d="M38.15,522.5c-.27-.14-.55-.3-.83-.48l-1-.57.08-.05a12.56,12.56,0,0,1-3.06-3.35,12.83,12.83,0,1,1,23.4-9.47l0,0,.1.76L60,535.23Z"/>
          <path className="cls-27" d="M44.18,498.85a12.33,12.33,0,0,1,10.43,5.74,12.46,12.46,0,0,1,1.78,4.8h0l3,24.91-21-12.22a8.13,8.13,0,0,1-.81-.47l-.26-.15h0l-.12-.07a12.34,12.34,0,0,1,7-22.52m0-1a13.33,13.33,0,0,0-8.6,23.52l-.17.11,1.42.84.26.15c.25.16.54.33.84.49l21,12.19,1.74,1-.24-2-3-24.91-.19-1.57-.12.08a12.89,12.89,0,0,0-1.61-3.71,13.28,13.28,0,0,0-11.28-6.21Z"/><text className="cls-30" transform="matrix(0.84, -0.53, 0.53, 0.84, 39.52, 521.4)">11</text>
          <path className="cls-26" d="M43.63,566.66c-.2-.23-.4-.48-.6-.74l-.71-.89.09,0a12.63,12.63,0,0,1-1.66-4.23,12.86,12.86,0,0,1,10.1-15.08,13.27,13.27,0,0,1,2.51-.25,12.85,12.85,0,0,1,12.57,10.34,12.7,12.7,0,0,1,.07,4.6h0l-.18.74-6.4,25.3Z"/>
          <path className="cls-27" d="M53.36,546a12.34,12.34,0,0,1,12.08,9.94,12.2,12.2,0,0,1-.07,5.11h0l-6.14,24.33L44,566.35c-.21-.23-.4-.48-.59-.73l-.19-.23h0l-.09-.11A12.35,12.35,0,0,1,51,546.19a12.39,12.39,0,0,1,2.41-.24m0-1a13.51,13.51,0,0,0-2.61.26,13.33,13.33,0,0,0-9.11,19.47l-.2,0,1,1.29.19.24c.18.24.39.5.61.76L58.44,586l1.26,1.57.49-1.95,6.15-24.32.39-1.54-.14,0a12.75,12.75,0,0,0-.17-4A13.36,13.36,0,0,0,53.36,545Z"/><text className="cls-28" transform="translate(50.4 566.13) rotate(-11.2)">4</text><text/>
          <path className="cls-26" d="M33,581c-.3-.08-.61-.17-.91-.28l-1.07-.32.06-.06a12.84,12.84,0,0,1-4-20.71,12.83,12.83,0,0,1,18.15-.22,12.6,12.6,0,0,1,2.65,3.74l0,0,.28.73,9.05,24.47Z"/>
          <path className="cls-27" d="M36.3,556.24a12.31,12.31,0,0,1,8.61,3.51A12.18,12.18,0,0,1,47.74,564h0l8.7,23.53-23.28-7c-.3-.08-.6-.17-.89-.27l-.29-.09h0l-.14,0a12.34,12.34,0,0,1,4.44-23.85m0-1a13.34,13.34,0,0,0-6,25.23l-.14.14,1.57.49.29.09.93.28,23.24,7,1.93.58-.7-1.89-8.7-23.53-.55-1.48-.1.1a13.29,13.29,0,0,0-11.74-7Z"/><text className="cls-28" transform="matrix(0.7, -0.72, 0.72, 0.7, 38.31, 576.71)">3</text><text/>
          <path className="cls-26" d="M181.13,651.33c-.15-.27-.3-.56-.44-.85l-.51-1h.09a12.83,12.83,0,1,1,24,0h0l-.33.71-11.19,23.58Z"/>
          <path className="cls-27" d="M192.29,632.67A12.33,12.33,0,0,1,203.56,650h0l-10.76,22.67L181.58,651.1c-.16-.27-.3-.55-.44-.83L181,650h0l-.06-.13a12.15,12.15,0,0,1-1-4.87,12.33,12.33,0,0,1,12.33-12.33m0-1A13.35,13.35,0,0,0,179,645a13.15,13.15,0,0,0,.61,4h-.2l.75,1.46.14.27c.13.27.28.57.45.86l11.21,21.54.93,1.78.86-1.81,10.76-22.67.68-1.43H205a13.15,13.15,0,0,0,.61-4,13.35,13.35,0,0,0-13.33-13.33Z"/><text className="cls-28" transform="translate(182.88 650.12)">16</text>
          <path className="cls-26" d="M204.13,209.33c-.15-.27-.3-.56-.44-.85l-.51-1h.09a12.83,12.83,0,1,1,24,0h0l-.33.71-11.19,23.58Z"/>
          <path className="cls-27" d="M215.29,190.67A12.33,12.33,0,0,1,226.56,208h0l-10.76,22.67L204.58,209.1c-.16-.27-.3-.55-.44-.83L204,208h0l-.06-.13a12.15,12.15,0,0,1-1-4.87,12.33,12.33,0,0,1,12.33-12.33m0-1A13.35,13.35,0,0,0,202,203a13.15,13.15,0,0,0,.61,4h-.2l.75,1.46.14.27c.13.27.28.57.45.86l11.21,21.54.93,1.78.86-1.81,10.76-22.67.68-1.43H228a13.15,13.15,0,0,0,.61-4,13.35,13.35,0,0,0-13.33-13.33Z"/><text className="cls-28" transform="translate(205.88 208.12)">12</text>
          <path className="cls-26" d="M126.38,151.35c-.24-.2-.48-.41-.71-.64l-.83-.74.08,0a12.83,12.83,0,0,1,9.67-21.28,12.9,12.9,0,0,1,12,8.31,12.7,12.7,0,0,1,.82,4.53h0l-.06.75-2.16,26Z"/>
          <path className="cls-27" d="M134.59,129.16a12.32,12.32,0,0,1,12.31,13h0l-2.08,25L126.71,151c-.24-.19-.47-.4-.7-.62l-.22-.2h0a.94.94,0,0,1-.1-.1,12.33,12.33,0,0,1,8.89-20.88m0-1a13.34,13.34,0,0,0-10.5,21.56l-.18.07,1.21,1.1.23.2c.21.21.47.44.72.65L144.16,168l1.49,1.34.17-2,2.08-25,.13-1.58-.13.05a13.21,13.21,0,0,0-.83-4,13.41,13.41,0,0,0-12.48-8.63Z"/><text className="cls-31" transform="translate(127.59 148.6) rotate(-20.64)">18</text>
          <path className="cls-26" d="M143.7,143.9c-.09-.29-.17-.61-.24-.93l-.28-1h.09a12.63,12.63,0,0,1,.2-4.58,12.76,12.76,0,0,1,12.5-10A12.85,12.85,0,0,1,168.5,143a12.72,12.72,0,0,1-1.77,4.17h.05l-.51.66-16.12,20.53Z"/>
          <path className="cls-27" d="M156,127.85a12.16,12.16,0,0,1,2.73.31A12.32,12.32,0,0,1,168,142.91a12.2,12.2,0,0,1-2.14,4.64h0l-15.5,19.74-6.19-23.52q-.13-.45-.24-.9l-.08-.29h0a.58.58,0,0,0,0-.14A12.35,12.35,0,0,1,156,127.85m0-1a13.36,13.36,0,0,0-13.28,14.43l-.19,0,.41,1.59.07.29c.07.29.15.62.25.94l6.18,23.48.52,2,1.24-1.59,15.49-19.73,1-1.24-.14,0a13.07,13.07,0,0,0,1.49-3.77,13.34,13.34,0,0,0-10.06-15.95,13.5,13.5,0,0,0-3-.33Z"/><text className="cls-28" transform="translate(145.68 143.11) rotate(12.75)">10</text>
          <path className="cls-26" d="M385.62,242A12.33,12.33,0,1,0,361,242a12.15,12.15,0,0,0,1,4.87l.06.13h0l.13.27c.14.28.28.56.44.83l11.23,21.57L384.57,247h0A12.28,12.28,0,0,0,385.62,242Z"/><text className="cls-28" transform="translate(363.88 247.12)">15</text>
          <path className="cls-26" d="M397.62,281A12.33,12.33,0,1,0,373,281a12.15,12.15,0,0,0,1,4.87l.06.13h0l.13.27c.14.28.28.56.44.83l11.23,21.57L396.57,286h0A12.28,12.28,0,0,0,397.62,281Z"/>
          <text className="cls-28" transform="translate(376.88 288.12)">17</text>
          <path className="cls-26" d="M326.62,48A12.34,12.34,0,1,0,303,52.87L303,53h0l.14.27c.13.28.28.56.43.83L314.8,75.67,325.56,53h0A12.28,12.28,0,0,0,326.62,48Z"/>
          <text className="cls-29" transform="translate(308.89 56.12)">1</text>
        </g>
        </svg>

        </div>
      )
  }
}
export default TestMap;