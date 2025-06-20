const btnType = document.querySelectorAll(".btn-type");
const buttons = document.querySelectorAll(".buttons")[0];

btnType.forEach((item) => {
  item.addEventListener("click", () => {
    buttons
      .getElementsByClassName("active-btn-portfolio")[0]
      .classList.remove("active-btn-portfolio");
    item.classList.add("active-btn-portfolio");
  });
});

const storiesImg = [
  `<video controls>
    <source src="stories/v1.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,
  `<video controls>
    <source src="stories/v2.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,
  `<video controls>
    <source src="stories/v3.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,
  `<video controls>
    <source src="stories/v4.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,
  `<video controls>
    <source src="stories/v5.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,
  `<video controls>
    <source src="stories/v6.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,
  `<video controls>
    <source src="stories/v7.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,
  `<video controls>
    <source src="stories/v8.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,
  `<video controls>
    <source src="stories/v9.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,
  `<video controls>
    <source src="stories/v10.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,
  `<video controls>
    <source src="stories/v11.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,
  `<video controls>
    <source src="stories/v12.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,
  `<video controls>
    <source src="stories/v13.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,
];

const imgs = [
  `<img
              src="https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/508172992_766103342413862_2478094329079248979_n.jpg?stp=c0.225.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=714c7a&_nc_ohc=KTECz6tNybkQ7kNvwG_y0j-&_nc_oc=AdlM1EtWwB25mUSyBUzMQPzq6hQ8RyzANBt0W8v21awP1xJruJAdmtJOCGaDOjEr1mg&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=yP-tATJFMfr2HQo8VrrskA&oh=00_AfN8Fy-XQOIeXfvbn_MGvbJl-DF7hAAkBdERIRnq4QXZRg&oe=685A9F02"
              alt=""
            />`,
  `<img
              src="https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/508128707_766101592414037_4196764030216933919_n.jpg?stp=c0.225.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=714c7a&_nc_ohc=u_Q_QUTZ3UAQ7kNvwHXwaKJ&_nc_oc=AdmpEkH5g-dLjFtFFes3QcZsEKnIQsRjdlsNkOkuH4QwcBoh_2huE75T9FHdgZAPkdg&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=UPX_TXR6VOpjaT02HuHk1A&oh=00_AfOLQ7J7Fa2iAbJzWFttulXOiJyNlc0TsVPBnZzjrxPiHA&oe=685AA4BF"
            />`,
  `<img
              src="https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-6/500640354_753315917025938_9091593961380700140_n.jpg?stp=c0.225.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=50ad20&_nc_ohc=IiGq0IV4qQYQ7kNvwF7iWiM&_nc_oc=Adnj7UlRyAsiHeMCt1x_Smnm231_e9et4hsX0ueOyIMX555uyGT3q8IGsJoYdiy8yb4&_nc_zt=23&_nc_ht=scontent.fcai22-4.fna&_nc_gid=zD_BU5P29HVHq34cAl0UQA&oh=00_AfOcxz6ZMjize9_rEgDwmeyMiqr6GYnFmxE_HI4-Mu5C3A&oe=685A955B"
            />`,
  `<img
              src="https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-6/495178444_739338791756984_4285622466697846_n.jpg?stp=c0.225.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=714c7a&_nc_ohc=Ug9faex9sTUQ7kNvwFPkrVT&_nc_oc=AdnhtPhrkPjzre5LDNkXvPJdOISPSXgXBoN8ntUPfVEnOQmdQ1uys2f0jVk_83MTst4&_nc_zt=23&_nc_ht=scontent.fcai22-4.fna&_nc_gid=25EM2yuDDtYgllTE2iYimg&oh=00_AfNjQ_UGO7-4fhsshoL6I7rPxRa4EAta1shY1BN2mzKTfA&oe=685ACBCB"
            />`,
  `<img
              src="https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/495145852_736960231994840_1581515772716625024_n.jpg?stp=c0.225.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_ohc=mcTaBdeyBegQ7kNvwHWFqjy&_nc_oc=AdnzNVgBCyb4jBjH8jtG97-g838AqbG8zMTJ6Pb6RioB4AF_ePb6Z-GCAZ0ot7hiCTY&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=lTTGLqDvgQ-iWItMS7A99Q&oh=00_AfNp5wbioKMFhhMNv2Fe_yjliarEnpNBEMKGVtgO69XUFQ&oe=685AB9B1"
              alt=""
            />`,
  `<img
              src="https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/508172992_766103342413862_2478094329079248979_n.jpg?stp=c0.225.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=714c7a&_nc_ohc=KTECz6tNybkQ7kNvwG_y0j-&_nc_oc=AdlM1EtWwB25mUSyBUzMQPzq6hQ8RyzANBt0W8v21awP1xJruJAdmtJOCGaDOjEr1mg&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=yP-tATJFMfr2HQo8VrrskA&oh=00_AfN8Fy-XQOIeXfvbn_MGvbJl-DF7hAAkBdERIRnq4QXZRg&oe=685A9F02"
              alt=""
            />`,
  `<img
              src="https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/508128707_766101592414037_4196764030216933919_n.jpg?stp=c0.225.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=714c7a&_nc_ohc=u_Q_QUTZ3UAQ7kNvwHXwaKJ&_nc_oc=AdmpEkH5g-dLjFtFFes3QcZsEKnIQsRjdlsNkOkuH4QwcBoh_2huE75T9FHdgZAPkdg&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=UPX_TXR6VOpjaT02HuHk1A&oh=00_AfOLQ7J7Fa2iAbJzWFttulXOiJyNlc0TsVPBnZzjrxPiHA&oe=685AA4BF"
            />`,
  `<img
              src="https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-6/500640354_753315917025938_9091593961380700140_n.jpg?stp=c0.225.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=50ad20&_nc_ohc=IiGq0IV4qQYQ7kNvwF7iWiM&_nc_oc=Adnj7UlRyAsiHeMCt1x_Smnm231_e9et4hsX0ueOyIMX555uyGT3q8IGsJoYdiy8yb4&_nc_zt=23&_nc_ht=scontent.fcai22-4.fna&_nc_gid=zD_BU5P29HVHq34cAl0UQA&oh=00_AfOcxz6ZMjize9_rEgDwmeyMiqr6GYnFmxE_HI4-Mu5C3A&oe=685A955B"
            />`,
  `<img
              src="https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-6/495178444_739338791756984_4285622466697846_n.jpg?stp=c0.225.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=714c7a&_nc_ohc=Ug9faex9sTUQ7kNvwFPkrVT&_nc_oc=AdnhtPhrkPjzre5LDNkXvPJdOISPSXgXBoN8ntUPfVEnOQmdQ1uys2f0jVk_83MTst4&_nc_zt=23&_nc_ht=scontent.fcai22-4.fna&_nc_gid=25EM2yuDDtYgllTE2iYimg&oh=00_AfNjQ_UGO7-4fhsshoL6I7rPxRa4EAta1shY1BN2mzKTfA&oe=685ACBCB"
            />`,
  `<img
              src="https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/495145852_736960231994840_1581515772716625024_n.jpg?stp=c0.225.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_ohc=mcTaBdeyBegQ7kNvwHWFqjy&_nc_oc=AdnzNVgBCyb4jBjH8jtG97-g838AqbG8zMTJ6Pb6RioB4AF_ePb6Z-GCAZ0ot7hiCTY&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=lTTGLqDvgQ-iWItMS7A99Q&oh=00_AfNp5wbioKMFhhMNv2Fe_yjliarEnpNBEMKGVtgO69XUFQ&oe=685AB9B1"
              alt=""
            />`,
];

const video = [
  `<video controls>
    <source src="video/mo.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,

  `<video controls>
    <source src="video/v1.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,

  `<video controls>
    <source src="video/v2.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,

  `<video controls>
    <source src="video/v3.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,

  `<video controls>
    <source src="video/v4.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,

  `<video controls>
    <source src="video/v5.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,

  `<video controls>
    <source src="video/v6.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`,
];

function globalFun(arr) {
  const cardImgs = document.getElementById("card-images");
  const cardButtons = document.getElementsByClassName("card-buttons")[0];
  cardButtons.innerHTML = `<button id="pre">&lt; pre</button>

            <div class="num-imgs">
              <div class="num-img active-icon"></div>
              <div class="num-img"></div>
              <div class="num-img"></div>
              <div class="num-img"></div>
              <div class="num-img"></div>
            </div>

            <button id="next">Next &gt;</button>`;
  const numImgs = document.getElementsByClassName("num-imgs")[0];
  numImgs.innerHTML = `<div class="num-img active-icon"></div>`;
  for (let i = 0; i < arr.length - 1; i++) {
    numImgs.innerHTML += `<div class="num-img"></div>`;
  }

  const pre = document.getElementById("pre");
  const next = document.getElementById("next");
  let i = 0;
  cardImgs.innerHTML = arr[i];
  cardImgs.innerHTML += `<div id="counter-photo">#${i + 1} of (${
    arr.length
  }) photos</div>`;

  pre.setAttribute("disabled", "");

  const iconsCard = document.getElementsByClassName("num-imgs")[0];

  next.addEventListener("click", () => {
    pre.removeAttribute("disabled");
    i++;
    cardImgs.innerHTML = arr[i];
    cardImgs.innerHTML += `<div id="counter-photo">#${i + 1} of (${
      arr.length
    }) photos</div>`;

    if (i == arr.length - 1) next.setAttribute("disabled", "");

    iconsCard
      .getElementsByClassName("active-icon")[0]
      .classList.remove("active-icon");
    document.getElementsByClassName("num-img")[i].classList.add("active-icon");
  });

  pre.addEventListener("click", () => {
    next.removeAttribute("disabled");
    i--;
    cardImgs.innerHTML = arr[i];
    cardImgs.innerHTML += `<div id="counter-photo">#${i + 1} of (${
      arr.length
    }) photos</div>`;

    if (i == 0) pre.setAttribute("disabled", "");

    iconsCard
      .getElementsByClassName("active-icon")[0]
      .classList.remove("active-icon");
    document.getElementsByClassName("num-img")[i].classList.add("active-icon");
  });
}

function typeVideos() {
  globalFun(video);
}

function typePhotos() {
  globalFun(imgs);
}

function typeStories() {
  globalFun(storiesImg);
}
