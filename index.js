const
  canvas = document.querySelector('#c'),
  ctx = canvas.getContext('2d'),
  drawings = [
    // day 10
    () => {
      const shapes = 10000
      let size = 600
      ctx.save()
      ctx.translate(canvas.width/2, canvas.height/2)
      
      for(let i = 0;i<shapes;i++){
        ctx.translate(10,1)
        ctx.fillStyle = Math.floor(Math.random() * 2) + 1 == 1 ? 'black' : 'white'
        ctx.beginPath()
ctx.arc(canvas.width-2*size, canvas.height-2*size, size, 0, Math.PI * 2)
ctx.fill()
ctx.closePath()
size--
if(size == 0) break
      }
      ctx.restore()
    },
    // day 9 (day 4 dark)
    () => {
      ctx.fillStyle = 'black'
      ctx.fillRect(0,0,canvas.width, canvas.height)
      
      ctx.moveTo(canvas.width/2,canvas.height/2)
      for(let i = 0; i < 500;i++){
        ctx.beginPath()
        let color = i/500 * 255
        ctx.fillStyle = ctx.strokeStyle = 'white'
        const randomX = Math.floor(Math.random() * canvas.width) + 1, 
        randomY = Math.floor(Math.random() * canvas.height)+1
        ctx.lineTo(randomX, randomX + randomY)
        switch(Math.floor(Math.random() * 4) + 1){
          case 1: ctx.fillRect(randomX, randomY, 25,25); break
          case 2: case 3: ctx.strokeStyle = 'black'; ctx.strokeRect(randomX, randomY, 25, 25); break
          case 4: ctx.save(); ctx.rotate(Math.PI / 4); ctx.strokeRect(randomX, randomY, 25,25); ctx.restore(); break
        }
        ctx.lineWidth += 0.001
        ctx.closePath()
      }
      ctx.stroke()
    },
    // day 9(-1) / day 8 late (day 4 chaotic)
    () => {
      ctx.beginPath()
      ctx.moveTo(canvas.width/2,canvas.height/2)
      for(let i = 0; i < 1000;i++){
        const randomX = Math.floor(Math.random() * canvas.width) + 1, 
        randomY = Math.floor(Math.random() * canvas.height)+1
        ctx.rotate(i/2)
        ctx.lineTo(randomX, randomY)
        switch(Math.floor(Math.random() * 3) + 1){
          case 1: ctx.fillRect(randomX, randomY, 25,25); break
          case 2: ctx.strokeRect(randomX, randomY, 25, 25); break
          case 3: ctx.save(); ctx.rotate(Math.PI / 4); ctx.strokeRect(randomX, randomY, 10,10); ctx.restore(); break
        }
        ctx.lineWidth += 0.0001
      }
      ctx.closePath()
      ctx.stroke()
    },
    // day 7
    () => {
      ctx.save()
ctx.translate(canvas.width, canvas.height)
      for(let size = 0; size < 10000; size +=3){
              
      ctx.strokeRect(0-size/2,0-size/2,size,size)
      ctx.rotate(0.005)
      }
ctx.restore()
    },
    // day 6 (day 5 without rotation)
    () => {
      const squares = 100000
      let size = 100000
      ctx.save()
      ctx.translate(canvas.width / 2, canvas.height / 2)
      for (let i = 0; i < squares; i++) {
        ctx.fillStyle = Math.floor(Math.random() * 2) + 1 == 1 ? 'black' : 'white'
        ctx.fillRect(0 - size / 2, 0 - size / 2, size - i, size - i)
      }
      ctx.restore()
    },
    // day 5
    () => {
      const squares = 100000
      let size = 100000
      ctx.save()
      ctx.translate(canvas.width/2, canvas.height/2)
      
      for(let i = 0;i<squares;i++){
        ctx.fillStyle = Math.floor(Math.random() * 2) + 1 == 1 ? 'black' : 'white'
        ctx.fillRect(0-size/2,0-size/2,size-i,size-i)
        ctx.rotate(i)
      }
      ctx.restore()
    },
    // day 4
    () => {
      ctx.beginPath()
      ctx.moveTo(0,0)
      for(let i = 0; i < 20;i++){
        const randomX = Math.floor(Math.random() * canvas.width) + 1, 
        randomY = Math.floor(Math.random() * canvas.height)+1
        ctx.lineTo(randomX, randomY)
        switch(Math.floor(Math.random() * 3) + 1){
          case 1: ctx.fillRect(randomX, randomY, 25,25); break
          case 2: ctx.strokeRect(randomX, randomY, 25, 25); break
          case 3: ctx.save(); ctx.rotate(Math.PI / 4); ctx.strokeRect(randomX, randomY, 10,10); ctx.restore(); break
        }
        ctx.lineWidth += 0.01
      }
      ctx.closePath()
      ctx.stroke()
    },
    // day 3
    () => {
      let size = 1
      for(let x = 0; x < canvas.width; x++){
        for(let y = 0; y < canvas.height; y++){
          ctx.rotate(x*y)
          switch(Math.floor(Math.random()*2)+1){
            case 1: ctx.fillRect(canvas.width/2 + x, canvas.height/2 + y, size, size); break
            case 2: ctx.strokeRect(canvas.width/2 + x, canvas.height/2 + y, size, size); break
          }
          size+=0.000025
        }
      }
    },
    // day 2
    () => {
      ctx.beginPath()
      ctx.moveTo(0, 0)
      for(let x = 0; x < canvas.width;x+=5){
        for(let y = 0; y < canvas.height;y+=5){
          ctx.translate(x+1,y+1)
          ctx.rotate(Math.PI/10)
          ctx.lineTo(x+1, y)
          ctx.lineWidth+=0.00001
        }
      }
      ctx.closePath()
      ctx.stroke()
    },
    // day 1
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
  index = 0,
  draw = (index = 0) => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    drawings[index]()
  }

draw(index)
window.addEventListener('resize', draw(index))