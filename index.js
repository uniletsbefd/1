var text = [
  `你好
我們叫 UniLetsBeFd
是一個聯校交友組織
我們這個組織
是由一個科大的學生(Victor)成立的
目前有幾個來自八大的admin
我們會傾向舉辦行山活動
如果反應熱烈
我們計劃將來舉辦更多的活動
例如board game，party room
看電影，露營和燒烤等等的活動
我們所有活動都是面對面進行的
已經有 HKU CU UST
BU CITYU POLYU EDU
等等的學生參加
我們希望可以讓不同學校的學生
互相認識
如果想減少我們工作量
請盡量提供完整資料
因為我們用excel輸入資料
沒有電話號碼的資料
我們要手動輸入和聯絡
所以有提交電話號碼的人
可以優先參加我們活動
每次活動
我們也會盡量 balance 男女人數
由於我們只是一個剛建立的組織
參加人數還在累積
想參加活動的你
可以填好以下 Google form
我地會有專人 pm 你
希望以後的活動有你的參與
如果想跟我們一起搞活動
可以通過以下方式聯絡我們
`,
  "* 不能呈交請按 Google form *",
  "別名",
  "性別",
  "男",
  "女",
  "學校",
  "電話號碼",
];

var word = [
  "давай будем друзьями",
  "le të jemi miq",
  "我們交朋友吧",
  "Sit scriptor esse amicos",
  "Lad os være venner",
  "لنكن أصدقاء",
  "եկեք ընկերներ լինենք",
  "ଚାଲ ବନ୍ଧୁ ହେବା |",
  "మనం స్నేహితులౌదాం",
  "চল বন্ধু হই",
];

async function flash() {
  for (var i = 0; i < 1000; ) {
    document.getElementById("move").innerHTML =
      word[Math.floor(Math.random() * 9) + 0];
    await new Promise((r) => setTimeout(r, 70));
    i++;
    if (i % 10 == 0) {
      document.getElementById("move").innerHTML =
        word[Math.floor(Math.random() * 9) + 0];
      await new Promise((r) => setTimeout(r, 5000));
    }
  }
}

window.onload = function () {
  setTimeout(function () {
    flash();
  }, 5000);

  random = Math.floor(Math.random() * 9) + 1;
  music = document.getElementById("music");

  document.getElementById("word").innerHTML = "VL presents";

  for (var i = 0; i < 8; i++) {
    document.getElementById(`text_${i}`).innerHTML = text[i];

    if (i == 1) {
      document.getElementById(`text_${i}`).innerHTML =
        text[i] +
        '<span class="close" onclick="this.parentElement.style display="none";">&times;</span>';
    }

    if (i == 2 || i == 6 || i == 7) {
      document.getElementById(`text_${i}`).setAttribute("placeholder", text[i]);
    }
    if (i == 4 || i == 5) {
      document.getElementById(`text_${i}`).setAttribute("value", text[i]);
    }
  }

  music.src = "raw/music" + random + ".mp3";
  music.play();

  $(".menu")
    .animate({ right: 0 }, 5000)
    .slideToggle(500)
    .queue(function () {
      $(this).css({
        background: "rgba(0, 0, 0, 0.5)",
        border: "0.1vw dashed yellow",
      });
      $(this).dequeue();
      $("#word").html("&#9776;");
      $(".menu").slideToggle(500);
    });

  $(function () {
    $(".menu").click(function () {
      $(".dropdown").slideToggle(500);
    });
  });

  $(function () {
    let pressed = 0;
    $(".contents").click(function (event) {
      event.stopPropagation();
      if (pressed == 0) {
        $(".form").css({
          "border-color": "white",
          transition: "transform 1s",
          transform: "scale(0.97)",
        });
        $(this).css({
          "border-color": "palegreen",
          transition: "transform 1s",
          transform: "scale(1)",
        });
        pressed = 1;
      } else {
        $(".form").css({
          "border-color": "palegreen",
          transition: "transform 1s",
          transform: "scale(1.03)",
        });
        $(this).css({
          "border-color": "white",
          transition: "transform 1s",
          transform: "scale(0.97)",
        });
        pressed = 0;
      }
    });
  });
};
