// js/project-single-dynamic.js
/**
 * Dynamic Industry Case Study Renderer for project-single.html
 * Powered by Vorizo Master Industries Data Dictionary (js/industries-data.js)
 */

document.addEventListener('DOMContentLoaded', function() {
    if (typeof VORIZO_INDUSTRIES === 'undefined') {
        console.warn('VORIZO_INDUSTRIES not loaded.');
        return;
    }

    // Parse URL parameter: ?industry=slug or ?project=slug
    const urlParams = new URLSearchParams(window.location.search);
    const industrySlug = urlParams.get('industry') || urlParams.get('project');

    if (!industrySlug) {
        return; // Retain default static Healthcare case study
    }

    const industry = VORIZO_INDUSTRIES.getIndustryBySlug(industrySlug);
    if (!industry) {
        console.warn('Industry not found in VORIZO_INDUSTRIES for slug:', industrySlug);
        return;
    }

    // 1. Update Title & Breadcrumbs
    document.title = `${industry.title} - Vorizo Info Tech`;

    const pageHeaderTitle = document.querySelector('.page-header-box h1');
    if (pageHeaderTitle) pageHeaderTitle.textContent = industry.title;

    const breadcrumbActive = document.querySelector('.breadcrumb-item.active');
    if (breadcrumbActive) breadcrumbActive.textContent = industry.title;

    // 2. Update Sidebar Case Study Details
    const metaList = document.querySelector('.page-category-list ul');
    if (metaList) {
        metaList.innerHTML = `
            <li>Name:<span>${industry.title}</span></li>
            <li>Category:<span>${industry.category}</span></li>
            <li>Client Name:<span>${industry.clientName}</span></li>
            <li>Location:<span>${industry.location}</span></li>
            <li>Timeline:<span>${industry.timeline}</span></li>
        `;
    }

    // 3. Update Featured Hero Image
    const featuredImg = document.querySelector('.page-single-image img');
    if (featuredImg && industry.image) {
        featuredImg.src = industry.image;
        featuredImg.alt = industry.title;
    }

    // 4. Update Overview Paragraphs
    const entryContainer = document.querySelector('.project-entry');
    if (entryContainer) {
        const firstPara = entryContainer.querySelector('p:first-of-type');
        const secondPara = entryContainer.querySelector('p:nth-of-type(2)');
        if (firstPara) firstPara.textContent = industry.overview;
        if (secondPara) secondPara.textContent = industry.shortDescription;
    }

    // 5. Update Challenges
    const challengesList = document.querySelector('.project-challenges-item-list');
    if (challengesList && industry.challenges) {
        challengesList.innerHTML = industry.challenges.map((c, idx) => `
            <div class="project-challenges-item wow fadeInUp" data-wow-delay="${(idx * 0.2).toFixed(1)}s">
                <div class="icon-box">
                    <img src="images/icons/icon-client-challenge-${(idx % 2) + 1}.svg" alt="">
                </div>
                <div class="project-challenges-item-content">
                    <h3>${c.title}</h3>
                    <p>${c.description}</p>
                </div>
            </div>
        `).join('');
    }

    // 6. Update Achieved Results
    const achievedList = document.querySelector('.project-achieved-item-list');
    if (achievedList && industry.results) {
        achievedList.innerHTML = industry.results.map((r, idx) => `
            <div class="project-achieved-item wow fadeInUp" data-wow-delay="${(idx * 0.2).toFixed(1)}s">
                <div class="icon-box">
                    <img src="images/icons/icon-project-achieved-item-1.svg" alt="">
                </div>
                <div class="project-achieved-item-content">
                    <h3>${r.title}</h3>
                    <p>${r.description}</p>
                </div>
            </div>
        `).join('');
    }

    // 7. Update Metrics / Skill Bars
    const skillsList = document.querySelector('.skills-progress-bar');
    if (skillsList && industry.metrics) {
        skillsList.innerHTML = industry.metrics.map(m => {
            const pct = m.value.includes('%') ? m.value : '95%';
            return `
                <div class="skillbar" data-percent="${pct}">
                    <div class="skill-data">
                        <div class="skill-title">${m.label}</div>
                        <div class="skill-no">${m.value}</div>
                    </div>
                    <div class="skill-progress">
                        <div class="count-bar" style="width: ${pct}"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 8. Update FAQs
    const faqAccordion = document.getElementById('accordion');
    if (faqAccordion && industry.faqs) {
        faqAccordion.innerHTML = industry.faqs.map((faq, idx) => {
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
});
