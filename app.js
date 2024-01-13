const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // Get the x and y coordinates of the button
        const x = e.clientX;
        const y = e.clientY;
        // Get the left and top offset positions of the button
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        // Get the x and y coordinates of the click relative to the button
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;
        // Create the span element
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';
        // Add the span element to the button (rememger this keyword will not work with arrow functions)
        this.appendChild(circle);
        // Remove the span element after 500ms
        setTimeout(() => circle.remove(), 500);

    });
});