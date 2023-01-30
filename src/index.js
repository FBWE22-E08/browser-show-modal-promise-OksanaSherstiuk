import "./css/style.css"; //importing css

const modal = document.querySelector(".modal");

const modalPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("block");
    }, 10000);
  });
};

modalPromise().then((result) => (modal.style.display = result));

// const resolvingModalPromise = async () => {
//   let result = await modalPromise();
//   modal.style.display = result;
// };
// resolvingModalPromise();

const close = document.querySelector(".close");

close.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});
