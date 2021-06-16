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
        ]
    },

    methods:{

    },
});