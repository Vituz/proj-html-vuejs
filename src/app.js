const app = new Vue({

    el: '#app',

    data:{
        menu:[
            'home',
            'about',
            'departments',
            'articles',
            'make appointment'
        ],
       
        doctor:[
            {
                name: 'Jon Snow',
                role: 'Anesthesiologist',
                img: 'doctor-1',
                desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
            },

            {
                name: 'Tony Stark',
                role: 'Cardiologist',
                img: 'doctor-2',
                desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
            },

            {
                name: 'Anna Smith',
                role: 'Nurse Practitioner',
                img: 'doctor-3',
                desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
            },
        ],

        healthCards:[
            {
                icon: '-14',
                title: 'rehabilitation center',
                desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas',
            },
            {
                icon: '-15',
                title: 'dental implants',
                desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas',
            },
            {
                icon: '-16',
                title: 'medicine research',
                desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas',
            },
            {
                icon: '-11',
                title: 'blood bank',
                desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas',
            },
            {
                icon: '-12',
                title: 'pharmaceutical advice',
                desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas',
            },
            {
                icon: '-13',
                title: 'medical counseling',
                desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas',
            },
        ],

        counter: 0,

        partnerSlider:[
            './dist/img/client-logos-1.png',
            './dist/img/client-logos-2.png',
            './dist/img/client-logos-3.png',
            './dist/img/client-logos-4.png',
        ],

        contacts:[
            {
                icon:'map-marker-alt',
                text:'121 King Street, London United Kingdom',
            },
            {
                icon: 'phone',
                text:'1.800.458.566',
            },
        ],

        departments:[
            'Cardiology',
            'Pediactrics',
            'Diabetes Care',
            'Pre-natel Care',
            'Ultrasound Echocardiogram',
        ]
    },
});