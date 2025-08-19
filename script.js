function run(){ 
    // دالة بتتنده لما تدوس زرار "Run" — هدفها تركّب HTML + CSS + JS جوا الـ iframe
    let htmlCode = document.getElementById("html-code").value;
    // بجيب النص اللي كتبه المستخدم في textarea أو input اسمه "html-code" (وده هيبقى الـ HTML)
    let cssCode = document.getElementById("css-code").value;
    // نفس الفكرة بس للكود الـ CSS من عنصر اسمه "css-code"
    let jsCode = document.getElementById("js-code").value;
    // ونفس الحكاية للـ JavaScript من عنصر اسمه "js-code"
    let output = document.getElementById("output");
    // بجيب عنصر الـ iframe اللي هنعرض فيه النتيجة، ولازم يكون له id="output"
    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    // هنا بدخل على المستند الداخلي بتاع الـ iframe (contentDocument)
    // وبغير محتوى الـ <body> كله بحيث يبقى الـ HTML اللي المستخدم كتبه + تاج <style> جواه CSS
    // ملاحظة: السطر ده بيستبدل أي محتوى كان موجود قبل كده جوا الـ iframe
    // ملاحظة تانية: لو الـ htmlCode فيه <head> أو <html> مش هيتعاملوا كهيكل صفحة كامل هنا، كله بتحط جوة الـ <body>
    output.contentWindow.eval(jsCode);
    // هنا بشغل كود الجافاسكريبت جوا نافذة/سياق الـ iframe (مش في صفحة الأب)
    // eval بيقيّم النص ككود ويشغّله — خلي بالك: eval خطر لو بتشغّل كود غير موثوق
    // الأفضل أحياناً نبني صفحة كاملة بـ srcdoc أو نحقن <script> بدل eval
}
