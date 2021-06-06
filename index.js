const rect1 = {
  x: 5, // mover eje x
  y: 5, // mover eje y
  w: 100, // ancho
  h: 50 // alto
};

const rect2 = {
  x: 110, // mover eje x
  y: 50, // mover eje y
  w: 100, // ancho
  h: 50 // alto
};

function isCollision(obj1, obj2) {
  if (obj1.x < obj2.x + obj2.w && obj1.x + obj1.w > obj2.x && obj1.y < obj2.y + obj2.h && obj1.h + obj1.y > obj2.y) {
    return "Colisión";
  }
  return "Sin colisión";
}

isCollision(rect1, rect2)

