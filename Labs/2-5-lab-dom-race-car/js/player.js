class Player {
    constructor(gameScreen, left, top, width, height, imageSrc) {
        this.gameScreen = gameScreen;

        this.left = left;
        this.top = top;

        this.width = width;
        this.height = height;

        this.directionX = 0;
        this.directionY = 0;

        this.element = document.createElement("img");
        this.element.src = imageSrc;

        this.element.style.position = "absolute";
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.left += this.directionX;
        this.top += this.directionY;

        // TODO: Add bounderies
        if (this.left < 25) {
            this.left = 25;
        }
        if (this.left > 425) {
            this.left = 425;
        }
        if (this.top < 10) {
            this.top = 10;
        }
        if (this.top > 530) {
            this.top = 530;
        }
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleReact = obstacle.element.getBoundingClientRect();

        // ! COLLISION HERE MIGHT BE WRONG
        if (playerRect.left < obstacleReact.right && playerRect.right > obstacleReact.left && playerRect.top < obstacleReact.bottom && playerRect.bottom > obstacleReact.top) {
            return true;
        } else {
            return false;
        }
    }
}
