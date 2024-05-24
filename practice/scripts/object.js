const person1 = {
    firstName: 'SpongeBob',
    lastName: 'Squarepants',
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log('Hi, Im Spongebob')},
    eat: function(){console.log('I am eating a krabby patty')}
}

const person2 = {
    firstName: 'SpongeBob',
    lastName: 'Squarepants',
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log('Hi, Im Patric...')},
    eat: () => {console.log('I am eating Takoyaki')}
}

person1.eat();
person2.eat();