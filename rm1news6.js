document.addEventListener("DOMContentLoaded", function () {
    var allowedUrls = ["en.rm1news.com", "rm1news.com" , "testlocoalhost.rf.gd"];
    var currentUrl = window.location.hostname;

    // Check if the current URL is not in the allowedUrls array
    if (!allowedUrls.includes(currentUrl)) {
        // Create the main content div
        var mainContentDiv = document.createElement("div");
        mainContentDiv.className = "main-content";
        mainContentDiv.style.margin = "14px auto";
        mainContentDiv.style.padding = "13px";

        // Add the inner HTML content to the main content div
        mainContentDiv.innerHTML = `<div class="main-content" style="margin: 14px auto; padding: 13px;">
                    <div class="main section" id="main">
                        <div class="widget Blog" data-version="2" id="Blog1">
                            <style>
                                .num-error{display:flex;align-items:center;justify-content:center;font-size:136px;font-family:'FontAwesome';color:#df2829}
                                .text-error{padding:15px;font-size:18px}
                            </style>
                            <div class="page-error">
                                <div class="num-error" style="
            font-family: 'Tajawal';
            font-size: 68px;
            margin-top: 17px;
        ">لم يتم يفعل القالب</div>
                                <p class="text-error" style="text-align: center;">يجب عليك تفعيل القالب اولا من خلال التواصل معنا على فيس بوك</p>
                            </div>
                            <nav aria-label="breadcrumb" class="nav-breadcrumb">
                                <ol class="breadcrumb" itemscope="itemscope" itemtype="https://schema.org/BreadcrumbList"></ol>
                            </nav>
                            <div class="post-list">
                                <div class="widget-body"></div>
                            </div>
                            <div id="ads-before-pagination"></div>
                            <nav class="post-pagination flex-grow" id="blog-pager">
                                <a class="btn" href="https://www.facebook.com/profile.php?id=100091849989288">

                                    <span class="max-xs-text-none">تواصل معنا</span>
                                </a>
                            </nav>
                            <div id="ads-after-pagination"></div>
                        </div>
                    </div>
                </div>`;

        // Clear the body's content and append the main content div
        var body = document.body;
        body.innerHTML = ""; // Clear the body's content
        body.appendChild(mainContentDiv);
    }
});
// ابدأ بالقيمة الأصلية للتحول
let translateYValue = 0;

// احصل على العنصر الذي تريد تغييره
const newsTicker = document.getElementById('news-ticker-items');

// تعيين دالة تقوم بتحديث القيمة وتطبيقها على العنصر
function updateTransform() {
  // تحديث القيمة بنقص 36
  translateYValue -= 36;

  // تطبيق التحول على العنصر
  newsTicker.style.transform = `translateY(calc(${translateYValue}px))`;

  // إذا وصلت القيمة إلى -144، ارجعها إلى -36 مرة أخرى
  if (translateYValue === -144) {
    translateYValue = 0;
  }
}

// استخدم setInterval لتنفيذ الدالة كل ثانيتين
const intervalId = setInterval(updateTransform, 4000);

  // تحديد العناصر
  const sliderTitles = document.querySelectorAll('.slider-title');
  const sliderImg = document.querySelector('.slider-img');
  const sliderTitle = document.querySelector('.slider-des');
  const sliderLink = document.querySelector('.slider-main');

  let currentIndex = 0;
  let interval;

  function updateSlider() {
    // استخراج المعلومات من العنصر الحالي
    const currentTitle = sliderTitles[currentIndex];
    const dataImg = currentTitle.getAttribute('data-img');
    const dataTitle = currentTitle.textContent;
    const dataUrl = currentTitle.getAttribute('data-url');

    // تحديث العناصر في الصفحة
    sliderImg.setAttribute('src', dataImg);
    sliderTitle.textContent = dataTitle;
    sliderLink.setAttribute('href', dataUrl);

    // إضافة وإزالة الفئة "active" لتمييز العنصر المحدد
    sliderTitles.forEach(t => t.classList.remove('active'));
    currentTitle.classList.add('active');

    // زيادة مؤشر العنصر الحالي أو إعادته إلى الصفر إذا وصل إلى آخر عنصر
    currentIndex = (currentIndex + 1) % sliderTitles.length;
  }

  // تحديث السلايدر كل ثانيتين
  interval = setInterval(updateSlider, 6000);

  // تشغيل السلايدر لأول مرة
  updateSlider();

  // إضافة مستمعي الحدث لعناصر القائمة للنقر عليها
  sliderTitles.forEach((title, index) => {
    title.addEventListener('click', () => {
      currentIndex = index;
      clearInterval(interval); // قف تحديث التبديل التلقائي عند النقر
      updateSlider(); // حدث العناصر على الفور
      interval = setInterval(updateSlider, 6000); // استأنف التبديل التلقائي بعد النقر
    });
  });
var items = document.querySelectorAll('.block-slider2-item');

// تعيين متغير لتتبع العنصر الحالي
var currentIndex2 = 0;

function removeActiveClass() {
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
}

function addActiveClass() {
    items[currentIndex2].classList.add('active');
    // عرض عنوان العنصر النشط حاليًا
    var activeItemTitle = items[currentIndex2].getAttribute('data-title');
    titleElement.textContent = activeItemTitle;
}

var titleElement = document.querySelector('.block-slider2-item-title');
var sliderContainer = document.querySelector('.block-slider2');

document.addEventListener('DOMContentLoaded', function() {
    var firstTitle = items[0].getAttribute('data-title');
    titleElement.textContent = firstTitle;
});

items.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        var title = item.getAttribute('data-title');
        titleElement.textContent = title;
    });

    item.addEventListener('mouseout', function() {
        // إعادة عرض عنوان العنصر النشط عند الخروج من العنصر
        var activeItemTitle = items[currentIndex2].getAttribute('data-title');
        titleElement.textContent = activeItemTitle;
    });
});

sliderContainer.addEventListener('mouseout', function() {
    var activeItemTitle = items[currentIndex2].getAttribute('data-title');
    titleElement.textContent = activeItemTitle;
});

// تحديث عناصر السلايدر كل 6 ثواني
var interval2 = setInterval(function() {
    removeActiveClass();
    currentIndex2++;

    if (currentIndex2 === items.length) {
        currentIndex2 = 0;
    }

    addActiveClass();
}, 6000);
// ابحث عن عنصر meta بواسطة الاسم والمحتوى
var metaElement = document.querySelector('meta[name="robots"][content="noindex, nofollow"]');

// إذا تم العثور على العنصر، قم بحذفه
if (metaElement) {
  metaElement.parentNode.removeChild(metaElement);
}
