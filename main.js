//유저가 값을 입력한다
//+버튼을 클릭하면, 할일이 추가된다[arr]
//delete버튼을 누르면 할일이 삭제된다
//check버튼을 누르면 할일이 끝나면서 밑줄이간다
//1.check버튼을 클릭하는 순간 true를 false로 변경
//2.true이면 끝난걸로 간주하고 밑줄 보여주기
//3.false이면 안끝난걸로 간주하고 그대로

//진행중 끝남 탭을 누르면, 언더바가 이동한다
//끝남탭은 끝난아이템만, 진행중탭은 진행중인 아이템만 나온다
//전체탭을 누르면 다시 전체아이템으로 돌아옴

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];

addButton.addEventListener("click",addTask)

//할일추가
function addTask() {
  let task = {
    id:randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false
  }
  taskList.push(task);
  console.log(taskList);
  render();
}


//taskList를 그려줌
function render() {
  let resultHTML = "";
  for(let i=0; i<taskList.length; i++){
    if(taskList[i].isComplete == true){
      resultHTML+=`<div class="task task-complete">
          <div class="task-done">${taskList[i].taskContent}</div>
          <div>
            <button onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-undo"></i></button>
            <button onclick="deleteTask('${taskList[i].id}')"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>`
    }else {
      resultHTML += `<div class="task">
      <div>${taskList[i].taskContent}</div>
      <div>
        <button onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-check"></i></button>
        <button onclick="deleteTask('${taskList[i].id}')"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>`;
      }
    }

    


  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for(let i=0; i<taskList.length; i++){
    if(taskList[i].id == id){
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
  console.log(taskList);
}

function deleteTask(id) {
  for(let i=0; i<taskList.length; i++){
    if(taskList[i].id == id){
      taskList.splice(i,1)
      break;
    }
  }
  render();
}

function randomIDGenerate() {
  return '_' + Math.random().toString(36).substr(2, 9);
}