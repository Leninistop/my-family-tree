// Серая иконка для тех, у кого нет фото
const NO_PHOTO = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23bdbdbd"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';

const people = [
    { data: { id: 'ilya', label: 'Илья\nБулыгин', image: 'photos/ilya.jpg', local: 'yes', info: 'Илья Анатольевич.' } },
    { data: { id: 'anatoly', label: 'Анатолий\nБулыгин', image: 'photos/anatoly.jpg', local: 'yes', info: 'Отец.' } },
    { data: { id: 'yulia', label: 'Юлия\nБулыгина', image: 'photos/yulia.jpg', local: 'yes', info: 'Мама.' } },
    { data: { id: 'varvara', label: 'Варвара', image: 'photos/varvara.jpg', local: 'yes', info: 'Сестра.' } },
    { data: { id: 'daniil', label: 'Даниил', image: 'photos/daniil.jpg', local: 'yes', info: 'Брат.' } },
    { data: { id: 'denis', label: 'Денис\nБулыгин', image: 'photos/denis.jpg', local: 'yes', info: 'Дядя.' } },
    { data: { id: 'alexander_b', label: 'Александр\nБулыгин', image: 'photos/alexander_b.jpg', local: 'yes', info: 'Дед.' } },
    { data: { id: 'lyubov', label: 'Любовь\nБулыгина', image: 'photos/lyubov.jpg', local: 'yes', info: 'Бабушка.' } },
    { data: { id: 'sergey_m', label: 'Сергей\nМихновец', image: 'photos/sergey_m.jpg', local: 'yes', info: 'Дед.' } },
    { data: { id: 'svetlana', label: 'Светлана\nМихновец', image: 'photos/svetlana.jpg', local: 'yes', info: 'Бабушка.' } },
    { data: { id: 'vladimir_b', label: 'Владимир', image: 'photos/vladimir_b.jpg', local: 'yes', info: 'Двоюр. дед.' } },
    { data: { id: 'mikhail_a_b', label: 'Михаил', image: 'photos/mikhail_a_b.jpg', local: 'yes', info: 'Двоюр. дед.' } },
    { data: { id: 'evgeny_m', label: 'Евгений', image: 'photos/evgeny_m.jpg', local: 'yes', info: 'Двоюр. дед.' } },
    { data: { id: 'dmitry_b', label: 'Дмитрий', image: 'photos/dmitry_b.jpg', local: 'yes', info: 'Двоюр. дед.' } },
    { data: { id: 'viktor_t', label: 'Виктор', image: 'photos/viktor_t.jpg', local: 'yes', info: 'Двоюр. дед.' } },
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
    { data: { id: 'makar_b', label: 'Макар', image: 'photos/makar_b.jpg', local: 'no', info: 'Прапрадед.' } },
    { data: { id: 'maria_b', label: 'Мария', image: 'photos/maria_b.jpg', local: 'no', info: 'Прапрабабушка.' } },
    { data: { id: 'iraida_t', label: 'Ираида', image: 'photos/iraida_t.jpg', local: 'no', info: 'Прапрабабушка.' } },
    { data: { id: 'nikolay_m', label: 'Николай\nМихновец', image: 'photos/nikolay_m.jpg', local: 'no', info: 'Прапрадед.' } },
    { data: { id: 'marta_m', label: 'Марта', image: 'photos/marta_m.jpg', local: 'no', info: 'Прапрабабушка.' } },
    { data: { id: 'ivan_b', label: 'Иван\nБелов', image: 'photos/ivan_b.jpg', local: 'yes', info: 'Прапрадед.' } },
    { data: { id: 'olga', label: 'Ольга\nБелова', image: 'photos/olga.jpg', local: 'yes', info: 'Прапрабабушка.' } },
    { data: { id: 'ivan_h', label: 'Иван\nХлусов', image: 'photos/ivan_h.jpg', local: 'yes', info: 'Прапрадед.' } },
    { data: { id: 'pelageya', label: 'Пелагея', image: 'photos/pelageya.jpg', local: 'yes', info: 'Прапрабабушка.' } },
    { data: { id: 'petr_f', label: 'Пётр', image: 'photos/petr_f.jpg', local: 'no', info: 'Прапрадед.' } },
    { data: { id: 'maria_f', label: 'Мария', image: 'photos/maria_f.jpg', local: 'no', info: 'Прапрабабушка.' } },
    { data: { id: 'irinya_f', label: 'Иринья', image: 'photos/irinya_f.jpg', local: 'no', info: 'Прапрапрабабушка.' } }
];

// Прямые связи (родитель -> ребенок)
const relationships = [
    // От Ильи к родителям
    { data: { source: 'anatoly', target: 'ilya', type: 'child' } },
    { data: { source: 'yulia', target: 'ilya', type: 'child' } },
    // Братья и сестры
    { data: { source: 'anatoly', target: 'varvara', type: 'child' } },
    { data: { source: 'anatoly', target: 'daniil', type: 'child' } },
    { data: { source: 'anatoly', target: 'denis', type: 'child' } }, // Дядя

    // Родители Анатолия
    { data: { source: 'alexander_b', target: 'anatoly', type: 'child' } },
    { data: { source: 'lyubov', target: 'anatoly', type: 'child' } },
    { data: { source: 'alexander_b', target: 'vladimir_b', type: 'child' } },
    { data: { source: 'alexander_b', target: 'mikhail_a_b', type: 'child' } },

    // Родители Юлии
    { data: { source: 'sergey_m', target: 'yulia', type: 'child' } },
    { data: { source: 'svetlana', target: 'yulia', type: 'child' } },
    { data: { source: 'sergey_m', target: 'evgeny_m', type: 'child' } },
    { data: { source: 'svetlana', target: 'dmitry_b', type: 'child' } },

    // Родители Любови
    { data: { source: 'anatoly_t', target: 'lyubov', type: 'child' } },
    { data: { source: 'anfisa', target: 'lyubov', type: 'child' } },
    { data: { source: 'anatoly_t', target: 'viktor_t', type: 'child' } },

    // Родители Александра Б.
    { data: { source: 'alexander_m', target: 'alexander_b', type: 'child' } },
    { data: { source: 'klavdia_b', target: 'alexander_b', type: 'child' } },
    { data: { source: 'alexander_m', target: 'boris_b', type: 'child' } },
    { data: { source: 'alexander_m', target: 'lidia_b', type: 'child' } },

    // Родители Сергея М.
    { data: { source: 'mikhail_m', target: 'sergey_m', type: 'child' } },
    { data: { source: 'klavdia_m', target: 'sergey_m', type: 'child' } },
    { data: { source: 'mikhail_m', target: 'ignat_m', type: 'child' } },

    // Родители Светланы
    { data: { source: 'nikolay_b', target: 'svetlana', type: 'child' } },
    { data: { source: 'antonina', target: 'svetlana', type: 'child' } },
    { data: { source: 'nikolay_b', target: 'mikhail_b', type: 'child' } },
    { data: { source: 'nikolay_b', target: 'evgeny_b', type: 'child' } },

    // Родители Антонины
    { data: { source: 'petr_f', target: 'antonina', type: 'child' } },
    { data: { source: 'maria_f', target: 'antonina', type: 'child' } },
    { data: { source: 'petr_f', target: 'nikolay_f', type: 'child' } },
    { data: { source: 'petr_f', target: 'nina_m', type: 'child' } },
    { data: { source: 'petr_f', target: 'zoya', type: 'child' } },
    { data: { source: 'petr_f', target: 'valentina_p', type: 'child' } },
    { data: { source: 'petr_f', target: 'ekaterina_k', type: 'child' } },
    { data: { source: 'irinya_f', target: 'petr_f', type: 'child' } },

    // Родители Клавдии М.
    { data: { source: 'ivan_h', target: 'klavdia_m', type: 'child' } },
    { data: { source: 'pelageya', target: 'klavdia_m', type: 'child' } },

    // Родители Николая Б.
    { data: { source: 'ivan_b', target: 'nikolay_b', type: 'child' } },
    { data: { source: 'olga', target: 'nikolay_b', type: 'child' } },

    // Родители Александра М.
    { data: { source: 'makar_b', target: 'alexander_m', type: 'child' } },
    { data: { source: 'maria_b', target: 'alexander_m', type: 'child' } },

    // Родители Михаила М.
    { data: { source: 'nikolay_m', target: 'mikhail_m', type: 'child' } },
    { data: { source: 'marta_m', target: 'mikhail_m', type: 'child' } }
];

const elements = [];
people.forEach(p => { elements.push({ data: p.data }); });
relationships.forEach(r => { elements.push({ data: r.data }); });

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
            selector: 'edge',
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
    layout: { 
        name: 'dagre',
        rankDir: 'TB', // Направление сверху вниз
        nodeSep: 40,
        rankSep: 80
    }
});

cy.on('tap', 'node', function (evt) {
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