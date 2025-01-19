const canvas = document.getElementById('leafCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const leaves = [];
const leafImages = [
    'images/leaf1.png', 
    'images/leaf2.png', 
    'images/leaf3.png'
  ];

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

class Leaf {
    constructor() {
        this.image = new Image();
        this.image.src = leafImages[Math.floor(Math.random() * leafImages.length)];
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = getRandomNumber(20, 40);
        this.speedY = getRandomNumber(0.4, 1);
        this.speedX = getRandomNumber(-0.5, 0.5);
        this.angle = 0;
        this.angleSpeed = getRandomNumber(-0.02, 0.02);
        this.opacity = getRandomNumber(0.5, 1);

        this.image.onload = () => {
          this.draw();
        }
    }

    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.save();
        ctx.translate(this.x + this.size/2 , this.y + this.size/2);
        ctx.rotate(this.angle);
        ctx.drawImage(this.image, -this.size/2, -this.size/2, this.size, this.size);
        ctx.restore();
        ctx.globalAlpha = 1;
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.angle += this.angleSpeed;
        if (this.y > canvas.height) {
            this.y = -this.size;
            this.x = Math.random() * canvas.width;
        }
        
        if(this.x + this.size < 0) this.x = canvas.width;
        if(this.x - this.size > canvas.width) this.x = 0;
    }
}

function createLeaves(count) {
  for (let i = 0; i < count; i++) {
      leaves.push(new Leaf());
  }
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    leaves.forEach(leaf => {
        leaf.update();
        leaf.draw();
    });
    requestAnimationFrame(animate);
}

createLeaves(50);
animate();

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

