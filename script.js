// Visitor interactions are stored in each visitor's browser.
// Site content itself is owner-controlled in index.html and the assets folder.

function storageKey(type, photoId){ return `tito_${type}_${photoId}`; }

function getCount(photoId){
  return Number(localStorage.getItem(storageKey("likes", photoId)) || 0);
}

function setCount(photoId, count){
  localStorage.setItem(storageKey("likes", photoId), String(count));
}

function loadLikes(){
  document.querySelectorAll(".like-btn").forEach(btn=>{
    const photoId=btn.dataset.photo;
    const count=getCount(photoId);
    btn.querySelector(".like-count").textContent=count;
    if(localStorage.getItem(storageKey("liked", photoId))==="1"){
      btn.classList.add("liked");
      btn.innerHTML=`♥ <span class="like-count">${count}</span>`;
    }
  });
}

document.querySelectorAll(".like-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const photoId=btn.dataset.photo;
    const alreadyLiked=localStorage.getItem(storageKey("liked", photoId))==="1";
    let count=getCount(photoId);
    if(alreadyLiked){
      count=Math.max(0,count-1);
      localStorage.removeItem(storageKey("liked", photoId));
      btn.classList.remove("liked");
      btn.innerHTML=`♡ <span class="like-count">${count}</span>`;
    }else{
      count+=1;
      localStorage.setItem(storageKey("liked", photoId),"1");
      btn.classList.add("liked");
      btn.innerHTML=`♥ <span class="like-count">${count}</span>`;
    }
    setCount(photoId,count);
  });
});

document.querySelectorAll(".comment-toggle").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const box=document.getElementById(btn.dataset.target);
    box.classList.toggle("open");
  });
});

document.querySelectorAll(".comment-form").forEach(form=>{
  const photoId=form.dataset.photo;
  const list=form.parentElement.querySelector(".comment-list");
  const comments=JSON.parse(localStorage.getItem(storageKey("comments", photoId)) || "[]");

  comments.forEach(text=>addCommentToPage(list,text));

  form.addEventListener("submit",e=>{
    e.preventDefault();
    const input=form.querySelector("input");
    const text=input.value.trim();
    if(!text) return;

    const current=JSON.parse(localStorage.getItem(storageKey("comments", photoId)) || "[]");
    current.push(text);
    localStorage.setItem(storageKey("comments", photoId),JSON.stringify(current));
    addCommentToPage(list,text);
    input.value="";
  });
});

function addCommentToPage(list,text){
  const item=document.createElement("div");
  item.className="comment";
  item.textContent=text;
  list.appendChild(item);
}

loadLikes();
