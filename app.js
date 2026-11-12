const CONFIG = {
 deadline:'2027-01-01T00:00:00+03:00',
 uniquePeopleSinceJuly2026:0, // Placeholder: update with your real figure.
 dateEventsSinceJuly2026:0, // Placeholder: update with your real figure.
 whatsapp:'905368593589'
};
const translations = {
en:{
mast:'A QUESTIONABLE PERSONAL POLICY · EST. 2026',issue:'PERSONAL NOTICE / NO. 001',headline:'Not <em>dating.</em><br>Until 2027.',deck:'A reckless decision made on my birthday. We are all suffering the consequences.',aside:'A regrettable choice. An impeccable commitment.',
clockTitle:'EMBARGO LIFTS IN',live:'LIVE',days:'DAYS',hours:'HOURS',minutes:'MINUTES',seconds:'SECONDS',liftDateLabel:'OFFICIAL RELEASE',
since:'THE RECORD · SINCE 01 JULY 2026',metricsTitle:'The numbers, <em>unromantic.</em>',unique:'UNIQUE PEOPLE DATED',events:'TOTAL DATE EVENTS',
terms:'TERMS & ROMANTIC CONDITIONS',fineTitle:'The fine <em>print.</em>',
definition:'<b>§ 01 / What counts.</b> A date is an explicitly proposed and mutually accepted date: “Let’s go on a date” or “Let me take you on a date.” Everything else is an ambiguous social engagement.',
touch:'<b>§ 02 / Physical evidence.</b> A date can occur without physical contact. Physical contact can occur without a date. Oxytocin may or may not have been released. Neither physical contact nor oxytocin, by itself, breaches this promise.',
gastro:'<b>§ 03 / The famous loophole.</b> Dining at Date Gastro Pub is not necessarily going on a date. The restaurant’s name is not a legally binding invitation.',
thanksLabel:'ACKNOWLEDGEMENTS',thanks:'To those exposed to my drunk texts, those who provided counterfeit dates at Date Gastro Pub, and everyone collateral-damaged by this birthday decision: thank you for your service.',
memeCaption:'An independent review of my birthday decision',screeningLabel:'2027 PRE-REGISTRATION / ELIGIBILITY CHECK',screeningTitle:'Are you <em>eligible?</em>',screeningLead:'A little self-certification before the WhatsApp door opens. Please be charmingly honest.',requirements:'APPLICANT DECLARATION',
check1:'I’m older than you numerically — and at least your equal emotionally.',detail1:'The emotional age requirement is non-negotiable.',
check2:'I’m taller than you. At least 170 cm.',detail2:'Shoes and creative rounding don’t count.',
check3:'I’m not blonde.',detail3:'“Dark blonde” is not a loophole.',
check4:'If you don’t call the next day, I won’t cause a scene.',detail4:'Not even a beautifully written one.',
check5:'I can hold an actual conversation.',detail5:'Curiosity, questions, full sentences. “Wyd?” is not a personality.',
check6:'I’m fun to be around.',detail6:'An actual sense of humour, not just a Spotify playlist.',
check7:'I can make a plan.',detail7:'“We should hang out sometime” is not an itinerary.',
check8:'I respect boundaries — including this ridiculous embargo.',detail8:'Pre-registration now. Actual dates only after January 1.',
hint:'Tick all eight boxes to unlock your pre-registration.',hintReady:'All eight boxes ticked. Your questionable application may proceed.',
applyLocked:'COMPLETE THE CHECKLIST',applyReady:'PRE-REGISTER VIA WHATSAPP',
disclaimer:'Self-reported answers only. No information is stored or sent until you choose to send the WhatsApp message. Eligibility does not guarantee a date or a reply.',
share:'SHARE THE DRAMA',footer:'MADE WITH POOR JUDGMENT.',releasedHeadline:'The embargo <em>is over.</em>',releasedDeck:'The promise was kept. Dating is once again theoretically permitted.',releasedAside:'Happy 2027. Terms and conditions still apply.',
releasedTitle:'EMBARGO STATUS',releasedLive:'EXPIRED',shareText:'A wildly unnecessary dating embargo, with a live countdown and eligibility screening. Witness it:',
whatsappText:'Hello. I am formally pre-registering for a possible date in 2027.\n\nI solemnly certify that I meet all eight eligibility requirements (including emotional maturity, conversation skills and respect for the embargo).\n\nI understand this is not a reservation, a promise or a guarantee of a reply.\n\nRespectfully, your most eligible questionable applicant.'
},
tr:{
mast:'TARTIŞMALI BİR KİŞİSEL POLİTİKA · 2026',issue:'KAMUOYUNA DUYURU / NO. 001',headline:'Date <em>yok.</em><br>2027’ye kadar.',deck:'Doğum günümde aldığım fevri bir karar. Acısını hep birlikte çekiyoruz.',aside:'Karar tartışmalı. Sadakatim kusursuz.',
clockTitle:'AMBARGONUN BİTMESİNE',live:'CANLI',days:'GÜN',hours:'SAAT',minutes:'DAKİKA',seconds:'SANİYE',liftDateLabel:'RESMÎ BİTİŞ',
since:'RESMÎ KAYIT · 01 TEMMUZ 2026’DAN BERİ',metricsTitle:'Romantizmin <em>rakamları.</em>',unique:'DATE’E ÇIKILAN FARKLI KİŞİ',events:'TOPLAM DATE ETKİNLİĞİ',
terms:'ROMANTİK HÜKÜM VE KOŞULLAR',fineTitle:'Küçük <em>yazılar.</em>',
definition:'<b>§ 01 / Date’in tanımı.</b> Date, ancak “Date’e çıkalım” veya “Seni date’e çıkarayım” gibi açık bir teklifle ve karşılıklı kabul ile gerçekleşir. Belirsiz görüşmeler date değildir.',
touch:'<b>§ 02 / Fiziksel deliller.</b> Fiziksel temas olmadan date olabilir; date olmadan fiziksel temas da olabilir. Oksitosin salgılanmış veya salgılanmamış olabilir. Bunların hiçbiri tek başına bu sözün ihlali sayılmaz.',
gastro:'<b>§ 03 / Meşhur istisna.</b> Date Gastro Pub’a gitmek otomatik olarak date’e çıkmak değildir. Mekânın adı hukuken bağlayıcı bir davet sayılmaz.',
thanksLabel:'ÖZEL TEŞEKKÜR',thanks:'Drunk text’lerime maruz kalan, benimle Date Gastro Pub’a gelip sahte date deneyimi yaşatan ve doğum günü kararımın istemeden mağduru olan herkese: hizmetleriniz için teşekkürler.',
memeCaption:'Doğum günü kararımın bağımsız değerlendirmesi',screeningLabel:'2027 ÖN KAYIT / UYGUNLUK KONTROLÜ',screeningTitle:'Şartlara <em>uyuyor musun?</em>',screeningLead:'WhatsApp ön kaydından önce ufak bir öz beyan. Çekici derecede dürüst olalım.',requirements:'ADAY BEYANI',
check1:'Benden sayısal olarak büyüğüm; duygusal yaşım da en az seninki kadar.',detail1:'Duygusal olgunluk şartı pazarlığa kapalı.',
check2:'Senden uzunum. En az 170 cm’yim.',detail2:'Ayakkabı ve yaratıcı yuvarlama sayılmaz.',
check3:'Sarışın değilim.',detail3:'“Koyu sarı” hukuki boşluk değil.',
check4:'Ertesi gün aramazsan drama yaratmam.',detail4:'İyi yazılmış üç perdelik bir drama bile yok.',
check5:'Gerçek bir sohbet sürdürebilirim.',detail5:'Merak, soru sorma, tam cümleler. “Nabıyon?” kişilik değil.',
check6:'Birlikte vakit geçirmesi eğlenceli biriyim.',detail6:'Spotify listesi dışında bir mizah anlayışım da var.',
check7:'Gerçekten plan yapabilirim.',detail7:'“Bir ara takılalım” plan sayılmaz.',
check8:'Sınırlara — bu saçma ambargo dâhil — saygı duyarım.',detail8:'Şimdi sadece ön kayıt. Gerçek date için 1 Ocak sonrası.',
hint:'WhatsApp ön kaydını açmak için sekiz kutuyu da işaretle.',hintReady:'Sekiz kutu da tamam. Şüpheli derecede iddialı başvurun hazır.',
applyLocked:'ÖNCE CHECKLIST’İ TAMAMLA',applyReady:'WHATSAPP’TAN ÖN KAYIT',
disclaimer:'Beyanlar kontrol edilmez. WhatsApp mesajını kendin göndermedikçe hiçbir bilgi kaydedilmez veya iletilmez. Uygunluk, date ya da cevap garantisi değildir.',
share:'DRAMAYI PAYLAŞ',footer:'KÖTÜ BİR KARARLA YAPILDI.',releasedHeadline:'Ambargo <em>bitti.</em>',releasedDeck:'Söz tutuldu. Artık teorik olarak date’e çıkılabilir.',releasedAside:'Mutlu 2027. Hüküm ve koşullar geçerlidir.',
releasedTitle:'AMBARGO DURUMU',releasedLive:'SONA ERDİ',shareText:'Gereksiz derecede ciddi bir date ambargosu, canlı geri sayım ve uygunluk testi. Şahit olun:',
whatsappText:'Merhaba. 2027 için muhtemel bir date’e ön kayıt yaptırıyorum.\n\nSekiz uygunluk şartının tamamını sağladığımı (duygusal olgunluk, sohbet yeteneği ve ambargoya saygı dâhil) beyan ederim.\n\nBu mesajın bir rezervasyon, söz veya cevap garantisi olmadığının farkındayım.\n\nSaygılarımla, fazlasıyla uygun aday.'
}};
const $=id=>document.getElementById(id);
const fields=[...document.querySelectorAll('#checks input[type="checkbox"]')];
const target=Date.parse(CONFIG.deadline);
let locale='en';
try {if(localStorage.getItem('date-embargo-locale')==='tr')locale='tr';}catch(_){}
function t(key){return translations[locale][key]||'';}
function renderText(){
 document.documentElement.lang=locale;
 document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n);});
 document.querySelectorAll('[data-i18n-html]').forEach(el=>{el.innerHTML=t(el.dataset.i18nHtml);});
 $('langEn').classList.toggle('active',locale==='en');$('langTr').classList.toggle('active',locale==='tr');
 $('langEn').setAttribute('aria-pressed',String(locale==='en'));$('langTr').setAttribute('aria-pressed',String(locale==='tr'));
 updateEligibility(); updateClock();
}
function updateEligibility(){
 const count=fields.filter(el=>el.checked).length, complete=count===fields.length;
 $('progress').textContent=count+' / '+fields.length;
 $('formHint').textContent=t(complete?'hintReady':'hint');
 const button=$('applyButton');
 button.classList.toggle('disabled',!complete);
 button.setAttribute('aria-disabled',String(!complete));
 button.tabIndex=complete?0:-1;
 button.href=complete?'https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(t('whatsappText')):'#';
 button.querySelector('[data-i18n]').textContent=t(complete?'applyReady':'applyLocked');
}
function updateClock(){
 const remain=Math.max(0,target-Date.now()); const total=Math.ceil(remain/1000);
 const nums=[Math.floor(total/86400),Math.floor(total%86400/3600),Math.floor(total%3600/60),total%60];
 ['days','hours','minutes','seconds'].forEach((id,i)=>$(id).textContent=String(nums[i]).padStart(2,'0'));
 const ended=remain===0;
 if(ended){
   document.querySelector('[data-i18n-html="headline"]').innerHTML=t('releasedHeadline');
   document.querySelector('[data-i18n="deck"]').textContent=t('releasedDeck');
   document.querySelector('[data-i18n="aside"]').textContent=t('releasedAside');
   document.querySelector('[data-i18n="clockTitle"]').textContent=t('releasedTitle');
   $('clockLive').textContent=t('releasedLive');
 }else{
   document.querySelector('[data-i18n-html="headline"]').innerHTML=t('headline');
   document.querySelector('[data-i18n="deck"]').textContent=t('deck');
   document.querySelector('[data-i18n="aside"]').textContent=t('aside');
   document.querySelector('[data-i18n="clockTitle"]').textContent=t('clockTitle');
   $('clockLive').textContent=t('live');
 }
}
function toast(message){$('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.remove('visible'),2500);}
$('uniqueCount').textContent=String(CONFIG.uniquePeopleSinceJuly2026).padStart(2,'0');
$('dateCount').textContent=String(CONFIG.dateEventsSinceJuly2026).padStart(2,'0');
fields.forEach(el=>el.addEventListener('change',updateEligibility));
$('applyButton').addEventListener('click',event=>{if(fields.some(el=>!el.checked))event.preventDefault();});
$('langEn').addEventListener('click',()=>{locale='en';try{localStorage.setItem('date-embargo-locale',locale);}catch(_){}renderText();});
$('langTr').addEventListener('click',()=>{locale='tr';try{localStorage.setItem('date-embargo-locale',locale);}catch(_){}renderText();});
$('shareButton').addEventListener('click',async()=>{
 const data={title:document.title,text:t('shareText'),url:location.href};
 if(navigator.share){try{await navigator.share(data);return;}catch(_){}}
 if(navigator.clipboard&&location.protocol.startsWith('http')){try{await navigator.clipboard.writeText(data.url);toast(locale==='en'?'Link copied. Let the drama spread.':'Link kopyalandı. Drama yayılsın.');return;}catch(_){}}
 window.open('https://wa.me/?text='+encodeURIComponent(data.text+' '+data.url),'_blank','noopener');
});
renderText();setInterval(updateClock,250);