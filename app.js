import { render } from "preact";
import { html } from "htm/preact";

const sounds = {
    David: [
        {
            title: "Fuck you Brad",
            src: "david/fuck-you-brad.m4a",
        },
        {
            title: "Aww come on guys",
            src: "david/aww-come-on-guys.m4a",
        },
        {
            title: "Count in",
            src: "david/count-in.m4a",
        },
        {
            title: "We don't need him",
            src: "david/fuck-brad-we-dont-need-him.m4a",
        },
        {
            title: "*giggle*",
            src: "david/giggle.m4a",
        },
        {
            title: "I worked really hard on this!",
            src: "david/i-worked-really-hard-on-this-shit.m4a",
        },
        {
            title: "Too late",
            src: "david/too-late-its-already-done.m4a",
        },
        {
            title: "Blewskarooni 1",
            src: "david/blewska-david.m4a",
        },
        {
            title: "Blewskarooni 2",
            src: "david/blewska-david-2.m4a",
        },
        {
            title: "Cadaveriffic",
            src: "david/cadaveriffic-david.m4a",
        },
        {
            title: "Crunch",
            src: "david/crunch.m4a",
        },
    ],
    Brad: [
        {
            title: "What the fuck",
            src: "brad/what-the-fuck.m4a",
        },
        {
            title: "Are these chips?",
            src: "brad/are-these-chips.m4a",
        },
        {
            title: "Cock",
            src: "brad/cock.m4a",
        },
        {
            title: "With piss",
            src: "brad/with-piss.m4a",
        },
        {
            title: "Normal laughter",
            src: "brad/black-metal-laugh.m4a",
        },
        {
            title: "Blewskarooni",
            src: "brad/blewska-brad.m4a",
        },
        {
            title: "Take it home...",
            src: "brad/take-it-home.m4a",
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
