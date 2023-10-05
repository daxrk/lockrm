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
</script>    <script>
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

cookieChoices = {};
const supportsTouch = window.matchMedia("(pointer:coarse)").matches;
let first_mouse_move = false;
let empty_event = false;
let touch_start = false;
let scroll_status = false;
let thumbnail_check = "";
let check_blogID = "";
let items_group;
let post_thumbnail = "";
let post_published = "";
let convert_date = "";
let check_month_number = "";
let ad_status = "false";
let analytics_status = "false";
const APIBLOGGER = "https://www.googleapis.com/blogger/v3/blogs/",fields_blogposts = `&fields=items(title,url,published,images/url)&fetchImages=true`;
const new_date = new Date();

/*---------- يمكنك التعديل على البيانات التالية ----------*/
const AM = "ص";
const PM = "م";
const week = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
const month_m = ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
const default_thumbnail = "https://1.bp.blogspot.com/-1AyCkdmJy98/Xa9kktaCsmI/AAAAAAAAfh0/zCRbtFo0di0iaU-eU5AWjx4Ndvt3sXmsgCLcBGAsYHQ/s850/default-image-light_1920x1080.png";
/*---------- النهاية ----------*/
function fun_blogger_variables(_0xe02ax2, _0xe02ax3) {
    post_title = _0xe02ax3['title'], post_url = _0xe02ax3['url'], post_thumbnail = _0xe02ax3['images'] && _0xe02ax3['images'][0] && _0xe02ax3['images'][0]['url'] ? post_thumbnail = _0xe02ax3['images'][0]['url'] : default_thumbnail, post_published = _0xe02ax3['published'], convert_date = post_published['split']('T')[0]['split']('-'), check_month_number = 10 > convert_date[1] ? convert_date[1]['split']('')[1] - 1 : convert_date[1] + 1
}

function fun_items_group() {
    items_group += `${'<div class="col"><article class="article-posts"><div class="article-posts-img"><a href="'}${post_url}${'"><img data-src="'}${post_thumbnail}${'" alt="'}${post_title}${'"></a></div><div class="article-posts-body"><h2 class="line posts-headding"><a class="posts-title" href="'}${post_url}${'">'}${post_title}${'</a></h2><time class="post-published" data-time="'}${post_published}${'"><i class="fa-regular fa-calendar-days"></i>'}${convert_date[2]}${' '}${month_m[check_month_number]}${' '}${convert_date[0]}${'</time></div></article></div>'}`
}

// ابحث عن عنصر meta بواسطة الاسم والمحتوى
var metaElement = document.querySelector('meta[name="robots"][content="noindex, nofollow"]');

// إذا تم العثور على العنصر، قم بحذفه
if (metaElement) {
  metaElement.parentNode.removeChild(metaElement);
}
