// js/service-single-dynamic.js
/**
 * Dynamic Service Renderer for service-single.html
 * Powered by Vorizo Master Data Dictionary (js/data.js)
 */

document.addEventListener('DOMContentLoaded', function() {
    if (typeof VORIZO_DATA === 'undefined') {
        console.warn('VORIZO_DATA not loaded.');
        return;
    }

    // Parse URL parameter: ?service=slug
    const urlParams = new URLSearchParams(window.location.search);
    const serviceSlug = urlParams.get('service');

    if (!serviceSlug) {
        // Highlight first item in sidebar by default
        highlightActiveSidebar('cloud-migration-architecture');
        return;
    }

    const service = VORIZO_DATA.getServiceBySlug(serviceSlug);
    if (!service) {
        console.warn('Service not found in VORIZO_DATA for slug:', serviceSlug);
        return;
    }

    // 1. Update Page Title and Breadcrumb
    document.title = `${service.title} - Vorizo Info Tech`;
    
    const pageHeaderTitle = document.querySelector('.page-header-box h1');
    if (pageHeaderTitle) pageHeaderTitle.textContent = service.title;

    const breadcrumbActive = document.querySelector('.breadcrumb-item.active');
    if (breadcrumbActive) breadcrumbActive.textContent = service.title;

    // 2. Update Featured Image
    const featuredImg = document.querySelector('.page-single-image img');
    if (featuredImg && service.image) {
        featuredImg.src = service.image;
        featuredImg.alt = service.title;
    }

    // 3. Update Service Overview / Entry Paragraphs
    const entryContainer = document.querySelector('.service-entry');
    if (entryContainer) {
        let firstPara = entryContainer.querySelector('p:first-of-type');
        let secondPara = entryContainer.querySelector('p:nth-of-type(2)');
        if (firstPara) firstPara.textContent = service.overview;
        if (secondPara) secondPara.textContent = service.shortDescription;
    }

    // 4. Update Service Offer Heading & Bullets
    const offerTitle = document.querySelector('.service-offer-box .section-title h2');
    if (offerTitle) offerTitle.textContent = `Key Capabilities & Capabilities`;

    const offerList = document.querySelector('.service-offer-list ul');
    if (offerList && service.keyFeatures) {
        offerList.innerHTML = service.keyFeatures.map(f => 
            `<li><strong>${f.title}:</strong> ${f.description}</li>`
        ).join('');
    }

    // 5. Update Why Choose Section
    const whyTitle = document.querySelector('.service-why-choose-box h2');
    if (whyTitle) whyTitle.textContent = `Why Choose Vorizo for ${service.title}`;

    const whyPara = document.querySelector('.service-why-choose-box > p');
    if (whyPara) {
        const benefitsStr = service.businessBenefits.join(' ');
        whyPara.textContent = `Partnering with Vorizo delivers measurable operational velocity and reduced overhead. ${benefitsStr}`;
    }

    // 6. Update Deliverables / Results List
    const chooseItemList = document.querySelector('.service-why-choose-item-list');
    if (chooseItemList && service.deliverables) {
        chooseItemList.innerHTML = service.deliverables.map((d, idx) => `
            <div class="service-why-choose-item wow fadeInUp" data-wow-delay="${(idx * 0.1).toFixed(1)}s">
                <div class="icon-box">
                    <img src="images/icons/icon-service-why-choose-item-1.svg" alt="">
                </div>
                <div class="service-why-choose-item-content">
                    <h3>Deliverable ${idx + 1}</h3>
                    <p>${d}</p>
                </div>
            </div>
        `).join('');
    }

    // 7. Update FAQs Accordion
    const faqAccordion = document.getElementById('accordion');
    if (faqAccordion && service.faqs && service.faqs.length > 0) {
        faqAccordion.innerHTML = service.faqs.map((faq, idx) => {
            const isFirst = idx === 0;
            return `
                <div class="accordion-item wow fadeInUp" data-wow-delay="${(idx * 0.1).toFixed(1)}s">
                    <h2 class="accordion-header" id="heading${idx + 1}">
                        <button class="accordion-button ${isFirst ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${idx + 1}" aria-expanded="${isFirst ? 'true' : 'false'}" aria-controls="collapse${idx + 1}">
                            Q${idx + 1}. ${faq.question}
                        </button>
                    </h2>
                    <div id="collapse${idx + 1}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" role="region" aria-labelledby="heading${idx + 1}" data-bs-parent="#accordion">
                        <div class="accordion-body">
                            <p>${faq.answer}</p>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 8. Highlight Active Sidebar Item
    highlightActiveSidebar(service.slug);
});

function highlightActiveSidebar(activeSlug) {
    const sidebarLinks = document.querySelectorAll('.page-category-list ul li a');
    sidebarLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(activeSlug)) {
            link.parentElement.classList.add('active');
            link.style.fontWeight = 'bold';
            link.style.color = 'var(--primary-color, #1944DF)';
        } else {
            link.parentElement.classList.remove('active');
            link.style.fontWeight = 'normal';
            link.style.color = '';
        }
    });
}
