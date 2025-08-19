document.addEventListener("DOMContentLoaded", function() {
    // رسالة عند الضغط على زر "ابدأ بتأجير سيارة"
    const rentButton = document.getElementById('rent-button');
    if (rentButton) {
        rentButton.addEventListener('click', function() {
            alert('شكراً لاهتمامك! سيتم توجيهك إلى صفحة الحجز قريباً.');
        });
    }

    // إضافة الأسئلة الشائعة بشكل ديناميكي
    const faqAccordion = document.getElementById('faq-accordion');
    if (faqAccordion) {
        const faqs = [
            {
                question: "ما هي المستندات المطلوبة لاستئجار سيارة؟",
                answer: "تحتاج إلى رخصة قيادة سارية المفعول وبطاقة هوية أو جواز سفر."
            },
            {
                question: "هل يمكنني استئجار سيارة بسائق؟",
                answer: "نعم، نحن نقدم خدمة استئجار السيارات مع سائقين محترفين."
            },
            {
                question: "ما هي سياسة الوقود؟",
                answer: "يتم تسليم السيارة بخزان ممتلئ ويجب إعادتها بنفس الحالة."
            }
        ];

        faqs.forEach((faq, index) => {
            const faqItem = `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                            ${faq.question}
                        </button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#faq-accordion">
                        <div class="accordion-body">
                            ${faq.answer}
                        </div>
                    </div>
                </div>
            `;
            faqAccordion.innerHTML += faqItem;
        });
    }
});