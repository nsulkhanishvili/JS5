// task 1:
// ლექციაზე განხილული მაგალითის მიხედვით:
// html მხარეს გექნებათ ერთი ინფუთი და ღილაკი
// მომხმარებელს შემოჰყავს ტექსტი და საბმითის შემდეგ შემოყვანილი ტექსტი ემატება html მხარეს ul ში.
// შემოყვანილ ტექსტთან ერთად ემატება წაშლის ღილაკიც (ლექციაზე ჩექბოქსი გვქონდა).
// ღილაკზე დაჭერის შემდეგ უნდა წაიშალოს ის მთლიანი li ელემენტი, რომლის ღილაკზეც მოხდა დაჭერა.


const form = document.querySelector('#form1');
const input = document.querySelector('input[name="username"]');
const ul = document.createElement('ul');
document.body.appendChild(ul);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const li = document.createElement('li');
    li.textContent = input.value;
    const button = document.createElement('input');
    button.type = 'button';
    button.value = 'delete';

    button.addEventListener('click', (event) => {
        if (event.target.clicked) {
        }else{
            li.remove();
            button.remove();
        }
    })

    ul.appendChild(li);
    li.appendChild(button);

    input.value = '';
    input.focus();

})