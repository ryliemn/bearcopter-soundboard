import { render } from "preact";
import { html } from "htm/preact";

const sounds = {
    David: [
        {
            title: "Fuck you Brad",
            src: "david/fuck-you-brad.m4a",
        },
    ],
    Brad: [
        {
            title: "What the fuck",
            src: "brad/what-the-fuck.m4a",
        },
    ],
};

function App() {
    return html`${Object.keys(sounds).map(
        (name) => html`<div>
            <h2>${name}</h2>
            ${sounds[name].map((sound) => html`<${PlayButton} ...${sound} />`)}
        </div>`
    )} `;
}

function PlayButton({ title, src }) {
    const playSound = () => {
        const audio = new Audio(`public/${src}`);
        audio.play();
    };
    return html`<button onClick=${playSound}>${title}</button>`;
}

render(html`<${App} />`, document.getElementById("app"));
