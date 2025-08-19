function run(){ 
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");
    // بجيب عنصر الـ iframe اللي هنعرض فيه النتيجة، ولازم يكون له id="output"
    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    // هنا بدخل على المستند الداخلي بتاع الـ iframe (contentDocument)
    // وبغير محتوى الـ <body> كله بحيث يبقى الـ HTML اللي المستخدم كتبه + تاج <style> جواه CSS
    // ملاحظة: السطر ده بيستبدل أي محتوى كان موجود قبل كده جوا الـ iframe
    // ملاحظة تانية: لو الـ htmlCode فيه <head> أو <html> مش هيتعاملوا كهيكل صفحة كامل هنا، كله بتحط جوة الـ <body>
    output.contentWindow.eval(jsCode);
    // هنا بشغل كود الجافاسكريبت جوا نافذة/سياق الـ iframe (مش في صفحة perant)
    // eval بيقيّم النص ككود ويشغّله — خلي بالك: eval خطر لو بتشغّل كود غير موثوق
    // الأفضل أحياناً نبني صفحة كاملة بـ srcdoc أو نحقن <script> بدل eval
}
