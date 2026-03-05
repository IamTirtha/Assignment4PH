let currentTab = "all";
const tabActive = ["bg-black", "border-black", "text-white"];
const tabInactive = ["bg-white", "border-white", "text-black"];

// tab gulo dhorbo
const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectContainer = document.getElementById("reject-container");
console.log(allContainer, interviewContainer, rejectContainer);

// statistic gulo dhrbo
const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectStat = document.getElementById("stat-rejected");

const emptyState=document.getElementById("empty-state")  //no jobs available dekhanor jonno

const availableStat=document.getElementById("stat-available")

console.log(totalStat, interviewStat, rejectStat);

// default all er jonno
document.addEventListener("DOMContentLoaded", function () {
  toggleTab("all");
});

// click korar functionality
function toggleTab(tab) {
  const tabs = ["all", "interview", "rejected"];
  for (const t of tabs) {
    const tabName = document.getElementById(t);
    if (t === tab) {
      tabName.classList.remove(...tabInactive);
      tabName.classList.add(...tabActive);
    } else {
      tabName.classList.remove(...tabActive);
      tabName.classList.add(...tabInactive);
    }
    currentTab = tab;
    count()
  }
  pages = [allContainer, interviewContainer, rejectContainer];
  for (const p of pages) {
    p.classList.add("hidden");
  }
  console.log(tab);

  emptyState.classList.add("hidden")

  if (tab === "all") {
    allContainer.classList.remove("hidden");
    if(allContainer.children.length<1){
      emptyState.classList.remove("hidden")
    }
    
  } else if (tab === "interview") {
    interviewContainer.classList.remove("hidden");
    if(interviewContainer.children.length<1){
      emptyState.classList.remove("hidden")
    }
  } else {
    rejectContainer.classList.remove("hidden");
    if(rejectContainer.children.length<1){
      emptyState.classList.remove("hidden")
    }
  }
}



toggleTab(currentTab);

document.getElementById('job-container').addEventListener('click',function(event){
  const clicked=event.target;

  const card=clicked.closest(".card")

  const status=card.querySelector('.status')

  const paren=card.parentNode

  if(clicked.classList.contains('interview')){
    status.innerText='Interviewed'
    interviewContainer.appendChild(card)
    
  }
  if(clicked.classList.contains('rejected')){
    status.innerText='Rejected'
    rejectContainer.appendChild(card)
    
  }
  if(clicked.classList.contains('delete')){
    paren.removeChild(card)
    
  }
  count()
  
})

function count() {
  // totalStat.innerText=allContainer.children.length
  // interviewStat.innerText=interviewContainer.children.length
  // rejectStat.innerText=rejectContainer.children.length
  const counted={
    all : allContainer.children.length,
    interview : interviewContainer.children.length,
    rejected : rejectContainer.children.length
  }
  totalStat.innerText=counted['all']
  interviewStat.innerText=counted['interview']
  rejectStat.innerText=counted['rejected']

  availableStat.innerText=counted[currentTab]

  if(counted[currentTab]<1){
    emptyState.classList.remove("hidden")
  }else{
    emptyState.classList.add("hidden")
  }
}
count()





