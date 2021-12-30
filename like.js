let counter = 0;
function enter() {
    let parentdiv = document.querySelector("#parent");
    let prev = parentdiv.innerHTML;
    let moviename = document.querySelector("#moviename").value;
    let storyby = document.querySelector("#moviestory").value;
    counter++;
    let imagesnew = 300 + counter;
    if (moviename.length >= 3 && storyby.length > 5) {
        let newchild = `
      <div class="col-6 col-md-3">
       <div class="card">
        <div class="card-header text-capitalize">
            ${moviename}

        </div>
        <div class="card-body p-2">
            <img style="width: 100%;height: 200px; object-fit: cover;" src="https://picsum.photos/${imagesnew}"
                alt="" />
            <div class="my-2 text-capitalize " style="height:100px; overrflow-y:auto">${storyby}</div>
            <input type="button" class="btn btn-outline-dark w-40" value="Like" onclick="like(this)">
            <span class="ms-2">0</span>
            <input type="button" class="btn btn-outline-dark w-40 ms-3" value="Dislike" onclick="dislike(this)">
            <span class="ms-2">0</span>
        </div>
      </div>
    </div>`;
        parentdiv.innerHTML = prev + newchild;
        document.querySelector("#moviename").value = "";
        document.querySelector("#moviestory").value = "";
    }
    else {
        document.querySelector("#moviename").classList.add("border-danger");
        document.querySelector("#moviestory").classList.add("border-danger");
    }
}
function validate() {
    let moviename = document.querySelector("#moviename").value;
    let storyby = document.querySelector("#moviestory").value;
    if (moviename.length >= 3 && storyby.length > 10) {
        document.querySelector("#moviename").classList.remove("border-danger");
        document.querySelector("#moviestory").classList.remove("border-danger");
    }
}
function like(para)
{
    let parentdiv=para.parentElement.children[3];
    let prev=parentdiv.innerHTML;
    let newval=parseInt(prev)+1;
    parentdiv.innerHTML=newval;
}
function dislike(para)
{
    let parentdiv=para.parentElement.children[5];
    let prev=parentdiv.innerHTML;
    let newval=parseInt(prev)+1;
    parentdiv.innerHTML=newval;
}