// Серая SVG-иконка для тех, у кого нет фото
const NO_PHOTO = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23bdbdbd"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';

const people = [
    // --- ПОКОЛЕНИЕ 1 (Вы) ---
    { data: { id: 'ilya', label: 'Илья\nБулыгин', image: 'photos/ilya.jpg', local: 'yes', info: 'Илья Анатольевич. Родился 5.07.2011.' } },
    { data: { id: 'varvara', label: 'Варвара', image: 'photos/varvara.jpg', local: 'yes', info: 'Сестра. Родилась 26.05.2021.' } },
    { data: { id: 'daniil', label: 'Даниил', image: 'photos/daniil.jpg', local: 'yes', info: 'Брат. Родился 21.06.2026.' } },

    // --- ПОКОЛЕНИЕ 2 (Родители, Дяди) ---
    { data: { id: 'anatoly', label: 'Анатолий\nБулыгин', image: 'photos/anatoly.jpg', local: 'yes', info: 'Отец. Сварщик.' } },
    { data: { id: 'yulia', label: 'Юлия\nБулыгина', image: 'photos/yulia.jpg', local: 'yes', info: 'Мама. Энерготрансбанк.' } },
    { data: { id: 'denis', label: 'Денис', image: 'photos/denis.jpg', local: 'yes', info: 'Дядя.' } },

    // --- ПОКОЛЕНИЕ 3 (Деды, Бабушки) ---
    { data: { id: 'alexander_b', label: 'Александр\nБулыгин', image: 'photos/alexander_b.jpg', local: 'yes', info: 'Дед.' } },
    { data: { id: 'lyubov', label: 'Любовь\nБулыгина', image: 'photos/lyubov.jpg', local: 'yes', info: 'Бабушка.' } },
    { data: { id: 'sergey_m', label: 'Сергей\nМихновец', image: 'photos/sergey_m.jpg', local: 'yes', info: 'Дед.' } },
    { data: { id: 'svetlana', label: 'Светлана\nМихновец', image: 'photos/svetlana.jpg', local: 'yes', info: 'Бабушка.' } },
    
    { data: { id: 'vladimir_b', label: 'Владимир', image: 'photos/vladimir_b.jpg', local: 'yes', info: 'Двоюр. дед.' } },
    { data: { id: 'mikhail_a_b', label: 'Михаил', image: 'photos/mikhail_a_b.jpg', local: 'yes', info: 'Двоюр. дед.' } },
    { data: { id: 'evgeny_m', label: 'Евгений', image: 'photos/evgeny_m.jpg', local: 'yes', info: 'Двоюр. дед.' } },
    { data: { id: 'dmitry_b', label: 'Дмитрий', image: 'photos/dmitry_b.jpg', local: 'yes', info: 'Двоюр. дед.' } },
    { data: { id: 'viktor_t', label: 'Виктор', image: 'photos/viktor_t.jpg', local: 'yes', info: 'Двоюр. дед.' } },

    // --- ПОКОЛЕНИЕ 4 (Прадеды) ---
    { data: { id: 'mikhail_m', label: 'Михаил\nМихновец', image: 'photos/mikhail_m.jpg', local: 'yes', info: 'Прадед.' } },
    { data: { id: 'klavdia_m', label: 'Клавдия\nМихновец', image: 'photos/klavdia_m.jpg', local: 'yes', info: 'Прабабушка.' } },
    { data: { id: 'alexander_m', label: 'Александр\nБулыгин (ст.)', image: 'photos/alexander_m.jpg', local: 'yes', info: 'Прадед.' } },
    { data: { id: 'klavdia_b', label: 'Клавдия\nБулыгина', image: 'photos/klavdia_b.jpg', local: 'yes', info: 'Прабабушка.' } },
    { data: { id: 'nikolay_b', label: 'Николай\nБелов', image: 'photos/nikolay_b.jpg', local: 'yes', info: 'Прадед.' } },
    { data: { id: 'antonina', label: 'Антонина\nБелова', image: 'photos/antonina.jpg', local: 'yes', info: 'Прабабушка.' } },
    { data: { id: 'anatoly_t', label: 'Анатолий\nТуранин', image: 'photos/anatoly_t.jpg', local: 'no', info: 'Прадед.' } },
    { data: { id: 'anfisa', label: 'Анфиса', image: 'photos/anfisa.jpg', local: 'no', info: 'Прабабушка.' } },
    
    { data: { id: 'boris_b', label: 'Борис', image: 'photos/boris_b.jpg', local: 'yes', info: 'Двоюр. прадед.' } },
    { data: { id: 'lidia_b', label: 'Лидия', image: 'photos/lidia_b.jpg', local: 'no', info: 'Двоюр. прабабушка.' } },
    { data: { id: 'ignat_m', label: 'Игнат', image: 'photos/ignat_m.jpg', local: 'no', info: 'Двоюр. прадед.' } },
    { data: { id: 'mikhail_b', label: 'Михаил\nБелов', image: 'photos/mikhail_b.jpg', local: 'no', info: 'Двоюр. прадед.' } },
    { data: { id: 'evgeny_b', label: 'Евгений', image: 'photos/evgeny_b.jpg', local: 'no', info: 'Двоюр. прадед.' } },
    { data: { id: 'nikolay_f', label: 'Николай\nФигуров', image: 'photos/nikolay_f.jpg', local: 'no', info: 'Двоюр. прадед.' } },
    { data: { id: 'nina_m', label: 'Нина', image: 'photos/nina_m.jpg', local: 'no', info: 'Двоюр. прабабушка.' } },
    { data: { id: 'zoya', label: 'Зоя', image: 'photos/zoya.jpg', local: 'no', info: 'Двоюр. прабабушка.' } },
    { data: { id: 'valentina_p', label: 'Валентина', image: 'photos/valentina_p.jpg', local: 'no', info: 'Двоюр. прабабушка.' } },
    { data: { id: 'ekaterina_k', label: 'Екатерина', image: 'photos/ekaterina_k.jpg', local: 'no', info: 'Двоюр. прабабушка.' } },

    // --- ПОКОЛЕНИЕ 5 (Прапрадеды) ---
    { data: { id: 'makar_b', label: 'Макар\nБулыгин', image: 'photos/makar_b.jpg', local: 'no', info: 'Прапрадед.' } },
    { data: { id: 'maria_b', label: 'Мария\nБулыгина', image: 'photos/maria_b.jpg', local: 'no', info: 'Прапрабабушка.' } },
    { data: { id: 'iraida_t', label: 'Ираида', image: 'photos/iraida_t.jpg', local: 'no', info: 'Прапрабабушка.' } },
    { data: { id: 'nikolay_m', label: 'Николай\nМихновец', image: 'photos/nikolay_m.jpg', local: 'no', info: 'Прапрадед.' } },
    { data: { id: 'marta_m', label: 'Марта', image: 'photos/marta_m.jpg', local: 'no', info: 'Прапрабабушка.' } },
    { data: { id: 'ivan_b', label: 'Иван\nБелов', image: 'photos/ivan_b.jpg', local: 'yes', info: 'Прапрадед.' } },
    { data: { id: 'olga', label: 'Ольга\nБелова', image: 'photos/olga.jpg', local: 'yes', info: 'Прапрабабушка.' } },
    { data: { id: 'ivan_h', label: 'Иван\nХлусов', image: 'photos/ivan_h.jpg', local: 'yes', info: 'Прапрадед.' } },
    { data: { id: 'pelageya', label: 'Пелагея', image: 'photos/pelageya.jpg', local: 'yes', info: 'Прапрабабушка.' } },
    { data: { id: 'petr_f', label: 'Пётр\nФигуров', image: 'photos/petr_f.jpg', local: 'no', info: 'Прапрадед.' } },
    { data: { id: 'maria_f', label: 'Мария\nФигурова', image: 'photos/maria_f.jpg', local: 'no', info: 'Прапрабабушка.' } },
    { data: { id: 'irinya_f', label: 'Иринья', image: 'photos/irinya_f.jpg', local: 'no', info: 'Прапрапрабабушка.' } }
];

// Невидимые узлы брака (соединяют мужа и жену, чтобы дети шли от них)
const marriages = [
    { id: 'm_anatoly_yulia', parents: ['anatoly', 'yulia'] },
    { id: 'm_alexander_lyubov', parents: ['alexander_b', 'lyubov'] },
    { id: 'm_sergey_svetlana', parents: ['sergey_m', 'svetlana'] },
    { id: 'm_mikhail_klavdia', parents: ['mikhail_m', 'klavdia_m'] },
    { id: 'm_alexander_klavdia', parents: ['alexander_m', 'klavdia_b'] },
    { id: 'm_nikolay_antonina', parents: ['nikolay_b', 'antonina'] },
    { id: 'm_anatoly_anfisa', parents: ['anatoly_t', 'anfisa'] },
    { id: 'm_ivan_olga', parents: ['ivan_b', 'olga'] },
    { id: 'm_ivan_pelageya', parents: ['ivan_h', 'pelageya'] },
    { id: 'm_makar_maria', parents: ['makar_b', 'maria_b'] },
    { id: 'm_nikolay_marta', parents: ['nikolay_m', 'marta_m'] },
    { id: 'm_petr_maria', parents: ['petr_f', 'maria_f'] }
];

const relationships = [];
marriages.forEach(m => {
    relationships.push({ data: { source: m.parents[0], target: m.id, type: 'marriage-link' } });
    relationships.push({ data: { source: m.parents[1], target: m.id, type: 'marriage-link' } });
});

const childLinks = [
    { child: 'ilya', parent: 'm_anatoly_yulia' },
    { child: 'varvara', parent: 'm_anatoly_yulia' },
    { child: 'daniil', parent: 'm_anatoly_yulia' },
    
    { child: 'anatoly', parent: 'm_alexander_lyubov' },
    { child: 'denis', parent: 'm_alexander_lyubov' },
    { child: 'yulia', parent: 'm_sergey_svetlana' },
    
    { child: 'sergey_m', parent: 'm_mikhail_klavdia' },
    { child: 'evgeny_m', parent: 'm_mikhail_klavdia' },
    { child: 'alexander_b', parent: 'm_alexander_klavdia' },
    { child: 'vladimir_b', parent: 'm_alexander_klavdia' },
    { child: 'mikhail_a_b', parent: 'm_alexander_klavdia' },
    { child: 'svetlana', parent: 'm_nikolay_antonina' },
    { child: 'dmitry_b', parent: 'm_nikolay_antonina' },
    
    { child: 'lyubov', parent: 'm_anatoly_anfisa' },
    { child: 'viktor_t', parent: 'm_anatoly_anfisa' },
    { child: 'anatoly_t', parent: 'm_mikhail_m' }, // Одиночный узел
    { child: 'nikolay_b', parent: 'm_ivan_olga' },
    { child: 'mikhail_b', parent: 'm_ivan_olga' },
    { child: 'evgeny_b', parent: 'm_ivan_olga' },
    { child: 'klavdia_m', parent: 'm_ivan_pelageya' },
    
    { child: 'alexander_m', parent: 'm_makar_maria' },
    { child: 'boris_b', parent: 'm_makar_maria' },
    { child: 'lidia_b', parent: 'm_makar_maria' },
    { child: 'mikhail_m', parent: 'm_nikolay_marta' },
    { child: 'ignat_m', parent: 'm_nikolay_marta' },
    
    { child: 'antonina', parent: 'm_petr_maria' },
    { child: 'nikolay_f', parent: 'm_petr_maria' },
    { child: 'nina_m', parent: 'm_petr_maria' },
    { child: 'zoya', parent: 'm_petr_maria' },
    { child: 'valentina_p', parent: 'm_petr_maria' },
    { child: 'ekaterina_k', parent: 'm_petr_maria' }
];

childLinks.forEach(link => {
    relationships.push({ data: { source: link.parent, target: link.child, type: 'child-link' } });
});

const elements = [];
people.forEach(p => { elements.push({ data: p.data }); });
marriages.forEach(m => { elements.push({ data: { id: m.id, label: '' }, classes: 'invisible-marriage' }); });
relationships.forEach(r => { elements.push({ data: r.data, classes: r.data.type }); });

// ============================================================
// 3. ЗАПУСК ДЕРЕВА
// ============================================================
const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: elements,
    style: [
        {
            selector: 'node',
            style: {
                'background-color': '#a5d6a7',
                'background-image': function(ele) {
                    return ele.data('image') ? ele.data('image') : NO_PHOTO;
                },
                'background-fit': 'cover',
                'label': 'data(label)',
                'color': '#1b5e20',
                'text-valign': 'bottom',
                'text-halign': 'center',
                'text-margin-y': 4,
                'font-size': '11px',
                'font-weight': 'bold',
                'text-outline-color': '#ffffff',
                'text-outline-width': 2,
                'width': '65px',
                'height': '65px',
                'shape': 'ellipse',
                'text-wrap': 'wrap',
                'text-max-width': '85px',
                'border-width': 2,
                'border-color': '#81c784'
            }
        },
        {
            selector: 'node[local = "yes"]',
            style: {
                'border-width': 4,
                'border-color': '#ffb300',
                'background-color': '#fff8e1'
            }
        },
        {
            selector: '.invisible-marriage',
            style: {
                'width': 1, 'height': 1, 'background-opacity': 0, 'border-width': 0, 'label': ''
            }
        },
        {
            selector: 'edge.marriage-link',
            style: { 'width': 0, 'line-opacity': 0, 'curve-style': 'straight' }
        },
        {
            selector: 'edge.child-link',
            style: {
                'width': 2,
                'line-color': '#81c784',
                'target-arrow-color': '#81c784',
                'target-arrow-shape': 'triangle',
                'curve-style': 'taxi',
                'taxi-direction': 'downward',
                'taxi-turn': '50%',
                'arrow-scale': 0.8
            }
        }
    ],
    // Используем встроенный мощный алгоритм Dagre для деревьев
    layout: { 
        name: 'dagre',
        rankDir: 'TB', // Top to Bottom (сверху вниз)
        nodeSep: 40,   // Расстояние между узлами по горизонтали
        rankSep: 80,   // Расстояние между поколениями по вертикали
        edgeSep: 20
    }
});

// Добавляем возможность клика и перетаскивания
cy.on('tap', 'node', function (evt) {
    if (evt.target.hasClass('invisible-marriage')) return;
    const data = evt.target.data();
    showInfoCard(data.label.replace(/\n/g, ' '), data.image, data.info);
});

function showInfoCard(title, image, info) {
    const old = document.getElementById('info-card');
    if (old) old.remove();
    const finalImage = image ? image : NO_PHOTO;
    const card = document.createElement('div');
    card.id = 'info-card';
    card.innerHTML = `
        <button class="close-btn" onclick="this.parentElement.remove()">×</button>
        <img src="${finalImage}" alt="${title}">
        <h2>${title}</h2>
        <p>${info || 'Описание пока не добавлено.'}</p>
    `;
    document.body.appendChild(card);
}

// Экономика
const econData = [
    { title: "Судостроительный завод «Янтарь»", text: "Сергей Михновец (сборщик), Михаил Михновец (крановщик), Клавдия Михновец (маляр), Евгений Михновец." },
    { title: "Завод ЖБИ-1", text: "Антонина Белова (плановик) и Николай Белов (водитель)." },
    { title: "Сельское хозяйство", text: "Любовь Булыгина, Клавдия Булыгина (зверосовхоз)." },
    { title: "Финансы", text: "Юлия Булыгина (Энерготрансбанк), Светлана Михновец (ПАП)." }
];

function renderEconList() {
    const container = document.getElementById('econ-list');
    container.innerHTML = '';
    econData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'econ-card';
        card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
        container.appendChild(card);
    });
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(el => el.classList.remove('active'));
    if (tabName === 'tree') {
        document.getElementById('tab-tree').classList.add('active');
        document.getElementById('btn-tree').classList.add('active');
        cy.resize(); 
    } else if (tabName === 'econ') {
        document.getElementById('tab-econ').classList.add('active');
        document.getElementById('btn-econ').classList.add('active');
    }
}
renderEconList();