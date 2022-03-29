const Nylas = require('nylas');

var json = [
    {
        "name": "Manpreet",
        "email" : "team5comp8082@gmail.com"
    }];

var email = [
    {
        "title": "Junior Frontend Developer",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "employer": "amazon",
        "salary": 67000,
        "type": "full_time",
        "specialization": "javascript"
    },
    {
        "title": "Full-stack Web Developer",
        "description": "donec nunc libero, semper vel arcu et, placerat iaculis diam",
        "employer": "apple",
        "salary": 70000,
        "type": "full_time",
        "specialization": "javascript"
    },
    {
        "title": "Backend Engineer",
        "description": "donec nunc libero, semper vel arcu et, placerat iaculis diam",
        "employer": "twitter",
        "salary": 70000,
        "type": "full_time",
        "specialization": "javascript"
    },
    {
        "title": "Associate Software Engineer",
        "description": "donec nunc libero, semper vel arcu et, placerat iaculis diam",
        "employer": "spotify",
        "salary": 70000,
        "type": "full_time",
        "specialization": "javascript"
    },
    {
        "title": "Network Systems Admin",
        "description": "donec nunc libero, semper vel arcu et, placerat iaculis diam",
        "employer": "ea",
        "salary": 70000,
        "type": "full_time",
        "specialization": "javascript"
    }
]

Nylas.config({
    clientId: '8au4xy785j38nhs88bxd3ieqj',
    clientSecret: 'bn9hem9eopeeq5gc2nty7laqu',
});

const nylas = Nylas.with('O5GONrMdElg3p09616WWyKYMaXroZX')

for (var j = 0; j < email.length; j++) {
    var desc = email[j]

    var info = desc.description + "<br><br>Employer: " + desc.employer + "<br><br>Salary: " + desc.salary + "<br><br>" + desc.type + "<br><br>Language: " + desc.specialization
    for (var i = 0; i < json.length; i++) {
        var obj = json[i]

            const draft = nylas.drafts.build({
                subject: desc.title,
                body: info,
                to: [{name: obj.name, email: obj.email}]
            });

            draft.send().then(message => {
                console.log(`${message.id} was sent`)
            });
    }
}







