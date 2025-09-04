let sbtn = document.querySelector("#sbtn");
let sname = document.querySelector("#sname");
let userifo = document.querySelector("#userinfo");

async function search(uname) {
  let res = await fetch(`https://api.github.com/users/${uname}`);
  let resp = await res.json();
  userinfo(resp);
}

function userinfo(resp) {


  if(resp.bio == null){
    resp.bio = "No Bio Available"
  }
  if(resp.followers == undefined){
    userifo.innerHTML = "No user Found"
    return
  }
  userifo.innerHTML = `
    <div class="sleft">
          <div class="image">
            <img src="${resp.avatar_url}" alt="">
          </div>
          <div class="info">
            <h2>${resp.name}</h2>
            <p>${resp.bio}</p>
          </div>
        </div>
        <div class="sright">
          <div class="up">
            <div class="flw">
              <h2>Followers</h2>
              <p>${resp.followers}</p>
            </div>

            <div class="fing">
              <h2>Followings</h2>
              <p>${resp.following}</p>
            </div>

            <div class="repo">
              <h2>Repositories</h2>
              <p>${resp.public_repos}</p>
            </div>
          </div>
          <div class="low">
            <a href="https://github.com/${resp.login}" target="_blank" rel="noopener noreferrer" id="vbtn">Visit Profile</a>
          </div>
        </div>
    `;
}

sbtn.addEventListener("click", () => {
  let uname = sname.value;
  search(uname);
});
