function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    updateCounter();
}

function startCountersWhenVisible() {
    const counters = document.querySelectorAll('.stat-number');
    const statItems = document.querySelectorAll('.stat-item');

    statItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            if (!item.classList.contains('visible')) {
                item.classList.add('visible');
                
                setTimeout(() => {
                    const counter = counters[index];
                    const target = parseInt(counter.getAttribute('data-count'));
                    if (counter.textContent === '0') {
                        animateCounter(counter, target, 1500);
                    }
                }, 300);
            }
        }
    });
}

if (document.querySelector('.stat-number')) {
    window.addEventListener('load', startCountersWhenVisible);
    window.addEventListener('scroll', startCountersWhenVisible);
}

if (document.getElementById('ymap')) {
    var coords = [59.234815, 39.920143];
    var myMap;
    var myPlacemark;
    var currentMapType = 'map';
    var isMapActive = false;
    var inactivityTimer;
    
    function resetInactivityTimer() {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(function() {
            if (isMapActive) {
                myMap.behaviors.disable(['scrollZoom', 'dblClickZoom', 'drag', 'multiTouch']);
                isMapActive = false;
                showMapNotification('Карта деактивирована. Нажмите на карту для управления');
            }
        }, 10000);
    }
    
    function activateMap() {
        if (!isMapActive) {
            isMapActive = true;
            myMap.behaviors.enable(['scrollZoom', 'dblClickZoom', 'drag', 'multiTouch']);
            showMapNotification('Карта активирована. Теперь можно масштабировать и перемещать');
        }
        resetInactivityTimer();
    }
    
    ymaps.ready(function () {
        myMap = new ymaps.Map('ymap', {
            center: coords,
            zoom: 16,
            controls: []
        }, {
            searchControlProvider: 'yandex#search',
        });
        
        myPlacemark = new ymaps.Placemark(coords, {
            hintContent: 'ПАТП №1',
            balloonContent: 'АО «ПАТП №1»<br>ул. Мудрова, 31<br>Телефон: +7 (8172) 55-66-70'
        }, {
            preset: 'islands#redIcon',
            iconColor: '#3a6ce6'
        });

        myMap.geoObjects.add(myPlacemark);
        
        myMap.behaviors.disable(['scrollZoom', 'dblClickZoom', 'drag', 'multiTouch']);
        
        myPlacemark.events.add('click', function (e) {
            myPlacemark.balloon.open();
            resetInactivityTimer();
        });
        
        myMap.events.add('click', function (e) {
            activateMap();
        });
        
        myMap.events.add('mousemove', function (e) {
            if (isMapActive) {
                resetInactivityTimer();
            }
        });
        
        myMap.events.add('wheel', function (e) {
            if (isMapActive) {
                resetInactivityTimer();
            }
        });
        
        document.addEventListener('click', function(e) {
            if (isMapActive && !e.target.closest('#mapContainer')) {
                myMap.behaviors.disable(['scrollZoom', 'dblClickZoom', 'drag', 'multiTouch']);
                isMapActive = false;
                clearTimeout(inactivityTimer);
            }
        });
        
        document.getElementById('mapLocateBtn').addEventListener('click', function() {
            activateMap();
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var userCoords = [position.coords.latitude, position.coords.longitude];
                    
                    var userPlacemark = new ymaps.Placemark(userCoords, {
                        hintContent: 'Ваше местоположение',
                        balloonContent: 'Вы здесь'
                    }, {
                        preset: 'islands#blueCircleIcon',
                        iconColor: '#3a6ce6'
                    });
                    
                    myMap.geoObjects.add(userPlacemark);
                    myMap.setCenter(userCoords, 15, {duration: 1000});
                    showMapNotification('Ваше местоположение отмечено на карте');
                    resetInactivityTimer();
                }, function(error) {
                    console.error('Ошибка получения геолокации:', error);
                    showMapNotification('Не удалось определить ваше местоположение');
                });
            } else {
                showMapNotification('Ваш браузер не поддерживает геолокацию');
            }
        });
        
        document.getElementById('mapLayerBtn').addEventListener('click', function() {
            activateMap();
            var mapTypes = ['map', 'satellite', 'hybrid'];
            var currentIndex = mapTypes.indexOf(currentMapType);
            var nextIndex = (currentIndex + 1) % mapTypes.length;
            currentMapType = mapTypes[nextIndex];
            
            myMap.setType('yandex#' + currentMapType);
            
            var icons = ['fa-layer-group', 'fa-satellite', 'fa-map'];
            this.innerHTML = '<i class="fas ' + icons[nextIndex] + '"></i>';
            
            showMapNotification('Тип карты изменен');
            resetInactivityTimer();
        });
        
        document.getElementById('mapFullscreenBtn').addEventListener('click', function() {
            activateMap();
            var mapContainer = document.getElementById('mapContainer');
            
            if (!document.fullscreenElement) {
                if (mapContainer.requestFullscreen) {
                    mapContainer.requestFullscreen();
                } else if (mapContainer.webkitRequestFullscreen) {
                    mapContainer.webkitRequestFullscreen();
                } else if (mapContainer.msRequestFullscreen) {
                    mapContainer.msRequestFullscreen();
                }
                
                mapContainer.classList.add('map-fullscreen');
                this.innerHTML = '<i class="fas fa-compress"></i>';
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                
                mapContainer.classList.remove('map-fullscreen');
                this.innerHTML = '<i class="fas fa-expand"></i>';
            }
            resetInactivityTimer();
        });
        
        document.addEventListener('fullscreenchange', exitHandler);
        document.addEventListener('webkitfullscreenchange', exitHandler);
        document.addEventListener('mozfullscreenchange', exitHandler);
        document.addEventListener('MSFullscreenChange', exitHandler);
        
        function exitHandler() {
            if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
                var mapContainer = document.getElementById('mapContainer');
                var fullscreenBtn = document.getElementById('mapFullscreenBtn');
                
                mapContainer.classList.remove('map-fullscreen');
                fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
            }
        }
        
        resetInactivityTimer();
    });
    
    function showMapNotification(message) {
        var notificationsContainer = document.getElementById('mapNotifications');
        
        var notification = document.createElement('div');
        notification.className = 'map-notification';
        notification.innerHTML = `
            <div class="map-notification-content">
                <i class="fas fa-info-circle"></i>
                <span>${message}</span>
            </div>
        `;
        
        notificationsContainer.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(function() {
            notification.classList.remove('show');
            setTimeout(function() {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}
