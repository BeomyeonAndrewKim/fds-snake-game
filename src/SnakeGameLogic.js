import {ROWS, COLS} from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 3, y: 0},
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0}
  ];

  // 먹이의 좌표
  this.fruit = {x:6, y:6};

  //방향
  this.direction ="";
}

SnakeGameLogic.prototype.up=function(){
  // 위쪽 화살표 키를 누르면 실행되는 함수
  this.direction='up';
  console.log('up');
}
SnakeGameLogic.prototype.down=function(){
  this.direction='down';
  console.log('down');
}
SnakeGameLogic.prototype.left=function(){
  // 왼쪽 화살표 키를 누르면 실행되는 함수
 this.direction='left';
  console.log('left');
}
SnakeGameLogic.prototype.right=function(){
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  this.direction='right';
  console.log('right');

}
SnakeGameLogic.prototype.nextState=function(){
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  if(this.direction ==='right'){
    this.joints.unshift({x:this.joints[0].x+1, y:this.joints[0].y});
    if(this.joints[0].x===this.joints[this.joints.length-1].x && this.joints[0].y===this.joints[this.joints.length-1].y){
      return false;
    }
    if(this.joints[0].x===this.fruit['x'] && this.joints[0].y === this.fruit['y']){
      this.fruit={x:Math.floor(Math.random()*20), y:Math.floor(Math.random()*15)};
      if(this.joints.some(item => item.x ===this.fruit.x && item.y === this.fruit.y)){
        this.fruit={x:Math.floor(Math.random()*20), y:Math.floor(Math.random()*15)};
      }

      this.joints.unshift({x:this.joints[0].x+1 , y:this.joints[0].y});
    }
    this.joints.pop();
  }
  if(this.direction ==='left'){
    this.joints.unshift({x:this.joints[0].x-1, y:this.joints[0].y});
    if(this.joints[0].x===this.joints[this.joints.length-1].x && this.joints[0].y===this.joints[this.joints.length-1].y){
      return false;
    }
    if(this.joints[0].x===this.fruit['x'] && this.joints[0].y === this.fruit['y']){
      this.fruit={x:Math.floor(Math.random()*20), y:Math.floor(Math.random()*15)};
      if(this.joints.some(item => item.x ===this.fruit.x && item.y === this.fruit.y)){
        this.fruit={x:Math.floor(Math.random()*20), y:Math.floor(Math.random()*15)};
      }
      this.joints.unshift({x:this.joints[0].x-1 , y:this.joints[0].y});
    }
    this.joints.pop();
  }
  if(this.direction === 'up'){
    this.joints.unshift({x:this.joints[0].x, y:this.joints[0].y-1});
    if(this.joints[0].x===this.joints[this.joints.length-1].x && this.joints[0].y===this.joints[this.joints.length-1].y){
      return false;
    }
    if(this.joints[0].x===this.fruit['x'] && this.joints[0].y === this.fruit['y']){
      if(this.joints.some(item => item.x ===this.fruit.x && item.y === this.fruit.y)){
        this.fruit={x:Math.floor(Math.random()*20), y:Math.floor(Math.random()*15)};
      }
      this.fruit={x:Math.floor(Math.random()*20), y:Math.floor(Math.random()*15)};
      this.joints.unshift({x:this.joints[0].x , y:this.joints[0].y-1});
    }
    this.joints.pop();
  }
  if(this.direction === 'down'){
    this.joints.unshift({x:this.joints[0].x, y:this.joints[0].y+1});
    if(this.joints[0].x===this.joints[this.joints.length-1].x && this.joints[0].y===this.joints[this.joints.length-1].y){
      return false;
    }
    if(this.joints[0].x===this.fruit['x'] && this.joints[0].y === this.fruit['y']){
      this.fruit={x:Math.floor(Math.random()*20), y:Math.floor(Math.random()*15)};
      if(this.joints.some(item => item.x ===this.fruit.x && item.y === this.fruit.y)){
        this.fruit={x:Math.floor(Math.random()*20), y:Math.floor(Math.random()*15)};
      }
      this.joints.unshift({x:this.joints[0].x , y:this.joints[0].y+1});
    }
    this.joints.pop();
  }

  for(let i=0;i<this.joints.length-1;i++){
    for(let j=i+1;j<this.joints.length;j++){
      if(this.joints[i].x===this.joints[j].x && this.joints[i].y===this.joints[j].y){
        console.log(this.joints[i].x===this.joints[j].x && this.joints[i].y===this.joints[j].y);
        return false;
      }
    }
    }
  if(this.joints[0].x>=20|| this.joints[0].y>=15||this.joints[0].x<0||this.joints[0].y<0){
    return false;
  }

  console.log('nextstate');
  return true;
}

export default SnakeGameLogic;
