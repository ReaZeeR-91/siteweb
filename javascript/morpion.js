const cases = Array.prototype.slice.call(document.getElementsByClassName('case'));
let tour = 0;
let Table = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
];
const joueur = document.getElementById('player-turn');

cases.forEach(element => {
    const svg = element.childNodes[0];
    const id = element.id;
    element.addEventListener('click', () => {
        if (Table[Math.floor((id - 1) / 3)][(id - 1) % 3] === undefined) {
            if (tour === 0) {
                croix(element, svg);
                tour = 1;
                Table[Math.floor((id - 1) / 3)][(id - 1) % 3] = 1;
                joueur.textContent = "Joueur 2 (rond)";
                setTimeout(() => {
                    win('croix');
                }, 10);
            } else {
                rond(element, svg);
                tour = 0;
                Table[Math.floor((id - 1) / 3)][(id - 1) % 3] = 0;
                joueur.textContent = "Joueur 1 (croix)";
                setTimeout(() => {
                    win('rond');
                }, 10);
            }
        } else {
            console.error("Il y a déjà un symbole dans cette case !");
        }
    });
});

const croix = (element, svg) => {
    const taille = element.offsetWidth;

    const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line1.setAttribute("x1", taille * 0.2);
    line1.setAttribute("x2", taille * 0.8);
    line1.setAttribute("y1", taille * 0.2);
    line1.setAttribute("y2", taille * 0.8);
    line1.setAttribute("stroke", "red");
    line1.setAttribute("stroke-width", "4");

    const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line2.setAttribute("x1", taille * 0.2);
    line2.setAttribute("x2", taille * 0.8);
    line2.setAttribute("y1", taille * 0.8);
    line2.setAttribute("y2", taille * 0.2);
    line2.setAttribute("stroke", "red");
    line2.setAttribute("stroke-width", "4");

    svg.appendChild(line1);
    svg.appendChild(line2);
};

const rond = (element, svg) => {
    const taille = element.offsetWidth;

    const rond = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    rond.setAttribute("cx", taille * 0.5);
    rond.setAttribute("cy", taille * 0.5);
    rond.setAttribute("r", taille * 0.35);
    rond.setAttribute("stroke", "green");
    rond.setAttribute("stroke-width", "4");
    rond.setAttribute("fill", "transparent");

    svg.appendChild(rond);
};

const win = (rondCroix) => {
    const conditions = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];

    let rechercheGagnant = false;

    for (const condition of conditions) {
        const [x1, y1] = condition[0];
        const [x2, y2] = condition[1];
        const [x3, y3] = condition[2];

        if (Table[x1][y1] !== undefined && Table[x1][y1] === Table[x2][y2] && Table[x2][y2] === Table[x3][y3]) {
            alert("Le joueur gagnant est avec les " + rondCroix);
            reni();
            rechercheGagnant = true;
            break;
        }
    }

    if (!rechercheGagnant && !Table.flat().includes(undefined)) {
        alert("match nul !");
        reni();
    }
};



const reni = () => {
    Table = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ];

    cases.forEach(element => {
        const svg = element.childNodes[0];
        svg.innerHTML = "";
    });

    joueur.textContent = "Joueur 1 (rond)";
};


