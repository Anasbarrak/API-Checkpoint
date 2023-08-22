import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <>
  <div>
    <label className="toggle">
      <input className="checkbox" type="checkbox" name="theme-toggle" />
    </label>
  </div>
  <footer>
    Illustration from{" "}
    <a
      href="https://fr.freepik.com/vecteurs-libre/paysage-tropical-jungle-plage-mer-illustration-dessin-anime-vectorielle-ile-exotique-ete-rivage-oceanique-silhouettes-arbres-foret-tropicale-herbe-dans-eau_25644778.htm#page=11&query=water%20landscape&position=13&from_view=search&track=ais"
      target="_blank"
    >
      Upklyak
    </a>{" "}
    for the water &amp; from{" "}
    <a
      href="https://fr.freepik.com/vecteurs-libre/paysage-desertique-arriere-plan-pour-videoconference_9746585.htm#query=desert&position=4&from_view=search&track=sph"
      target="_blank"
    >
      Freepik
    </a>{" "}
    for the desert and the dinosaurs
  </footer>
</>
  </React.StrictMode>
);


