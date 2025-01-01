const
  canvas = document.querySelector('#c'),
  ctx = canvas.getContext('2d')

const 
  index = 0,
  resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  },
  drawings = [
    () => {
      const size = 18
      for(let x = 0; x < canvas.width; x += 2*size){
        for(let y = 0; y < canvas.height; y+= size){
          switch(Math.sin(x / Math.cos(y)) > 0){
            case true: ctx.fillRect(x,y,2*size,size); break;
            case false: ctx.strokeRect(x,y,size, size); break;
          }
        }
      }
    },
    () => {
      const size = 6
      for(let x = 0; x < canvas.width; x += size){
        for(let y = 0; y < canvas.height; y+= size){
          switch(2 * Math.sin(x) < Math.cos(x+ y)){
            case true: ctx.fillRect(x,y,size,size); break;
            case false: ctx.strokeRect(x,y,size, size); break;
          }
        }
      }
    },
  ],
  draw = (index = 0) => {
    resize()
    drawings[index]()
  }

draw(index)
window.addEventListener('resize', draw(index))