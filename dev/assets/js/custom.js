const buildItem = document.querySelectorAll('.build-item')
    const informationAddress = document.querySelector('#information-address')
    const informationFloors = document.querySelector('#information-floors')
    const informationFlatsAll = document.querySelector('#information-flats-all')
    const informationFlatsFree = document.querySelector('#information-flats-free')
    const informationFlatsAction = document.querySelector('#information-flats-action')
    const informationFlatsReservation = document.querySelector('#information-flats-reservation')

    buildItem.forEach(build => {
        build.addEventListener('mouseover', function() {
            const buildAddress = build.getAttribute('data-address')
            const buildFloors = build.getAttribute('data-floors')
            const buildFlatsAll = build.getAttribute('data-flats-all')
            const buildFlatsFree = build.getAttribute('data-flats-free')
            const buildFlatsAction = build.getAttribute('data-flats-action')
            const buildFlatsReservation = build.getAttribute('data-flats-reservation')

            if (Number(buildFlatsFree) === 0) {
                build.classList.add('build-sold')
            }
        
            build.addEventListener('click', function(event) {
                console.log('click');
                
                if (build.classList.contains('build-sold')) {
                    event.preventDefault();
                }
            })

            informationAddress.innerHTML = buildAddress
            informationFloors.innerHTML = buildFloors
            informationFlatsAll.innerHTML = buildFlatsAll
            informationFlatsFree.innerHTML = buildFlatsFree
            informationFlatsAction.innerHTML = buildFlatsAction
            informationFlatsReservation.innerHTML = buildFlatsReservation
        })
    })





    const floorItem = document.querySelectorAll('.floor-item')
     const FloorinformationFlatsFree = document.querySelector('#floor-information-flats-free')
     const FloorinformationFlatsAction = document.querySelector('#floor-information-flats-action')
     const FloorinformationFlatsReservation = document.querySelector('#floor-information-flats-reservation')
     floorItem.forEach(floor => {
        floor.addEventListener('mouseover', function() {
            const floorFlatsFree = floor.getAttribute('data-floor-flats-free')
            const floorFlatsAction = floor.getAttribute('data-floor-flats-action')
            const floorFlatsReservation = floor.getAttribute('data-floor-flats-reservation')

            if (Number(floorFlatsFree) === 0) {
                floor.classList.add('floor-sold')
            }
        
            floor.addEventListener('click', function(event) {
                console.log('click');
                
                if (floor.classList.contains('floor-sold')) {
                    event.preventDefault();
                }
            })

            FloorinformationFlatsFree.innerHTML = floorFlatsFree
            FloorinformationFlatsAction.innerHTML = floorFlatsAction
            FloorinformationFlatsReservation.innerHTML = floorFlatsReservation
        })
    })