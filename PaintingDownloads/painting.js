function curveTitle() {
    const el = document.getElementById('header1');
    const letters = [...el.textContent.trim()];
    const radius = 300;  // higher = flatter curve, lower = more dramatic
    const spread = 5;    // degrees between each letter

    const startAngle = -(letters.length - 1) / 2 * spread;

    el.style.position = 'relative';
    el.innerHTML = letters.map((char, i) => {
        const angle = startAngle + i * spread;
        return `<span style="position:absolute; left:50%; transform:rotate(${angle}deg); transform-origin: 0 ${radius}px;">
            ${char === ' ' ? '&nbsp;' : char}
        </span>`;
    }).join('');
}
