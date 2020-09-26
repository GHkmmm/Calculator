let expressDom = document.getElementsByClassName('express')[0]
let result = document.getElementsByClassName('result')[0]
let btnGroup = document.getElementsByClassName('btn-group')

let express = '0'

function isZero(num) {
  if(express === '0') {
    express = num
  }else {
    express = express + num;
  }
}
function isRepeat(str) {
  let last = express.substring(express.length-2)
  if(last=='*'+str||last=='/'+str||last=='+'+str||last=='-'+str){
    express = express.substring(0, express.length-1)
  };
}

for(let i=0;i<btnGroup.length;i++) {
  let child = btnGroup[i].children
  for(let j=0;j<child.length;j++){
    child[j].addEventListener('click', function(){
      
      switch(this.innerHTML){
        case 'AC':
          express = '0'
          result.innerHTML = '0'
          break;
        case '%':
          express = express * '0.01';
          break;
        case '×':
          express = express + '*'
          isRepeat('*')
          break;
        case '÷':
          express = express + '/'
          isRepeat('/')
          break;
        case '+':
          express = express + '+'
          isRepeat('+')
          break;
        case '-':
          express = express + '-'
          isRepeat('-')
          break;
        case '.':
          express = express + '.'
          isRepeat('.')
          console.log(express)
          break;
        case '9':case '8':case '7':case '6':case '5':case '4':case '3':case '2':case '1':case '0':
          isZero(this.innerHTML)
          break;
        case '=':
          result.innerHTML = eval(express)
          express = eval(express)
          break;
        // 点击删除
        default: 
          console.log(expressDom.innerHTML);
          if(expressDom.innerHTML === '0' ) {
            express = '0'
          } else {
            express = express.substring(0, express.length-1)
            if(express==''){
              express = '0'
            }
          }
          break;
      }
      expressDom.innerHTML = express
    })
  }
}
