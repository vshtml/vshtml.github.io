"use strict";

alert("Удачи!");
const kbd = {
  u: false,
  d: false,
  l: false
};
const keyCodes = {
  37: "l",
  38: "u",
  39: "r"
};
document.addEventListener("keydown", e => {
  if (e.keyCode in keyCodes) {
    e.preventDefault();
    kbd[keyCodes[e.keyCode]] = true;
  }
});
document.addEventListener("keyup", e => {
  if (e.keyCode in keyCodes) {
    e.preventDefault();
    kbd[keyCodes[e.keyCode]] = false;
  }
});

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.height = 800;
canvas.width = 800;
const ctx = canvas.getContext("2d");

const gridSize = 20;
  const map = [
    "########################################",
    "#/.....................................#",
    "#/...../...............................#",
    "#####.........................#........#",
    "#......#....#.........#................#",
    "#................................./#...#",
    "#................#.....................#",
    "#..........................#...........#",
    "#......................................#",
    "#......................................#",
    "#..........................#...........#",
    "#......................................#",
    "#............#.........................#",
    "#.................../......#...........#",
    "#....................#.................#",
    "#............#.........................#",
    "#......................................#",
    "#..........................#...........#",
    "#............#.........................#",
    "#......................................#",
    "#......................................#",
    "#............#........................./",
    "#....................................../",
    "########################################"
  ];
const player = {
  x: 1,
  y: 23,
  vx: 0,
  vy: 0,
  jumping: false,
  
  xVelocity: 0.16,     
  jumpVelocity: 0.27,   
  gravity: 0.008,       
  maxGravity: 3.8,      
  collResolution: 0.2,  
  inset: 0.05,          
  
  updatePosition: function (map) {
    if (this.x > 0 && this.x < 1.2 && this.y < 2.2 && this.y > 1) {
      window.location.href = "https://2dplatform.github.io/assets/levels/lvl5/index.html";
    }
    if (Math.abs(this.vy) < this.maxGravity) {
      this.vy += this.gravity;
    }
    
    this.y += this.vy;
    
    if (this.collides(map)) {
      if (this.vy > 0) { this.jumping = false; }
      
      while (this.collides(map)) {
        this.y -= this.vy * this.collResolution;
      }
      
      this.vy = 0;
    }
    
    this.x += this.vx;
    
    if (this.collides(map)) {
      
      while (this.collides(map)) {
        this.x -= this.vx * this.collResolution;
      }
      
      this.vx = 0;
    }
  },

  collides: function (map) {
    const xL = (this.x + this.inset) | 0;       
    const xR = Math.ceil((this.x - this.inset)); 
    const yU = (this.y + this.inset) | 0;        
    const yD = Math.ceil(this.y - this.inset);   
    return map[yU] && map[yU][xL] === "#" ||
           map[yU] && map[yU][xR] === "#" ||
           map[yD] && map[yD][xL] === "#" ||
           map[yD] && map[yD][xR] === "#" 
    ;
  },
  
  jump: function () {
    if (!this.jumping) {
      this.vy = -this.jumpVelocity;
      this.jumping = true;  //на false не менять!!!
    }
  },
  
  move: function (dir) {
    this.vx = dir === "r" ? this.xVelocity : -this.xVelocity;
  },
  
  draw: function (ctx, size) {
    ctx.fillStyle = "#c11";
    ctx.fillRect(this.x * size, this.y * size, size, size);
  }
}; 

const drawMap = (ctx, map, size) => {
  ctx.fillStyle = "#445";
  
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "#") {
        ctx.fillRect(j * size, i * size, size, size);
        ctx.strokeStyle = "#667";
      }  else if (map[i][j] === "/") {
        ctx.fillRect(j * size, i * size, size, size);
        ctx.strokeStyle = "#667";
        ctx.fillStyle = "#445";
      } else {
        ctx.strokeStyle = "#111";
      }
      
      ctx.strokeRect(j * size, i * size, size, size)
    }

  }
};

(function update() {
  
  player.vx = 0;
  
  if (kbd.l) { player.move("l"); }
  if (kbd.r) { player.move("r"); }
  if (kbd.u) { player.jump(); }
    
  player.updatePosition(map);
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMap(ctx, map, gridSize);
  player.draw(ctx, gridSize);
  
  requestAnimationFrame(update);
})();
