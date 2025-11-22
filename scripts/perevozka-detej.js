const stepData = {
    1: {
        title: "Договор",
        icon: "fa-file-contract",
        content: `
            <h4>Что включает этот этап:</h4>
            <ul>
                <li>Определение условий перевозки</li>
                <li>Согласование маршрута и графика</li>
                <li>Установление прав и обязанностей сторон</li>
                <li>Определение стоимости услуг</li>
            </ul>
            <p><strong>Срок:</strong> 1-2 рабочих дня</p>
        `
    },
    2: {
        title: "Подготовка документов",
        icon: "fa-folder-open",
        content: `
            <h4>Необходимые документы:</h4>
            <ul>
                <li>Списки детей и сопровождающих</li>
                <li>График движения</li>
                <li>Схема маршрута</li>
                <li>Сведения о водителях</li>
                <li>Документы о медицинском сопровождении (при необходимости)</li>
            </ul>
            <p><strong>Срок:</strong> 3-5 рабочих дней</p>
        `
    },
    3: {
        title: "Согласование с ГИБДД",
        icon: "fa-shield-alt",
        content: `
            <h4>Важные моменты:</h4>
            <ul>
                <li>Заявка подается не менее чем за 10 дней до поездки</li>
                <li>Предоставляется полный пакет документов</li>
                <li>Согласовывается маршрут и время движения</li>
                <li>Получается разрешение на перевозку</li>
            </ul>
            <p><strong>Срок:</strong> 5-7 рабочих дней</p>
        `
    },
    4: {
        title: "Принятие решения ГИБДД",
        icon: "fa-check-circle",
        content: `
            <h4>Что проверяет ГИБДД:</h4>
            <ul>
                <li>Квалификацию водителей</li>
                <li>Техническое состояние автобуса</li>
                <li>Соответствие графика движения нормам</li>
                <li>Соблюдение режима труда и отдыха водителей</li>
                <li>Наличие необходимого оборудования</li>
            </ul>
            <p><strong>Срок:</strong> 2-3 рабочих дня</p>
        `
    },
    5: {
        title: "Перевозка",
        icon: "fa-bus",
        content: `
            <h4>Требования к перевозке:</h4>
            <ul>
                <li>Скорость не более 60 км/ч вне населенных пунктов</li>
                <li>Наличие сопровождающих (1 на каждые 20 детей)</li>
                <li>Соблюдение графика движения</li>
                <li>Наличие аптечки и средств безопасности</li>
                <li>Соблюдение специальных правил для ночных перевозок</li>
            </ul>
            <p><strong>Продолжительность:</strong> Согласно утвержденному графику</p>
        `
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const stepCards = document.querySelectorAll('.process-step-card');
    const stepModal = document.getElementById('stepModal');
    const stepModalClose = document.getElementById('stepModalClose');
    const isMobile = window.innerWidth < 992;
    
    const processRoad = document.querySelector('.process-road');
    if (processRoad) {
        processRoad.classList.add('animated');
    }
    
    function deactivateAllCards() {
        stepCards.forEach(c => c.classList.remove('active'));
    }
    
    function activateCard(card) {
        if (!isMobile) {
            deactivateAllCards();
            card.classList.add('active');
        } else {
            const stepNumber = card.getAttribute('data-step');
            openStepModal(stepNumber);
        }
    }
    
    function openStepModal(stepNumber) {
        const data = stepData[stepNumber];
        if (data) {
            document.getElementById('modalNumber').textContent = stepNumber;
            document.getElementById('modalIcon').innerHTML = `<i class="fas ${data.icon}"></i>`;
            document.getElementById('modalTitle').textContent = data.title;
            document.getElementById('modalBody').innerHTML = data.content;
            
            stepModal.classList.add('active');
            document.body.classList.add('modal-open');
        }
    }
    
    function closeStepModal() {
        stepModal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
    
    if (!isMobile && stepCards.length > 0) {
        activateCard(stepCards[0]);
    }
    
    stepCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            activateCard(this);
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!isMobile) {
            if (!e.target.closest('.process-step-card')) {
                deactivateAllCards();
            }
        } else {
            if (stepModal.classList.contains('active') && !e.target.closest('.step-modal-content')) {
                closeStepModal();
            }
        }
    });
    
    stepModalClose.addEventListener('click', closeStepModal);
    
    window.addEventListener('resize', function() {
        if (window.innerWidth < 992 !== isMobile) {
            location.reload();
        }
    });
});
