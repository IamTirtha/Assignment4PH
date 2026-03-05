let currentTab='all';
const tabActive=["bg-black",'border-black','text-white']
const tabInactive=["bg-white",'border-white','text-black']

const allContainer=document.getElementById('all-container')
const interviewContainer=document.getElementById('interview-container')
const rejectContainer=document.getElementById('reject-container')
console.log(allContainer,interviewContainer,rejectContainer);

// default
document.addEventListener('DOMContentLoaded', function() {
  toggleTab('all');
});

function toggleTab(tab) {
  const tabs=['all','interview','rejected']
  for (const t of tabs) {
    const tabName=document.getElementById(t)
      if(t===tab){
        tabName.classList.remove(...tabInactive);
        tabName.classList.add(...tabActive);
      } else {
        tabName.classList.remove(...tabActive);
        tabName.classList.add(...tabInactive);
    }
    currentTab=tab;
  }
  pages=[allContainer,interviewContainer,rejectContainer]
  for (const p of pages) {
    p.classList.add('hidden')
  }
  console.log(tab);
   if( tab ==='all'){
    allContainer.classList.remove('hidden')

 }else if( tab ==='interview'){
    interviewContainer.classList.remove('hidden')
 }else{
    rejectContainer.classList.remove('hidden')
 } 
}

 toggleTab(currentTab)
 





