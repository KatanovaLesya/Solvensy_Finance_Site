if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("#services-what .service-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 600); // по черзі
        observer.unobserve(entry.target); // один раз
      }
    });
  }, { threshold: 0.3 });

  items.forEach(item => observer.observe(item));
});

// Анімація для services-tasks (fade-in усіх одночасно)
const tasksObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.querySelectorAll(".service-item");
      items.forEach(item => item.classList.add("visible"));
      observer.unobserve(entry.target); // перестаємо слухати після появи
    }
  });
}, { threshold: 0.3 });

const tasksSection = document.querySelector("#services-tasks");
if (tasksSection) {
  tasksObserver.observe(tasksSection);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    const headerOffset = document.querySelector('header').offsetHeight; // висота хедера
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const element = document.querySelector(".implementation-text");
  const text = element.textContent.trim();
  element.textContent = ""; // очищаємо текст

  let i = 0;
  let hasPlayed = false; // щоб ефект не повторювався кожного разу

  function typeWriter() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50); // швидкість печатання
    }
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasPlayed) {
        hasPlayed = true;
        typeWriter();
      }
    });
  }, { threshold: 0.6 }); // 0.6 = спрацює, коли видно 60% елемента

  observer.observe(element);
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".super-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 600); // по черзі
        observer.unobserve(entry.target); // один раз
      }
    });
  }, { threshold: 0.3 });

  items.forEach(item => observer.observe(item));
});

const cards = document.querySelectorAll('.case-card');
const nextBtns = document.querySelectorAll('.next-btn');
let currentIndex = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
  });
}

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length; // циклічно
    showCard(currentIndex);
  });
});

showCard(currentIndex);

window.addEventListener("load", function() {
  let loader = document.getElementById("loader");
  let content = document.getElementById("content");

  loader.style.display = "none";  // ховаємо лоадер
  content.style.display = "block"; // показуємо контент
});

document.addEventListener("DOMContentLoaded", () => {
  const implItems = document.querySelectorAll(".impl-item");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target); // анімація тільки один раз
      }
    });
  }, {
    threshold: 0.2 // 20% блоку видно → запускається
  });

  implItems.forEach(item => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", function() {
  const element = document.querySelector(".supervisor-text");
  const text = element.textContent.trim();
  element.textContent = ""; // очищаємо текст

  let i = 0;
  let hasPlayed = false; // щоб ефект не повторювався кожного разу

  function typeWriter() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50); // швидкість печатання
    }
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasPlayed) {
        hasPlayed = true;
        typeWriter();
      }
    });
  }, { threshold: 0.6 }); // 0.6 = спрацює, коли видно 60% елемента

  observer.observe(element);
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".case-card");
  let current = 0;

  function showNextCase() {
    // Приховуємо всі кейси
    cards.forEach(card => card.classList.remove("active"));

    // Показуємо поточний
    cards[current].classList.add("active");

    // Переходимо до наступного
    current = (current + 1) % cards.length;
  }

  // Запускати автоматично кожні 10 секунд
  setInterval(showNextCase, 15000);

  // Показати перший одразу
  showNextCase();
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".support-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("visible");
          }, index * 400); // затримка між появами
        });
        observer.disconnect(); // зупиняємо після першого запуску
      }
    });
  }, { threshold: 0.3 });

  if (items.length > 0) {
    observer.observe(items[0].parentElement); // спостерігаємо за контейнером
  }
});

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// Отримуємо кнопку
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Показуємо/ховаємо при скролі
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// При кліку — плавний скрол угору
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ===== YouTube Video Control =====

// 1. Підключаємо YouTube IFrame API
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);

let player;

// 2. Ініціалізація плеєра після завантаження API
function onYouTubeIframeAPIReady() {
  console.log("✅ YouTube API Ready");

  player = new YT.Player("myVideo", {
    events: {
      onReady: () => {
        console.log("▶️ Player Ready");
        setupObserver();
      },
      onStateChange: onPlayerStateChange
    }
  });
}

// 3. IntersectionObserver → запуск і пауза відео при скролі
function setupObserver() {
  const videoSection = document.querySelector(".video-section");
  console.log("👀 Observer attached to:", videoSection);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("🎬 Section visible → play");
          player.playVideo();
        } else {
          console.log("⏸️ Section hidden → pause");
          player.pauseVideo();
        }
      });
    },
    { threshold: 0.5 } // хоча б 50% секції має бути видно
  );

  observer.observe(videoSection);
}

// 4. Показ оверлею після завершення відео
function onPlayerStateChange(event) {
  const overlay = document.getElementById("videoOverlay");

  if (event.data === YT.PlayerState.ENDED) {
    console.log("🏁 Video ended → show overlay");
    overlay.style.display = "flex";
  }
}

// 5. Клік по оверлею → перезапуск відео
document.getElementById("videoOverlay").addEventListener("click", () => {
  console.log("🔁 Overlay clicked → restart video");
  player.seekTo(0);
  player.playVideo();
  document.getElementById("videoOverlay").style.display = "none";
});
