if (location.pathname.includes('register')) {
    const registerElement = document.querySelector('.container .selection-register #common')

    registerElement.addEventListener('click', () => {
        document.querySelector('.common-people').classList.add('active')
    })

} else {
    const lat = -23.4972613
    const lng = -46.6802013

    const coords = [
        {
            'lat': -23.4869,
            'lng': -46.6724,
            'info': 'Casos suspeitos: 6   Casos confirmados: 1'
        },
        {
            'lat': -23.4990,
            'lng': -46.6962,
            'info': 'Casos suspeitos: 2   Casos confirmados: 0'
        },
        {
            'lat': -23.5033,
            'lng': -46.6594,
            'info': 'Casos suspeitos: 12   Casos confirmados: 2'
        },
    ]

    mapboxgl.accessToken = 'pk.eyJ1IjoiY2FpcXVlZ2lvdmFubmluaSIsImEiOiJjazhuZXBsZ2oweHd6M2ZxeDkzaGh2OGpkIn0.ANLs8w3CZ6a7zDRLk1oPFQ';

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: 14
    });

    function setMarkers(lng, lat, info) {
        const markerElement = document.createElement('div')
        const infoBox = document.createElement('div')
        const markerImg = new Image(60)

        markerElement.classList.add('marker')

        markerImg.src = 'public/assets/icon_marker.png'

        infoBox.classList.add('info-box')
        infoBox.innerHTML = `${info}`

        markerElement.appendChild(markerImg)
        markerElement.appendChild(infoBox)

        markerElement.onmouseover = () => {
            infoBox.classList.add('info-box-visible')
        }
        markerElement.onmouseleave = () => {
            infoBox.classList.remove('info-box-visible')
        }


        new mapboxgl.Marker(markerElement)
            .setLngLat([lng, lat])
            .addTo(map)
    }

    coords.forEach(coord => {
        setMarkers(coord.lng, coord.lat, coord.info)
    })
}